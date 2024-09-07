import React from 'react';
import adodotnet from './adonet.png';
import entityframrworkcore from './entityframeworkcore.png';
import notepadplusplus from './notepadplusplus.png';
import postman from './postman.png';
import react from './react.png';
import restapi from './restapi.png';
import slack from './slack.png';
import dotnetcore from './dotnetcore.png';
import sqlserver from './sqlserver.png';
import githubdesktop from './GitHubDesktop.png';
import csharp from './c#.png';
import javascript from './JS.png';
import vscode from './vscode.png';
import visualstudio from './visualstudio.png';

const Tools = () => {
 
  const toolsData = [
    {
      id: 1,
      title: '.NET Core',
      imageUrl: dotnetcore
    },
    {
      id: 2,
      title: 'React.js',
      imageUrl: react
    },
    {
      id: 3,
      title: 'MS SQL Server',
      imageUrl: sqlserver,
    },
    {
      id: 4,
      title: 'Postman',
      imageUrl: postman
    },
    {
        id: 5,
        title: 'Entity framework core',
        imageUrl: entityframrworkcore
      },
      {
        id: 6,
        title: 'Visual Studio',
        imageUrl: visualstudio
      },
      {
        id: 7,
        title: 'Github Desktop',
        imageUrl: githubdesktop,
      },
      {
        id: 8,
        title: 'Rest API',
        imageUrl: restapi
      },
      {
        id: 9,
        title: 'Visual Studio Code',
        imageUrl: vscode
      },
      {
        id: 10,
        title: 'ADO .NET',
        imageUrl: adodotnet
      },
      {
        id:11,
        title: 'Notepad++',
        imageUrl: notepadplusplus
      },
      {
        id:12,
        title: 'C#',
        imageUrl: csharp
      },
      {
        id:13,
        title: 'Javascript',
        imageUrl: javascript
      },
      {
        id:14,
        title: 'Slack',
        imageUrl: slack
      }
  ];

  return (
    <div style={{ textAlign: 'center'}}>
      
      <div 
        style={{ 
          textAlign: 'center'
        }}
      >
        <h2>Following are the tools, programming languages and frameworks that I use and have worked on:</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {toolsData.map((tools) => (
          <div 
            key={tools.id} 
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '20px', 
              width: '300px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between' 
            }}
          >
            <img 
              src={tools.imageUrl} 
              alt={tools.title} 
              style={{ 
                width: '100%', 
                height: '210px', 
                objectFit: 'cover', 
                borderRadius: '8px 8px 0 0' 
              }} 
            />
            <h3 style={{ margin: '15px 0' }}>{tools.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
