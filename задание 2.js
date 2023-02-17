let x;
x = 1;
if (isNaN(x)) {
  console.log ('Тип x не определён');
}
else if (typeof x == 'number') {
 console.log ('x - число');
}
else if (typeof x == 'string') {
  console.log ('x - строка');
}
else if (typeof x == 'boolean') {
  console.log ('x - булево значение');
}

else {
  console.log ('Тип x не определён');
}
1