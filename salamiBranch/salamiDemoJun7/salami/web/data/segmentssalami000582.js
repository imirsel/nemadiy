var data = [
[{o: 0.401, f: 56.47, l: "A", a: 0},
{o: 56.47, f: 127.224, l: "A", a: 1},
{o: 127.224, f: 163.526, l: "B", a: 0},
{o: 163.526, f: 223.264, l: "A", a: 1},
{o: 223.264, f: 248.847, l: "C", a: 0},
{o: 248.847, f: 303.257, l: "C", a: 1},
{o: 303.257, f: 335.818, l: "C", a: 0},
{o: 335.818, f: 401.205, l: "A", a: 1},
{o: 401.205, f: 475.036, l: "B", a: 0}],
[{o: 0, f: 475.012, l: "A", a: 0}],
[{o: 0, f: 475.012, l: "A", a: 0}],
[{o: 0.707, f: 6.027, l: "2", a: 0},
{o: 6.027, f: 52.08, l: "1", a: 1},
{o: 52.08, f: 68.04, l: "2", a: 0},
{o: 68.04, f: 114.387, l: "1", a: 1},
{o: 114.387, f: 122.4, l: "4", a: 0},
{o: 122.4, f: 160.4, l: "1", a: 1},
{o: 160.4, f: 172.253, l: "5", a: 0},
{o: 172.253, f: 201.52, l: "1", a: 1},
{o: 201.52, f: 222.853, l: "3", a: 0},
{o: 222.853, f: 261.16, l: "1", a: 1},
{o: 261.16, f: 271.093, l: "6", a: 0},
{o: 271.093, f: 284.2, l: "4", a: 1},
{o: 284.2, f: 303.813, l: "2", a: 0},
{o: 303.813, f: 315.067, l: "1", a: 1},
{o: 315.067, f: 322.347, l: "3", a: 0},
{o: 322.347, f: 332.347, l: "1", a: 1},
{o: 332.347, f: 339.733, l: "3", a: 0},
{o: 339.733, f: 366.16, l: "1", a: 1},
{o: 366.16, f: 373.507, l: "5", a: 0},
{o: 373.507, f: 447.947, l: "1", a: 1},
{o: 447.947, f: 457.467, l: "2", a: 0},
{o: 457.467, f: 466.173, l: "7", a: 1},
{o: 466.173, f: 473.773, l: "8", a: 0}],
[{o: 0, f: 59.6, l: "a", a: 0},
{o: 59.6, f: 108.77, l: "b", a: 1},
{o: 108.77, f: 154.215, l: "c", a: 0},
{o: 154.215, f: 214.56, l: "b", a: 1},
{o: 214.56, f: 335.995, l: "d", a: 0},
{o: 335.995, f: 383.675, l: "b", a: 1},
{o: 383.675, f: 425.395, l: "c", a: 0},
{o: 425.395, f: 473.075, l: "e", a: 1},
{o: 473.075, f: 475.31, l: "f", a: 0}],
[{o: 0, f: 65.399, l: "n1", a: 0},
{o: 65.399, f: 77.694, l: "D", a: 1},
{o: 77.694, f: 102.133, l: "n2", a: 0},
{o: 102.133, f: 122.903, l: "C", a: 1},
{o: 122.903, f: 150.372, l: "A", a: 0},
{o: 150.372, f: 203.755, l: "n3", a: 1},
{o: 203.755, f: 214.146, l: "B", a: 0},
{o: 214.146, f: 289.309, l: "n4", a: 1},
{o: 289.309, f: 302.753, l: "B", a: 0},
{o: 302.753, f: 341.612, l: "n5", a: 1},
{o: 341.612, f: 353.431, l: "D", a: 0},
{o: 353.431, f: 375.792, l: "n6", a: 1},
{o: 375.792, f: 397.398, l: "C", a: 0},
{o: 397.398, f: 420.026, l: "A", a: 1},
{o: 420.026, f: 451.117, l: "n8", a: 0},
{o: 451.117, f: 461.659, l: "B", a: 1},
{o: 461.659, f: 474.848, l: "n9", a: 0}],
[{o: 0, f: 0.212, l: "I", a: 0},
{o: 0.212, f: 59.916, l: "H", a: 1},
{o: 59.916, f: 64.888, l: "C", a: 0},
{o: 64.888, f: 83.068, l: "H", a: 1},
{o: 83.068, f: 197.808, l: "G", a: 0},
{o: 197.808, f: 201.392, l: "B", a: 1},
{o: 201.392, f: 217.716, l: "H", a: 0},
{o: 217.716, f: 226.772, l: "A", a: 1},
{o: 226.772, f: 254.368, l: "C", a: 0},
{o: 254.368, f: 296.78, l: "A", a: 1},
{o: 296.78, f: 344.94, l: "C", a: 0},
{o: 344.94, f: 348.736, l: "F", a: 1},
{o: 348.736, f: 358.44, l: "H", a: 0},
{o: 358.44, f: 374.812, l: "G", a: 1},
{o: 374.812, f: 379.172, l: "H", a: 0},
{o: 379.172, f: 418.86, l: "C", a: 1},
{o: 418.86, f: 452.604, l: "G", a: 0},
{o: 452.604, f: 457.484, l: "H", a: 1},
{o: 457.484, f: 470.408, l: "G", a: 0},
{o: 470.408, f: 475.012, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000582.ogg";
