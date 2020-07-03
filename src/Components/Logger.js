import React from 'react';
import Log from './Log';

const logs = [
	{
		issueType: 'Hardware',
		description: 'User states monitor is not turning on',
		importance: 'Medium',
		created: '06/28/2020',
		isCompleted: false,
	},
	{
		issueType: 'Software',
		description: 'User claims IE is not opening',
		importance: 'Low',
		created: '07/01/2020',
		isCompleted: false,
	},
	{
		issueType: 'Hardware',
		description: 'User states that smoke cna be seen coming from PC',
		importance: 'High',
		created: '07/02/2020',
		isCompleted: false,
	},
];

export default function Logger() {
	return (
		<section className="w-full container m-auto">
			<table className="table-auto m-auto">
				<thead>
					<tr className="text-left">
						<th className="px-4 py-2">Title</th>
						<th className="px-4 py-2">Description</th>
						<th className="px-4 py-2">Importance</th>
						<th className="px-4 py-2">Created</th>
						<th className="px-4 py-2">Edit</th>
						<th className="px-4 py-2">Delete</th>
					</tr>
				</thead>
				<tbody>
					{logs.map((log) => {
						return <Log log={log} />;
					})}
				</tbody>
			</table>
		</section>
	);
}
