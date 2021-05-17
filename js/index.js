xmlDoc = $.parseXML("https://www.biblegateway.com/votd/get/?format=atom"),
$xml = $( xmlDoc ),
$title = $xml.find( "title" );