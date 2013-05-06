var
  fontsList = "badr, baran, bardiya, compset, davat, elham, esfehan, fantezy, farnaz, ferdosi, hamid, helal, homa, jadid, jalal, koodak, kourosh, lotus, mahsa, mehr, mitra, morvarid, narm, nasim, nazanin, roya, setareh, shiraz, sina, tabassom, tehran, titr, titrtge, traffic, vahid, yagut, yas, yekan, zar, ziba, andalus, arshia, iraniansans, kamran, setareh, tawfig".split(', ').sort(),
  $fontSelect = $('#fontselect'),
  $fontPreview = $('#fontpreview'),
  currentFont = 0,
  changeFont = function (indx) {
    $fontPreview
      .removeClass()
      .addClass(fontsList[indx]);
  };

for(var i in fontsList){
  $fontSelect.append(
    $('<option>')
      .attr('value',fontsList[i])
      .html(fontsList[i])
  );
}

$fontSelect
  .change(function () {
    changeFont(this.selectedIndex);
  });

$('#fontlen')
  .html(fontsList.length);

changeFont(0);