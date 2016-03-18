var scales = {};
scales['Acoustic scale'] = ['1', '2', '3', '♯4', '5', '6', '♭7'];
scales['Aeolian mode or natural minor scale'] = ['1', '2', '♭3', '4', '5', '♭6', '♭7'];
scales['Algerian scale'] = ['1', '2', '♭3', '♯4', '5', '♭6', '7'];
scales['Altered scale'] = ['1', '♭2', '♭3', '♭4', '♭5', '♭6', '♭7'];
scales['Augmented scale'] = ['1', '♭3', '3', '5', '♯5', '7'];
scales['Bebop dominant scale'] = ['1', '2', '3', '4', '5', '6', '♭7', '7'];
scales['Blues scale'] = ['1', '♭3', '4', '♯4', '5', '♭7'];
scales['Chromatic scale'] = ['1', '♯1', '2', '♯2', '3', '4', '♯4', '5', '♯5', '6', '♯6', '7', '♭7', '6', '♭6', '5', '♭5', '4', '3', '♭3', '2', '♭2', '1'];
scales['Dorian mode'] = ['1', '2', '♭3', '4', '5', '6', '♭7'];
scales['Double harmonic scale'] = ['1', '♭2', '3', '4', '5', '♭6', '7'];
scales['Enigmatic scale'] = ['1', '♭2', '3', '♯4', '♯5', '♯6', '7'];
scales['Flamenco mode'] = ['1', '♭2', '3', '4', '5', '♭6', '7'];
scales['"Gypsy" scale'] = ['1', '2', '♭3', '♯4', '5', '♭6', '♭7'];
scales['Half diminished scale'] = ['1', '2', '♭3', '4', '♭5', '♭6', '♭7'];
scales['Harmonic major scale'] = ['1', '2', '3', '4', '5', '♭6', '7'];
scales['Harmonic minor scale'] = ['1', '2', '♭3', '4', '5', '♭6', '7'];
scales['Hirajoshi scale'] = ['1', '2', '♭3', '5', '♭6'];
scales['Hungarian "Gypsy" scale'] = ['1', '2', '♭3', '♯4', '5', '♭6', '7'];
scales['Hungarian minor scale'] = ['1', '2', '♭3', '♯4', '5', '♭6', '7'];
scales['In scale'] = ['1', '♭2', '4', '5', '♭6'];
scales['Insen scale'] = ['1', '♭2', '4', '5', '♭7'];
scales['Ionian mode or major scale'] = ['1', '2', '3', '4', '5', '6', '7'];
scales['Istrian scale'] = ['1', '♭2', '♭3', '♭4', '♭5', '5'];
scales['Iwato scale'] = ['1', '♭2', '4', '♭5', '♭7'];
scales['Locrian mode'] = ['1', '♭2', '♭3', '4', '♭5', '♭6', '♭7'];
scales['Lydian augmented scale'] = ['1', '2', '3', '♯4', '♯5', '6', '7'];
scales['Lydian mode'] = ['1', '2', '3', '♯4', '5', '6', '7'];
scales['Major bebop scale'] = ['1', '2', '3', '4', '5', '♭6', '6', '7'];
scales['Major Locrian scale'] = ['1', '2', '3', '4', '♭5', '♭6', '♭7'];
scales['Major pentatonic scale'] = ['1', '2', '3', '5', '6'];
scales['Melodic minor scale'] = ['1', '2', '♭3', '4', '5', '6', '7', '8', '♭7', '♭6', '5', '4', '♭3', '2', '1'];
scales['Melodic minor scale (ascending)'] = ['1', '2', '♭3', '4', '5', '6', '7'];
scales['Minor pentatonic scale'] = ['1', '♭3', '4', '5', '♭7'];
scales['Mixolydian mode or Adonai malakh mode'] = ['1', '2', '3', '4', '5', '6', '♭7'];
scales['Neapolitan major scale'] = ['1', '♭2', '♭3', '4', '5', '6', '7'];
scales['Neapolitan minor scale'] = ['1', '♭2', '♭3', '4', '5', '♭6', '7'];
scales['Octatonic scale'] = ['1', '2', '♭3', '4', '♭5', '♭6', '6', '7', '1', '♭2', '♭3', '3', '♯4', '5', '6', '♭7'];
scales['Persian scale'] = ['1', '♭2', '3', '4', '♭5', '♭6', '7'];
scales['Phrygian dominant scale'] = ['1', '♭2', '3', '4', '5', '♭6', '♭7'];
scales['Phrygian mode'] = ['1', '♭2', '♭3', '4', '5', '♭6', '♭7'];
scales['Prometheus scale'] = ['1', '2', '3', '♯4', '6', '♭7'];
scales['Quarter tone scale'] = ['1', '1', '♯1', '1', '2', '2', '♯2', '2', '3', '3', '4', '4', '♯4', '4', '5', '5', '♯5', '5', '6', '6', '♯6', '6', '7', '7', '8', '7', '7', '♭7', '7', '6', '6', '♭6', '6', '5', '5', '♭5', '5', '4', '4', '3', '3', '♭3', '3', '2', '2', '♭2', '2', '1'];
scales['Tritone scale'] = ['1', '♭2', '3', '♭5', '5', '♭7'];
scales['Ukrainian Dorian scale'] = ['1', '2', '♭3', '♯4', '5', '6', '♭7'];
scales['Whole tone scale'] = ['1', '2', '3', '♯4', '♯5', '♯6'];
scales['Yo scale'] = ['1', '♭3', '4', '5', '7'];

var degrees2halfsteps = {};
degrees2halfsteps['1'] = 0;
degrees2halfsteps['♯1'] = 1;
degrees2halfsteps['♭2'] = 1;
degrees2halfsteps['2'] = 2;
degrees2halfsteps['♯2'] = 3;
degrees2halfsteps['♭3'] = 3;
degrees2halfsteps['3'] = 4;
degrees2halfsteps['4'] = 5;
degrees2halfsteps['♯4'] = 6;
degrees2halfsteps['♭5'] = 6;
degrees2halfsteps['5'] = 7;
degrees2halfsteps['♯5'] = 8;
degrees2halfsteps['♭6'] = 8;
degrees2halfsteps['6'] = 9;
degrees2halfsteps['♯6'] = 10;
degrees2halfsteps['♭7'] = 10;
degrees2halfsteps['7'] = 11;
degrees2halfsteps['8'] = 0;