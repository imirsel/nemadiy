var data = [
[{o: 0.449, f: 15.06, l: "A", a: 0},
{o: 15.06, f: 36.906, l: "B", a: 1},
{o: 36.906, f: 51.401, l: "C", a: 0},
{o: 51.401, f: 73.183, l: "D", a: 1},
{o: 73.183, f: 91.298, l: "B", a: 0},
{o: 91.298, f: 105.888, l: "C", a: 1},
{o: 105.888, f: 127.633, l: "E", a: 0},
{o: 127.633, f: 142.205, l: "F", a: 1},
{o: 142.205, f: 145.836, l: "B'", a: 0},
{o: 145.836, f: 156.746, l: "C", a: 1},
{o: 156.746, f: 174.88, l: "B", a: 0},
{o: 174.88, f: 189.463, l: "E", a: 1},
{o: 189.463, f: 244.258, l: "G", a: 0}],
[{o: 0.324, f: 14.996, l: "A", a: 0},
{o: 14.996, f: 24.748, l: "A", a: 1},
{o: 24.748, f: 37.008, l: "A", a: 0},
{o: 37.008, f: 51.316, l: "A", a: 1},
{o: 51.316, f: 62.892, l: "A", a: 0},
{o: 62.892, f: 72.636, l: "A", a: 1},
{o: 72.636, f: 91.484, l: "A", a: 0},
{o: 91.484, f: 108.288, l: "A", a: 1},
{o: 108.288, f: 127.12, l: "A", a: 0},
{o: 127.12, f: 143.936, l: "A", a: 1},
{o: 143.936, f: 156.652, l: "A", a: 0},
{o: 156.652, f: 179.348, l: "B", a: 1},
{o: 179.348, f: 201.128, l: "C", a: 0},
{o: 201.128, f: 219.304, l: "D", a: 1},
{o: 219.304, f: 234.496, l: "A", a: 0},
{o: 234.496, f: 240.412, l: "E", a: 1}],
[{o: 0.324, f: 14.996, l: "D", a: 0},
{o: 14.996, f: 24.748, l: "A", a: 1},
{o: 24.748, f: 37.008, l: "A", a: 0},
{o: 37.008, f: 51.316, l: "C", a: 1},
{o: 51.316, f: 62.892, l: "B", a: 0},
{o: 62.892, f: 72.636, l: "B", a: 1},
{o: 72.636, f: 91.484, l: "A", a: 0},
{o: 91.484, f: 108.288, l: "C", a: 1},
{o: 108.288, f: 127.12, l: "C", a: 0},
{o: 127.12, f: 143.936, l: "C", a: 1},
{o: 143.936, f: 156.652, l: "C", a: 0},
{o: 156.652, f: 179.348, l: "E", a: 1},
{o: 179.348, f: 201.128, l: "F", a: 0},
{o: 201.128, f: 219.304, l: "G", a: 1},
{o: 219.304, f: 234.496, l: "H", a: 0},
{o: 234.496, f: 240.412, l: "I", a: 1}],
[{o: 0.44, f: 14.773, l: "6", a: 0},
{o: 14.773, f: 36.107, l: "2", a: 1},
{o: 36.107, f: 72.88, l: "1", a: 0},
{o: 72.88, f: 91.493, l: "2", a: 1},
{o: 91.493, f: 105.573, l: "1", a: 0},
{o: 105.573, f: 112.827, l: "3", a: 1},
{o: 112.827, f: 120.107, l: "5", a: 0},
{o: 120.107, f: 126.453, l: "4", a: 1},
{o: 126.453, f: 133.28, l: "5", a: 0},
{o: 133.28, f: 141.893, l: "4", a: 1},
{o: 141.893, f: 157.333, l: "1", a: 0},
{o: 157.333, f: 174.587, l: "2", a: 1},
{o: 174.587, f: 231.787, l: "3", a: 0},
{o: 231.787, f: 239.973, l: "7", a: 1},
{o: 239.973, f: 243.72, l: "8", a: 0}],
[{o: 0, f: 18.625, l: "a", a: 0},
{o: 18.625, f: 59.6, l: "b", a: 1},
{o: 59.6, f: 107.28, l: "b", a: 0},
{o: 107.28, f: 175.075, l: "c", a: 1},
{o: 175.075, f: 207.855, l: "d", a: 0},
{o: 207.855, f: 243.615, l: "d", a: 1}],
[{o: 0, f: 21.827, l: "n1", a: 0},
{o: 21.827, f: 38.174, l: "A", a: 1},
{o: 38.174, f: 45.43, l: "n2", a: 0},
{o: 45.43, f: 58.154, l: "C", a: 1},
{o: 58.154, f: 72.667, l: "D", a: 0},
{o: 72.667, f: 90.836, l: "A", a: 1},
{o: 90.836, f: 105.825, l: "D", a: 0},
{o: 105.825, f: 122.172, l: "B", a: 1},
{o: 122.172, f: 143.511, l: "n6", a: 0},
{o: 143.511, f: 156.224, l: "C", a: 1},
{o: 156.224, f: 172.571, l: "A", a: 0},
{o: 172.571, f: 189.37, l: "n7", a: 1},
{o: 189.37, f: 205.706, l: "B", a: 0},
{o: 205.706, f: 222.052, l: "n8", a: 1},
{o: 222.052, f: 238.411, l: "B", a: 0},
{o: 238.411, f: 244.135, l: "n9", a: 1}],
[{o: 0, f: 0.324, l: "E", a: 0},
{o: 0.324, f: 11.116, l: "D", a: 1},
{o: 11.116, f: 39.736, l: "A", a: 0},
{o: 39.736, f: 70.824, l: "C", a: 1},
{o: 70.824, f: 92.628, l: "A", a: 0},
{o: 92.628, f: 105.796, l: "C", a: 1},
{o: 105.796, f: 128.028, l: "B", a: 0},
{o: 128.028, f: 158.02, l: "C", a: 1},
{o: 158.02, f: 174.804, l: "A", a: 0},
{o: 174.804, f: 240.412, l: "B", a: 1},
{o: 240.412, f: 244.173, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001260.ogg";

var artist = "Kodo";

var track = "Kashira";
