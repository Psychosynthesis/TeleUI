export type SingleTab = {
    content: any;
    caption: string;
};
export type TabsProps = {
    tabs: SingleTab[];
    defaultIndex?: number;
};
