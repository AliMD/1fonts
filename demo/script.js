var
  fontsList = "badr, baran, bardiya, compset, davat, elham, esfehan, fantezy, farnaz, ferdosi, hamid, helal, homa, jadid, jalal, koodak, kourosh, lotus, mahsa, mehr, mitra, morvarid, narm, nasim, nazanin, roya, setareh, shiraz, sina, tabassom, tehran, titr, titrtge, traffic, vahid, yagut, yas, yekan, zar, ziba".split(', '),
  $fontSellect = $('#fontSellect'),
  $fontPreview = $('#fontPreview');
  $options = '';

for(var i in fontsList){
  $fontSellect.append(
    $('<option>')
      .attr('value',fontsList[i])
      .html(fontsList[i])
  );
}

$fontSellect
  .change(function () {
    $fontPreview
      .removeClass()
      .addClass($(this).val());
  });