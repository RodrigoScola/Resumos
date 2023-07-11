#security 
best practices 
     trust 
          do not 
     ident 
          getting the clients operating system username from an ident server and then using it to access the db server. this method is recommended for closed
          networks where client machines are subject to tight controls by system admins 
     Peer 
          like ident, but the client operating system username is obtained from the kernel 
     gssapi
          auto auth (single sign-on)
     LSAP
          only used to validate the username/passwords
     pass auth 
          SCRAM-SHA-256
               prevents password sniffing on untrusted connections 
          MD5
               fast, but easy to brute force 
          password 
               not recommended to be used since passwords are sent to the server in a clear text format 

auth is controlled via pg_hba.conf file 
its good to know the default initial auth settings with psql distribuition 
the pg_hba.conf is often located in the data dir, but can also be specified in the postgresql.conf file 
when changing the auth, you need to send a sighup signal, the user that sends the signal should be a superuser or the postgres

role based access control
     restricts network access based on a persons role within an organization 
          management role scope - limits what objects the role group is allowed to manage 
          management role group - add and remove members
          management role assignment - links a role to role group 
          primary - the primary contact for a specific account or role 
          billing - access for one end-user to the billing account 
          technical - assigned to users that perform technical tasks 
          administrative - access for users that perform administrative tasks 
benefits of rbac 
     reduces admin work and it support 
     maximizing operational efficiency 
     improving compliance 
     
          