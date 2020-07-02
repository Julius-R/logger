import React from 'react';
import Log from './Log';

export default function Logger() {
	return (
		<section className="w-full container m-auto">
			<table className="table-auto">
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
					<Log />
					<Log />
					<Log />
					<Log />
				</tbody>
			</table>
		</section>
	);
}
