var data = [
[{o: 0.139, f: 5.41, l: "A", a: 0},
{o: 5.41, f: 15.581, l: "B", a: 1},
{o: 15.581, f: 25.983, l: "C", a: 0},
{o: 25.983, f: 31.045, l: "D", a: 1},
{o: 31.045, f: 41.583, l: "C", a: 0},
{o: 41.583, f: 51.733, l: "D", a: 1},
{o: 51.733, f: 62.009, l: "C", a: 0},
{o: 62.009, f: 67.272, l: "D", a: 1},
{o: 67.272, f: 88.013, l: "E", a: 0},
{o: 88.013, f: 98.093, l: "B", a: 1},
{o: 98.093, f: 108.558, l: "C", a: 0},
{o: 108.558, f: 113.773, l: "D", a: 1},
{o: 113.773, f: 124.018, l: "C", a: 0},
{o: 124.018, f: 134.292, l: "D", a: 1},
{o: 134.292, f: 144.632, l: "C", a: 0},
{o: 144.632, f: 149.704, l: "D", a: 1},
{o: 149.704, f: 170.478, l: "C", a: 0},
{o: 170.478, f: 185.469, l: "B", a: 1}],
[{o: 0.108, f: 9.456, l: "C", a: 0},
{o: 9.456, f: 15.596, l: "D", a: 1},
{o: 15.596, f: 25.6, l: "B", a: 0},
{o: 25.6, f: 31.08, l: "B", a: 1},
{o: 31.08, f: 44.956, l: "B", a: 0},
{o: 44.956, f: 51.724, l: "A", a: 1},
{o: 51.724, f: 60.444, l: "B", a: 0},
{o: 60.444, f: 66.228, l: "B", a: 1},
{o: 66.228, f: 78.204, l: "B", a: 0},
{o: 78.204, f: 85.928, l: "B", a: 1},
{o: 85.928, f: 98.18, l: "A", a: 0},
{o: 98.18, f: 107.216, l: "B", a: 1},
{o: 107.216, f: 114.948, l: "B", a: 0},
{o: 114.948, f: 125.58, l: "B", a: 1},
{o: 125.58, f: 134.304, l: "E", a: 0},
{o: 134.304, f: 141.724, l: "B", a: 1},
{o: 141.724, f: 150.108, l: "F", a: 0},
{o: 150.108, f: 158.824, l: "B", a: 1},
{o: 158.824, f: 171.084, l: "G", a: 0},
{o: 171.084, f: 181.744, l: "H", a: 1}],
[{o: 0.108, f: 9.456, l: "A", a: 0},
{o: 9.456, f: 15.596, l: "E", a: 1},
{o: 15.596, f: 25.6, l: "B", a: 0},
{o: 25.6, f: 31.08, l: "F", a: 1},
{o: 31.08, f: 44.956, l: "D", a: 0},
{o: 44.956, f: 51.724, l: "G", a: 1},
{o: 51.724, f: 60.444, l: "C", a: 0},
{o: 60.444, f: 66.228, l: "H", a: 1},
{o: 66.228, f: 78.204, l: "C", a: 0},
{o: 78.204, f: 85.928, l: "C", a: 1},
{o: 85.928, f: 98.18, l: "I", a: 0},
{o: 98.18, f: 107.216, l: "B", a: 1},
{o: 107.216, f: 114.948, l: "D", a: 0},
{o: 114.948, f: 125.58, l: "B", a: 1},
{o: 125.58, f: 134.304, l: "J", a: 0},
{o: 134.304, f: 141.724, l: "C", a: 1},
{o: 141.724, f: 150.108, l: "K", a: 0},
{o: 150.108, f: 158.824, l: "C", a: 1},
{o: 158.824, f: 171.084, l: "L", a: 0},
{o: 171.084, f: 181.744, l: "M", a: 1}],
[{o: 0.76, f: 3.72, l: "8", a: 0},
{o: 3.72, f: 15.933, l: "5", a: 1},
{o: 15.933, f: 41.093, l: "1", a: 0},
{o: 41.093, f: 52.067, l: "3", a: 1},
{o: 52.067, f: 61.093, l: "4", a: 0},
{o: 61.093, f: 85.613, l: "2", a: 1},
{o: 85.613, f: 97.867, l: "3", a: 0},
{o: 97.867, f: 123.027, l: "1", a: 1},
{o: 123.027, f: 134, l: "3", a: 0},
{o: 134, f: 143.667, l: "4", a: 1},
{o: 143.667, f: 168.853, l: "2", a: 0},
{o: 168.853, f: 178.52, l: "6", a: 1},
{o: 178.52, f: 184.627, l: "7", a: 0}],
[{o: 0, f: 14.155, l: "a", a: 0},
{o: 14.155, f: 27.565, l: "b", a: 1},
{o: 27.565, f: 43.955, l: "b", a: 0},
{o: 43.955, f: 89.4, l: "c", a: 1},
{o: 89.4, f: 112.495, l: "a", a: 0},
{o: 112.495, f: 125.905, l: "b", a: 1},
{o: 125.905, f: 142.295, l: "b", a: 0},
{o: 142.295, f: 172.095, l: "c", a: 1},
{o: 172.095, f: 184.76, l: "d", a: 0}],
[{o: 0, f: 15.65, l: "n1", a: 0},
{o: 15.65, f: 31.126, l: "A", a: 1},
{o: 31.126, f: 44.025, l: "A", a: 0},
{o: 44.025, f: 51.757, l: "n3", a: 1},
{o: 51.757, f: 64.668, l: "A", a: 0},
{o: 64.668, f: 98.232, l: "B", a: 1},
{o: 98.232, f: 113.697, l: "A", a: 0},
{o: 113.697, f: 126.595, l: "A", a: 1},
{o: 126.595, f: 134.339, l: "n5", a: 0},
{o: 134.339, f: 147.238, l: "A", a: 1},
{o: 147.238, f: 180.767, l: "B", a: 0},
{o: 180.767, f: 185.435, l: "n6", a: 1}],
[{o: 0, f: 0.108, l: "F", a: 0},
{o: 0.108, f: 7.884, l: "E", a: 1},
{o: 7.884, f: 64.956, l: "D", a: 0},
{o: 64.956, f: 92.372, l: "C", a: 1},
{o: 92.372, f: 147.536, l: "D", a: 0},
{o: 147.536, f: 166.872, l: "C", a: 1},
{o: 166.872, f: 181.092, l: "B", a: 0},
{o: 181.092, f: 181.744, l: "A", a: 1},
{o: 181.744, f: 185.4, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000068.ogg";

var artist = "Gnarls Barkley";

var track = "Neighbors";
