import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    
    {
        label: 'Pages',
        type: 'label',
    },

    {
        name: 'Admin',
        icon: 'people',
        children: [
            {
                name: 'Organization',
                path: '/pages/customer-list',
                iconText: 'Org',
            },
            
            {
                name: 'Projects',
                path: '/pages/user-list-4',
                iconText: 'Proj',
            },
            {
                name: 'Teams',
                path: '/pages/user-list-3',
                iconText: 'Team',
            },
        ],
    },


    {
        name: 'Projects',
        icon: 'apps',
        children: [
            {
                name: 'Project List',
                path: '/pages/product-list',
                iconText: 'All',
            },
            {
                name: 'View Project',
                path: '/pages/view-product',
                iconText: 'View',
            },
            {
                name: 'New Project',
                path: '/pages/new-product',
                iconText: 'New',
            },
        ],
    },
    // {
    //     name: 'Orders',
    //     icon: 'folder',
    //     children: [
    //         {
    //             name: 'Order List',
    //             path: '/pages/order-list',
    //             iconText: 'OL',
    //         },
    //         {
    //             name: 'View Order',
    //             path: '/invoice/fdskfjdsuoiucrwevbgd',
    //             iconText: 'VO',
    //         },
    //     ],
    // },
    
    
    {
        name: 'Teams',
        icon: 'group_work',
        path: '/scrum-board',
    },
      {
                name: 'Storage',
                icon: 'list',
        
                 children: [
                      {
                        name: 'Upload',
                        path: '/forms/upload',
                        iconText: 'Upl',
                    },
                     {
                        name: 'Drive',
                        path: '/matx-list',
                        iconText: 'Drive',
                    },
        
                ],
            },
      {
                name: 'Document Control',
                icon: 'receipt',
        
                 children: [
         {
            name: 'Invoices',
            iconText: 'Inv',
            path: '/invoice/list',
        },
                        
        
                ],
            },
    
    {
     name: 'Communication',
        icon: 'chat',

        children: [
    //         {
                
    //     // name: 'Chat',
    //     // path: '/chat',
    //     // iconText: 'Chat',

    // },
            {
                name: 'Chat',
                path: '/forms/editor',
                iconText: 'Chat',
            },
    {
        name: 'Calendar',
        iconText: 'Calendar',
        path: '/calendar',
    },
    {
        name: 'All Memos',
        path: '/inbox',
        iconText: 'All',

    },
 
    {
        name: 'New Memo',
        path: '/forms/basic',
        iconText: 'New',
           },
      ],
    },

    // {
    //     name: 'User Profile',
    //     path: '/page-layouts/user-profile',
    //     icon: 'person',
    // },

    
    
    {
     name: 'Billing',
        icon: 'attach_money',

        children: [
         {
                name: 'Billing Profile',
                path: '/pages/view-customer',
                iconText: 'Billing',
            },

       {
                        name: 'Plans',
                        iconText: 'Plans',
                        path: '/others/pricing-2',
         
                    },
      ],
    },
    // {
        //     name: 'Todo',
        //     icon: 'center_focus_strong',
        //     path: '/todo/list',
        // },
        
        // {
            //     name: 'CRUD Table',
            //     icon: 'format_list_bulleted',
            //     path: '/crud-table',
            // },
            // {
            //     name: 'Data Table',
            //     icon: 'table_view',
            //     path: '/data-table/simple-mui-table',
                
            // },
 
            {
                label: 'Developer Components',
                type: 'label',
            },
                      {
                name: 'Session/Auth',
                icon: 'security',
                children: [
                    {
                        name: 'Sign in',
                        iconText: 'SI',
                        path: '/session/signin',
                    },
                    {
                        name: 'Sign up',
                        iconText: 'SU',
                        path: '/session/signup',
                    },
                    {
                        name: 'Forgot Password',
                        iconText: 'FP',
                        path: '/session/forgot-password',
                    },
                    {
                        name: 'Error',
                        iconText: '404',
                        path: '/session/404',
                    },
                    
                ],
            },
    //         {
    //     name: 'Forms',
    //     icon: 'description',

    //     children: [
    //         // {
    //         //     name: 'Order Form',
    //         //     path: '/forms/order-form',
    //         //     iconText: 'OF',
    //         // },
    //         // {
    //         //     name: 'Invoice Form',
    //         //     path: '/forms/invoice-form',
    //         //     iconText: 'IF',
    //         // },
    //         // {
    //         //     name: 'Property Listing Form',
    //         //     path: '/forms/property-listing-form',
    //         //     iconText: 'PF',
    //         // },
    //         {
    //             name: 'Basic',
    //             path: '/forms/basic',
    //             iconText: 'B',
    //         },
    //         {
    //             name: 'Editor',
    //             path: '/forms/editor',
    //             iconText: 'E',
    //         },
    //         {
    //             name: 'Upload',
    //             path: '/forms/upload',
    //             iconText: 'U',
    //         },
    //         {
    //             name: 'Wizard',
    //             path: '/forms/wizard',
    //             iconText: 'W',
    //         },
    //     ],
    // },
            {
                name: 'UI Components',
                icon: 'favorite',
                badge: { value: '30+', color: 'secondary' },
                children: [
                    {
                        name: 'Auto Complete',
                        path: '/material/autocomplete',
                        iconText: 'A',
                    },
                    {
                        name: 'Buttons',
                        path: '/material/buttons',
                        iconText: 'B',
                    },
                    {
                        name: 'Checkbox',
                        path: '/material/checkbox',
                        iconText: 'C',
                    },
                    {
                        name: 'Dialog',
                        path: '/material/dialog',
                        iconText: 'D',
                    },
                    {
                        name: 'Drag and Drop',
                        iconText: 'D',
                        path: '/others/drag-and-drop',
                    },
                    {
                        name: 'Expansion Panel',
                        path: '/material/expansion-panel',
                        iconText: 'E',
                    },
                    {
                        name: 'Form',
                        path: '/material/form',
                        iconText: 'F',
                    },
            {
                name: 'Icons',
                path: '/material/icons',
                iconText: 'I',
            },
            {
                name: 'Menu',
                path: '/material/menu',
                iconText: 'M',
            },
            {
                name: 'Progress',
                path: '/material/progress',
                iconText: 'P',
            },
            {
                name: 'Radio',
                path: '/material/radio',
                iconText: 'R',
            },
            {
                name: 'Switch',
                path: '/material/switch',
                iconText: 'S',
            },
            {
                name: 'Slider',
                path: '/material/slider',
                iconText: 'S',
            },
            {
                name: 'Snackbar',
                path: '/material/snackbar',
                iconText: 'S',
            },
            {
                name: 'Table',
                path: '/material/table',
                iconText: 'T',
            },
        ],
    },
    
   
]
