import {Redirect, Route, useLocation} from "react-router-dom";
import useUser from "../../hooks/useUser";
import _ from 'lodash'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, roles, ...props }) => {
	const user = useUser()
	const location = useLocation() //numeta, po login kur norejo nueiti user.


	//cia yra hoc componentas
	//--? jei yra tai daryk tai (grazina reiksme arba null) _.intersection yra metodas is lodash
	// pirmas tikrina ar turi role, jei false, tai tikrina ar user prisijunges
	// && jei kaireje true tai desines nebeziuri
	//cia uzrakiname linkus su privateroute
	const authorized = roles ? !!_.intersection(user?.roles, roles).length : !!user

	return (
		//padave visus likusius props i route
		<Route {...props}>
			{
				authorized ? children : (
					<Redirect
						to={{
							pathname: '/login',
							state: {
								from: location
							}
						}}
					/>
				)
			}
		</Route>
	)
}
