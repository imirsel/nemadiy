var data = [
[{o: 0.457, f: 18.808, l: "A", a: 0},
{o: 18.808, f: 40.849, l: "B", a: 1},
{o: 40.849, f: 62.239, l: "C", a: 0},
{o: 62.239, f: 84.259, l: "B", a: 1},
{o: 84.259, f: 106.441, l: "D", a: 0},
{o: 106.441, f: 128.736, l: "B", a: 1},
{o: 128.736, f: 151.464, l: "E", a: 0},
{o: 151.464, f: 188.396, l: "B", a: 1}],
[{o: 0.256, f: 14.024, l: "A", a: 0},
{o: 14.024, f: 29.84, l: "C", a: 1},
{o: 29.84, f: 48.84, l: "C", a: 0},
{o: 48.84, f: 64.628, l: "C", a: 1},
{o: 64.628, f: 72.796, l: "C", a: 0},
{o: 72.796, f: 83.552, l: "C", a: 1},
{o: 83.552, f: 92.168, l: "C", a: 0},
{o: 92.168, f: 104.008, l: "C", a: 1},
{o: 104.008, f: 116.872, l: "C", a: 0},
{o: 116.872, f: 128.692, l: "C", a: 1},
{o: 128.692, f: 139.336, l: "B", a: 0},
{o: 139.336, f: 150.348, l: "B", a: 1},
{o: 150.348, f: 160.584, l: "D", a: 0},
{o: 160.584, f: 175.256, l: "C", a: 1},
{o: 175.256, f: 182.72, l: "E", a: 0}],
[{o: 0.256, f: 14.024, l: "D", a: 0},
{o: 14.024, f: 29.84, l: "E", a: 1},
{o: 29.84, f: 48.84, l: "C", a: 0},
{o: 48.84, f: 64.628, l: "C", a: 1},
{o: 64.628, f: 72.796, l: "C", a: 0},
{o: 72.796, f: 83.552, l: "A", a: 1},
{o: 83.552, f: 92.168, l: "F", a: 0},
{o: 92.168, f: 104.008, l: "G", a: 1},
{o: 104.008, f: 116.872, l: "C", a: 0},
{o: 116.872, f: 128.692, l: "A", a: 1},
{o: 128.692, f: 139.336, l: "B", a: 0},
{o: 139.336, f: 150.348, l: "B", a: 1},
{o: 150.348, f: 160.584, l: "H", a: 0},
{o: 160.584, f: 175.256, l: "A", a: 1},
{o: 175.256, f: 182.72, l: "I", a: 0}],
[{o: 0.44, f: 4.267, l: "8", a: 0},
{o: 4.267, f: 11.787, l: "5", a: 1},
{o: 11.787, f: 18.907, l: "6", a: 0},
{o: 18.907, f: 39.68, l: "3", a: 1},
{o: 39.68, f: 43, l: "4", a: 0},
{o: 43, f: 50.64, l: "2", a: 1},
{o: 50.64, f: 53.613, l: "4", a: 0},
{o: 53.613, f: 63.413, l: "1", a: 1},
{o: 63.413, f: 67.507, l: "3", a: 0},
{o: 67.507, f: 83.387, l: "1", a: 1},
{o: 83.387, f: 95.893, l: "2", a: 0},
{o: 95.893, f: 127.12, l: "1", a: 1},
{o: 127.12, f: 149.507, l: "2", a: 0},
{o: 149.507, f: 177.04, l: "1", a: 1},
{o: 177.04, f: 182.267, l: "4", a: 0},
{o: 182.267, f: 188.253, l: "7", a: 1}],
[{o: 0, f: 9.685, l: "a", a: 0},
{o: 9.685, f: 29.8, l: "b", a: 1},
{o: 29.8, f: 51.405, l: "b", a: 0},
{o: 51.405, f: 75.99, l: "b", a: 1},
{o: 75.99, f: 96.105, l: "b", a: 0},
{o: 96.105, f: 120.69, l: "b", a: 1},
{o: 120.69, f: 139.315, l: "b", a: 0},
{o: 139.315, f: 163.9, l: "b", a: 1},
{o: 163.9, f: 187.74, l: "b", a: 0}],
[{o: 0, f: 17.717, l: "n1", a: 0},
{o: 17.717, f: 27.202, l: "A", a: 1},
{o: 27.202, f: 41.924, l: "n2", a: 0},
{o: 41.924, f: 51.188, l: "A", a: 1},
{o: 51.188, f: 60.546, l: "n3", a: 0},
{o: 60.546, f: 70.101, l: "A", a: 1},
{o: 70.101, f: 89.432, l: "n4", a: 0},
{o: 89.432, f: 99.196, l: "A", a: 1},
{o: 99.196, f: 104.722, l: "n5", a: 0},
{o: 104.722, f: 115.833, l: "A", a: 1},
{o: 115.833, f: 125.55, l: "A", a: 0},
{o: 125.55, f: 131.808, l: "n7", a: 1},
{o: 131.808, f: 141.433, l: "A", a: 0},
{o: 141.433, f: 149.002, l: "n8", a: 1},
{o: 149.002, f: 160.253, l: "A", a: 0},
{o: 160.253, f: 170.121, l: "A", a: 1},
{o: 170.121, f: 177.807, l: "n10", a: 0},
{o: 177.807, f: 188.407, l: "A", a: 1}],
[{o: 0, f: 0.34, l: "H", a: 0},
{o: 0.34, f: 10.496, l: "G", a: 1},
{o: 10.496, f: 18.116, l: "B", a: 0},
{o: 18.116, f: 24.172, l: "G", a: 1},
{o: 24.172, f: 41.056, l: "D", a: 0},
{o: 41.056, f: 55.336, l: "B", a: 1},
{o: 55.336, f: 72.62, l: "D", a: 0},
{o: 72.62, f: 100.032, l: "G", a: 1},
{o: 100.032, f: 117.048, l: "D", a: 0},
{o: 117.048, f: 142.456, l: "G", a: 1},
{o: 142.456, f: 162.368, l: "D", a: 0},
{o: 162.368, f: 173.052, l: "G", a: 1},
{o: 173.052, f: 179.244, l: "D", a: 0},
{o: 179.244, f: 182.836, l: "B", a: 1},
{o: 182.836, f: 188.37, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000098.ogg";
