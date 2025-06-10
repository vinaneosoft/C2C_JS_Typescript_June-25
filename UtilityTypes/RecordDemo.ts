/* You want to create an object type where you know the keys in advance, 
and each key has the same value type. */

// Create a record with string keys: "math", "science", "english"
// and number values for marks
type Subject = "math" | "science" | "english";
type Marks = Record<Subject, number>;

const studentMarks: Marks = {
  math: 90,
  science: 85,
  english: 88,
};
// equivalent to
interface MarksIntf{
  math:number;
  science:number;
  english:number;
}
const studentMarks2: MarksIntf = {
  math: 90,
  science: 85,
  english: 88,
};