function processSubject(subject){
  var title = subject.title;
  // 导演
  var directors = subject.directors;
  var directorStr = "";
  for (var index in directors) {
    directorStr = directorStr + directors[index].name + " / ";
  }
  if (directorStr != "") {
    directorStr = directorStr.substring(0, directorStr.length - 2);
  }
  // 类型
  var casts = subject.casts;
  var castsStr = "";
  for (var index in casts) {
    castsStr = castsStr + casts[index].name + " / ";
  }
  if (castsStr != "") {
    castsStr = castsStr.substring(0, castsStr.length - 2);
  }
  // 上映年份
  var genres = subject.genres;
  var genresStr = "";
  for (var index in genres) {
    genresStr = genresStr + genres[index] + " / ";
  }
  if (genresStr != "") {
    genresStr = genresStr.substring(0, genresStr.length - 2);
  }
  var year = subject.year;
  var text = "名称：" + title + "\n导演：" + directorStr + "\n主演：" + castsStr + "\n类型：" + genresStr + "\n 上映年份：" + year + "(中国大陆)";
  subject.text = text;
}

function processSubjects(subjects){
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.processSubject(subject)
  }
}
module.exports = {
  processSubject: processSubject,
  processSubjects: processSubjects

}