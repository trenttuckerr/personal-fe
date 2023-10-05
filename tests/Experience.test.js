import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from '../src/components/Experience';

describe('Experience Component', () => {
    it('renders without crashing', () => {
        const { getByText, getAllByRole } = render(<Experience />);
        const experienceTitle = getByText('Professional Experience');
        const jobTitles = getAllByRole('heading', { level: 3 });
        expect(experienceTitle).toBeInTheDocument();
        expect(jobTitles.length).toBe(2);
    });

    it('has the correct job details', () => {
        const { getAllByText } = render(<Experience />);
        const jobTitleText = getAllByText('Engineering Summer Analyst');
        const jobCompanyText = getAllByText('Goldman Sachs');
        const jobLocationText = getAllByText('New York City Metropolitan Area');
        const jobDateText = getAllByText(/June \d{4} - August \d{4}/);
        expect(jobTitleText).toHaveLength(2);
        expect(jobCompanyText).toHaveLength(2);
        expect(jobLocationText).toHaveLength(2);
        expect(jobDateText).toHaveLength(2);
    });
});
