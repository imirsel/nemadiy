var data = [
[{o: 1.081, f: 11.308, l: "N", a: 0},
{o: 11.308, f: 37.368, l: "A", a: 1},
{o: 37.368, f: 64.434, l: "B", a: 0},
{o: 64.434, f: 127.048, l: "A'", a: 1}],
[{o: 0.656, f: 10.004, l: "D", a: 0},
{o: 10.004, f: 15.228, l: "D", a: 1},
{o: 15.228, f: 21.648, l: "A", a: 0},
{o: 21.648, f: 30.596, l: "D", a: 1},
{o: 30.596, f: 36.572, l: "D", a: 0},
{o: 36.572, f: 49.428, l: "D", a: 1},
{o: 49.428, f: 54.852, l: "D", a: 0},
{o: 54.852, f: 63.564, l: "B", a: 1},
{o: 63.564, f: 74.424, l: "C", a: 0},
{o: 74.424, f: 82.872, l: "D", a: 1},
{o: 82.872, f: 91.768, l: "A", a: 0},
{o: 91.768, f: 103.912, l: "D", a: 1},
{o: 103.912, f: 111.652, l: "D", a: 0},
{o: 111.652, f: 121.388, l: "B", a: 1}],
[{o: 0.656, f: 10.004, l: "D", a: 0},
{o: 10.004, f: 15.228, l: "A", a: 1},
{o: 15.228, f: 21.648, l: "E", a: 0},
{o: 21.648, f: 30.596, l: "A", a: 1},
{o: 30.596, f: 36.572, l: "C", a: 0},
{o: 36.572, f: 49.428, l: "A", a: 1},
{o: 49.428, f: 54.852, l: "A", a: 0},
{o: 54.852, f: 63.564, l: "B", a: 1},
{o: 63.564, f: 74.424, l: "F", a: 0},
{o: 74.424, f: 82.872, l: "D", a: 1},
{o: 82.872, f: 91.768, l: "G", a: 0},
{o: 91.768, f: 103.912, l: "C", a: 1},
{o: 103.912, f: 111.652, l: "H", a: 0},
{o: 111.652, f: 121.388, l: "B", a: 1}],
[{o: 0.573, f: 2.147, l: "8", a: 0},
{o: 2.147, f: 10.213, l: "1", a: 1},
{o: 10.213, f: 21.04, l: "2", a: 0},
{o: 21.04, f: 29.707, l: "3", a: 1},
{o: 29.707, f: 36.747, l: "1", a: 0},
{o: 36.747, f: 54.24, l: "3", a: 1},
{o: 54.24, f: 63.827, l: "1", a: 0},
{o: 63.827, f: 84.693, l: "2", a: 1},
{o: 84.693, f: 91.16, l: "1", a: 0},
{o: 91.16, f: 96.133, l: "6", a: 1},
{o: 96.133, f: 110.133, l: "4", a: 0},
{o: 110.133, f: 115, l: "2", a: 1},
{o: 115, f: 121.227, l: "5", a: 0},
{o: 121.227, f: 124.68, l: "7", a: 1}],
[{o: 0, f: 8.195, l: "a", a: 0},
{o: 8.195, f: 14.155, l: "b", a: 1},
{o: 14.155, f: 24.585, l: "c", a: 0},
{o: 24.585, f: 62.58, l: "d", a: 1},
{o: 62.58, f: 68.54, l: "b", a: 0},
{o: 68.54, f: 78.97, l: "c", a: 1},
{o: 78.97, f: 122.18, l: "d", a: 0},
{o: 122.18, f: 125.905, l: "e", a: 1}],
[{o: 0, f: 126.618, l: "A", a: 0},
{o: 0.778, f: 126.735, l: "A", a: 1}],
[{o: 0, f: 0.652, l: "J", a: 0},
{o: 0.652, f: 15.632, l: "G", a: 1},
{o: 15.632, f: 37.392, l: "A", a: 0},
{o: 37.392, f: 50.08, l: "C", a: 1},
{o: 50.08, f: 69.132, l: "I", a: 0},
{o: 69.132, f: 91.772, l: "A", a: 1},
{o: 91.772, f: 108.264, l: "C", a: 0},
{o: 108.264, f: 120.956, l: "D", a: 1},
{o: 120.956, f: 127.034, l: "J", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000518.ogg";
