import Card from "./components/card";
const App = () => {
  const jobs = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4zFEszrwjQU1F97cIIJ6nZXSnsVSYorM81q05EqFvA&s=10",
      companyName: "Google",
      timePeriod: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Remote",
      pay: "$45/hour",
      place: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
      companyName: "Microsoft",
      timePeriod: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$40/hour",
      place: "Bangalore, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsJcIJcNnsiHryqYsdrhFw_O0KWrATt0bUE2zvKa9_g&s=10",
      companyName: "Amazon",
      timePeriod: "3 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Remote",
      pay: "$30/hour",
      place: "Delhi, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6edJoXHavkBwpG6xCJpgdB1Las2yvu88BWCib0Iz8aQ&s=10",
      companyName: "IBM",
      timePeriod: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$35/hour",
      place: "Hyderabad, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDZfQFgkOx0fkvr7xATdrEQfiBSLGMSkLX4C6few5AA&s=10",
      companyName: "Meta",
      timePeriod: "10 weeks ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Remote",
      pay: "$38/hour",
      place: "Pune, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNfnUfm4hCEi0whSqUza5bDXv-RjIt-D_9SK-mzlGDg&s=10",
      companyName: "Netflix",
      timePeriod: "4 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$32/hour",
      place: "Chennai, India",
    },
  ];
  return (
    <div className="parent">
      {jobs.map(function (elem,indx) {

        return <div key={indx}>
          <Card brandLogo={elem.brandLogo} companyName={elem.companyName} timePeriod={elem.timePeriod}
          post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} place={elem.place}/>
        </div>
        
      })}
    </div>
  );
};

export default App;
