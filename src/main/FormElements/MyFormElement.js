import React from 'react';
export function MyInput({ name, use = false, wn = true, width = '200px', readOnly = false,color }) {
	return (
		<div className="flex">
			{wn && (
				<b style={{ width: width ,color }} className="p-2 rounded-6 mt-2 mb-2 ">
					{use && (
						<b className="text-red" style={{ marginLeft: '-6px' }}>
							*
						</b>
					)}
					{name}:
				</b>
			)}
			<input
				type="text"
				className="w-full p-2 rounded-6 mt-2 mb-2 "
				placeholder={name}
				name={name}
				readOnly={readOnly}
				required={use}
			/>
		</div>
	);
}
export function MyInputDate({ name, use = false, wn = true, width = '200px', onInput }) {
	return (
		<div className="flex">
			{wn && (
				<b style={{ width: width }} className="p-2 rounded-6 mt-2 mb-2 ">
					{use && (
						<b className="text-red" style={{ marginLeft: '-6px' }}>
							*
						</b>
					)}
					{name}:
				</b>
			)}
			<input
				type="Date"
				className="w-full p-2 rounded-6 mt-2 mb-2 "
				placeholder={name}
				name={name}
				required={use}
				onInput={onInput}
			/>
		</div>
	);
}
export function MySelect({ name, use = false, data, wn = true, width = '200px' }) {
	return (
		<>
			<div className="flex">
				{wn && (
					<b style={{ width: width }} className="p-2 rounded-6 mt-2 mb-2 ">
						{use && (
							<b className="text-red" style={{ marginLeft: '-8px' }}>
								*
							</b>
						)}
						{name}:
					</b>
				)}
				<select className="w-full p-2 rounded-6 mt-2 mb-2" placeholder={name} name={name} required={use}>
					<option value="">{name}...</option>
					{data?.map((d, i) => (
						<option key={i}>{d.CustomerName ? d.CustomerName : d}</option>
					))}
				</select>
			</div>
		</>
	);
}
export function MyTextField({ name, use = false, wn = true, width = '200px' }) {
	return (
		<>
			<div className="flex">
				{wn && (
					<b style={{ width: width }} className="p-2 rounded-6 mt-2 mb-2 ">
						{use && (
							<b className="text-red" style={{ marginLeft: '-8px' }}>
								*
							</b>
						)}
						{name}:
					</b>
				)}
				<textarea placeholder={name} name={name} className="w-full p-2 rounded-6 mt-2 mb-2"></textarea>
			</div>
		</>
	);
}

export function MyCheck({ name }) {
	return (
		<>
			<input type="checkbox" id={name} name={name} value={name} className="p-10" />
			<label htmlFor={name} className="p-10">
				{name}
			</label>
		</>
	);
}