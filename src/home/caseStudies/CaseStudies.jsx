import caseStyle from './caseStudies.module.css';
import Column from './Column.jsx'

const CaseStudies = () => {
  return (
    <div className={caseStyle.body}>
      <div className={caseStyle.top}>
        <h2>Case Studies</h2>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className={caseStyle.bottom}>
        <Column text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
        <Column
          className={caseStyle.centerColumn}
          text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
        />
        <Column text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
      </div>
    </div>
  );
}

export default CaseStudies