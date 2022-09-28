import { DocTypographyItem, DocTypographyItemProps } from './TypographyItem';
import './typography-list.css';

export interface DocTypographyListProps {
	items: DocTypographyItemProps[];
}

export const DocTypographyList = ({ items }: DocTypographyListProps) => {
	return (
		<div className="so-docs-typography-list grid gap-y-4 gap-x-8 rounded shadow-sm border p-10">
			{items.map(({ children, ...itemProps }) => (
				<DocTypographyItem {...itemProps}>{children}</DocTypographyItem>
			))}
		</div>
	);
};
