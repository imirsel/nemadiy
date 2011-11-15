var data = [
[{o: 0.506, f: 13.035, l: "I", a: 0},
{o: 13.035, f: 37.597, l: "C", a: 1},
{o: 37.597, f: 62.293, l: "C", a: 0},
{o: 62.293, f: 87.239, l: "C", a: 1},
{o: 87.239, f: 111.95, l: "C", a: 0},
{o: 111.95, f: 136.806, l: "C", a: 1},
{o: 136.806, f: 179.444, l: "C", a: 0}],
[{o: 0.236, f: 7.38, l: "A", a: 0},
{o: 7.38, f: 22.3, l: "C", a: 1},
{o: 22.3, f: 34.116, l: "C", a: 0},
{o: 34.116, f: 44.292, l: "C", a: 1},
{o: 44.292, f: 60.8, l: "C", a: 0},
{o: 60.8, f: 82.004, l: "C", a: 1},
{o: 82.004, f: 94.304, l: "C", a: 0},
{o: 94.304, f: 110.92, l: "C", a: 1},
{o: 110.92, f: 120.208, l: "A", a: 0},
{o: 120.208, f: 135.248, l: "C", a: 1},
{o: 135.248, f: 143.524, l: "C", a: 0},
{o: 143.524, f: 156.292, l: "A", a: 1},
{o: 156.292, f: 164.84, l: "C", a: 0},
{o: 164.84, f: 173.684, l: "A", a: 1}],
[{o: 0.236, f: 7.38, l: "A", a: 0},
{o: 7.38, f: 22.3, l: "C", a: 1},
{o: 22.3, f: 34.116, l: "B", a: 0},
{o: 34.116, f: 44.292, l: "D", a: 1},
{o: 44.292, f: 60.8, l: "B", a: 0},
{o: 60.8, f: 82.004, l: "B", a: 1},
{o: 82.004, f: 94.304, l: "B", a: 0},
{o: 94.304, f: 110.92, l: "B", a: 1},
{o: 110.92, f: 120.208, l: "A", a: 0},
{o: 120.208, f: 135.248, l: "E", a: 1},
{o: 135.248, f: 143.524, l: "F", a: 0},
{o: 143.524, f: 156.292, l: "A", a: 1},
{o: 156.292, f: 164.84, l: "G", a: 0},
{o: 164.84, f: 173.684, l: "A", a: 1}],
[{o: 0.68, f: 5.053, l: "8", a: 0},
{o: 5.053, f: 10.707, l: "7", a: 1},
{o: 10.707, f: 27.133, l: "1", a: 0},
{o: 27.133, f: 33.28, l: "2", a: 1},
{o: 33.28, f: 52.8, l: "1", a: 0},
{o: 52.8, f: 57.947, l: "2", a: 1},
{o: 57.947, f: 68.28, l: "1", a: 0},
{o: 68.28, f: 83.32, l: "2", a: 1},
{o: 83.32, f: 100.893, l: "1", a: 0},
{o: 100.893, f: 106.08, l: "3", a: 1},
{o: 106.08, f: 111.213, l: "2", a: 0},
{o: 111.213, f: 115.84, l: "1", a: 1},
{o: 115.84, f: 132.4, l: "2", a: 0},
{o: 132.4, f: 140.693, l: "1", a: 1},
{o: 140.693, f: 145.88, l: "3", a: 0},
{o: 145.88, f: 155.293, l: "1", a: 1},
{o: 155.293, f: 164.107, l: "4", a: 0},
{o: 164.107, f: 171.4, l: "5", a: 1},
{o: 171.4, f: 177.747, l: "6", a: 0}],
[{o: 0, f: 23.84, l: "a", a: 0},
{o: 23.84, f: 37.995, l: "b", a: 1},
{o: 37.995, f: 61.09, l: "a", a: 0},
{o: 61.09, f: 87.91, l: "a", a: 1},
{o: 87.91, f: 110.26, l: "a", a: 0},
{o: 110.26, f: 137.08, l: "a", a: 1},
{o: 137.08, f: 178.8, l: "c", a: 0}],
[{o: 0, f: 10.995, l: "n1", a: 0},
{o: 10.995, f: 35.631, l: "A", a: 1},
{o: 35.631, f: 60.302, l: "A", a: 0},
{o: 60.302, f: 80.98, l: "A", a: 1},
{o: 80.98, f: 87.319, l: "n4", a: 0},
{o: 87.319, f: 101.82, l: "A", a: 1},
{o: 101.82, f: 109.946, l: "n5", a: 0},
{o: 109.946, f: 134.757, l: "A", a: 1},
{o: 134.757, f: 155.353, l: "A", a: 0},
{o: 155.353, f: 179.119, l: "n7", a: 1}],
[{o: 0, f: 0.236, l: "H", a: 0},
{o: 0.236, f: 30.48, l: "B", a: 1},
{o: 30.48, f: 112.476, l: "C", a: 0},
{o: 112.476, f: 143.024, l: "G", a: 1},
{o: 143.024, f: 173.684, l: "E", a: 0},
{o: 173.684, f: 179.436, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000442.ogg";

var artist = "Mahalia Jackson";

var track = "To Me It s So Wonderful";
