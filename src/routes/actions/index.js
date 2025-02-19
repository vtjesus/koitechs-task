import {redirect} from "react-router-dom";


export const appAction = async ({request}) => {
                const formData = await request.formData();
                const user = formData.get("user");

  
return redirect(user);
};
