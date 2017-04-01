<?php 

$keyword = $_GET['data']['s'];
function get_music($keyword,$type="100"){ $returnArr=array(); $MusicUrl = 'http://music.163.com/api/search/pc'; $post_data = array( 's' => $keyword,

'offset' => '0',

'limit' => '100',

'type' => $type

);

$postStr="s=".$post_data["s"]."&limit=".$post_data["limit"]."&offset=".$post_data["offset"]."&type=".$post_data["type"];

$header=array(

'Content-Type:application/x-www-form-urlencoded;charset=utf-8',

'Cookie:appver=2.0.2',

'Referer:http://music.163.com'

);

$ch = curl_init();

curl_setopt($ch,CURLOPT_URL,$MusicUrl);

curl_setopt($ch,CURLOPT_HTTPHEADER,$header);

curl_setopt($ch,CURLOPT_POST,1);

curl_setopt($ch,CURLOPT_HEADER,0);

curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);

curl_setopt($ch,CURLOPT_POSTFIELDS,$postStr);

$return=curl_exec($ch);

curl_close($ch);

return $return;

}

echo get_music();

?>
