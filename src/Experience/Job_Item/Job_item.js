const Job_item = (props) => {
  let companyName;
  if (props.company == 'wepeoples') {
    companyName = (
      <p className="text-left lg:text-center font-bold text-green-700">
        We Peoples
      </p>
    );
  }

  return (
    <div className="w-3/4 lg:w-1/2 mx-auto grid grid-flow-row lg:grid-flow-col  lg:gap-4 pt-8">
      <div className="grid content-center row-span-1">
        <img
          className="w-24 lg:w-32"
          src={props.logo}
          alt={props.logoAltText}
        />
        {companyName}
        <p className="py-2 text-gray-500 text-left ">{props.jobPeriod}</p>
      </div>
      <div>
        <div className="text-left font-bold text-xl py-2">{props.jobTitle}</div>
        <div className="job-description text-left"> {props.jobDescription}</div>
        <p className="text-left">Location: {props.jobLocation}</p>
      </div>
    </div>
  );
};

export default Job_item;
