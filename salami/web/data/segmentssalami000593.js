var data = [
[{o: 0.112, f: 4.823, l: "I", a: 0},
{o: 4.823, f: 46.042, l: "A", a: 1},
{o: 46.042, f: 88.913, l: "A", a: 0},
{o: 88.913, f: 126.1, l: "D", a: 1},
{o: 126.1, f: 177.686, l: "A", a: 0}],
[{o: 0.084, f: 9.428, l: "A", a: 0},
{o: 9.428, f: 21.004, l: "A", a: 1},
{o: 21.004, f: 36.916, l: "A", a: 0},
{o: 36.916, f: 46.028, l: "A", a: 1},
{o: 46.028, f: 60.144, l: "A", a: 0},
{o: 60.144, f: 74.856, l: "A", a: 1},
{o: 74.856, f: 86.792, l: "A", a: 0},
{o: 86.792, f: 96.136, l: "E", a: 1},
{o: 96.136, f: 105.164, l: "E", a: 0},
{o: 105.164, f: 113.408, l: "E", a: 1},
{o: 113.408, f: 124.232, l: "E", a: 0},
{o: 124.232, f: 140.292, l: "A", a: 1},
{o: 140.292, f: 146.392, l: "A", a: 0},
{o: 146.392, f: 155.088, l: "A", a: 1},
{o: 155.088, f: 167.124, l: "A", a: 0},
{o: 167.124, f: 177.64, l: "A", a: 1}],
[{o: 0.084, f: 9.428, l: "A", a: 0},
{o: 9.428, f: 21.004, l: "B", a: 1},
{o: 21.004, f: 36.916, l: "B", a: 0},
{o: 36.916, f: 46.028, l: "A", a: 1},
{o: 46.028, f: 60.144, l: "C", a: 0},
{o: 60.144, f: 74.856, l: "B", a: 1},
{o: 74.856, f: 86.792, l: "D", a: 0},
{o: 86.792, f: 96.136, l: "E", a: 1},
{o: 96.136, f: 105.164, l: "E", a: 0},
{o: 105.164, f: 113.408, l: "E", a: 1},
{o: 113.408, f: 124.232, l: "E", a: 0},
{o: 124.232, f: 140.292, l: "C", a: 1},
{o: 140.292, f: 146.392, l: "F", a: 0},
{o: 146.392, f: 155.088, l: "B", a: 1},
{o: 155.088, f: 167.124, l: "G", a: 0},
{o: 167.124, f: 177.64, l: "H", a: 1}],
[{o: 0.467, f: 5.573, l: "3", a: 0},
{o: 5.573, f: 12.053, l: "2", a: 1},
{o: 12.053, f: 17.573, l: "1", a: 0},
{o: 17.573, f: 24.72, l: "4", a: 1},
{o: 24.72, f: 36.093, l: "1", a: 0},
{o: 36.093, f: 46.187, l: "3", a: 1},
{o: 46.187, f: 51.547, l: "2", a: 0},
{o: 51.547, f: 81.867, l: "1", a: 1},
{o: 81.867, f: 91.427, l: "4", a: 0},
{o: 91.427, f: 97.453, l: "6", a: 1},
{o: 97.453, f: 102.627, l: "2", a: 0},
{o: 102.627, f: 114.88, l: "5", a: 1},
{o: 114.88, f: 120.8, l: "2", a: 0},
{o: 120.8, f: 126.427, l: "3", a: 1},
{o: 126.427, f: 134.453, l: "2", a: 0},
{o: 134.453, f: 140.187, l: "7", a: 1},
{o: 140.187, f: 161.773, l: "1", a: 0},
{o: 161.773, f: 166.653, l: "3", a: 1},
{o: 166.653, f: 174.027, l: "4", a: 0},
{o: 174.027, f: 177.587, l: "8", a: 1}],
[{o: 0, f: 14.9, l: "a", a: 0},
{o: 14.9, f: 33.525, l: "b", a: 1},
{o: 33.525, f: 41.72, l: "c", a: 0},
{o: 41.72, f: 58.11, l: "a", a: 1},
{o: 58.11, f: 87.165, l: "b", a: 0},
{o: 87.165, f: 139.315, l: "d", a: 1},
{o: 139.315, f: 159.43, l: "b", a: 0},
{o: 159.43, f: 177.31, l: "e", a: 1}],
[{o: 0, f: 14.571, l: "n1", a: 0},
{o: 14.571, f: 25.507, l: "A", a: 1},
{o: 25.507, f: 40.136, l: "n2", a: 0},
{o: 40.136, f: 58.038, l: "B", a: 1},
{o: 58.038, f: 68.418, l: "A", a: 0},
{o: 68.418, f: 121.15, l: "n4", a: 1},
{o: 121.15, f: 135.082, l: "B", a: 0},
{o: 135.082, f: 165.326, l: "n5", a: 1},
{o: 165.326, f: 177.633, l: "A", a: 0}],
[{o: 0, f: 0.084, l: "J", a: 0},
{o: 0.084, f: 16.264, l: "H", a: 1},
{o: 16.264, f: 29.864, l: "E", a: 0},
{o: 29.864, f: 41.048, l: "B", a: 1},
{o: 41.048, f: 49.732, l: "H", a: 0},
{o: 49.732, f: 63.836, l: "I", a: 1},
{o: 63.836, f: 75.78, l: "E", a: 0},
{o: 75.78, f: 87.544, l: "B", a: 1},
{o: 87.544, f: 97.4, l: "F", a: 0},
{o: 97.4, f: 105.524, l: "H", a: 1},
{o: 105.524, f: 120.516, l: "A", a: 0},
{o: 120.516, f: 133.044, l: "H", a: 1},
{o: 133.044, f: 144.144, l: "I", a: 0},
{o: 144.144, f: 156.32, l: "E", a: 1},
{o: 156.32, f: 165.14, l: "B", a: 0},
{o: 165.14, f: 177.64, l: "I", a: 1},
{o: 177.64, f: 177.686, l: "J", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000593.ogg";

var artist = "Compilations";

var track = "Kali Sara";
