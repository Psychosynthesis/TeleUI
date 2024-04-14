import { useState } from 'react';
import clsx from 'clsx';
import './style.scss';

import type { TabsProps }  from './types';

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex }) => {
	const [ currentTab, setCurrentTab ] = useState(tabs[defaultIndex ?? 0].caption);

	const tabsCaptions = tabs.map(tab =>
		<div
			className={clsx({ 'current-tab': tab.caption === currentTab, 'tab-caption': true })}
			key={`${tab.caption}-caption-key`}
			onClick={() => setCurrentTab(tab.caption)}
		>
			{ tab.caption }
		</div>
	);

	const currentTabData = tabs.find(tab => tab.caption === currentTab);
	const tabContent = currentTabData ? currentTabData.content : tabs[0].content;

	return (
		<div className="teleuitabs-container">
			<div className="tabs-captions">{tabsCaptions}</div>
			{tabContent}
		</div>
	);
};
