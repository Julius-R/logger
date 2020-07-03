import React from 'react';

export default function Log(props) {
	const colorChoice = (val) => {
		if (val === 'High') {
			return 'text-red-800';
		} else if (val === 'Medium') {
			return 'text-yellow-500';
		} else {
			return 'text-black';
		}
	};
	return (
		<tr>
			<td className="border px-4 py-2">{props.log.issueType}</td>
			<td className="border px-4 py-2">{props.log.description}</td>
			<td
				className={`${colorChoice(
					props.log.importance
				)} border px-4 py-2`}
			>
				{props.log.importance}
			</td>
			<td className="border px-4 py-2">{props.log.created}</td>
			<td className="border px-4 py-2 text-blue-500 cursor-pointer">
				Edit
			</td>
			<td className="border px-4 py-2">
				<button class="btn bg-red-400 text-white rounded py-2 px-4">
					Delete
				</button>
			</td>
		</tr>
	);
}
