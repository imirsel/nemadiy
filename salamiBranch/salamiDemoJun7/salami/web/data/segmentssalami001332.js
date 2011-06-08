var data = [
[{o: 0.325, f: 27.437, l: "A", a: 0},
{o: 27.437, f: 65.981, l: "B", a: 1},
{o: 65.981, f: 86.421, l: "C", a: 0},
{o: 86.421, f: 124.749, l: "B", a: 1},
{o: 124.749, f: 143.941, l: "C", a: 0},
{o: 143.941, f: 182.438, l: "D", a: 1},
{o: 182.438, f: 220.038, l: "C", a: 0}],
[{o: 0.2, f: 3.16, l: "B", a: 0},
{o: 3.16, f: 8.792, l: "A", a: 1},
{o: 8.792, f: 17.584, l: "A", a: 0},
{o: 17.584, f: 26.084, l: "A", a: 1},
{o: 26.084, f: 39.66, l: "A", a: 0},
{o: 39.66, f: 45.9, l: "A", a: 1},
{o: 45.9, f: 58.064, l: "A", a: 0},
{o: 58.064, f: 65.416, l: "A", a: 1},
{o: 65.416, f: 74.492, l: "A", a: 0},
{o: 74.492, f: 83.824, l: "A", a: 1},
{o: 83.824, f: 97.936, l: "A", a: 0},
{o: 97.936, f: 104.164, l: "A", a: 1},
{o: 104.164, f: 119.172, l: "A", a: 0},
{o: 119.172, f: 133.012, l: "A", a: 1},
{o: 133.012, f: 144.352, l: "A", a: 0},
{o: 144.352, f: 149.984, l: "A", a: 1},
{o: 149.984, f: 161.864, l: "A", a: 0},
{o: 161.864, f: 170.9, l: "A", a: 1},
{o: 170.9, f: 181.38, l: "A", a: 0},
{o: 181.38, f: 191.272, l: "A", a: 1},
{o: 191.272, f: 198.068, l: "A", a: 0},
{o: 198.068, f: 202.6, l: "A", a: 1},
{o: 202.6, f: 211.964, l: "A", a: 0}],
[{o: 0.2, f: 3.16, l: "E", a: 0},
{o: 3.16, f: 8.792, l: "F", a: 1},
{o: 8.792, f: 17.584, l: "G", a: 0},
{o: 17.584, f: 26.084, l: "H", a: 1},
{o: 26.084, f: 39.66, l: "C", a: 0},
{o: 39.66, f: 45.9, l: "C", a: 1},
{o: 45.9, f: 58.064, l: "C", a: 0},
{o: 58.064, f: 65.416, l: "C", a: 1},
{o: 65.416, f: 74.492, l: "B", a: 0},
{o: 74.492, f: 83.824, l: "B", a: 1},
{o: 83.824, f: 97.936, l: "C", a: 0},
{o: 97.936, f: 104.164, l: "B", a: 1},
{o: 104.164, f: 119.172, l: "B", a: 0},
{o: 119.172, f: 133.012, l: "B", a: 1},
{o: 133.012, f: 144.352, l: "B", a: 0},
{o: 144.352, f: 149.984, l: "A", a: 1},
{o: 149.984, f: 161.864, l: "A", a: 0},
{o: 161.864, f: 170.9, l: "I", a: 1},
{o: 170.9, f: 181.38, l: "J", a: 0},
{o: 181.38, f: 191.272, l: "D", a: 1},
{o: 191.272, f: 198.068, l: "D", a: 0},
{o: 198.068, f: 202.6, l: "D", a: 1},
{o: 202.6, f: 211.964, l: "K", a: 0}],
[{o: 0.893, f: 7.387, l: "8", a: 0},
{o: 7.387, f: 14.68, l: "7", a: 1},
{o: 14.68, f: 32.307, l: "4", a: 0},
{o: 32.307, f: 60.613, l: "2", a: 1},
{o: 60.613, f: 83.813, l: "1", a: 0},
{o: 83.813, f: 117.76, l: "2", a: 1},
{o: 117.76, f: 143.76, l: "1", a: 0},
{o: 143.76, f: 151.68, l: "6", a: 1},
{o: 151.68, f: 182.787, l: "3", a: 0},
{o: 182.787, f: 209.44, l: "1", a: 1},
{o: 209.44, f: 220.013, l: "5", a: 0}],
[{o: 0, f: 26.82, l: "a", a: 0},
{o: 26.82, f: 43.955, l: "b", a: 1},
{o: 43.955, f: 62.58, l: "b", a: 0},
{o: 62.58, f: 85.675, l: "c", a: 1},
{o: 85.675, f: 102.81, l: "b", a: 0},
{o: 102.81, f: 121.435, l: "b", a: 1},
{o: 121.435, f: 144.53, l: "c", a: 0},
{o: 144.53, f: 162.41, l: "d", a: 1},
{o: 162.41, f: 181.035, l: "d", a: 0},
{o: 181.035, f: 219.775, l: "e", a: 1}],
[{o: 0, f: 18.46, l: "n1", a: 0},
{o: 18.46, f: 27.516, l: "A", a: 1},
{o: 27.516, f: 36.583, l: "A", a: 0},
{o: 36.583, f: 45.639, l: "A", a: 1},
{o: 45.639, f: 54.706, l: "A", a: 0},
{o: 54.706, f: 63.762, l: "A", a: 1},
{o: 63.762, f: 86.378, l: "C", a: 0},
{o: 86.378, f: 95.422, l: "A", a: 1},
{o: 95.422, f: 104.478, l: "A", a: 0},
{o: 104.478, f: 113.244, l: "A", a: 1},
{o: 113.244, f: 122.601, l: "A", a: 0},
{o: 122.601, f: 144.115, l: "C", a: 1},
{o: 144.115, f: 153.403, l: "B", a: 0},
{o: 153.403, f: 162.482, l: "B", a: 1},
{o: 162.482, f: 171.514, l: "B", a: 0},
{o: 171.514, f: 180.582, l: "B", a: 1},
{o: 180.582, f: 219.986, l: "n5", a: 0}],
[{o: 0, f: 0.2, l: "G", a: 0},
{o: 0.2, f: 11.636, l: "E", a: 1},
{o: 11.636, f: 24.948, l: "B", a: 0},
{o: 24.948, f: 69.964, l: "C", a: 1},
{o: 69.964, f: 86.068, l: "F", a: 0},
{o: 86.068, f: 100.208, l: "C", a: 1},
{o: 100.208, f: 128.76, l: "B", a: 0},
{o: 128.76, f: 169.232, l: "F", a: 1},
{o: 169.232, f: 185.332, l: "E", a: 0},
{o: 185.332, f: 212.236, l: "A", a: 1},
{o: 212.236, f: 220.109, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001332.ogg";