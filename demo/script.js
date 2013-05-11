var
  fontsList = "badr, baran, bardiya, compset, davat, elham, esfehan, fantezy, farnaz, ferdosi, hamid, helal, homa, jadid, jalal, koodak, kourosh, lotus, mahsa, mehr, mitra, morvarid, narm, nasim, nazanin, roya, setareh, shiraz, sina, tabassom, tehran, titr, titrtge, traffic, vahid, yagut, yas, yekan, zar, ziba, andalus, arshia, iraniansans, kamran, setareh, tawfig, droidnaskh, amiribold, droidkufi, droidnaskh, scheherazade, tateef, thabit".split(', ').sort(),
  $fontSelect = $('#fontselect'),
  $fontPreview = $('#fontpreview'),
  $nextFont = $('#nextfont'),
  currentFont = -1,
  changeFont = function (indx) {
    if(currentFont === indx) return false;
    $fontPreview
      .removeClass()
      .addClass(fontsList[indx]);
    $fontSelect.eq(0)[0].selectedIndex = indx;
    currentFont=indx;
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

$nextFont.click(function () {
  currentFont<fontsList.length-1 || (currentFont = -1);
  changeFont(currentFont+1);
  return false;
});

$('#fontlen')
  .html(fontsList.length);

changeFont(0);