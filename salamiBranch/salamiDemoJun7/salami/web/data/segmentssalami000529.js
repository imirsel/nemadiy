var data = [
[{o: 0.531, f: 16.746, l: "A", a: 0},
{o: 16.746, f: 40.634, l: "A", a: 1},
{o: 40.634, f: 50.669, l: "B", a: 0},
{o: 50.669, f: 68.404, l: "A", a: 1},
{o: 68.404, f: 84.09, l: "A", a: 0},
{o: 84.09, f: 94.202, l: "B", a: 1},
{o: 94.202, f: 127.581, l: "A", a: 0},
{o: 127.581, f: 158.756, l: "Z", a: 1}],
[{o: 0.048, f: 10.652, l: "D", a: 0},
{o: 10.652, f: 23.2, l: "D", a: 1},
{o: 23.2, f: 37.628, l: "D", a: 0},
{o: 37.628, f: 48.112, l: "D", a: 1},
{o: 48.112, f: 62.952, l: "D", a: 0},
{o: 62.952, f: 81.024, l: "D", a: 1},
{o: 81.024, f: 91.596, l: "D", a: 0},
{o: 91.596, f: 103.88, l: "D", a: 1},
{o: 103.88, f: 116.156, l: "D", a: 0},
{o: 116.156, f: 126.856, l: "D", a: 1},
{o: 126.856, f: 144.72, l: "D", a: 0},
{o: 144.72, f: 158.552, l: "A", a: 1}],
[{o: 0.048, f: 10.652, l: "D", a: 0},
{o: 10.652, f: 23.2, l: "D", a: 1},
{o: 23.2, f: 37.628, l: "D", a: 0},
{o: 37.628, f: 48.112, l: "D", a: 1},
{o: 48.112, f: 62.952, l: "A", a: 0},
{o: 62.952, f: 81.024, l: "D", a: 1},
{o: 81.024, f: 91.596, l: "D", a: 0},
{o: 91.596, f: 103.88, l: "C", a: 1},
{o: 103.88, f: 116.156, l: "C", a: 0},
{o: 116.156, f: 126.856, l: "B", a: 1},
{o: 126.856, f: 144.72, l: "E", a: 0},
{o: 144.72, f: 158.552, l: "F", a: 1}],
[{o: 0.6, f: 3.387, l: "6", a: 0},
{o: 3.387, f: 23.453, l: "5", a: 1},
{o: 23.453, f: 43.933, l: "1", a: 0},
{o: 43.933, f: 49.853, l: "3", a: 1},
{o: 49.853, f: 63.173, l: "2", a: 0},
{o: 63.173, f: 70.52, l: "6", a: 1},
{o: 70.52, f: 86.827, l: "1", a: 0},
{o: 86.827, f: 93.36, l: "3", a: 1},
{o: 93.36, f: 106.133, l: "2", a: 0},
{o: 106.133, f: 127.64, l: "4", a: 1},
{o: 127.64, f: 142.027, l: "8", a: 0},
{o: 142.027, f: 158.36, l: "7", a: 1}],
[{o: 0, f: 8.195, l: "a", a: 0},
{o: 8.195, f: 23.84, l: "a", a: 1},
{o: 23.84, f: 35.015, l: "a", a: 0},
{o: 35.015, f: 67.795, l: "b", a: 1},
{o: 67.795, f: 78.97, l: "a", a: 0},
{o: 78.97, f: 111.75, l: "b", a: 1},
{o: 111.75, f: 157.94, l: "c", a: 0}],
[{o: 0, f: 1.602, l: "n1", a: 0},
{o: 1.602, f: 15.685, l: "A", a: 1},
{o: 15.685, f: 25.716, l: "n2", a: 0},
{o: 25.716, f: 41.181, l: "A", a: 1},
{o: 41.181, f: 55.066, l: "B", a: 0},
{o: 55.066, f: 69.346, l: "n4", a: 1},
{o: 69.346, f: 84.555, l: "A", a: 0},
{o: 84.555, f: 98.557, l: "B", a: 1},
{o: 98.557, f: 113.94, l: "A", a: 0},
{o: 113.94, f: 126.897, l: "A", a: 1},
{o: 126.897, f: 158.685, l: "n7", a: 0}],
[{o: 0, f: 0.04, l: "F", a: 0},
{o: 0.04, f: 37.628, l: "D", a: 1},
{o: 37.628, f: 51.092, l: "E", a: 0},
{o: 51.092, f: 69.056, l: "A", a: 1},
{o: 69.056, f: 79.776, l: "D", a: 0},
{o: 79.776, f: 104.864, l: "E", a: 1},
{o: 104.864, f: 127.436, l: "C", a: 0},
{o: 127.436, f: 158.588, l: "B", a: 1},
{o: 158.588, f: 158.68, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000529.ogg";
