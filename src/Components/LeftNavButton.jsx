import "../stylesheets/leftNav.css";

// import React, { useState } from "react";

const LeftNavButton = (props) => {
	// const [active, setActive] = useState(navPages[0]);

	const flexSeperator = <div className="flexSeperator" />;

	return (
		<>
			{props.page === "Account" ? flexSeperator : null}

			<button
				className="leftNavButton"
				onClick={() => {
					console.log(`clicked ${props.page}`);
				}}
			>
				<img
					className="leftNavIcon"
					src={require(`../images/vscode-default-icons/${props.page}.svg`).default}
					alt={props.page}
				/>
			</button>
		</>
	);
};

export default LeftNavButton;
