import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { AuthProvider } from './AuthContext';
import { TasksContextProvider } from './TasksContext';
import { NotificationsContextProvider } from './NotificationsContext';
import { RequestsContextProvider } from './RequestsContext';
import { DocumentsContextProvider } from './DocumentsContext';
import { ReportsContextProvider } from './ReportsContext';

const Providers = ({ children }) => {
  return (
    <LanguageProvider>
        <AuthProvider>
            <TasksContextProvider>
              <NotificationsContextProvider>
                <RequestsContextProvider>
                  <DocumentsContextProvider>
                    <ReportsContextProvider>
                      {children}
                    </ReportsContextProvider>
                  </DocumentsContextProvider>
                </RequestsContextProvider>
              </NotificationsContextProvider>
            </TasksContextProvider>
        </AuthProvider>
    </LanguageProvider>
  );
};

export default Providers;
