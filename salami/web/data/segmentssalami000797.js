var data = [
[{o: 0.279, f: 9.056, l: "I", a: 0},
{o: 9.056, f: 26.424, l: "A", a: 1},
{o: 26.424, f: 43.746, l: "B", a: 0},
{o: 43.746, f: 60.488, l: "A", a: 1},
{o: 60.488, f: 77.415, l: "B", a: 0},
{o: 77.415, f: 94.319, l: "A", a: 1},
{o: 94.319, f: 111.34, l: "B", a: 0},
{o: 111.34, f: 128.499, l: "A", a: 1},
{o: 128.499, f: 146.007, l: "B", a: 0},
{o: 146.007, f: 164.232, l: "O", a: 1}],
[{o: 0.388, f: 8.996, l: "D", a: 0},
{o: 8.996, f: 18.856, l: "B", a: 1},
{o: 18.856, f: 29.54, l: "D", a: 0},
{o: 29.54, f: 40.316, l: "B", a: 1},
{o: 40.316, f: 47.884, l: "B", a: 0},
{o: 47.884, f: 60.416, l: "C", a: 1},
{o: 60.416, f: 69.936, l: "B", a: 0},
{o: 69.936, f: 79.472, l: "C", a: 1},
{o: 79.472, f: 95.204, l: "A", a: 0},
{o: 95.204, f: 110.152, l: "A", a: 1},
{o: 110.152, f: 121.984, l: "B", a: 0},
{o: 121.984, f: 133.888, l: "A", a: 1},
{o: 133.888, f: 144.748, l: "A", a: 0},
{o: 144.748, f: 155.272, l: "B", a: 1},
{o: 155.272, f: 161.552, l: "B", a: 0}],
[{o: 0.388, f: 8.996, l: "D", a: 0},
{o: 8.996, f: 18.856, l: "B", a: 1},
{o: 18.856, f: 29.54, l: "D", a: 0},
{o: 29.54, f: 40.316, l: "B", a: 1},
{o: 40.316, f: 47.884, l: "B", a: 0},
{o: 47.884, f: 60.416, l: "C", a: 1},
{o: 60.416, f: 69.936, l: "B", a: 0},
{o: 69.936, f: 79.472, l: "C", a: 1},
{o: 79.472, f: 95.204, l: "A", a: 0},
{o: 95.204, f: 110.152, l: "A", a: 1},
{o: 110.152, f: 121.984, l: "B", a: 0},
{o: 121.984, f: 133.888, l: "E", a: 1},
{o: 133.888, f: 144.748, l: "F", a: 0},
{o: 144.748, f: 155.272, l: "G", a: 1},
{o: 155.272, f: 161.552, l: "H", a: 0}],
[{o: 0.467, f: 7.08, l: "8", a: 0},
{o: 7.08, f: 22.333, l: "2", a: 1},
{o: 22.333, f: 35.773, l: "1", a: 0},
{o: 35.773, f: 43.973, l: "7", a: 1},
{o: 43.973, f: 66.987, l: "1", a: 0},
{o: 66.987, f: 75.987, l: "3", a: 1},
{o: 75.987, f: 100.333, l: "4", a: 0},
{o: 100.333, f: 108.307, l: "1", a: 1},
{o: 108.307, f: 124.44, l: "2", a: 0},
{o: 124.44, f: 131.48, l: "1", a: 1},
{o: 131.48, f: 140.76, l: "3", a: 0},
{o: 140.76, f: 149.973, l: "6", a: 1},
{o: 149.973, f: 162.92, l: "5", a: 0}],
[{o: 0, f: 8.195, l: "a", a: 0},
{o: 8.195, f: 23.095, l: "b", a: 1},
{o: 23.095, f: 40.975, l: "c", a: 0},
{o: 40.975, f: 110.26, l: "d", a: 1},
{o: 110.26, f: 125.16, l: "b", a: 0},
{o: 125.16, f: 143.785, l: "c", a: 1},
{o: 143.785, f: 163.9, l: "e", a: 0}],
[{o: 0, f: 14.489, l: "n1", a: 0},
{o: 14.489, f: 36.061, l: "A", a: 1},
{o: 36.061, f: 48.936, l: "n2", a: 0},
{o: 48.936, f: 69.973, l: "A", a: 1},
{o: 69.973, f: 116.622, l: "n3", a: 0},
{o: 116.622, f: 137.636, l: "A", a: 1},
{o: 137.636, f: 164.258, l: "n4", a: 0}],
[{o: 0, f: 0.124, l: "F", a: 0},
{o: 0.124, f: 33.844, l: "E", a: 1},
{o: 33.844, f: 65.604, l: "A", a: 0},
{o: 65.604, f: 84.236, l: "C", a: 1},
{o: 84.236, f: 111.784, l: "B", a: 0},
{o: 111.784, f: 133.896, l: "E", a: 1},
{o: 133.896, f: 161.544, l: "D", a: 0},
{o: 161.544, f: 164.233, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000797.ogg";

var artist = "Compilations";

var track = "Big Town";