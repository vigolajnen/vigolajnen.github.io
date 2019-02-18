<?
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

$result = ['error' => 0];
$FIO = (string)$_POST['FIO'];
$PHONE = (string)$_POST['PHONE'];
$EMAIL = (string)$_POST['EMAIL'];
$COMMENT = (string)$_POST['COMMENT'];

if ($FIO) {
    $arEventFields = array(
        "FIO" => $FIO,
        "PHONE" => $PHONE,
        "EMAIL" => $EMAIL,
        "COMMENT" => $COMMENT,
    );
    $arrFileID = [];
    if ($_POST['FILE']) {
      foreach ($_POST['FILE'] as $filePath) {
        $filePath = preg_replace('/https:\/\/iot.ru/', '', $filePath);
        $filePath = $_SERVER["DOCUMENT_ROOT"].$filePath;
        $FILE = CFile::MakeFileArray($filePath);
        $FILE_ID = CFile::SaveFile($FILE);
        if ($FILE_ID) {
          $arrFileID[] = $FILE_ID;
        }
      }
    }
    $result = CEvent::Send("FORM_FILLING_euromob", SITE_ID, $arEventFields, 'Y', 75, $arrFileID);
    Log::save(["FORM_FILLING_euromob", $result, SITE_ID, $arEventFields, 'Y', 75, $arrFileID], 'euromob');
} else {
    $result['error'] = 2;
}

echo json_encode($result);

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/epilog_after.php");
