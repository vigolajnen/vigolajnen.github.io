<?php

// You need to add server side validation and better error handling here

function _log($var, $clear = FALSE, $path = NULL) {
    $var = ($var) ? $var : 'EMPTY';
    if ($var) {
        $date = '====== ' . date('Y-m-d H:i:s') . " =====\n";
        $result = $var;
        if (is_array($var) || is_object($var)) {
            $result = print_r($var, 1);
        }
        $result .= "\n";
        if (!$path)
            $path = dirname($_SERVER['SCRIPT_FILENAME']) . '/local/logs/php.log';
        if ($clear)
            file_put_contents($path, '');
        @error_log($date . $result, 3, $path);
        return true;
    }
    return false;
}

$data = array();
//_log($_FILES);
if (isset($_GET['files'])) {
    $mime_types = array(
        'text/plain',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/pdf',
        'application/zip',
        'application/x-rar-compressed',
        'image/jpeg',
        'image/pjpeg',
    );
    $mime_types_ext = array(
        'text/plain' => 'txt',
        'application/msword' => 'doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'docx',
        'application/pdf' => 'pdf',
        'application/zip' => 'zip',
        'application/x-rar-compressed' => 'rar',
        'image/jpeg' => 'jpg',
        'image/pjpeg' => 'jpg',
    );

    $error = false;
    $files = array();

    $fileDir = '/upload/euromob/';
    $uploaddir = $_SERVER['DOCUMENT_ROOT'] . $fileDir;
    $info = '';
    foreach ($_FILES as $i => $file) {
        $mimeFile = $file['type'];
        $ruleExtension = in_array($mimeFile, $mime_types);
        $name = '';
        if ($ruleExtension) {
            $name = basename($file['name']) . '.' . $mime_types_ext[$mimeFile];
            if (!$i) {
              $fileDir .= md5($file['tmp_name'] . time()).'/';
              $uploaddir = $_SERVER['DOCUMENT_ROOT'] . $fileDir;
              exec('mkdir '.$uploaddir);
            }

            $isUploaded = move_uploaded_file($file['tmp_name'], $uploaddir . $name);
            if ($isUploaded) {
                $files[] = 'https://' . $_SERVER['HTTP_HOST'] . $fileDir . $name;
            } else {
                $error = true;
            }
        }
        _log(['$finfo_file' => $file['type'], 'tmp' => $file,'Загружен' => intval($isUploaded) . ' | ' . intval($ruleExtension) . ' | ' . $name . ' | ' . $mimeFile . ' | ' . $mime_types_ext[$mimeFile], 'СохранёнПодИменем' => $name, 'ИмяОригинальное' => basename($file['name'])]);
    }
    $data = ($error) ? array('error' => 'There was an error uploading your files', 'dir' => $info) : array('files' => $files);
} else {
    $data = array('success' => 'Form was submitted', 'formData' => $_POST);
}

echo json_encode($data);
?>
