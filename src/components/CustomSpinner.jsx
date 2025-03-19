import { Spinner } from "@material-tailwind/react";

const CustomSpinner = () => {
    return <div className="spinner-container">
        <Spinner color="amber" className="spinner h-16 w-16 text-amber-200" />
    </div>;
  }

export default CustomSpinner;