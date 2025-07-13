import React, { useState } from 'react';

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  const notes = [
    {
      id: 1,
      title: 'Jupiter Notebook',
      excerpt: 'Comprehensive guide to Jupyter Notebooks for data analysis and machine learning workflows.',
      category: 'Data Science',
      date: 'March 2024',
      readTime: '10 min read',
      tags: ['Jupyter', 'Python', 'Data Analysis', 'ML'],
      googleDocUrl: 'https://docs.google.com/document/d/1QlmtiMKSS_OI-F-HaPxHDIpBwdiBJS73/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: true
    },
    {
      id: 2,
      title: 'Machine Learning',
      excerpt: 'Complete machine learning concepts, algorithms, and implementation techniques.',
      category: 'Machine Learning',
      date: 'March 2024',
      readTime: '15 min read',
      tags: ['ML', 'Python', 'Algorithms', 'AI'],
      googleDocUrl: 'https://docs.google.com/document/d/1_brQeJSVPudBecnCsejbCw4070RY4u91/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: true
    },
    {
      id: 3,
      title: 'NLP (Natural Language Processing)',
      excerpt: 'Natural Language Processing techniques and applications for text analysis.',
      category: 'AI/ML',
      date: 'February 2024',
      readTime: '12 min read',
      tags: ['NLP', 'Python', 'Text Analysis', 'AI'],
      googleDocUrl: 'https://docs.google.com/document/d/1JrgEVeDNvg0iHxl0ZwovES-GHw3FQp7e/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 4,
      title: 'NUMPY',
      excerpt: 'Complete NumPy library guide for numerical computing and array operations.',
      category: 'Python Libraries',
      date: 'February 2024',
      readTime: '8 min read',
      tags: ['NumPy', 'Python', 'Arrays', 'Data Science'],
      googleDocUrl: 'https://docs.google.com/document/d/1ZbIoRM9c374os-d8hXFnkhzLLSbPP2c7/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 5,
      title: 'REGEX (Regular Expressions)',
      excerpt: 'Regular expressions patterns and techniques for text processing and validation.',
      category: 'Programming',
      date: 'February 2024',
      readTime: '6 min read',
      tags: ['Regex', 'Pattern Matching', 'Text Processing'],
      googleDocUrl: 'https://docs.google.com/document/d/1lLJ-hdl_ti7--ze4zQVkjTFcXwkOCFUG/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 6,
      title: 'DSA C++ Python OOPs',
      excerpt: 'Data Structures, Algorithms, and Object-Oriented Programming concepts.',
      category: 'Programming',
      date: 'January 2024',
      readTime: '20 min read',
      tags: ['DSA', 'C++', 'Python', 'OOPs'],
      googleDocUrl: 'https://docs.google.com/document/d/14Af0wAFHfoFuhPKGxsLV3Ui6RfCN5X23/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: true
    },
    {
      id: 7,
      title: 'Three JS',
      excerpt: 'Three.js library for creating 3D graphics and animations in web browsers.',
      category: 'Frontend Development',
      date: 'January 2024',
      readTime: '10 min read',
      tags: ['Three.js', 'JavaScript', '3D Graphics', 'WebGL'],
      googleDocUrl: 'https://docs.google.com/document/d/1gHqn0ocLYFmEzLA_7frCQndFQLLt5z-UJ1iald1idaY/edit?usp=sharing',
      featured: false
    },
    {
      id: 8,
      title: 'System Design + Software Engineering Practices',
      excerpt: 'System design principles and software engineering best practices for scalable applications.',
      category: 'System Design',
      date: 'January 2024',
      readTime: '25 min read',
      tags: ['System Design', 'Architecture', 'Best Practices'],
      googleDocUrl: 'https://docs.google.com/document/d/1ukzwKKTtOqOkNx7KPCgLDmt0iNiNHiEL/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: true
    },
    {
      id: 9,
      title: 'Java JDBC Hibernate Spring Boot',
      excerpt: 'Java enterprise development with JDBC, Hibernate ORM, and Spring Boot framework.',
      category: 'Backend Development',
      date: 'December 2023',
      readTime: '18 min read',
      tags: ['Java', 'JDBC', 'Hibernate', 'Spring Boot'],
      googleDocUrl: 'https://docs.google.com/document/d/1nnssXgetPlYAzk0gSw8AKxkPzkskHvlc/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 10,
      title: 'HTML CSS JS NodeJS MongoDB ReactJS Angular',
      excerpt: 'Full-stack web development technologies and frameworks.',
      category: 'Full Stack',
      date: 'December 2023',
      readTime: '30 min read',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'React', 'Angular'],
      googleDocUrl: 'https://docs.google.com/document/d/1boW3YINhNMKMKxHs24Ne_9n-MA8Ufbjo/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: true
    },
    {
      id: 11,
      title: 'GIT',
      excerpt: 'Git version control system for collaborative software development.',
      category: 'DevOps',
      date: 'December 2023',
      readTime: '8 min read',
      tags: ['Git', 'Version Control', 'Collaboration'],
      googleDocUrl: 'https://docs.google.com/document/d/1xhcLoengVSvNmW0Mf-QwlpA54zcvWmQJ/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 12,
      title: 'Django',
      excerpt: 'Django web framework for Python-based web application development.',
      category: 'Backend Development',
      date: 'November 2023',
      readTime: '12 min read',
      tags: ['Django', 'Python', 'Web Framework'],
      googleDocUrl: 'https://docs.google.com/document/d/1MtfitaUOUY1n5MQzL5XIG1ddgRZgYSoG/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 13,
      title: 'Selenium',
      excerpt: 'Selenium WebDriver for automated testing and web scraping.',
      category: 'Testing',
      date: 'November 2023',
      readTime: '10 min read',
      tags: ['Selenium', 'Automation', 'Testing', 'Web Scraping'],
      googleDocUrl: 'https://docs.google.com/document/d/1XWVB3Qojx9G0e5qTkjRttv0Db3UsYSkX/edit?usp=drive_link&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 14,
      title: 'AWS Ansible Terraform',
      excerpt: 'Cloud infrastructure management with AWS, Ansible automation, and Terraform.',
      category: 'Cloud & DevOps',
      date: 'November 2023',
      readTime: '20 min read',
      tags: ['AWS', 'Ansible', 'Terraform', 'DevOps'],
      googleDocUrl: 'https://docs.google.com/document/d/1rJV95slwXEMzKD9tHNnreEhMCXBKOygv/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: true
    },
    {
      id: 15,
      title: 'PHP, C# .NET',
      excerpt: 'PHP and C# .NET framework for web and desktop application development.',
      category: 'Backend Development',
      date: 'October 2023',
      readTime: '15 min read',
      tags: ['PHP', 'C#', '.NET', 'Web Development'],
      googleDocUrl: 'https://docs.google.com/document/d/1Ads_wxgvqVpOZqY5xdNZI0g2xRixPNA9/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 16,
      title: 'Linux',
      excerpt: 'Linux operating system administration and command line operations.',
      category: 'System Administration',
      date: 'October 2023',
      readTime: '12 min read',
      tags: ['Linux', 'System Admin', 'Command Line'],
      googleDocUrl: 'https://docs.google.com/document/d/18zT4dibe9IU_v_XlEBEEqp241DW2gcOT/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 17,
      title: 'DBMS',
      excerpt: 'Database Management Systems concepts and SQL operations.',
      category: 'Database',
      date: 'October 2023',
      readTime: '15 min read',
      tags: ['DBMS', 'SQL', 'Database', 'RDBMS'],
      googleDocUrl: 'https://docs.google.com/document/d/1ePgeTFMJtItMH-zKWkyiOACDeiTqkftI/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 18,
      title: 'OS (Operating Systems)',
      excerpt: 'Operating system concepts, processes, memory management, and scheduling.',
      category: 'Computer Science',
      date: 'September 2023',
      readTime: '18 min read',
      tags: ['OS', 'Processes', 'Memory Management'],
      googleDocUrl: 'https://docs.google.com/document/d/1_kXsjx4Qt58zdDVaJUoHL6iSxebYpUYi/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 19,
      title: 'Computer Network',
      excerpt: 'Computer networking concepts, protocols, and network architecture.',
      category: 'Computer Science',
      date: 'September 2023',
      readTime: '20 min read',
      tags: ['Networking', 'Protocols', 'TCP/IP'],
      googleDocUrl: 'https://docs.google.com/document/d/1ukgFdLaz0mQaE0wZ-sUS842EZzVB3rmh/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 20,
      title: 'Formal Language & Automata Theory',
      excerpt: 'Theoretical computer science concepts including formal languages and automata.',
      category: 'Computer Science',
      date: 'September 2023',
      readTime: '25 min read',
      tags: ['Automata', 'Formal Languages', 'Theory'],
      googleDocUrl: 'https://docs.google.com/document/d/1tFmWAU8IkAJVjpZEK1Ep3p6pdReiVtfv/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 21,
      title: 'Microsoft ACCESS',
      excerpt: 'Microsoft Access database management and application development.',
      category: 'Database',
      date: 'August 2023',
      readTime: '8 min read',
      tags: ['MS Access', 'Database', 'Microsoft'],
      googleDocUrl: 'https://docs.google.com/document/d/1yJy6YeZ6U_-3Wd976Q1HujOt_INzjh7c/edit?usp=sharing&ouid=110366467593230765890&rtpof=true&sd=true',
      featured: false
    },
    {
      id: 22,
      title: 'Services Offered by AWS',
      excerpt: 'Comprehensive guide to AWS cloud services and their use cases.',
      category: 'Cloud Computing',
      date: 'August 2023',
      readTime: '30 min read',
      tags: ['AWS', 'Cloud Services', 'Infrastructure'],
      googleDocUrl: 'https://drive.google.com/file/d/1flHSR2Ls0hL9VGDO_8_iIMQJF6Lp66Vq/view?usp=drive_link',
      featured: true
    },
    {
      id: 23,
      title: 'Star Patterns',
      excerpt: 'Programming patterns and algorithms for creating star patterns.',
      category: 'Programming',
      date: 'August 2023',
      readTime: '6 min read',
      tags: ['Patterns', 'Algorithms', 'Programming'],
      googleDocUrl: 'https://drive.google.com/file/d/1w2jSp4yp_nJwmgdGHD80TRqRfTjB_Pmo/view?usp=drive_link',
      featured: false
    },
    {
      id: 24,
      title: 'All Android Files',
      excerpt: 'Complete Android development resources and project files.',
      category: 'Mobile Development',
      date: 'July 2023',
      readTime: 'Various',
      tags: ['Android', 'Mobile', 'Development'],
      googleDocUrl: 'https://drive.google.com/drive/folders/1Skx4_80iJDbdW06IbmUPl2w7pQ2n_rnu?usp=drive_link',
      featured: false
    }
  ];

  const handleNoteClick = (note) => {
    // Special cases that should open in new tab
    if (note.title === 'Services Offered by AWS' || 
        note.title === 'Star Patterns' || 
        note.title === 'All Android Files') {
      window.open(note.googleDocUrl, '_blank');
    } else {
      setSelectedNote(note);
    }
  };

  const closeNote = () => {
    setSelectedNote(null);
  };

  return (
    <section className="notes">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Notes</h2>
          <div className="section-line"></div>
        </div>

        <div className="notes-overview">
          <div className="notes-intro">
            <h3 className="notes-subtitle">Knowledge Base</h3>
            <p className="notes-description">
              Comprehensive technical notes covering programming, machine learning, cloud computing, and software engineering. 
              Click on any note to view the full document directly in your browser.
            </p>
          </div>
        </div>

        <div className="notes-grid">
          <h3 className="all-notes-title">All Notes</h3>
          <div className="notes-list">
            {notes.map((note, index) => (
              <div key={index} className="note-card" onClick={() => handleNoteClick(note)}>
                <div className="note-card-header">
                  <div className="note-meta">
                    <span className="note-category">{note.category}</span>
                    <span className="note-date">{note.date}</span>
                  </div>
                  <span className="note-read-time">{note.readTime}</span>
                </div>
                
                <h4 className="note-card-title">{note.title}</h4>
                <p className="note-card-excerpt">{note.excerpt}</p>
                
                <div className="note-card-tags">
                  {note.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="note-card-tag">{tag}</span>
                  ))}
                </div>
                
                <span className="note-card-link">View Note →</span>
              </div>
            ))}
          </div>
        </div>

        {/* Google Docs Modal */}
        {selectedNote && (
          <div className="note-modal-overlay" onClick={closeNote}>
            <div className="note-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">{selectedNote.title}</h3>
                <button className="close-button" onClick={closeNote}>×</button>
              </div>
              <div className="modal-content">
                <iframe
                  src={`${selectedNote.googleDocUrl}?usp=sharing&rm=minimal`}
                  title={selectedNote.title}
                  width="100%"
                  height="600px"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Notes; 