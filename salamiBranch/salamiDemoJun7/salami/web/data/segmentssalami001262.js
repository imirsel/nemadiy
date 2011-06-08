var data = [
[{o: 0.064, f: 55.58, l: "A", a: 0},
{o: 55.58, f: 73.91, l: "B", a: 1},
{o: 73.91, f: 83.205, l: "C", a: 0},
{o: 83.205, f: 101.592, l: "A", a: 1},
{o: 101.592, f: 120.038, l: "B", a: 0},
{o: 120.038, f: 129.394, l: "C", a: 1},
{o: 129.394, f: 147.95, l: "C", a: 0},
{o: 147.95, f: 166.21, l: "A", a: 1},
{o: 166.21, f: 184.558, l: "B", a: 0},
{o: 184.558, f: 193.923, l: "C", a: 1},
{o: 193.923, f: 212.405, l: "C", a: 0},
{o: 212.405, f: 230.912, l: "C", a: 1},
{o: 230.912, f: 268.731, l: "A", a: 0}],
[{o: 0.016, f: 15.16, l: "B", a: 0},
{o: 15.16, f: 30.176, l: "B", a: 1},
{o: 30.176, f: 49.5, l: "B", a: 0},
{o: 49.5, f: 62.124, l: "B", a: 1},
{o: 62.124, f: 73.848, l: "D", a: 0},
{o: 73.848, f: 83.396, l: "D", a: 1},
{o: 83.396, f: 97.104, l: "B", a: 0},
{o: 97.104, f: 109.224, l: "B", a: 1},
{o: 109.224, f: 120.172, l: "D", a: 0},
{o: 120.172, f: 128.684, l: "D", a: 1},
{o: 128.684, f: 137.772, l: "D", a: 0},
{o: 137.772, f: 154.468, l: "D", a: 1},
{o: 154.468, f: 166.18, l: "C", a: 0},
{o: 166.18, f: 182.188, l: "D", a: 1},
{o: 182.188, f: 193.292, l: "E", a: 0},
{o: 193.292, f: 207.228, l: "A", a: 1},
{o: 207.228, f: 213.38, l: "A", a: 0},
{o: 213.38, f: 231.096, l: "A", a: 1},
{o: 231.096, f: 242.34, l: "F", a: 0},
{o: 242.34, f: 260.504, l: "G", a: 1},
{o: 260.504, f: 268.264, l: "H", a: 0}],
[{o: 0.016, f: 15.16, l: "F", a: 0},
{o: 15.16, f: 30.176, l: "B", a: 1},
{o: 30.176, f: 49.5, l: "B", a: 0},
{o: 49.5, f: 62.124, l: "C", a: 1},
{o: 62.124, f: 73.848, l: "D", a: 0},
{o: 73.848, f: 83.396, l: "E", a: 1},
{o: 83.396, f: 97.104, l: "B", a: 0},
{o: 97.104, f: 109.224, l: "C", a: 1},
{o: 109.224, f: 120.172, l: "G", a: 0},
{o: 120.172, f: 128.684, l: "E", a: 1},
{o: 128.684, f: 137.772, l: "E", a: 0},
{o: 137.772, f: 154.468, l: "H", a: 1},
{o: 154.468, f: 166.18, l: "I", a: 0},
{o: 166.18, f: 182.188, l: "D", a: 1},
{o: 182.188, f: 193.292, l: "J", a: 0},
{o: 193.292, f: 207.228, l: "A", a: 1},
{o: 207.228, f: 213.38, l: "A", a: 0},
{o: 213.38, f: 231.096, l: "A", a: 1},
{o: 231.096, f: 242.34, l: "K", a: 0},
{o: 242.34, f: 260.504, l: "L", a: 1},
{o: 260.504, f: 268.264, l: "M", a: 0}],
[{o: 0.467, f: 3.067, l: "8", a: 0},
{o: 3.067, f: 17.64, l: "5", a: 1},
{o: 17.64, f: 49.96, l: "1", a: 0},
{o: 49.96, f: 59.76, l: "3", a: 1},
{o: 59.76, f: 73.027, l: "1", a: 0},
{o: 73.027, f: 82.84, l: "2", a: 1},
{o: 82.84, f: 101.88, l: "1", a: 0},
{o: 101.88, f: 119.747, l: "3", a: 1},
{o: 119.747, f: 146.867, l: "2", a: 0},
{o: 146.867, f: 165.32, l: "1", a: 1},
{o: 165.32, f: 183.787, l: "3", a: 0},
{o: 183.787, f: 231.107, l: "2", a: 1},
{o: 231.107, f: 256.773, l: "4", a: 0},
{o: 256.773, f: 263.68, l: "6", a: 1},
{o: 263.68, f: 268.547, l: "7", a: 0}],
[{o: 0, f: 35.015, l: "a", a: 0},
{o: 35.015, f: 57.365, l: "b", a: 1},
{o: 57.365, f: 81.205, l: "c", a: 0},
{o: 81.205, f: 103.555, l: "b", a: 1},
{o: 103.555, f: 119.945, l: "d", a: 0},
{o: 119.945, f: 133.355, l: "e", a: 1},
{o: 133.355, f: 151.98, l: "f", a: 0},
{o: 151.98, f: 184.015, l: "g", a: 1},
{o: 184.015, f: 198.17, l: "e", a: 0},
{o: 198.17, f: 216.795, l: "f", a: 1},
{o: 216.795, f: 234.675, l: "f", a: 0},
{o: 234.675, f: 268.2, l: "h", a: 1}],
[{o: 0, f: 0.337, l: "n1", a: 0},
{o: 0.337, f: 9.578, l: "A", a: 1},
{o: 9.578, f: 18.808, l: "A", a: 0},
{o: 18.808, f: 28.038, l: "A", a: 1},
{o: 28.038, f: 37.268, l: "A", a: 0},
{o: 37.268, f: 46.498, l: "A", a: 1},
{o: 46.498, f: 54.59, l: "A", a: 0},
{o: 54.59, f: 74.199, l: "n7", a: 1},
{o: 74.199, f: 83.418, l: "C", a: 0},
{o: 83.418, f: 92.659, l: "A", a: 1},
{o: 92.659, f: 100.728, l: "A", a: 0},
{o: 100.728, f: 120.349, l: "n10", a: 1},
{o: 120.349, f: 129.567, l: "C", a: 0},
{o: 129.567, f: 148.027, l: "B", a: 1},
{o: 148.027, f: 157.269, l: "D", a: 0},
{o: 157.269, f: 166.499, l: "D", a: 1},
{o: 166.499, f: 175.729, l: "n12", a: 0},
{o: 175.729, f: 184.97, l: "A", a: 1},
{o: 184.97, f: 194.188, l: "C", a: 0},
{o: 194.188, f: 212.648, l: "B", a: 1},
{o: 212.648, f: 231.12, l: "B", a: 0},
{o: 231.12, f: 240.35, l: "A", a: 1},
{o: 240.35, f: 248.43, l: "A", a: 0},
{o: 248.43, f: 268.655, l: "n16", a: 1}],
[{o: 0, f: 0.028, l: "H", a: 0},
{o: 0.028, f: 75.164, l: "E", a: 1},
{o: 75.164, f: 88.6, l: "A", a: 0},
{o: 88.6, f: 103.456, l: "E", a: 1},
{o: 103.456, f: 147.588, l: "F", a: 0},
{o: 147.588, f: 153.64, l: "E", a: 1},
{o: 153.64, f: 162.156, l: "G", a: 0},
{o: 162.156, f: 189.836, l: "F", a: 1},
{o: 189.836, f: 230.372, l: "A", a: 0},
{o: 230.372, f: 253.152, l: "E", a: 1},
{o: 253.152, f: 265.26, l: "D", a: 0},
{o: 265.26, f: 268.272, l: "E", a: 1},
{o: 268.272, f: 268.67, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001262.ogg";