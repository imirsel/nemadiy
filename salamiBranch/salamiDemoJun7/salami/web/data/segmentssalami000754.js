var data = [
[{o: 0.627, f: 18.24, l: "A", a: 0},
{o: 18.24, f: 35.893, l: "E", a: 1},
{o: 35.893, f: 44.689, l: "H", a: 0},
{o: 44.689, f: 62.226, l: "I", a: 1},
{o: 62.226, f: 79.89, l: "K", a: 0},
{o: 79.89, f: 97.531, l: "E", a: 1},
{o: 97.531, f: 106.292, l: "H", a: 0},
{o: 106.292, f: 123.949, l: "I", a: 1},
{o: 123.949, f: 141.596, l: "K", a: 0},
{o: 141.596, f: 159.188, l: "E", a: 1},
{o: 159.188, f: 176.764, l: "O", a: 0},
{o: 176.764, f: 194.394, l: "E", a: 1},
{o: 194.394, f: 212.024, l: "E", a: 0},
{o: 212.024, f: 229.653, l: "E", a: 1},
{o: 229.653, f: 251.046, l: "E", a: 0}],
[{o: 0.024, f: 6.904, l: "B", a: 0},
{o: 6.904, f: 15.148, l: "A", a: 1},
{o: 15.148, f: 35.796, l: "A", a: 0},
{o: 35.796, f: 47.904, l: "A", a: 1},
{o: 47.904, f: 59.74, l: "A", a: 0},
{o: 59.74, f: 73.78, l: "A", a: 1},
{o: 73.78, f: 82.588, l: "A", a: 0},
{o: 82.588, f: 98.548, l: "A", a: 1},
{o: 98.548, f: 105.98, l: "A", a: 0},
{o: 105.98, f: 126.072, l: "A", a: 1},
{o: 126.072, f: 141.204, l: "A", a: 0},
{o: 141.204, f: 160.204, l: "A", a: 1},
{o: 160.204, f: 167.632, l: "A", a: 0},
{o: 167.632, f: 177.264, l: "A", a: 1},
{o: 177.264, f: 188.552, l: "A", a: 0},
{o: 188.552, f: 196.784, l: "A", a: 1},
{o: 196.784, f: 214.144, l: "A", a: 0},
{o: 214.144, f: 235.616, l: "A", a: 1},
{o: 235.616, f: 245.532, l: "A", a: 0}],
[{o: 0.024, f: 6.904, l: "D", a: 0},
{o: 6.904, f: 15.148, l: "E", a: 1},
{o: 15.148, f: 35.796, l: "A", a: 0},
{o: 35.796, f: 47.904, l: "B", a: 1},
{o: 47.904, f: 59.74, l: "C", a: 0},
{o: 59.74, f: 73.78, l: "A", a: 1},
{o: 73.78, f: 82.588, l: "A", a: 0},
{o: 82.588, f: 98.548, l: "A", a: 1},
{o: 98.548, f: 105.98, l: "B", a: 0},
{o: 105.98, f: 126.072, l: "C", a: 1},
{o: 126.072, f: 141.204, l: "A", a: 0},
{o: 141.204, f: 160.204, l: "A", a: 1},
{o: 160.204, f: 167.632, l: "F", a: 0},
{o: 167.632, f: 177.264, l: "G", a: 1},
{o: 177.264, f: 188.552, l: "A", a: 0},
{o: 188.552, f: 196.784, l: "A", a: 1},
{o: 196.784, f: 214.144, l: "A", a: 0},
{o: 214.144, f: 235.616, l: "H", a: 1},
{o: 235.616, f: 245.532, l: "I", a: 0}],
[{o: 0.84, f: 7.173, l: "6", a: 0},
{o: 7.173, f: 16.533, l: "5", a: 1},
{o: 16.533, f: 37.173, l: "1", a: 0},
{o: 37.173, f: 43.227, l: "7", a: 1},
{o: 43.227, f: 56.987, l: "2", a: 0},
{o: 56.987, f: 68.547, l: "3", a: 1},
{o: 68.547, f: 104.88, l: "1", a: 0},
{o: 104.88, f: 118.093, l: "2", a: 1},
{o: 118.093, f: 128, l: "3", a: 0},
{o: 128, f: 213.867, l: "1", a: 1},
{o: 213.867, f: 247.053, l: "4", a: 0},
{o: 247.053, f: 250.893, l: "8", a: 1}],
[{o: 0, f: 16.39, l: "a", a: 0},
{o: 16.39, f: 28.31, l: "b", a: 1},
{o: 28.31, f: 47.68, l: "c", a: 0},
{o: 47.68, f: 90.89, l: "d", a: 1},
{o: 90.89, f: 109.515, l: "c", a: 0},
{o: 109.515, f: 152.725, l: "d", a: 1},
{o: 152.725, f: 174.33, l: "c", a: 0},
{o: 174.33, f: 192.955, l: "e", a: 1},
{o: 192.955, f: 210.835, l: "b", a: 0},
{o: 210.835, f: 229.46, l: "e", a: 1},
{o: 229.46, f: 250.32, l: "b", a: 0}],
[{o: 0, f: 18.762, l: "n1", a: 0},
{o: 18.762, f: 33.634, l: "A", a: 1},
{o: 33.634, f: 80.411, l: "B", a: 0},
{o: 80.411, f: 95.283, l: "A", a: 1},
{o: 95.283, f: 141.932, l: "B", a: 0},
{o: 141.932, f: 156.781, l: "A", a: 1},
{o: 156.781, f: 177.006, l: "n2", a: 0},
{o: 177.006, f: 194.769, l: "A", a: 1},
{o: 194.769, f: 212.532, l: "A", a: 0},
{o: 212.532, f: 229.854, l: "A", a: 1},
{o: 229.854, f: 244.738, l: "A", a: 0},
{o: 244.738, f: 250.822, l: "n6", a: 1}],
[{o: 0, f: 0.024, l: "F", a: 0},
{o: 0.024, f: 18.464, l: "B", a: 1},
{o: 18.464, f: 37.172, l: "C", a: 0},
{o: 37.172, f: 62.22, l: "E", a: 1},
{o: 62.22, f: 82.308, l: "A", a: 0},
{o: 82.308, f: 98.824, l: "D", a: 1},
{o: 98.824, f: 123.872, l: "E", a: 0},
{o: 123.872, f: 143.964, l: "A", a: 1},
{o: 143.964, f: 160.48, l: "D", a: 0},
{o: 160.48, f: 176.708, l: "A", a: 1},
{o: 176.708, f: 196.784, l: "C", a: 0},
{o: 196.784, f: 211.944, l: "D", a: 1},
{o: 211.944, f: 245.532, l: "C", a: 0},
{o: 245.532, f: 250.987, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000754.ogg";
