var
  fontsList = "badr, baran, bardiya, compset, davat, elham, esfehan, fantezy, farnaz, ferdosi, hamid, helal, homa, jadid, jalal, koodak, kourosh, lotus, mahsa, mehr, mitra, morvarid, narm, nasim, nazanin, roya, setareh, shiraz, sina, tabassom, tehran, titr, titrtge, traffic, vahid, yagut, yas, yekan, zar, ziba, andalus, arshia, iraniansans, kamran, setareh, tawfig".split(', ').sort(),
  $fontSelect = $('#fontselect'),
  $fontPreview = $('#fontpreview');

for(var i in fontsList){
  $fontSelect.append(
    $('<option>')
      .attr('value',fontsList[i])
      .html(fontsList[i])
  );
}

$fontSelect
  .change(function () {
    $fontPreview
      .removeClass()
      .addClass($(this).val());
  });

$('#fontlen')
  .html(fontsList.length);

$fontPreview
  .addClass(fontsList[0]);