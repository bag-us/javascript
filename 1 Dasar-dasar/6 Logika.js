const mtk = 80;
const kimia = 70;

const lulusmtk = mtk > 75;
const luluskimia = kimia > 75;

const ujian = lulusmtk && luluskimia;
console.info(ujian);