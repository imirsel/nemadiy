var data = [
[{o: 0, f: 11.447, l: "Z", a: 0},
{o: 11.447, f: 38.658, l: "A", a: 1},
{o: 38.658, f: 58.788, l: "B", a: 0},
{o: 58.788, f: 74.353, l: "C", a: 1},
{o: 74.353, f: 88.489, l: "C'", a: 0},
{o: 88.489, f: 102.282, l: "C'", a: 1},
{o: 102.282, f: 115.562, l: "C", a: 0},
{o: 115.562, f: 128.818, l: "C'", a: 1},
{o: 128.818, f: 144.6, l: "Z", a: 0}],
[{o: 0.012, f: 11.448, l: "B", a: 0},
{o: 11.448, f: 18.66, l: "E", a: 1},
{o: 18.66, f: 23.072, l: "E", a: 0},
{o: 23.072, f: 28.176, l: "D", a: 1},
{o: 28.176, f: 34.464, l: "D", a: 0},
{o: 34.464, f: 43.652, l: "D", a: 1},
{o: 43.652, f: 50.336, l: "D", a: 0},
{o: 50.336, f: 57.332, l: "D", a: 1},
{o: 57.332, f: 71.052, l: "A", a: 0},
{o: 71.052, f: 85.636, l: "A", a: 1},
{o: 85.636, f: 93.668, l: "A", a: 0},
{o: 93.668, f: 105.54, l: "A", a: 1},
{o: 105.54, f: 112.784, l: "A", a: 0},
{o: 112.784, f: 121.248, l: "C", a: 1},
{o: 121.248, f: 128.708, l: "F", a: 0},
{o: 128.708, f: 138.58, l: "B", a: 1},
{o: 138.58, f: 144.508, l: "B", a: 0}],
[{o: 0.012, f: 11.448, l: "B", a: 0},
{o: 11.448, f: 18.66, l: "E", a: 1},
{o: 18.66, f: 23.072, l: "F", a: 0},
{o: 23.072, f: 28.176, l: "D", a: 1},
{o: 28.176, f: 34.464, l: "G", a: 0},
{o: 34.464, f: 43.652, l: "D", a: 1},
{o: 43.652, f: 50.336, l: "C", a: 0},
{o: 50.336, f: 57.332, l: "C", a: 1},
{o: 57.332, f: 71.052, l: "A", a: 0},
{o: 71.052, f: 85.636, l: "A", a: 1},
{o: 85.636, f: 93.668, l: "A", a: 0},
{o: 93.668, f: 105.54, l: "A", a: 1},
{o: 105.54, f: 112.784, l: "A", a: 0},
{o: 112.784, f: 121.248, l: "H", a: 1},
{o: 121.248, f: 128.708, l: "I", a: 0},
{o: 128.708, f: 138.58, l: "B", a: 1},
{o: 138.58, f: 144.508, l: "J", a: 0}],
[{o: 0.52, f: 11.24, l: "3", a: 0},
{o: 11.24, f: 25.027, l: "6", a: 1},
{o: 25.027, f: 30, l: "8", a: 0},
{o: 30, f: 35.64, l: "7", a: 1},
{o: 35.64, f: 44.467, l: "4", a: 0},
{o: 44.467, f: 48.747, l: "5", a: 1},
{o: 48.747, f: 54.387, l: "4", a: 0},
{o: 54.387, f: 58.973, l: "5", a: 1},
{o: 58.973, f: 68.88, l: "1", a: 0},
{o: 68.88, f: 75.32, l: "2", a: 1},
{o: 75.32, f: 87.427, l: "1", a: 0},
{o: 87.427, f: 92.6, l: "2", a: 1},
{o: 92.6, f: 99.027, l: "1", a: 0},
{o: 99.027, f: 104.387, l: "2", a: 1},
{o: 104.387, f: 110.733, l: "1", a: 0},
{o: 110.733, f: 119.027, l: "2", a: 1},
{o: 119.027, f: 128.253, l: "1", a: 0},
{o: 128.253, f: 144.467, l: "3", a: 1}],
[{o: 0, f: 37.995, l: "a", a: 0},
{o: 37.995, f: 47.68, l: "b", a: 1},
{o: 47.68, f: 56.62, l: "b", a: 0},
{o: 56.62, f: 75.99, l: "c", a: 1},
{o: 75.99, f: 87.91, l: "d", a: 0},
{o: 87.91, f: 116.965, l: "e", a: 1},
{o: 116.965, f: 128.14, l: "d", a: 0},
{o: 128.14, f: 143.785, l: "f", a: 1}],
[{o: 0, f: 144.149, l: "A", a: 0},
{o: 0.012, f: 144.567, l: "A", a: 1}],
[{o: 0, f: 0.004, l: "J", a: 0},
{o: 0.004, f: 13.076, l: "C", a: 1},
{o: 13.076, f: 37.296, l: "F", a: 0},
{o: 37.296, f: 51.056, l: "G", a: 1},
{o: 51.056, f: 131.476, l: "I", a: 0},
{o: 131.476, f: 144.316, l: "E", a: 1},
{o: 144.316, f: 144.52, l: "I", a: 0},
{o: 144.52, f: 144.589, l: "J", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000624.ogg";
