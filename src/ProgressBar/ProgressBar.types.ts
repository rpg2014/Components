export interface ProgressBarProps {
    percentage: number;
    style: 'bar' | 'striped'
    label: string;
    showPercentage: boolean;
    highlightOnHover: boolean;
    height: string;
    width: string;
}
