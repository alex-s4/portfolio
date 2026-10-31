import { render, screen, fireEvent, within } from '@testing-library/react';
import { expect, it } from 'vitest';
import App from '../src/App';
it('links to the existing public project without an embedded demo',()=>{
 render(<App/>);
 expect(within(screen.getByRole('article',{name:'Fantasy Score Calculator'})).getByRole('link',{name:'Open live project'})).toHaveAttribute('href','https://alex-s4.github.io/fantasy-checker/');
 expect(screen.getByRole('link',{name:'View source'})).toHaveAttribute('href','https://github.com/alex-s4/fantasy-checker');
 expect(screen.queryByRole('button',{name:/calculator/i})).not.toBeInTheDocument();
});
it('provides usable navigation, resume and direct contact links',()=>{
 render(<App/>);fireEvent.click(screen.getByRole('button',{name:'Menu'}));
 expect(screen.getByRole('button',{name:'Close'})).toHaveAttribute('aria-expanded','true');
 fireEvent.click(screen.getByRole('link',{name:'Expertise'}));
 expect(screen.getByRole('button',{name:'Menu'})).toHaveAttribute('aria-expanded','false');
 expect(screen.getByRole('link',{name:'Download resume'})).toHaveAttribute('href','/alex-santos-resume.pdf');
 expect(screen.getByRole('link',{name:/al39726867/})).toHaveAttribute('href','mailto:al39726867@gmail.com');
});

it('shows Draftlab in the matching project format with its live destination',()=>{
 render(<App/>);
 const card = within(screen.getByRole('article',{name:'Draftlab'}));
 expect(card.getByRole('link',{name:'Open live project'})).toHaveAttribute('href','https://draftlab.alex-s4.workers.dev/');
 expect(card.getByRole('link',{name:'Open live project'})).toHaveAttribute('rel','noreferrer');
 expect(card.queryByRole('link',{name:'View source'})).not.toBeInTheDocument();
 const approach = within(screen.getByRole('complementary',{name:'Draftlab project approach'}));
 for(const label of ['Problem','Approach','My focus']) expect(approach.getByText(label,{exact:true})).toBeInTheDocument();
 expect(screen.getAllByRole('article').filter(x=>x.classList.contains('case-card'))).toHaveLength(2);
});
