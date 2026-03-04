// =====================================================
// config.example.js — TEMPLATE (safe to commit)
// Copy this file to config.js and fill in your values
// =====================================================

const APP_CONFIG = {
    // Supabase (Dashboard → Settings → API)
    SUPABASE_URL: 'https://YOUR_PROJECT.supabase.co',
    SUPABASE_ANON_KEY: 'your-anon-key-here',

    // Google Sheets
    SHEETS: {
        production: {
            id: 'your-production-spreadsheet-id',
            name: '生産チーム出庫依頼シート',
            database: 'Database_new'
        },
        test: {
            id: 'your-test-spreadsheet-id',
            name: 'テスト用シート',
            database: 'Database_new'
        }
    },

    // Ghost Tracker
    GHOST_TRACKER_SHEET_ID: 'your-ghost-tracker-spreadsheet-id'
};
