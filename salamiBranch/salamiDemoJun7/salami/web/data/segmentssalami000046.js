var data = [
[{o: 0.534, f: 7.245, l: "A", a: 0},
{o: 7.245, f: 67.371, l: "A", a: 1},
{o: 67.371, f: 97.66, l: "B", a: 0},
{o: 97.66, f: 116.513, l: "C", a: 1},
{o: 116.513, f: 124.81, l: "D", a: 0},
{o: 124.81, f: 168.877, l: "E", a: 1},
{o: 168.877, f: 185.265, l: "F", a: 0}],
[{o: 0.012, f: 7.18, l: "B", a: 0},
{o: 7.18, f: 19.04, l: "B", a: 1},
{o: 19.04, f: 27.064, l: "A", a: 0},
{o: 27.064, f: 38.104, l: "A", a: 1},
{o: 38.104, f: 45.824, l: "A", a: 0},
{o: 45.824, f: 58.232, l: "A", a: 1},
{o: 58.232, f: 67.024, l: "A", a: 0},
{o: 67.024, f: 76.216, l: "A", a: 1},
{o: 76.216, f: 86.02, l: "A", a: 0},
{o: 86.02, f: 91.632, l: "A", a: 1},
{o: 91.632, f: 100.064, l: "A", a: 0},
{o: 100.064, f: 110.052, l: "A", a: 1},
{o: 110.052, f: 123.708, l: "A", a: 0},
{o: 123.708, f: 131.132, l: "A", a: 1},
{o: 131.132, f: 145.476, l: "A", a: 0},
{o: 145.476, f: 161.208, l: "A", a: 1},
{o: 161.208, f: 171.728, l: "A", a: 0},
{o: 171.728, f: 185.136, l: "A", a: 1}],
[{o: 0.012, f: 7.18, l: "B", a: 0},
{o: 7.18, f: 19.04, l: "D", a: 1},
{o: 19.04, f: 27.064, l: "E", a: 0},
{o: 27.064, f: 38.104, l: "A", a: 1},
{o: 38.104, f: 45.824, l: "A", a: 0},
{o: 45.824, f: 58.232, l: "A", a: 1},
{o: 58.232, f: 67.024, l: "A", a: 0},
{o: 67.024, f: 76.216, l: "A", a: 1},
{o: 76.216, f: 86.02, l: "A", a: 0},
{o: 86.02, f: 91.632, l: "F", a: 1},
{o: 91.632, f: 100.064, l: "A", a: 0},
{o: 100.064, f: 110.052, l: "G", a: 1},
{o: 110.052, f: 123.708, l: "H", a: 0},
{o: 123.708, f: 131.132, l: "C", a: 1},
{o: 131.132, f: 145.476, l: "C", a: 0},
{o: 145.476, f: 161.208, l: "C", a: 1},
{o: 161.208, f: 171.728, l: "C", a: 0},
{o: 171.728, f: 185.136, l: "C", a: 1}],
[{o: 0.467, f: 1.853, l: "8", a: 0},
{o: 1.853, f: 7.373, l: "7", a: 1},
{o: 7.373, f: 19.347, l: "4", a: 0},
{o: 19.347, f: 28.547, l: "5", a: 1},
{o: 28.547, f: 66.48, l: "1", a: 0},
{o: 66.48, f: 72.96, l: "2", a: 1},
{o: 72.96, f: 79.04, l: "1", a: 0},
{o: 79.04, f: 85.427, l: "2", a: 1},
{o: 85.427, f: 91.427, l: "1", a: 0},
{o: 91.427, f: 97.147, l: "2", a: 1},
{o: 97.147, f: 103.84, l: "1", a: 0},
{o: 103.84, f: 110.093, l: "2", a: 1},
{o: 110.093, f: 116.28, l: "1", a: 0},
{o: 116.28, f: 125.04, l: "6", a: 1},
{o: 125.04, f: 168.68, l: "3", a: 0},
{o: 168.68, f: 180.987, l: "2", a: 1},
{o: 180.987, f: 185.053, l: "3", a: 0}],
[{o: 0, f: 26.075, l: "a", a: 0},
{o: 26.075, f: 40.975, l: "b", a: 1},
{o: 40.975, f: 52.895, l: "c", a: 0},
{o: 52.895, f: 75.99, l: "b", a: 1},
{o: 75.99, f: 87.91, l: "c", a: 0},
{o: 87.91, f: 113.24, l: "b", a: 1},
{o: 113.24, f: 134.1, l: "d", a: 0},
{o: 134.1, f: 150.49, l: "e", a: 1},
{o: 150.49, f: 169.115, l: "e", a: 0},
{o: 169.115, f: 184.76, l: "f", a: 1}],
[{o: 0, f: 31.382, l: "n1", a: 0},
{o: 31.382, f: 44.582, l: "C", a: 1},
{o: 44.582, f: 56.564, l: "C", a: 0},
{o: 56.564, f: 62.183, l: "n3", a: 1},
{o: 62.183, f: 75.093, l: "A", a: 0},
{o: 75.093, f: 86.425, l: "A", a: 1},
{o: 86.425, f: 97.524, l: "A", a: 0},
{o: 97.524, f: 110.481, l: "A", a: 1},
{o: 110.481, f: 121.533, l: "A", a: 0},
{o: 121.533, f: 128.836, l: "n8", a: 1},
{o: 128.836, f: 147.841, l: "B", a: 0},
{o: 147.841, f: 154.053, l: "n9", a: 1},
{o: 154.053, f: 172.547, l: "B", a: 0},
{o: 172.547, f: 185.063, l: "n10", a: 1}],
[{o: 0, f: 0.116, l: "G", a: 0},
{o: 0.116, f: 19.54, l: "D", a: 1},
{o: 19.54, f: 68.604, l: "F", a: 0},
{o: 68.604, f: 85.24, l: "C", a: 1},
{o: 85.24, f: 104.768, l: "E", a: 0},
{o: 104.768, f: 138, l: "F", a: 1},
{o: 138, f: 170.012, l: "C", a: 0},
{o: 170.012, f: 184.716, l: "A", a: 1},
{o: 184.716, f: 185.1, l: "F", a: 0},
{o: 185.1, f: 185.173, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000046.ogg";