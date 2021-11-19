/// <reference path="lib.kso.d.ts" />

declare namespace Wps {

    interface WpsLists {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsList): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsLines {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsLine): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsField {
        /**
        * Locked
        **/
        Locked: boolean;

        /**
        * ShowCodes
        **/
        ShowCodes: boolean;

        /**
        * Code
        **/
        Code: WpsRange;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        readonly Type: WpsWdFieldType;

        Cut(): void;

        /**
        * Kind
        **/
        readonly Kind: WpsWdFieldKind;

        /**
        * Result
        **/
        Result: WpsRange;

        /**
        * Data
        **/
        Data: string;

        /**
        * Next
        **/
        readonly Next: WpsField;

        /**
        * Previous
        **/
        readonly Previous: WpsField;

        Update(prop?: boolean): void;

        /**
        * Index
        **/
        readonly Index: number;

        Delete(): void;

        /**
        * LinkFormat
        **/
        readonly LinkFormat: WpsLinkFormat;

        /**
        * OLEFormat
        **/
        readonly OLEFormat: WpsOLEFormat;

        /**
        * InlineShape
        **/
        readonly InlineShape: WpsInlineShape;

        Select(): void;

        Unlink(): void;

        UpdateSource(): void;

        DoClick(): void;

        Copy(): void;

    }

    interface WpsFont {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NumberForm
        **/
        NumberForm: WpsWdNumberForm;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Bold
        **/
        Bold: number;

        /**
        * Shadow
        **/
        Shadow: number;

        /**
        * AllCaps
        **/
        AllCaps: number;

        /**
        * Reflection
        **/
        Reflection: Kso.KsoReflectionFormat;

        /**
        * Italic
        **/
        Italic: number;

        /**
        * StylisticSet
        **/
        StylisticSet: WpsWdStylisticSet;

        /**
        * DisableCharacterSpaceGrid
        **/
        DisableCharacterSpaceGrid: boolean;

        /**
        * Hidden
        **/
        Hidden: number;

        /**
        * SmallCaps
        **/
        SmallCaps: number;

        /**
        * Subscript
        **/
        Subscript: number;

        /**
        * StrikeThrough
        **/
        StrikeThrough: number;

        /**
        * ItalicBi
        **/
        ItalicBi: number;

        Grow(): void;

        /**
        * DoubleStrikeThrough
        **/
        DoubleStrikeThrough: number;

        /**
        * ColorIndex
        **/
        ColorIndex: WpsWdColorIndex;

        /**
        * ContextualAlternates
        **/
        ContextualAlternates: number;

        /**
        * Superscript
        **/
        Superscript: number;

        /**
        * Engrave
        **/
        Engrave: number;

        /**
        * Underline
        **/
        Underline: WpsWdUnderline;

        /**
        * Size
        **/
        Size: number;

        /**
        * Name
        **/
        Name: string;

        /**
        * Position
        **/
        Position: number;

        /**
        * Spacing
        **/
        Spacing: number;

        /**
        * ColorIndexBi
        **/
        ColorIndexBi: WpsWdColorIndex;

        /**
        * Scaling
        **/
        Scaling: number;

        /**
        * Outline
        **/
        Outline: number;

        /**
        * Emboss
        **/
        Emboss: number;

        /**
        * Kerning
        **/
        Kerning: number;

        /**
        * Animation
        **/
        Animation: WpsWdAnimation;

        /**
        * Glow
        **/
        Glow: Kso.KsoGlowFormat;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * EmphasisMark
        **/
        EmphasisMark: WpsWdEmphasisMark;

        /**
        * NameFarEast
        **/
        NameFarEast: string;

        /**
        * NameAscii
        **/
        NameAscii: string;

        /**
        * NumberSpacing
        **/
        NumberSpacing: WpsWdNumberSpacing;

        /**
        * Color
        **/
        Color: WpsWdColor;

        /**
        * NameOther
        **/
        NameOther: string;

        Shrink(): void;

        /**
        * Fill
        **/
        Fill: Kso.KsoFillFormat;

        Reset(): void;

        SetAsTemplateDefault(): void;

        /**
        * Ligatures
        **/
        Ligatures: WpsWdLigatures;

        /**
        * BoldBi
        **/
        BoldBi: number;

        /**
        * SizeBi
        **/
        SizeBi: number;

        /**
        * NameBi
        **/
        NameBi: string;

        /**
        * DiacriticColor
        **/
        DiacriticColor: WpsWdColor;

        /**
        * TextShadow
        **/
        TextShadow: Kso.KsoShadowFormat;

        /**
        * UnderlineColor
        **/
        UnderlineColor: WpsWdColor;

        /**
        * Line
        **/
        Line: Kso.KsoLineFormat;

        /**
        * ThreeD
        **/
        ThreeD: Kso.KsoThreeDFormat;

        /**
        * TextColor
        **/
        readonly TextColor: Kso.KsoColorFormat;

    }

    interface WpsCategory {
        /**
        * BuildingBlocks
        **/
        readonly BuildingBlocks: WpsBuildingBlocks;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        readonly Type: WpsBuildingBlockType;

    }

    interface WpsOMathEqArray {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * RowSpacingRule
        **/
        RowSpacingRule: WpsWdOMathSpacingRule;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * MaxDist
        **/
        MaxDist: boolean;

        /**
        * RowSpacing
        **/
        RowSpacing: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMathArgs;

        /**
        * ObjDist
        **/
        ObjDist: boolean;

        /**
        * Align
        **/
        Align: WpsWdOMathVertAlignType;

    }

    interface WpsBorder {
        /**
        * LineStyle
        **/
        LineStyle: WpsWdLineStyle;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * LineWidth
        **/
        LineWidth: WpsWdLineWidth;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Visible
        **/
        Visible: boolean;

        /**
        * Inside
        **/
        readonly Inside: boolean;

        /**
        * ColorIndex
        **/
        ColorIndex: WpsWdColorIndex;

        /**
        * ArtStyle
        **/
        ArtStyle: WpsWdPageBorderArt;

        /**
        * Color
        **/
        Color: WpsWdColor;

        /**
        * ArtWidth
        **/
        ArtWidth: number;

    }

    interface WpsBorders {
        /**
        * InsideLineStyle
        **/
        InsideLineStyle: WpsWdLineStyle;

        /**
        * DistanceFromTop
        **/
        DistanceFromTop: number;

        /**
        * DistanceFromBottom
        **/
        DistanceFromBottom: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Enable
        **/
        Enable: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * OutsideLineStyle
        **/
        OutsideLineStyle: WpsWdLineStyle;

        /**
        * EnableFirstPageInSection
        **/
        EnableFirstPageInSection: boolean;

        /**
        * InsideLineWidth
        **/
        InsideLineWidth: WpsWdLineWidth;

        /**
        * EnableOtherPagesInSection
        **/
        EnableOtherPagesInSection: boolean;

        /**
        * OutsideLineWidth
        **/
        OutsideLineWidth: WpsWdLineWidth;

        /**
        * DistanceFromRight
        **/
        DistanceFromRight: number;

        /**
        * InsideColorIndex
        **/
        InsideColorIndex: WpsWdColorIndex;

        /**
        * OutsideColorIndex
        **/
        OutsideColorIndex: WpsWdColorIndex;

        /**
        * DistanceFromLeft
        **/
        DistanceFromLeft: number;

        /**
        * AlwaysInFront
        **/
        AlwaysInFront: boolean;

        /**
        * SurroundFooter
        **/
        SurroundFooter: boolean;

        /**
        * SurroundHeader
        **/
        SurroundHeader: boolean;

        /**
        * JoinBorders
        **/
        JoinBorders: boolean;

        /**
        * HasHorizontal
        **/
        readonly HasHorizontal: boolean;

        /**
        * HasVertical
        **/
        readonly HasVertical: boolean;

        /**
        * DistanceFrom
        **/
        DistanceFrom: WpsWdBorderDistanceFrom;

        Item(Index?: WpsWdBorderType, prop?: WpsBorder): void;

        ApplyPageBordersToAllSections(): void;

        /**
        * InsideColor
        **/
        InsideColor: WpsWdColor;

        /**
        * OutsideColor
        **/
        OutsideColor: WpsWdColor;

    }

    interface WpsTasks {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        ExitWindows(): void;

        Item(Index?: any, prop?: WpsTask): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Exists(Name?: string, prop?: boolean): void;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsPanes {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsPane): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(SplitVertical?: any, prop?: WpsPane): void;

    }

    interface WpsPages {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsPage): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsReviewer {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Visible
        **/
        Visible: boolean;

    }

    interface WpsReviewers {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsReviewer): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsWalls {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * PictureType
        **/
        PictureType: any;

        Paste(): void;

        ClearFormats(prop?: any): void;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * PictureUnit
        **/
        PictureUnit: any;

        /**
        * Thickness
        **/
        Thickness: number;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsRange {
        /**
        * Text
        **/
        Text: string;

        Delete(Unit?: any, Count?: any, prop?: number): void;

        /**
        * Tables
        **/
        readonly Tables: WpsTables;

        Sort(ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any, SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;

        /**
        * Orientation
        **/
        Orientation: WpsWdTextOrientation;

        /**
        * StoryType
        **/
        readonly StoryType: WpsWdStoryType;

        /**
        * FormattedText
        **/
        FormattedText: WpsRange;

        ExportAsFixedFormat(OutputFileName?: string, ExportFormat?: WpsWdExportFormat, OpenAfterExport?: boolean, OptimizeFor?: WpsWdExportOptimizeFor, ExportCurrentPage?: boolean, Item?: WpsWdExportItem, IncludeDocProps?: boolean, KeepIRM?: boolean, CreateBookmarks?: WpsWdExportCreateBookmarks, DocStructureTags?: boolean, BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, FixedFormatExtClassPtr?: any): void;

        /**
        * Bookmarks
        **/
        readonly Bookmarks: WpsBookmarks;

        /**
        * Words
        **/
        readonly Words: WpsWords;

        /**
        * Cells
        **/
        readonly Cells: WpsCells;

        ConvertToTable(Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any, ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any, AutoFitBehavior?: any, DefaultTableBehavior?: any, prop?: WpsTable): void;

        /**
        * Start
        **/
        Start: number;

        /**
        * StoryLength
        **/
        readonly StoryLength: number;

        /**
        * End
        **/
        End: number;

        InRange(Range?: WpsRange, prop?: boolean): void;

        /**
        * Font
        **/
        Font: WpsFont;

        /**
        * NextStoryRange
        **/
        readonly NextStoryRange: WpsRange;

        /**
        * HighlightColorIndex
        **/
        HighlightColorIndex: WpsWdColorIndex;

        InsertAutoText(): void;

        CreatePublisher(Edition?: any, ContainsPICT?: any, ContainsRTF?: any, ContainsText?: any): void;

        /**
        * Sentences
        **/
        readonly Sentences: WpsSentences;

        /**
        * Hyperlinks
        **/
        readonly Hyperlinks: WpsHyperlinks;

        /**
        * Sections
        **/
        readonly Sections: WpsSections;

        /**
        * Characters
        **/
        readonly Characters: WpsCharacters;

        /**
        * Footnotes
        **/
        readonly Footnotes: WpsFootnotes;

        /**
        * ParagraphFormat
        **/
        ParagraphFormat: WpsParagraphFormat;

        /**
        * Endnotes
        **/
        readonly Endnotes: WpsEndnotes;

        /**
        * Find
        **/
        readonly Find: Kso.KsoFind;

        /**
        * Comments
        **/
        readonly Comments: WpsComments;

        /**
        * Paragraphs
        **/
        readonly Paragraphs: WpsParagraphs;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * DisableCharacterSpaceGrid
        **/
        DisableCharacterSpaceGrid: boolean;

        /**
        * TextRetrievalMode
        **/
        TextRetrievalMode: WpsTextRetrievalMode;

        /**
        * GrammarChecked
        **/
        GrammarChecked: boolean;

        /**
        * Fields
        **/
        readonly Fields: WpsFields;

        /**
        * GrammaticalErrors
        **/
        readonly GrammaticalErrors: WpsProofreadingErrors;

        /**
        * PreviousBookmarkID
        **/
        readonly PreviousBookmarkID: number;

        /**
        * FormFields
        **/
        readonly FormFields: WpsFormFields;

        /**
        * ListParagraphs
        **/
        readonly ListParagraphs: WpsListParagraphs;

        /**
        * Frames
        **/
        readonly Frames: WpsFrames;

        /**
        * Underline
        **/
        Underline: WpsWdUnderline;

        /**
        * ListFormat
        **/
        readonly ListFormat: WpsListFormat;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): void;

        /**
        * CanPaste
        **/
        readonly CanPaste: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        DetectLanguage(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * CanEdit
        **/
        readonly CanEdit: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Bold
        **/
        Bold: number;

        TCSCConverter(Direction?: WpsWdTCSCConverterDirection, CommonTerms?: boolean, UseVariants?: boolean): void;

        /**
        * Italic
        **/
        Italic: number;

        /**
        * CombineCharacters
        **/
        CombineCharacters: boolean;

        /**
        * EmphasisMark
        **/
        EmphasisMark: WpsWdEmphasisMark;

        /**
        * OMaths
        **/
        readonly OMaths: WpsOMaths;

        MoveUntil(Cset?: any, Count?: any, prop?: number): void;

        /**
        * Revisions
        **/
        readonly Revisions: WpsRevisions;

        /**
        * Style
        **/
        Style: any;

        /**
        * LanguageID
        **/
        LanguageID: WpsWdLanguageID;

        /**
        * SynonymInfo
        **/
        readonly SynonymInfo: WpsSynonymInfo;

        ComputeStatistics(Statistic?: WpsWdStatistic, prop?: number): void;

        /**
        * Subdocuments
        **/
        readonly Subdocuments: WpsSubdocuments;

        /**
        * SpellingChecked
        **/
        SpellingChecked: boolean;

        /**
        * Rows
        **/
        readonly Rows: WpsRows;

        /**
        * Columns
        **/
        readonly Columns: WpsColumns;

        /**
        * LanguageIDFarEast
        **/
        LanguageIDFarEast: WpsWdLanguageID;

        /**
        * IsEndOfRowMark
        **/
        readonly IsEndOfRowMark: boolean;

        /**
        * BookmarkID
        **/
        readonly BookmarkID: number;

        GoToNext(What?: WpsWdGoToItem, prop?: WpsRange): void;

        /**
        * PageSetup
        **/
        PageSetup: WpsPageSetup;

        /**
        * ShapeRange
        **/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
        * Case
        **/
        Case: WpsWdCharacterCase;

        ConvertHangulAndHanja(ConversionsMode?: any, FastConversion?: any, CheckHangulEnding?: any, EnableRecentOrdering?: any, CustomDictionary?: any): void;

        Information(Type?: WpsWdInformation, prop?: any): void;

        /**
        * CharacterWidth
        **/
        CharacterWidth: WpsWdCharacterWidth;

        Copy(): void;

        /**
        * ReadabilityStatistics
        **/
        readonly ReadabilityStatistics: WpsReadabilityStatistics;

        /**
        * Editors
        **/
        readonly Editors: WpsEditors;

        /**
        * SpellingErrors
        **/
        readonly SpellingErrors: WpsProofreadingErrors;

        MoveStartWhile(Cset?: any, Count?: any, prop?: number): void;

        /**
        * InlineShapes
        **/
        readonly InlineShapes: WpsInlineShapes;

        /**
        * LanguageIDOther
        **/
        LanguageIDOther: WpsWdLanguageID;

        Select(): void;

        SetRange(Start?: number, End?: number): void;

        Collapse(Direction?: any): void;

        InsertBefore(Text?: string): void;

        InsertAfter(Text?: string): void;

        Next(Unit?: any, Count?: any, prop?: WpsRange): void;

        Previous(Unit?: any, Count?: any, prop?: WpsRange): void;

        StartOf(Unit?: any, Extend?: any, prop?: number): void;

        EndOf(Unit?: any, Extend?: any, prop?: number): void;

        Move(Unit?: any, Count?: any, prop?: number): void;

        MoveStart(Unit?: any, Count?: any, prop?: number): void;

        MoveEnd(Unit?: any, Count?: any, prop?: number): void;

        /**
        * DocumentFields
        **/
        readonly DocumentFields: WpsDocumentFields;

        MoveWhile(Cset?: any, Count?: any, prop?: number): void;

        MoveEndWhile(Cset?: any, Count?: any, prop?: number): void;

        MoveStartUntil(Cset?: any, Count?: any, prop?: number): void;

        /**
        * EndnoteOptions
        **/
        readonly EndnoteOptions: WpsEndnoteOptions;

        MoveEndUntil(Cset?: any, Count?: any, prop?: number): void;

        /**
        * ItalicBi
        **/
        ItalicBi: number;

        Cut(): void;

        Paste(): void;

        AutoFormat(): void;

        InsertBreak(Type?: any): void;

        InsertFile(FileName?: string, Range?: any, ConfirmConversions?: any, Link?: any, Attachment?: any): void;

        InStory(Range?: WpsRange, prop?: boolean): void;

        WholeStory(): void;

        Expand(Unit?: any, prop?: number): void;

        InsertParagraph(): void;

        InsertParagraphAfter(): void;

        ConvertToTableOld(Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any, ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any, prop?: WpsTable): void;

        InsertDateTimeOld(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any): void;

        GoToEditableRange(EditorID?: any, prop?: WpsRange): void;

        InsertSymbol(CharacterNumber?: number, Font?: any, Unicode?: any, Bias?: any): void;

        InsertCrossReference_2002(ReferenceType?: any, ReferenceKind?: WpsWdReferenceKind, ReferenceItem?: any, InsertAsHyperlink?: any, IncludePosition?: any): void;

        InsertCaptionXP(Label?: any, Title?: any, TitleAutoText?: any, Position?: any): void;

        CopyAsPicture(): void;

        SortOld(ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any, SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, LanguageID?: any): void;

        SortAscending(): void;

        SortDescending(): void;

        IsEqual(Range?: WpsRange, prop?: boolean): void;

        Calculate(prop?: number): void;

        GoTo(What?: any, Which?: any, Count?: any, Name?: any, prop?: WpsRange): void;

        GoToPrevious(What?: WpsWdGoToItem, prop?: WpsRange): void;

        PasteSpecial(IconIndex?: any, Link?: any, Placement?: any, DisplayAsIcon?: any, DataType?: any, IconFileName?: any, IconLabel?: any): void;

        LookupNameProperties(): void;

        Relocate(Direction?: number): void;

        CheckSynonyms(): void;

        SubscribeTo(Edition?: string, Format?: any): void;

        /**
        * TopLevelTables
        **/
        readonly TopLevelTables: WpsTables;

        InsertDatabase(Format?: any, Style?: any, LinkToSource?: any, Connection?: any, SQLStatement?: any, SQLStatement1?: any, PasswordDocument?: any, PasswordTemplate?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, DataSource?: any, From?: any, To?: any, IncludeFields?: any): void;

        CheckGrammar(): void;

        GetSpellingSuggestions(CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, SuggestionMode?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any, prop?: WpsSpellingSuggestions): void;

        InsertParagraphBefore(): void;

        NextSubdocument(): void;

        PreviousSubdocument(): void;

        PasteAsNestedTable(): void;

        ModifyEnclosure(Style?: any, Symbol?: any, EnclosedText?: any): void;

        PhoneticGuide(Text?: string, Alignment?: WpsWdPhoneticGuideAlignmentType, Raise?: number, FontSize?: number, FontName?: string): void;

        InsertDateTime(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any, DateLanguage?: any, CalendarType?: any): void;

        /**
        * LanguageDetected
        **/
        LanguageDetected: boolean;

        /**
        * FitTextWidth
        **/
        FitTextWidth: number;

        /**
        * HorizontalInVertical
        **/
        HorizontalInVertical: WpsWdHorizontalInVerticalType;

        /**
        * TwoLinesInOne
        **/
        TwoLinesInOne: WpsWdTwoLinesInOneType;

        /**
        * NoProofing
        **/
        NoProofing: number;

        /**
        * Scripts
        **/
        readonly Scripts: Kso.KsoScripts;

        /**
        * Kana
        **/
        Kana: WpsWdKana;

        /**
        * BoldBi
        **/
        BoldBi: number;

        /**
        * ID
        **/
        ID: string;

        /**
        * HTMLDivisions
        **/
        readonly HTMLDivisions: WpsHTMLDivisions;

        /**
        * SmartTags
        **/
        readonly SmartTags: WpsSmartTags;

        /**
        * ShowAll
        **/
        ShowAll: boolean;

        /**
        * Document
        **/
        readonly Document: WpsDocument;

        /**
        * FootnoteOptions
        **/
        readonly FootnoteOptions: WpsFootnoteOptions;

        /**
        * Conflicts
        **/
        readonly Conflicts: WpsConflicts;

        PasteAndFormat(Type?: WpsWdRecoveryType): void;

        PasteExcelTable(LinkedToExcel?: boolean, WordFormatting?: boolean, RTF?: boolean): void;

        PasteAppendTable(): void;

        /**
        * XMLNodes
        **/
        readonly XMLNodes: WpsXMLNodes;

        /**
        * XMLParentNode
        **/
        readonly XMLParentNode: WpsXMLNode;

        XML(DataOnly?: boolean, prop?: string): void;

        /**
        * EnhMetaFileBits
        **/
        readonly EnhMetaFileBits: any;

        InsertXML(XML?: string, Transform?: any): void;

        InsertCaption(Label?: any, Title?: any, TitleAutoText?: any, Position?: any, ExcludeLabel?: any): void;

        /**
        * TableStyle
        **/
        readonly TableStyle: any;

        InsertCrossReference(ReferenceType?: any, ReferenceKind?: WpsWdReferenceKind, ReferenceItem?: any, InsertAsHyperlink?: any, IncludePosition?: any, SeparateNumbers?: any, SeparatorString?: any): void;

        /**
        * CharacterStyle
        **/
        readonly CharacterStyle: any;

        /**
        * ParagraphStyle
        **/
        readonly ParagraphStyle: any;

        /**
        * ListStyle
        **/
        readonly ListStyle: any;

        /**
        * ContentControls
        **/
        readonly ContentControls: WpsContentControls;

        ExportFragment(FileName?: string, Format?: WpsWdSaveFormat): void;

        /**
        * WordOpenXML
        **/
        readonly WordOpenXML: string;

        SetListLevel(Level?: number): void;

        InsertAlignmentTab(Alignment?: number, RelativeTo?: number): void;

        /**
        * ParentContentControl
        **/
        readonly ParentContentControl: WpsContentControl;

        ImportFragment(FileName?: string, MatchDestination?: boolean): void;

        /**
        * Locks
        **/
        readonly Locks: WpsCoAuthLocks;

        /**
        * Updates
        **/
        readonly Updates: WpsCoAuthUpdates;

        /**
        * TextVisibleOnScreen
        **/
        readonly TextVisibleOnScreen: number;

        SortByHeadings(SortFieldType?: any, SortOrder?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;

    }

    interface WpsTable {
        AutoFitBehavior(Behavior?: WpsWdAutoFitBehavior): void;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        ConvertToTextOld(Separator?: any, prop?: WpsRange): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * ApplyStyleRowBands
        **/
        ApplyStyleRowBands: boolean;

        /**
        * Columns
        **/
        readonly Columns: WpsColumns;

        /**
        * Rows
        **/
        readonly Rows: WpsRows;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * Uniform
        **/
        readonly Uniform: boolean;

        /**
        * ApplyStyleLastColumn
        **/
        ApplyStyleLastColumn: boolean;

        /**
        * AutoFormatType
        **/
        readonly AutoFormatType: number;

        Select(): void;

        /**
        * Tables
        **/
        readonly Tables: WpsTables;

        Delete(): void;

        SortOld(ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any, SortFieldType3?: any, SortOrder3?: any, CaseSensitive?: any, LanguageID?: any): void;

        SortAscending(): void;

        SortDescending(): void;

        /**
        * ApplyStyleFirstColumn
        **/
        ApplyStyleFirstColumn: boolean;

        /**
        * ID
        **/
        ID: string;

        AutoFormat(Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any, ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any): void;

        /**
        * ApplyStyleColumnBands
        **/
        ApplyStyleColumnBands: boolean;

        UpdateAutoFormat(): void;

        Cell(Row?: number, Column?: number, prop?: WpsCell): void;

        Split(BeforeRow?: any, prop?: WpsTable): void;

        ConvertToText(Separator?: any, NestedTables?: any, prop?: WpsRange): void;

        Sort(ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any, SortFieldType3?: any, SortOrder3?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

        /**
        * AllowPageBreaks
        **/
        AllowPageBreaks: boolean;

        /**
        * AllowAutoFit
        **/
        AllowAutoFit: boolean;

        /**
        * PreferredWidth
        **/
        PreferredWidth: number;

        /**
        * PreferredWidthType
        **/
        PreferredWidthType: WpsWdPreferredWidthType;

        /**
        * TopPadding
        **/
        TopPadding: number;

        /**
        * BottomPadding
        **/
        BottomPadding: number;

        /**
        * LeftPadding
        **/
        LeftPadding: number;

        /**
        * RightPadding
        **/
        RightPadding: number;

        /**
        * Spacing
        **/
        Spacing: number;

        /**
        * ApplyStyleLastRow
        **/
        ApplyStyleLastRow: boolean;

        /**
        * ApplyStyleHeadingRows
        **/
        ApplyStyleHeadingRows: boolean;

        /**
        * TableDirection
        **/
        TableDirection: WpsWdTableDirection;

        /**
        * Style
        **/
        Style: any;

        ApplyStyleDirectFormatting(StyleName?: string): void;

        /**
        * Title
        **/
        Title: string;

        /**
        * Descr
        **/
        Descr: string;

    }

    interface WpsDocuments {
        OpenOld(FileName?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, prop?: WpsDocument): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsDocument): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        AddOld(Template?: any, NewTemplate?: any, prop?: WpsDocument): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Close(SaveChanges?: any, OriginalFormat?: any, RouteDocument?: any): void;

        Save(NoPrompt?: any, OriginalFormat?: any): void;

        Add(Template?: any, NewTemplate?: any, DocumentType?: any, Visible?: any, prop?: WpsDocument): void;

        Open2002(FileName?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, OpenAndRepair?: any, DocumentDirection?: any, NoEncodingDialog?: any, prop?: WpsDocument): void;

        Open2000(FileName?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, prop?: WpsDocument): void;

        CheckOut(FileName?: string): void;

        CanCheckOut(FileName?: string, prop?: boolean): void;

        Open(FileName?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, OpenAndRepair?: any, DocumentDirection?: any, NoEncodingDialog?: any, XMLTransform?: any, prop?: WpsDocument): void;

        OpenNoRepairDialog(FileName?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, OpenAndRepair?: any, DocumentDirection?: any, NoEncodingDialog?: any, XMLTransform?: any, prop?: WpsDocument): void;

        AddBlogDocument(ProviderID?: string, PostURL?: string, BlogName?: string, PostID?: string, prop?: WpsDocument): void;

    }

    interface WpsHiLoLines {
        Delete(): void;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        Select(): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsDocument {
        /**
        * OMathIntSubSupLim
        **/
        OMathIntSubSupLim: boolean;

        /**
        * Tables
        **/
        readonly Tables: WpsTables;

        /**
        * Versions
        **/
        readonly Versions: WpsVersions;

        /**
        * ListTemplates
        **/
        readonly ListTemplates: WpsListTemplates;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        DetectLanguage(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Words
        **/
        readonly Words: WpsWords;

        ExportAsFixedFormat(OutputFileName?: string, ExportFormat?: WpsWdExportFormat, OpenAfterExport?: boolean, OptimizeFor?: WpsWdExportOptimizeFor, Range?: WpsWdExportRange, From?: number, To?: number, Item?: WpsWdExportItem, IncludeDocProps?: boolean, KeepIRM?: boolean, CreateBookmarks?: WpsWdExportCreateBookmarks, DocStructureTags?: boolean, BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, FixedFormatExtClassPtr?: any): void;

        /**
        * Bookmarks
        **/
        readonly Bookmarks: WpsBookmarks;

        /**
        * BuiltInDocumentProperties
        **/
        readonly BuiltInDocumentProperties: any;

        /**
        * SaveFormat
        **/
        readonly SaveFormat: number;

        RejectAllRevisionsShown(): void;

        /**
        * CustomDocumentProperties
        **/
        readonly CustomDocumentProperties: any;

        /**
        * Path
        **/
        readonly Path: string;

        /**
        * DoNotEmbedSystemFonts
        **/
        DoNotEmbedSystemFonts: boolean;

        Compatibility(Type?: WpsWdCompatibility, prop?: boolean): void;

        /**
        * _CodeName
        **/
        _CodeName: string;

        /**
        * Footnotes
        **/
        readonly Footnotes: WpsFootnotes;

        RemoveNumbers(NumberType?: any): void;

        /**
        * Endnotes
        **/
        readonly Endnotes: WpsEndnotes;

        /**
        * Shapes
        **/
        readonly Shapes: Kso.KsoShapes;

        /**
        * Comments
        **/
        readonly Comments: WpsComments;

        /**
        * Type
        **/
        readonly Type: WpsWdDocumentType;

        /**
        * ActiveTheme
        **/
        readonly ActiveTheme: string;

        Post(): void;

        /**
        * AutoHyphenation
        **/
        AutoHyphenation: boolean;

        /**
        * Windows
        **/
        readonly Windows: WpsWindows;

        /**
        * KerningByAlgorithm
        **/
        KerningByAlgorithm: boolean;

        /**
        * HyphenateCaps
        **/
        HyphenateCaps: boolean;

        /**
        * AttachedTemplate
        **/
        AttachedTemplate: any;

        /**
        * HyphenationZone
        **/
        HyphenationZone: number;

        /**
        * TablesOfAuthorities
        **/
        readonly TablesOfAuthorities: WpsTablesOfAuthorities;

        /**
        * ConsecutiveHyphensLimit
        **/
        ConsecutiveHyphensLimit: number;

        /**
        * Hyperlinks
        **/
        readonly Hyperlinks: WpsHyperlinks;

        /**
        * PasswordEncryptionProvider
        **/
        readonly PasswordEncryptionProvider: string;

        /**
        * Characters
        **/
        readonly Characters: WpsCharacters;

        /**
        * LockQuickStyleSet
        **/
        LockQuickStyleSet: boolean;

        UpdateStyles(): void;

        /**
        * Sections
        **/
        readonly Sections: WpsSections;

        /**
        * DefaultTableStyle
        **/
        readonly DefaultTableStyle: any;

        /**
        * Paragraphs
        **/
        readonly Paragraphs: WpsParagraphs;

        /**
        * DocID
        **/
        readonly DocID: number;

        /**
        * RoutingSlip
        **/
        readonly RoutingSlip: WpsRoutingSlip;

        /**
        * Sentences
        **/
        readonly Sentences: WpsSentences;

        /**
        * Fields
        **/
        readonly Fields: WpsFields;

        RunLetterWizard(LetterContent?: any, WizardMode?: any): void;

        /**
        * FormFields
        **/
        readonly FormFields: WpsFormFields;

        ReturnToLastReadPosition(prop?: number): void;

        /**
        * Indexes
        **/
        readonly Indexes: WpsIndexes;

        /**
        * ReadOnlyRecommended
        **/
        ReadOnlyRecommended: boolean;

        /**
        * HTMLProject
        **/
        readonly HTMLProject: Kso.KsoHTMLProject;

        MakeCompatibilityDefault(): void;

        /**
        * EmbedTrueTypeFonts
        **/
        EmbedTrueTypeFonts: boolean;

        SendMailer(FileFormat?: any, Priority?: any): void;

        /**
        * Styles
        **/
        readonly Styles: WpsStyles;

        /**
        * TablesOfAuthoritiesCategories
        **/
        readonly TablesOfAuthoritiesCategories: WpsTablesOfAuthoritiesCategories;

        DowngradeDocument(): void;

        /**
        * HasVBProject
        **/
        readonly HasVBProject: boolean;

        /**
        * DocumentInspectors
        **/
        readonly DocumentInspectors: Kso.KsoDocumentInspectors;

        /**
        * ListParagraphs
        **/
        readonly ListParagraphs: WpsListParagraphs;

        /**
        * Routed
        **/
        readonly Routed: boolean;

        /**
        * Frames
        **/
        readonly Frames: WpsFrames;

        /**
        * TablesOfFigures
        **/
        readonly TablesOfFigures: WpsTablesOfFigures;

        Compare2002(Name?: string, AuthorName?: any, CompareTarget?: any, DetectFormatChanges?: any, IgnoreAllComparisonWarnings?: any, AddToRecentFiles?: any): void;

        Compare2000(Name?: string): void;

        /**
        * Kind
        **/
        Kind: WpsWdDocumentKind;

        /**
        * Variables
        **/
        readonly Variables: WpsVariables;

        /**
        * HasMailer
        **/
        HasMailer: boolean;

        /**
        * MailMerge
        **/
        readonly MailMerge: WpsMailMerge;

        /**
        * StoryRanges
        **/
        readonly StoryRanges: WpsStoryRanges;

        /**
        * RemovePersonalInformation
        **/
        RemovePersonalInformation: boolean;

        /**
        * Envelope
        **/
        readonly Envelope: WpsEnvelope;

        /**
        * TrackFormatting
        **/
        TrackFormatting: boolean;

        /**
        * FullName
        **/
        readonly FullName: string;

        /**
        * OMaths
        **/
        readonly OMaths: WpsOMaths;

        /**
        * FormattingShowNumbering
        **/
        FormattingShowNumbering: boolean;

        /**
        * Revisions
        **/
        readonly Revisions: WpsRevisions;

        /**
        * TablesOfContents
        **/
        readonly TablesOfContents: WpsTablesOfContents;

        /**
        * FormattingShowFilter
        **/
        FormattingShowFilter: WpsWdShowFilter;

        /**
        * PageSetup
        **/
        PageSetup: WpsPageSetup;

        SelectContentControlsByTitle(Title?: string, prop?: WpsContentControls): void;

        /**
        * HasRoutingSlip
        **/
        HasRoutingSlip: boolean;

        /**
        * SaveFormsData
        **/
        SaveFormsData: boolean;

        /**
        * SaveSubsetFonts
        **/
        SaveSubsetFonts: boolean;

        /**
        * Saved
        **/
        Saved: boolean;

        /**
        * OMathJc
        **/
        OMathJc: WpsWdOMathJc;

        /**
        * DefaultTabStop
        **/
        DefaultTabStop: number;

        /**
        * Content
        **/
        readonly Content: WpsRange;

        SelectLinkedControls(Node?: Kso.KsoCustomXMLNode, prop?: WpsContentControls): void;

        /**
        * ActiveWindow
        **/
        readonly ActiveWindow: WpsWindow;

        /**
        * ReadOnly
        **/
        readonly ReadOnly: boolean;

        ComputeStatistics(Statistic?: WpsWdStatistic, IncludeFootnotesAndEndnotes?: any, prop?: number): void;

        /**
        * Subdocuments
        **/
        readonly Subdocuments: WpsSubdocuments;

        /**
        * IsMasterDocument
        **/
        readonly IsMasterDocument: boolean;

        /**
        * CommandBars
        **/
        readonly CommandBars: Kso.KsoCommandBars;

        /**
        * IsSubdocument
        **/
        readonly IsSubdocument: boolean;

        /**
        * XMLSchemaReferences
        **/
        readonly XMLSchemaReferences: WpsXMLSchemaReferences;

        /**
        * ProtectionType
        **/
        readonly ProtectionType: WpsWdProtectionType;

        /**
        * XMLSaveDataOnly
        **/
        XMLSaveDataOnly: boolean;

        /**
        * Signatures
        **/
        readonly Signatures: Kso.KsoSignatureSet;

        /**
        * Lists
        **/
        readonly Lists: WpsLists;

        /**
        * UpdateStylesOnOpen
        **/
        UpdateStylesOnOpen: boolean;

        CountNumberedItems(NumberType?: any, Level?: any, prop?: number): void;

        /**
        * InlineShapes
        **/
        readonly InlineShapes: WpsInlineShapes;

        /**
        * Background
        **/
        Background: Kso.KsoShape;

        /**
        * GrammarChecked
        **/
        GrammarChecked: boolean;

        /**
        * SpellingChecked
        **/
        SpellingChecked: boolean;

        /**
        * ShowGrammaticalErrors
        **/
        ShowGrammaticalErrors: boolean;

        /**
        * ShowSpellingErrors
        **/
        ShowSpellingErrors: boolean;

        /**
        * ShowSummary
        **/
        ShowSummary: boolean;

        /**
        * SummaryViewMode
        **/
        SummaryViewMode: WpsWdSummaryMode;

        /**
        * SummaryLength
        **/
        SummaryLength: number;

        /**
        * PasswordEncryptionFileProperties
        **/
        readonly PasswordEncryptionFileProperties: boolean;

        /**
        * PrintFractionalWidths
        **/
        PrintFractionalWidths: boolean;

        /**
        * Email
        **/
        readonly Email: WpsEmail;

        /**
        * PrintPostScriptOverText
        **/
        PrintPostScriptOverText: boolean;

        /**
        * Container
        **/
        readonly Container: any;

        /**
        * PrintFormsData
        **/
        PrintFormsData: boolean;

        /**
        * Password
        **/
        Password: string;

        /**
        * WritePassword
        **/
        WritePassword: string;

        /**
        * HasPassword
        **/
        readonly HasPassword: boolean;

        /**
        * WriteReserved
        **/
        readonly WriteReserved: boolean;

        ActiveWritingStyle(LanguageID?: any, prop?: string): void;

        /**
        * UserControl
        **/
        UserControl: boolean;

        ApplyTheme(Name?: string): void;

        /**
        * Mailer
        **/
        readonly Mailer: WpsMailer;

        /**
        * ReadabilityStatistics
        **/
        readonly ReadabilityStatistics: WpsReadabilityStatistics;

        /**
        * GrammaticalErrors
        **/
        readonly GrammaticalErrors: WpsProofreadingErrors;

        /**
        * SpellingErrors
        **/
        readonly SpellingErrors: WpsProofreadingErrors;

        /**
        * DefaultTargetFrame
        **/
        DefaultTargetFrame: string;

        /**
        * CodeName
        **/
        readonly CodeName: string;

        /**
        * FormsDesign
        **/
        readonly FormsDesign: boolean;

        /**
        * FormattingShowClear
        **/
        FormattingShowClear: boolean;

        AutoFormat(): void;

        /**
        * SnapToGrid
        **/
        SnapToGrid: boolean;

        /**
        * SnapToShapes
        **/
        SnapToShapes: boolean;

        /**
        * GridDistanceHorizontal
        **/
        GridDistanceHorizontal: number;

        /**
        * GridDistanceVertical
        **/
        GridDistanceVertical: number;

        /**
        * GridOriginHorizontal
        **/
        GridOriginHorizontal: number;

        /**
        * GridOriginVertical
        **/
        GridOriginVertical: number;

        /**
        * GridSpaceBetweenHorizontalLines
        **/
        GridSpaceBetweenHorizontalLines: number;

        /**
        * GridSpaceBetweenVerticalLines
        **/
        GridSpaceBetweenVerticalLines: number;

        /**
        * GridOriginFromMargin
        **/
        GridOriginFromMargin: boolean;

        /**
        * JustificationMode
        **/
        JustificationMode: WpsWdJustificationMode;

        /**
        * FarEastLineBreakLevel
        **/
        FarEastLineBreakLevel: WpsWdFarEastLineBreakLevel;

        /**
        * NoLineBreakBefore
        **/
        NoLineBreakBefore: string;

        /**
        * NoLineBreakAfter
        **/
        NoLineBreakAfter: string;

        SetDefaultTableStyle(Style?: any, SetInTemplate?: boolean): void;

        /**
        * TrackRevisions
        **/
        TrackRevisions: boolean;

        /**
        * ServerPolicy
        **/
        readonly ServerPolicy: Kso.KsoServerPolicy;

        RemoveDocumentWorkspaceHeader(ID?: string): void;

        /**
        * PrintRevisions
        **/
        PrintRevisions: boolean;

        /**
        * ShowRevisions
        **/
        ShowRevisions: boolean;

        ConvertVietDoc(CodePageOrigin?: number): void;

        RejectAllRevisions(): void;

        Close(SaveChanges?: any, OriginalFormat?: any, RouteDocument?: any): void;

        SaveAs2000(FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any, EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any): void;

        Repaginate(): void;

        FitToPages(): void;

        /**
        * Scripts
        **/
        readonly Scripts: Kso.KsoScripts;

        ManualHyphenation(): void;

        Select(): void;

        DataForm(): void;

        Route(): void;

        Save(): void;

        WebPagePreview(): void;

        PrintOutOld(Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any, PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any): void;

        SendMail(): void;

        Range(Start?: any, End?: any, prop?: WpsRange): void;

        sblt(s?: string): void;

        Reply(): void;

        RunAutoMacro(Which?: WpsWdAutoMacros): void;

        Activate(): void;

        PrintPreview(): void;

        GoTo(What?: any, Which?: any, Count?: any, Name?: any, prop?: WpsRange): void;

        /**
        * OptimizeForWord97
        **/
        OptimizeForWord97: boolean;

        Undo(Times?: any, prop?: boolean): void;

        GetWorkflowTasks(prop?: Kso.KsoWorkflowTasks): void;

        Redo(Times?: any, prop?: boolean): void;

        Protect2002(Type?: WpsWdProtectionType, NoReset?: any, Password?: any): void;

        /**
        * OMathFontName
        **/
        OMathFontName: string;

        Unprotect(Password?: any): void;

        /**
        * ContentControls
        **/
        readonly ContentControls: WpsContentControls;

        EditionOptions(Type?: WpsWdEditionType, Option?: WpsWdEditionOption, Name?: string, Format?: any): void;

        GetLetterContent(prop?: WpsLetterContent): void;

        SetLetterContent(LetterContent?: any): void;

        CopyStylesFromTemplate(Template?: string): void;

        /**
        * WebOptions
        **/
        readonly WebOptions: WpsWebOptions;

        CheckGrammar(): void;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): void;

        FollowHyperlink(Address?: any, SubAddress?: any, NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;

        AddToFavorites(): void;

        /**
        * XMLUseXSLTWhenSaving
        **/
        XMLUseXSLTWhenSaving: boolean;

        Reload(): void;

        ApplyDocumentTheme(FileName?: string): void;

        AutoSummarize(Length?: any, Mode?: any, UpdateProperties?: any, prop?: WpsRange): void;

        ConvertNumbersToText(NumberType?: any): void;

        /**
        * CustomXMLParts
        **/
        readonly CustomXMLParts: Kso.KsoCustomXMLParts;

        ToggleFormsDesign(): void;

        UpdateSummaryProperties(): void;

        GetCrossReferenceItems(ReferenceType?: any, prop?: any): void;

        ViewCode(): void;

        ViewPropertyBrowser(): void;

        ForwardMailer(): void;

        ReplyAll(): void;

        UndoClear(): void;

        PresentIt(): void;

        /**
        * RemoveDateAndTime
        **/
        RemoveDateAndTime: boolean;

        SendFax(Address?: string, Subject?: any): void;

        Merge2000(FileName?: string): void;

        ClosePrintPreview(): void;

        CheckConsistency(): void;

        CreateLetterContent(DateFormat?: string, IncludeHeaderFooter?: boolean, PageDesign?: string, LetterStyle?: WpsWdLetterStyle, Letterhead?: boolean, LetterheadLocation?: WpsWdLetterheadLocation, LetterheadSize?: number, RecipientName?: string, RecipientAddress?: string, Salutation?: string, SalutationType?: WpsWdSalutationType, RecipientReference?: string, MailingInstructions?: string, AttentionLine?: string, Subject?: string, CCList?: string, ReturnAddress?: string, SenderName?: string, Closing?: string, SenderCompany?: string, SenderJobTitle?: string, SenderInitials?: string, EnclosureNumber?: number, InfoBlock?: any, RecipientCode?: any, RecipientGender?: any, ReturnAddressShortForm?: any, SenderCity?: any, SenderCode?: any, SenderGender?: any, SenderReference?: any, prop?: WpsLetterContent): void;

        AcceptAllRevisions(): void;

        RemoveTheme(): void;

        ReloadAs(Encoding?: Kso.KsoMsoEncoding): void;

        /**
        * PasswordEncryptionKeyLength
        **/
        readonly PasswordEncryptionKeyLength: number;

        /**
        * ActiveThemeDisplayName
        **/
        readonly ActiveThemeDisplayName: string;

        /**
        * LanguageDetected
        **/
        LanguageDetected: boolean;

        /**
        * FarEastLineBreakLanguage
        **/
        FarEastLineBreakLanguage: WpsWdFarEastLineBreakLanguageID;

        /**
        * HTMLDivisions
        **/
        readonly HTMLDivisions: WpsHTMLDivisions;

        /**
        * Frameset
        **/
        readonly Frameset: WpsFrameset;

        /**
        * ClickAndTypeParagraphStyle
        **/
        ClickAndTypeParagraphStyle: any;

        /**
        * OpenEncoding
        **/
        readonly OpenEncoding: Kso.KsoMsoEncoding;

        /**
        * SaveEncoding
        **/
        SaveEncoding: Kso.KsoMsoEncoding;

        /**
        * VBASigned
        **/
        readonly VBASigned: boolean;

        PrintOut2000(Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any, PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;

        PrintOut(Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any, PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;

        /**
        * MailEnvelope
        **/
        readonly MailEnvelope: Kso.KsoMsoEnvelopeVB;

        /**
        * DisableFeatures
        **/
        DisableFeatures: boolean;

        /**
        * DisableFeaturesIntroducedAfter
        **/
        DisableFeaturesIntroducedAfter: WpsWdDisableFeaturesIntroducedAfter;

        /**
        * SmartTags
        **/
        readonly SmartTags: WpsSmartTags;

        CheckIn(SaveChanges?: boolean, Comments?: any, MakePublic?: boolean): void;

        CanCheckin(prop?: boolean): void;

        ConvertAutoHyphens(): void;

        /**
        * XMLHideNamespaces
        **/
        XMLHideNamespaces: boolean;

        Merge(FileName?: string, MergeTarget?: any, DetectFormatChanges?: any, UseFormattingFrom?: any, AddToRecentFiles?: any): void;

        /**
        * ChildNodeSuggestions
        **/
        readonly ChildNodeSuggestions: WpsXMLChildNodeSuggestions;

        /**
        * EmbedSmartTags
        **/
        EmbedSmartTags: boolean;

        /**
        * SmartTagsAsXMLProps
        **/
        SmartTagsAsXMLProps: boolean;

        /**
        * StyleSheets
        **/
        readonly StyleSheets: WpsStyleSheets;

        /**
        * TextEncoding
        **/
        TextEncoding: Kso.KsoMsoEncoding;

        /**
        * TextLineEnding
        **/
        TextLineEnding: WpsWdLineEndingType;

        /**
        * OriginalDocumentTitle
        **/
        readonly OriginalDocumentTitle: string;

        SendForReview(Recipients?: any, Subject?: any, ShowMessage?: any, IncludeAttachment?: any): void;

        ReplyWithChanges(ShowMessage?: any): void;

        RemoveSmartTags(): void;

        EndReview(): void;

        /**
        * PasswordEncryptionAlgorithm
        **/
        readonly PasswordEncryptionAlgorithm: string;

        SetPasswordEncryptionOptions(PasswordEncryptionProvider?: string, PasswordEncryptionAlgorithm?: string, PasswordEncryptionKeyLength?: number, PasswordEncryptionFileProperties?: any): void;

        RecheckSmartTags(): void;

        DeleteAllComments(): void;

        AcceptAllRevisionsShown(): void;

        DeleteAllCommentsShown(): void;

        ResetFormFields(): void;

        /**
        * ReadingLayoutSizeY
        **/
        ReadingLayoutSizeY: number;

        /**
        * ReadingLayoutSizeX
        **/
        ReadingLayoutSizeX: number;

        SaveAs(FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any, EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any, Encoding?: any, InsertLineBreaks?: any, AllowSubstitutions?: any, LineEnding?: any, AddBiDiMarks?: any): void;

        /**
        * EmbedLinguisticData
        **/
        EmbedLinguisticData: boolean;

        /**
        * FormattingShowParagraph
        **/
        FormattingShowParagraph: boolean;

        /**
        * FormattingShowFont
        **/
        FormattingShowFont: boolean;

        CheckNewSmartTags(): void;

        /**
        * Permission
        **/
        readonly Permission: Kso.KsoPermission;

        /**
        * XMLNodes
        **/
        readonly XMLNodes: WpsXMLNodes;

        RemoveLockedStyles(): void;

        /**
        * SmartDocument
        **/
        readonly SmartDocument: Kso.KsoSmartDocument;

        /**
        * SharedWorkspace
        **/
        readonly SharedWorkspace: Kso.KsoSharedWorkspace;

        /**
        * Sync
        **/
        readonly Sync: Kso.KsoSync;

        ApplyQuickStyleSet2(Style?: any): void;

        Compare(Name?: string, AuthorName?: any, CompareTarget?: any, DetectFormatChanges?: any, IgnoreAllComparisonWarnings?: any, AddToRecentFiles?: any, RemovePersonalInformation?: any, RemoveDateAndTime?: any): void;

        /**
        * EnforceStyle
        **/
        EnforceStyle: boolean;

        /**
        * AutoFormatOverride
        **/
        AutoFormatOverride: boolean;

        /**
        * XMLShowAdvancedErrors
        **/
        XMLShowAdvancedErrors: boolean;

        /**
        * XMLSaveThroughXSLT
        **/
        XMLSaveThroughXSLT: string;

        SelectContentControlsByTag(Tag?: string, prop?: WpsContentControls): void;

        /**
        * OMathRightMargin
        **/
        OMathRightMargin: number;

        /**
        * DocumentLibraryVersions
        **/
        readonly DocumentLibraryVersions: Kso.KsoDocumentLibraryVersions;

        /**
        * ReadingModeLayoutFrozen
        **/
        ReadingModeLayoutFrozen: boolean;

        Dummy4(): void;

        /**
        * Dummy3
        **/
        readonly Dummy3: any;

        Dummy2(): void;

        /**
        * Dummy1
        **/
        readonly Dummy1: any;

        SendFaxOverInternet(Recipients?: any, Subject?: any, ShowMessage?: any): void;

        TransformDocument(Path?: string, DataOnly?: boolean): void;

        Protect(Type?: WpsWdProtectionType, NoReset?: any, Password?: any, UseIRM?: any, EnforceStyleLock?: any): void;

        SelectAllEditableRanges(EditorID?: any): void;

        DeleteAllEditableRanges(EditorID?: any): void;

        /**
        * UseMathDefaults
        **/
        UseMathDefaults: boolean;

        DeleteAllInkAnnotations(): void;

        AddDocumentWorkspaceHeader(RichFormat?: boolean, Url?: string, Title?: string, Description?: string, ID?: string): void;

        SelectSingleNode(XPath?: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean, prop?: WpsXMLNode): void;

        SelectNodes(XPath?: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean, prop?: WpsXMLNodes): void;

        /**
        * XMLSchemaViolations
        **/
        readonly XMLSchemaViolations: WpsXMLNodes;

        ApplyQuickStyleSet(Name?: string): void;

        /**
        * StyleSortMethod
        **/
        StyleSortMethod: WpsWdStyleSort;

        /**
        * ContentTypeProperties
        **/
        readonly ContentTypeProperties: Kso.KsoMetaProperties;

        Convert(): void;

        /**
        * RevisedDocumentTitle
        **/
        readonly RevisedDocumentTitle: string;

        /**
        * TrackMoves
        **/
        TrackMoves: boolean;

        RemoveDocumentInformation(RemoveDocInfoType?: WpsWdRemoveDocInfoType): void;

        /**
        * OMathNarySupSubLim
        **/
        OMathNarySupSubLim: boolean;

        CheckInWithVersion(SaveChanges?: boolean, Comments?: any, MakePublic?: boolean, VersionType?: any): void;

        LockServerFile(): void;

        GetWorkflowTemplates(prop?: Kso.KsoWorkflowTemplates): void;

        AddMeetingWorkspaceHeader(SkipIfAbsent?: boolean, Url?: string, Title?: string, Description?: string, ID?: string): void;

        /**
        * Bibliography
        **/
        readonly Bibliography: WpsBibliography;

        /**
        * Research
        **/
        readonly Research: WpsResearch;

        /**
        * LockTheme
        **/
        LockTheme: boolean;

        /**
        * FormattingShowNextLevel
        **/
        FormattingShowNextLevel: boolean;

        /**
        * FormattingShowUserStyleName
        **/
        FormattingShowUserStyleName: boolean;

        SaveAsQuickStyleSet(FileName?: string): void;

        /**
        * Final
        **/
        Final: boolean;

        /**
        * OMathBreakBin
        **/
        OMathBreakBin: WpsWdOMathBreakBin;

        /**
        * OMathBreakSub
        **/
        OMathBreakSub: WpsWdOMathBreakSub;

        /**
        * OMathLeftMargin
        **/
        OMathLeftMargin: number;

        /**
        * OMathWrap
        **/
        OMathWrap: number;

        /**
        * OMathSmallFrac
        **/
        OMathSmallFrac: boolean;

        /**
        * WordOpenXML
        **/
        readonly WordOpenXML: string;

        /**
        * DocumentTheme
        **/
        readonly DocumentTheme: Kso.KsoOfficeTheme;

        SelectUnlinkedControls(Stream?: Kso.KsoCustomXMLPart, prop?: WpsContentControls): void;

        FreezeLayout(): void;

        UnfreezeLayout(): void;

        /**
        * EncryptionProvider
        **/
        EncryptionProvider: string;

        /**
        * CurrentRsid
        **/
        readonly CurrentRsid: number;

        /**
        * CompatibilityMode
        **/
        readonly CompatibilityMode: number;

        SaveAs2(FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any, EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any, Encoding?: any, InsertLineBreaks?: any, AllowSubstitutions?: any, LineEnding?: any, AddBiDiMarks?: any, CompatibilityMode?: any): void;

        /**
        * CoAuthoring
        **/
        readonly CoAuthoring: WpsCoAuthoring;

        SetCompatibilityMode(Mode?: number): void;

        /**
        * Broadcast
        **/
        readonly Broadcast: WpsBroadcast;

        /**
        * ChartDataPointTrack
        **/
        ChartDataPointTrack: boolean;

        /**
        * IsInAutosave
        **/
        readonly IsInAutosave: boolean;

        SaveCopyAs(FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any, EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any, Encoding?: any, InsertLineBreaks?: any, AllowSubstitutions?: any, LineEnding?: any, AddBiDiMarks?: any, CompatibilityMode?: any): void;

        /**
        * DocumentFields
        **/
        readonly DocumentFields: WpsDocumentFields;

    }

    interface WpsLine {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Top
        **/
        readonly Top: number;

        /**
        * LineType
        **/
        readonly LineType: WpsWdLineType;

        /**
        * Left
        **/
        readonly Left: number;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Rectangles
        **/
        readonly Rectangles: WpsRectangles;

    }

    interface WpsXMLNode {
        /**
        * BaseName
        **/
        readonly BaseName: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * NextSibling
        **/
        readonly NextSibling: WpsXMLNode;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * ChildNodeSuggestions
        **/
        readonly ChildNodeSuggestions: WpsXMLChildNodeSuggestions;

        /**
        * NamespaceURI
        **/
        readonly NamespaceURI: string;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Text
        **/
        Text: string;

        /**
        * NodeType
        **/
        readonly NodeType: WpsWdXMLNodeType;

        XML(DataOnly?: boolean, prop?: string): void;

        /**
        * WordOpenXML
        **/
        readonly WordOpenXML: string;

        Validate(): void;

        /**
        * PreviousSibling
        **/
        readonly PreviousSibling: WpsXMLNode;

        /**
        * ParentNode
        **/
        readonly ParentNode: WpsXMLNode;

        /**
        * OwnerDocument
        **/
        readonly OwnerDocument: WpsDocument;

        /**
        * FirstChild
        **/
        readonly FirstChild: WpsXMLNode;

        Delete(): void;

        /**
        * LastChild
        **/
        readonly LastChild: WpsXMLNode;

        /**
        * ChildNodes
        **/
        readonly ChildNodes: WpsXMLNodes;

        /**
        * Attributes
        **/
        readonly Attributes: WpsXMLNodes;

        /**
        * NodeValue
        **/
        NodeValue: string;

        /**
        * HasChildNodes
        **/
        readonly HasChildNodes: boolean;

        SelectSingleNode(XPath?: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean, prop?: WpsXMLNode): void;

        SelectNodes(XPath?: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean, prop?: WpsXMLNodes): void;

        /**
        * PlaceholderText
        **/
        PlaceholderText: string;

        /**
        * Level
        **/
        readonly Level: WpsWdXMLNodeLevel;

        /**
        * ValidationStatus
        **/
        readonly ValidationStatus: WpsWdXMLValidationStatus;

        /**
        * SmartTag
        **/
        readonly SmartTag: WpsSmartTag;

        ValidationErrorText(Advanced?: boolean, prop?: string): void;

        Copy(): void;

        RemoveChild(ChildElement?: WpsXMLNode): void;

        Cut(): void;

        SetValidationError(Status?: WpsWdXMLValidationStatus, ErrorText?: any, ClearedAutomatically?: boolean): void;

    }

    interface WpsApplication {
        /**
        * System
        **/
        readonly System: WpsSystem;

        /**
        * Selection
        **/
        readonly Selection: WpsSelection;

        /**
        * Windows
        **/
        readonly Windows: WpsWindows;

        /**
        * BackgroundSavingStatus
        **/
        readonly BackgroundSavingStatus: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * IsSandboxed
        **/
        readonly IsSandboxed: boolean;

        /**
        * CustomizationContext
        **/
        CustomizationContext: any;

        /**
        * ActiveWindow
        **/
        readonly ActiveWindow: WpsWindow;

        /**
        * Version
        **/
        readonly Version: string;

        /**
        * SmartArtLayouts
        **/
        readonly SmartArtLayouts: Kso.KsoSmartArtLayouts;

        DDEInitiate(App?: string, Topic?: string, prop?: number): void;

        /**
        * Browser
        **/
        readonly Browser: WpsBrowser;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * ActivePrinter
        **/
        ActivePrinter: string;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * MathCoprocessorAvailable
        **/
        readonly MathCoprocessorAvailable: boolean;

        /**
        * LandscapeFontNames
        **/
        readonly LandscapeFontNames: WpsFontNames;

        /**
        * Documents
        **/
        readonly Documents: WpsDocuments;

        /**
        * ActiveDocument
        **/
        readonly ActiveDocument: WpsDocument;

        /**
        * WordBasic
        **/
        readonly WordBasic: any;

        /**
        * RecentFiles
        **/
        readonly RecentFiles: WpsRecentFiles;

        /**
        * NormalTemplate
        **/
        readonly NormalTemplate: WpsTemplate;

        /**
        * Top
        **/
        Top: number;

        /**
        * AutoCorrect
        **/
        readonly AutoCorrect: WpsAutoCorrect;

        /**
        * FileConverters
        **/
        readonly FileConverters: WpsFileConverters;

        /**
        * AddIns
        **/
        readonly AddIns: WpsAddIns;

        /**
        * PortraitFontNames
        **/
        readonly PortraitFontNames: WpsFontNames;

        /**
        * FontNames
        **/
        readonly FontNames: WpsFontNames;

        /**
        * Languages
        **/
        readonly Languages: WpsLanguages;

        /**
        * MailSystem
        **/
        readonly MailSystem: WpsWdMailSystem;

        /**
        * Dialogs
        **/
        readonly Dialogs: WpsDialogs;

        /**
        * SpecialMode
        **/
        readonly SpecialMode: boolean;

        /**
        * ListGalleries
        **/
        readonly ListGalleries: WpsListGalleries;

        /**
        * DisplayAlerts
        **/
        DisplayAlerts: WpsWdAlertLevel;

        /**
        * Assistant
        **/
        readonly Assistant: Kso.KsoAssistant;

        /**
        * AutomationSecurity
        **/
        AutomationSecurity: Kso.KsoMsoAutomationSecurity;

        /**
        * MailingLabel
        **/
        readonly MailingLabel: WpsMailingLabel;

        /**
        * CaptionLabels
        **/
        readonly CaptionLabels: WpsCaptionLabels;

        /**
        * AutoCaptions
        **/
        readonly AutoCaptions: WpsAutoCaptions;

        /**
        * MouseAvailable
        **/
        readonly MouseAvailable: boolean;

        /**
        * KeyBindings
        **/
        readonly KeyBindings: WpsKeyBindings;

        DDETerminate(Channel?: number): void;

        /**
        * Visible
        **/
        Visible: boolean;

        /**
        * UsableHeight
        **/
        readonly UsableHeight: number;

        /**
        * UserName
        **/
        UserName: string;

        /**
        * DisplayRecentFiles
        **/
        DisplayRecentFiles: boolean;

        /**
        * SmartArtQuickStyles
        **/
        readonly SmartArtQuickStyles: Kso.KsoSmartArtQuickStyles;

        /**
        * UsableWidth
        **/
        readonly UsableWidth: number;

        /**
        * PrintPreview
        **/
        PrintPreview: boolean;

        /**
        * ScreenUpdating
        **/
        ScreenUpdating: boolean;

        /**
        * StartupPath
        **/
        StartupPath: string;

        /**
        * FeatureInstall
        **/
        FeatureInstall: Kso.KsoMsoFeatureInstall;

        KeysBoundTo(KeyCategory?: WpsWdKeyCategory, Command?: string, CommandParameter?: any, prop?: WpsKeysBoundTo): void;

        /**
        * Tasks
        **/
        readonly Tasks: WpsTasks;

        /**
        * DisplayStatusBar
        **/
        DisplayStatusBar: boolean;

        International(Index?: WpsWdInternationalIndex, prop?: any): void;

        /**
        * Build
        **/
        readonly Build: string;

        GetSpellingSuggestions(Word?: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, SuggestionMode?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any, prop?: WpsSpellingSuggestions): void;

        /**
        * CapsLock
        **/
        readonly CapsLock: boolean;

        /**
        * NumLock
        **/
        readonly NumLock: boolean;

        /**
        * UserInitials
        **/
        UserInitials: string;

        SynonymInfo(Word?: string, LanguageID?: any, prop?: WpsSynonymInfo): void;

        /**
        * UserAddress
        **/
        UserAddress: string;

        Run(MacroName?: string, varg1?: any, varg2?: any, varg3?: any, varg4?: any, varg5?: any, varg6?: any, varg7?: any, varg8?: any, varg9?: any, varg10?: any, varg11?: any, varg12?: any, varg13?: any, varg14?: any, varg15?: any, varg16?: any, varg17?: any, varg18?: any, varg19?: any, varg20?: any, varg21?: any, varg22?: any, varg23?: any, varg24?: any, varg25?: any, varg26?: any, varg27?: any, varg28?: any, varg29?: any, varg30?: any, prop?: any): void;

        /**
        * Left
        **/
        Left: number;

        /**
        * MacroContainer
        **/
        readonly MacroContainer: any;

        InchesToPoints(Inches?: number, prop?: number): void;

        /**
        * CommandBars
        **/
        readonly CommandBars: Kso.KsoCommandBars;

        /**
        * EnableCancelKey
        **/
        EnableCancelKey: WpsWdEnableCancelKey;

        /**
        * DefaultSaveFormat
        **/
        DefaultSaveFormat: string;

        /**
        * Templates
        **/
        readonly Templates: WpsTemplates;

        FindKey(KeyCode?: number, KeyCode2?: any, prop?: WpsKeyBinding): void;

        /**
        * Caption
        **/
        Caption: string;

        /**
        * Path
        **/
        readonly Path: string;

        /**
        * DisplayScrollBars
        **/
        DisplayScrollBars: boolean;

        /**
        * BackgroundPrintingStatus
        **/
        readonly BackgroundPrintingStatus: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * Height
        **/
        Height: number;

        /**
        * WindowState
        **/
        WindowState: WpsWdWindowState;

        /**
        * DisplayAutoCompleteTips
        **/
        DisplayAutoCompleteTips: boolean;

        KeyString(KeyCode?: number, KeyCode2?: any, prop?: string): void;

        /**
        * Options
        **/
        readonly Options: WpsOptions;

        /**
        * CustomDictionaries
        **/
        readonly CustomDictionaries: WpsDictionaries;

        /**
        * PathSeparator
        **/
        readonly PathSeparator: string;

        CleanString(String?: string, prop?: string): void;

        /**
        * StatusBar
        **/
        StatusBar: string;

        /**
        * MAPIAvailable
        **/
        readonly MAPIAvailable: boolean;

        Resize(Width?: number, Height?: number): void;

        /**
        * DisplayScreenTips
        **/
        DisplayScreenTips: boolean;

        /**
        * UserControl
        **/
        readonly UserControl: boolean;

        ResetIgnoreAll(): void;

        /**
        * FileSearch
        **/
        readonly FileSearch: Kso.KsoFileSearch;

        /**
        * DefaultTableSeparator
        **/
        DefaultTableSeparator: string;

        /**
        * ShowVisualBasicEditor
        **/
        ShowVisualBasicEditor: boolean;

        /**
        * ActiveProtectedViewWindow
        **/
        readonly ActiveProtectedViewWindow: WpsProtectedViewWindow;

        /**
        * BrowseExtraFileTypes
        **/
        BrowseExtraFileTypes: string;

        IsObjectValid(Object?: any, prop?: boolean): void;

        /**
        * HangulHanjaDictionaries
        **/
        readonly HangulHanjaDictionaries: WpsHangulHanjaConversionDictionaries;

        AddAddress(TagID?: any[], Value?: any[]): void;

        /**
        * MailMessage
        **/
        readonly MailMessage: WpsMailMessage;

        /**
        * FocusInMailHeader
        **/
        readonly FocusInMailHeader: boolean;

        DDEPoke(Channel?: number, Item?: string, Data?: string): void;

        Quit(SaveChanges?: any, OriginalFormat?: any, RouteDocument?: any): void;

        ScreenRefresh(): void;

        PrintOutOld(Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any, PrintToFile?: any, Collate?: any, FileName?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any): void;

        LookupNameProperties(Name?: string): void;

        SubstituteFont(UnavailableFont?: string, SubstituteFont?: string): void;

        Repeat(Times?: any, prop?: boolean): void;

        DDEExecute(Channel?: number, Command?: string): void;

        DDERequest(Channel?: number, Item?: string, prop?: string): void;

        DDETerminateAll(): void;

        /**
        * Bibliography
        **/
        readonly Bibliography: WpsBibliography;

        MergeDocuments(OriginalDocument?: WpsDocument, RevisedDocument?: WpsDocument, Destination?: WpsWdCompareDestination, Granularity?: WpsWdGranularity, CompareFormatting?: boolean, CompareCaseChanges?: boolean, CompareWhitespace?: boolean, CompareTables?: boolean, CompareHeaders?: boolean, CompareFootnotes?: boolean, CompareTextboxes?: boolean, CompareFields?: boolean, CompareComments?: boolean, CompareMoves?: boolean, OriginalAuthor?: string, RevisedAuthor?: string, FormatFrom?: WpsWdMergeFormatFrom, prop?: WpsDocument): void;

        BuildKeyCode(Arg1?: WpsWdKey, Arg2?: any, Arg3?: any, Arg4?: any, prop?: number): void;

        OrganizerCopy(Source?: string, Destination?: string, Name?: string, Object?: WpsWdOrganizerObject): void;

        OrganizerDelete(Source?: string, Name?: string, Object?: WpsWdOrganizerObject): void;

        OrganizerRename(Source?: string, Name?: string, NewName?: string, Object?: WpsWdOrganizerObject): void;

        GetAddress(Name?: any, AddressProperties?: any, UseAutoText?: any, DisplaySelectDialog?: any, SelectDialog?: any, CheckNamesDialog?: any, RecentAddressesChoice?: any, UpdateRecentAddresses?: any, prop?: string): void;

        CheckGrammar(String?: string, prop?: boolean): void;

        CheckSpelling(Word?: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any, prop?: boolean): void;

        GoBack(): void;

        Help(HelpType?: any): void;

        AutomaticChange(): void;

        ShowMe(): void;

        HelpTool(): void;

        NewWindow(prop?: WpsWindow): void;

        ListCommands(ListAllCommands?: boolean): void;

        ShowClipboard(): void;

        OnTime(When?: any, Name?: string, Tolerance?: any): void;

        NextLetter(): void;

        MountVolume(Zone?: string, Server?: string, Volume?: string, User?: any, UserPassword?: any, VolumePassword?: any, prop?: number): void;

        SendFax(): void;

        ChangeFileOpenDirectory(Path?: string): void;

        RunOld(MacroName?: string): void;

        GoForward(): void;

        Move(Left?: number, Top?: number): void;

        CentimetersToPoints(Centimeters?: number, prop?: number): void;

        MillimetersToPoints(Millimeters?: number, prop?: number): void;

        PicasToPoints(Picas?: number, prop?: number): void;

        LinesToPoints(Lines?: number, prop?: number): void;

        PointsToInches(Points?: number, prop?: number): void;

        PointsToCentimeters(Points?: number, prop?: number): void;

        PointsToMillimeters(Points?: number, prop?: number): void;

        PointsToPicas(Points?: number, prop?: number): void;

        PointsToLines(Points?: number, prop?: number): void;

        Activate(): void;

        PointsToPixels(Points?: number, fVertical?: any, prop?: number): void;

        PixelsToPoints(Pixels?: number, fVertical?: any, prop?: number): void;

        KeyboardLatin(): void;

        KeyboardBidi(): void;

        ToggleKeyboard(): void;

        Keyboard(LangId?: number, prop?: number): void;

        ProductCode(prop?: string): void;

        DefaultWebOptions(prop?: WpsDefaultWebOptions): void;

        DiscussionSupport(Range?: any, cid?: any, piCSE?: any): void;

        SetDefaultTheme(Name?: string, DocumentType?: WpsWdDocumentMedium): void;

        GetDefaultTheme(DocumentType?: WpsWdDocumentMedium, prop?: string): void;

        /**
        * EmailOptions
        **/
        readonly EmailOptions: WpsEmailOptions;

        /**
        * Language
        **/
        readonly Language: Kso.KsoMsoLanguageID;

        /**
        * ShowStartupDialog
        **/
        ShowStartupDialog: boolean;

        /**
        * COMAddIns
        **/
        readonly COMAddIns: Kso.KsoCOMAddIns;

        /**
        * CheckLanguage
        **/
        CheckLanguage: boolean;

        /**
        * LanguageSettings
        **/
        readonly LanguageSettings: Kso.KsoLanguageSettings;

        Dummy4(): void;

        Dummy2(prop?: boolean): void;

        /**
        * Dummy1
        **/
        readonly Dummy1: boolean;

        /**
        * AnswerWizard
        **/
        readonly AnswerWizard: Kso.KsoAnswerWizard;

        PrintOut2000(Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any, PrintToFile?: any, Collate?: any, FileName?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;

        PrintOut(Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any, PrintToFile?: any, Collate?: any, FileName?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;

        FileDialog(FileDialogType?: Kso.KsoMsoFileDialogType, prop?: Kso.KsoFileDialog): void;

        /**
        * EmailTemplate
        **/
        EmailTemplate: string;

        /**
        * ShowWindowsInTaskbar
        **/
        ShowWindowsInTaskbar: boolean;

        /**
        * NewDocument
        **/
        readonly NewDocument: Kso.KsoNewFile;

        /**
        * AutoCorrectEmail
        **/
        readonly AutoCorrectEmail: WpsAutoCorrect;

        /**
        * XMLNamespaces
        **/
        readonly XMLNamespaces: WpsXMLNamespaces;

        /**
        * TaskPanes
        **/
        readonly TaskPanes: WpsTaskPanes;

        /**
        * DefaultLegalBlackline
        **/
        DefaultLegalBlackline: boolean;

        /**
        * SmartTagRecognizers
        **/
        readonly SmartTagRecognizers: WpsSmartTagRecognizers;

        /**
        * SmartTagTypes
        **/
        readonly SmartTagTypes: WpsSmartTagTypes;

        PutFocusInMailHeader(): void;

        /**
        * ArbitraryXMLSupportAvailable
        **/
        readonly ArbitraryXMLSupportAvailable: boolean;

        /**
        * BuildFull
        **/
        readonly BuildFull: string;

        /**
        * BuildFeatureCrew
        **/
        readonly BuildFeatureCrew: string;

        LoadMasterList(FileName?: string): void;

        CompareDocuments(OriginalDocument?: WpsDocument, RevisedDocument?: WpsDocument, Destination?: WpsWdCompareDestination, Granularity?: WpsWdGranularity, CompareFormatting?: boolean, CompareCaseChanges?: boolean, CompareWhitespace?: boolean, CompareTables?: boolean, CompareHeaders?: boolean, CompareFootnotes?: boolean, CompareTextboxes?: boolean, CompareFields?: boolean, CompareComments?: boolean, CompareMoves?: boolean, RevisedAuthor?: string, IgnoreAllComparisonWarnings?: boolean, prop?: WpsDocument): void;

        /**
        * ShowStylePreviews
        **/
        ShowStylePreviews: boolean;

        /**
        * RestrictLinkedStyles
        **/
        RestrictLinkedStyles: boolean;

        /**
        * OMathAutoCorrect
        **/
        readonly OMathAutoCorrect: WpsOMathAutoCorrect;

        /**
        * DisplayDocumentInformationPanel
        **/
        DisplayDocumentInformationPanel: boolean;

        /**
        * Assistance
        **/
        readonly Assistance: Kso.KsoAssistance;

        /**
        * OpenAttachmentsInFullScreen
        **/
        OpenAttachmentsInFullScreen: boolean;

        /**
        * ActiveEncryptionSession
        **/
        readonly ActiveEncryptionSession: number;

        /**
        * DontResetInsertionPointProperties
        **/
        DontResetInsertionPointProperties: boolean;

        /**
        * SmartArtColors
        **/
        readonly SmartArtColors: Kso.KsoSmartArtColors;

        ThreeWayMerge(LocalDocument?: WpsDocument, ServerDocument?: WpsDocument, BaseDocument?: WpsDocument, FavorSource?: boolean): void;

        /**
        * UndoRecord
        **/
        readonly UndoRecord: WpsUndoRecord;

        /**
        * PickerDialog
        **/
        readonly PickerDialog: Kso.KsoPickerDialog;

        /**
        * OfdExportOptions
        **/
        readonly OfdExportOptions: WpsOfdExportOptions;

        /**
        * ProtectedViewWindows
        **/
        readonly ProtectedViewWindows: WpsProtectedViewWindows;

        /**
        * FileValidation
        **/
        FileValidation: Kso.KsoMsoFileValidationMode;

        /**
        * ChartDataPointTrack
        **/
        ChartDataPointTrack: boolean;

        /**
        * ShowAnimation
        **/
        ShowAnimation: boolean;

        /**
        * PdfExportOptions
        **/
        readonly PdfExportOptions: WpsPdfExportOptions;

    }

    interface WpsXMLChildNodeSuggestion {
        /**
        * XMLSchemaReference
        **/
        readonly XMLSchemaReference: WpsXMLSchemaReference;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NamespaceURI
        **/
        readonly NamespaceURI: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        Insert(Range?: any, prop?: WpsXMLNode): void;

        /**
        * BaseName
        **/
        readonly BaseName: string;

    }

    interface WpsGlowFormat extends Kso.KsoGlowFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsBookmark {
        /**
        * StoryType
        **/
        readonly StoryType: WpsWdStoryType;

        Delete(): void;

        /**
        * Column
        **/
        readonly Column: boolean;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Empty
        **/
        readonly Empty: boolean;

        /**
        * Start
        **/
        Start: number;

        /**
        * End
        **/
        End: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(): void;

        Copy(Name?: string, prop?: WpsBookmark): void;

    }

    interface WpsBookmarks {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * DefaultSorting
        **/
        DefaultSorting: WpsWdBookmarkSortBy;

        Item(Index?: any, prop?: WpsBookmark): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * ShowHidden
        **/
        ShowHidden: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Name?: string, Range?: any, prop?: WpsBookmark): void;

        Exists(Name?: string, prop?: boolean): void;

    }

    interface WpsShading {
        /**
        * Texture
        **/
        Texture: WpsWdTextureIndex;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ForegroundPatternColorIndex
        **/
        ForegroundPatternColorIndex: WpsWdColorIndex;

        /**
        * ForegroundPatternColor
        **/
        ForegroundPatternColor: WpsWdColor;

        /**
        * BackgroundPatternColorIndex
        **/
        BackgroundPatternColorIndex: WpsWdColorIndex;

        /**
        * BackgroundPatternColor
        **/
        BackgroundPatternColor: WpsWdColor;

    }

    interface WpsDropCap {
        /**
        * DistanceFromText
        **/
        DistanceFromText: number;

        /**
        * LinesToDrop
        **/
        LinesToDrop: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Enable(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Clear(): void;

        /**
        * FontName
        **/
        FontName: string;

        /**
        * Position
        **/
        Position: WpsWdDropPosition;

    }

    interface WpsColorFormat extends Kso.KsoColorFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        Name: string;

        /**
        * OverPrint
        **/
        OverPrint: Kso.KsoMsoTriState;

        SetCMYK(Cyan?: number, Magenta?: number, Yellow?: number, Black?: number): void;

        Ink(Index?: number, prop?: number): void;

        /**
        * Cyan
        **/
        Cyan: number;

        /**
        * Magenta
        **/
        Magenta: number;

        /**
        * Yellow
        **/
        Yellow: number;

        /**
        * Black
        **/
        Black: number;

    }

    interface WpsRow {
        ConvertToTextOld(Separator?: any, prop?: WpsRange): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * IsLast
        **/
        readonly IsLast: boolean;

        /**
        * SpaceBetweenColumns
        **/
        SpaceBetweenColumns: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

        /**
        * Cells
        **/
        readonly Cells: WpsCells;

        /**
        * AllowBreakAcrossPages
        **/
        AllowBreakAcrossPages: number;

        /**
        * Height
        **/
        Height: number;

        /**
        * Alignment
        **/
        Alignment: WpsWdRowAlignment;

        /**
        * LeftIndent
        **/
        LeftIndent: number;

        /**
        * HeadingFormat
        **/
        HeadingFormat: number;

        /**
        * HeightRule
        **/
        HeightRule: WpsWdRowHeightRule;

        /**
        * IsFirst
        **/
        readonly IsFirst: boolean;

        /**
        * Index
        **/
        readonly Index: number;

        SetHeight(RowHeight?: number, HeightRule?: WpsWdRowHeightRule): void;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * Next
        **/
        readonly Next: WpsRow;

        /**
        * Previous
        **/
        readonly Previous: WpsRow;

        Select(): void;

        Delete(): void;

        SetLeftIndent(LeftIndent?: number, RulerStyle?: WpsWdRulerStyle): void;

        ConvertToText(Separator?: any, NestedTables?: any, prop?: WpsRange): void;

        /**
        * ID
        **/
        ID: string;

    }

    interface WpsReflectionFormat extends Kso.KsoReflectionFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsMailMergeDataSource {
        SetAllIncludedFlags(Included?: boolean): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * LastRecord
        **/
        LastRecord: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * HeaderSourceName
        **/
        readonly HeaderSourceName: string;

        /**
        * ConnectString
        **/
        readonly ConnectString: string;

        FindRecord2000(FindText?: string, Field?: string, prop?: boolean): void;

        /**
        * Type
        **/
        readonly Type: WpsWdMailMergeDataSource;

        /**
        * HeaderSourceType
        **/
        readonly HeaderSourceType: WpsWdMailMergeDataSource;

        /**
        * QueryString
        **/
        QueryString: string;

        /**
        * ActiveRecord
        **/
        ActiveRecord: WpsWdMailMergeActiveRecord;

        /**
        * FirstRecord
        **/
        FirstRecord: number;

        /**
        * FieldNames
        **/
        readonly FieldNames: WpsMailMergeFieldNames;

        /**
        * DataFields
        **/
        readonly DataFields: WpsMailMergeDataFields;

        /**
        * RecordCount
        **/
        readonly RecordCount: number;

        /**
        * Included
        **/
        Included: boolean;

        /**
        * InvalidAddress
        **/
        InvalidAddress: boolean;

        /**
        * InvalidComments
        **/
        InvalidComments: string;

        /**
        * MappedDataFields
        **/
        readonly MappedDataFields: WpsMappedDataFields;

        /**
        * TableName
        **/
        readonly TableName: string;

        FindRecord(FindText?: string, Field?: any, prop?: boolean): void;

        SetAllErrorFlags(Invalid?: boolean, InvalidComment?: string): void;

        Close(): void;

    }

    interface WpsPictureFormat extends Kso.KsoPictureFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsShadowFormat extends Kso.KsoShadowFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsGroupShapes extends Kso.KsoGroupShapes {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsPoint {
        Delete(prop?: any): void;

        /**
        * MarkerForegroundColor
        **/
        MarkerForegroundColor: number;

        /**
        * DataLabel
        **/
        readonly DataLabel: WpsDataLabel;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * HasDataLabel
        **/
        HasDataLabel: boolean;

        /**
        * MarkerStyle
        **/
        MarkerStyle: Kso.KsoXlMarkerStyle;

        Copy(prop?: any): void;

        ClearFormats(prop?: any): void;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Explosion
        **/
        Explosion: number;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Left
        **/
        readonly Left: number;

        /**
        * InvertIfNegative
        **/
        InvertIfNegative: boolean;

        /**
        * MarkerBackgroundColor
        **/
        MarkerBackgroundColor: number;

        /**
        * MarkerBackgroundColorIndex
        **/
        MarkerBackgroundColorIndex: Kso.KsoXlColorIndex;

        /**
        * MarkerForegroundColorIndex
        **/
        MarkerForegroundColorIndex: Kso.KsoXlColorIndex;

        /**
        * MarkerSize
        **/
        MarkerSize: number;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * PictureType
        **/
        PictureType: Kso.KsoXlChartPictureType;

        Paste(prop?: any): void;

        /**
        * PictureUnit2
        **/
        PictureUnit2: number;

        /**
        * PictureUnit
        **/
        PictureUnit: number;

        Select(prop?: any): void;

        /**
        * ApplyPictToSides
        **/
        ApplyPictToSides: boolean;

        /**
        * ApplyPictToFront
        **/
        ApplyPictToFront: boolean;

        /**
        * ApplyPictToEnd
        **/
        ApplyPictToEnd: boolean;

        /**
        * Shadow
        **/
        Shadow: boolean;

        ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, prop?: any): void;

        /**
        * SecondaryPlot
        **/
        SecondaryPlot: boolean;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * Has3DEffect
        **/
        Has3DEffect: boolean;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Top
        **/
        readonly Top: number;

        PieSliceLocation(loc?: Kso.KsoXlPieSliceLocation, Index?: Kso.KsoXlPieSliceIndex, prop?: number): void;

    }

    interface WpsRecentFile {
        /**
        * Index
        **/
        readonly Index: number;

        Open(prop?: WpsDocument): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ReadOnly
        **/
        ReadOnly: boolean;

        /**
        * Path
        **/
        readonly Path: string;

    }

    interface WpsRecentFiles {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsRecentFile): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Maximum
        **/
        Maximum: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Document?: any, ReadOnly?: any, prop?: WpsRecentFile): void;

    }

    interface WpsZooms {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: WpsWdViewType, prop?: WpsZoom): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsCheckBox {
        /**
        * Size
        **/
        Size: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Valid
        **/
        readonly Valid: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Value
        **/
        Value: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * AutoSize
        **/
        AutoSize: boolean;

        /**
        * Default
        **/
        Default: boolean;

    }

    interface WpsWords {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: number, prop?: WpsRange): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * First
        **/
        readonly First: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Last
        **/
        readonly Last: WpsRange;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

    }

    interface WpsSmartTagType {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * FriendlyName
        **/
        readonly FriendlyName: string;

        /**
        * SmartTagActions
        **/
        readonly SmartTagActions: WpsSmartTagActions;

        /**
        * SmartTagRecognizers
        **/
        readonly SmartTagRecognizers: WpsSmartTagRecognizers;

    }

    interface WpsSmartTagTypes {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsSmartTagType): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        ReloadAll(): void;

    }

    interface WpsProofreadingErrors {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsRange): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        readonly Type: WpsWdProofreadingErrorType;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsFillFormat extends Kso.KsoFillFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsLineFormat extends Kso.KsoLineFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsSubdocument {
        /**
        * Locked
        **/
        Locked: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Level
        **/
        readonly Level: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Path
        **/
        readonly Path: string;

        /**
        * HasFile
        **/
        readonly HasFile: boolean;

        Delete(): void;

        Split(Range?: WpsRange): void;

        Open(prop?: WpsDocument): void;

    }

    interface WpsThreeDFormat extends Kso.KsoThreeDFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsReplacement {
        /**
        * ParagraphFormat
        **/
        ParagraphFormat: WpsParagraphFormat;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * LanguageID
        **/
        LanguageID: WpsWdLanguageID;

        /**
        * Style
        **/
        Style: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Font
        **/
        Font: WpsFont;

        /**
        * Text
        **/
        Text: string;

        /**
        * Highlight
        **/
        Highlight: number;

        /**
        * Frame
        **/
        readonly Frame: WpsFrame;

        /**
        * LanguageIDFarEast
        **/
        LanguageIDFarEast: WpsWdLanguageID;

        ClearFormatting(): void;

        /**
        * NoProofing
        **/
        NoProofing: number;

    }

    interface WpsConditionalStyle {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * BottomPadding
        **/
        BottomPadding: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * RightPadding
        **/
        RightPadding: number;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * Font
        **/
        Font: WpsFont;

        /**
        * TopPadding
        **/
        TopPadding: number;

        /**
        * LeftPadding
        **/
        LeftPadding: number;

        /**
        * ParagraphFormat
        **/
        ParagraphFormat: WpsParagraphFormat;

    }

    interface WpsHeadersFooters {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: WpsWdHeaderFooterIndex, prop?: WpsHeaderFooter): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsMailer {
        /**
        * Enclosures
        **/
        Enclosures: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * BCCRecipients
        **/
        BCCRecipients: any;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Sender
        **/
        readonly Sender: string;

        /**
        * CCRecipients
        **/
        CCRecipients: any;

        /**
        * Recipients
        **/
        Recipients: any;

        /**
        * SendDateTime
        **/
        readonly SendDateTime: string;

        /**
        * Received
        **/
        readonly Received: boolean;

        /**
        * Subject
        **/
        Subject: string;

    }

    interface WpsTables {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsTable): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        AddOld(Range?: WpsRange, NumRows?: number, NumColumns?: number, prop?: WpsTable): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Range?: WpsRange, NumRows?: number, NumColumns?: number, DefaultTableBehavior?: any, AutoFitBehavior?: any, prop?: WpsTable): void;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

    }

    interface WpsColumns {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        SetWidth(ColumnWidth?: number, RulerStyle?: WpsWdRulerStyle): void;

        /**
        * First
        **/
        readonly First: WpsColumn;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Last
        **/
        readonly Last: WpsColumn;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        Item(Index?: number, prop?: WpsColumn): void;

        Add(BeforeColumn?: any, prop?: WpsColumn): void;

        Select(): void;

        Delete(): void;

        AutoFit(): void;

        DistributeWidth(): void;

        /**
        * PreferredWidth
        **/
        PreferredWidth: number;

        /**
        * PreferredWidthType
        **/
        PreferredWidthType: WpsWdPreferredWidthType;

    }

    interface WpsColumn {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * IsLast
        **/
        readonly IsLast: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        Sort(ExcludeHeader?: any, SortFieldType?: any, SortOrder?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;

        /**
        * IsFirst
        **/
        readonly IsFirst: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * Cells
        **/
        readonly Cells: WpsCells;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * Next
        **/
        readonly Next: WpsColumn;

        /**
        * Previous
        **/
        readonly Previous: WpsColumn;

        Select(): void;

        Delete(): void;

        SetWidth(ColumnWidth?: number, RulerStyle?: WpsWdRulerStyle): void;

        AutoFit(): void;

        SortOld(ExcludeHeader?: any, SortFieldType?: any, SortOrder?: any, CaseSensitive?: any, LanguageID?: any): void;

        /**
        * PreferredWidth
        **/
        PreferredWidth: number;

        /**
        * PreferredWidthType
        **/
        PreferredWidthType: WpsWdPreferredWidthType;

    }

    interface WpsTextEffectFormat extends Kso.KsoTextEffectFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsCells {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * Height
        **/
        Height: number;

        SetHeight(RowHeight?: any, HeightRule?: WpsWdRowHeightRule): void;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * VerticalAlignment
        **/
        VerticalAlignment: WpsWdCellVerticalAlignment;

        /**
        * HeightRule
        **/
        HeightRule: WpsWdRowHeightRule;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        Item(Index?: number, prop?: WpsCell): void;

        Add(BeforeCell?: any, prop?: WpsCell): void;

        Delete(ShiftCells?: any): void;

        SetWidth(ColumnWidth?: number, RulerStyle?: WpsWdRulerStyle): void;

        Merge(): void;

        Split(NumRows?: any, NumColumns?: any, MergeBeforeSplit?: any): void;

        DistributeHeight(): void;

        DistributeWidth(): void;

        AutoFit(): void;

        /**
        * PreferredWidth
        **/
        PreferredWidth: number;

        /**
        * PreferredWidthType
        **/
        PreferredWidthType: WpsWdPreferredWidthType;

    }

    interface WpsEndnote {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Reference
        **/
        readonly Reference: WpsRange;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsEndnotes {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Location
        **/
        Location: WpsWdEndnoteLocation;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NumberStyle
        **/
        NumberStyle: WpsWdNoteNumberStyle;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * StartingNumber
        **/
        StartingNumber: number;

        /**
        * NumberingRule
        **/
        NumberingRule: WpsWdNumberingRule;

        /**
        * Separator
        **/
        readonly Separator: WpsRange;

        /**
        * ContinuationSeparator
        **/
        readonly ContinuationSeparator: WpsRange;

        /**
        * ContinuationNotice
        **/
        readonly ContinuationNotice: WpsRange;

        Item(Index?: number, prop?: WpsEndnote): void;

        Add(Range?: WpsRange, Reference?: any, Text?: any, prop?: WpsEndnote): void;

        Convert(): void;

        SwapWithFootnotes(): void;

        ResetContinuationSeparator(): void;

        ResetSeparator(): void;

        ResetContinuationNotice(): void;

    }

    interface WpsCell {
        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * RowIndex
        **/
        readonly RowIndex: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * HeightRule
        **/
        HeightRule: WpsWdRowHeightRule;

        Merge(MergeTo?: WpsCell): void;

        /**
        * ColumnIndex
        **/
        readonly ColumnIndex: number;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * Height
        **/
        Height: number;

        SetHeight(RowHeight?: any, HeightRule?: WpsWdRowHeightRule): void;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * VerticalAlignment
        **/
        VerticalAlignment: WpsWdCellVerticalAlignment;

        /**
        * Tables
        **/
        readonly Tables: WpsTables;

        Delete(ShiftCells?: any): void;

        /**
        * Column
        **/
        readonly Column: WpsColumn;

        AutoSum(): void;

        /**
        * Row
        **/
        readonly Row: WpsRow;

        /**
        * Next
        **/
        readonly Next: WpsCell;

        /**
        * Previous
        **/
        readonly Previous: WpsCell;

        /**
        * WordWrap
        **/
        WordWrap: boolean;

        Select(): void;

        Formula(Formula?: any, NumFormat?: any): void;

        SetWidth(ColumnWidth?: number, RulerStyle?: WpsWdRulerStyle): void;

        Split(NumRows?: any, NumColumns?: any): void;

        /**
        * PreferredWidth
        **/
        PreferredWidth: number;

        /**
        * FitText
        **/
        FitText: boolean;

        /**
        * TopPadding
        **/
        TopPadding: number;

        /**
        * BottomPadding
        **/
        BottomPadding: number;

        /**
        * LeftPadding
        **/
        LeftPadding: number;

        /**
        * RightPadding
        **/
        RightPadding: number;

        /**
        * ID
        **/
        ID: string;

        /**
        * PreferredWidthType
        **/
        PreferredWidthType: WpsWdPreferredWidthType;

    }

    interface WpsList {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        CountNumberedItems(NumberType?: any, Level?: any, prop?: number): void;

        ApplyListTemplate(ListTemplate?: WpsListTemplate, ContinuePreviousList?: any, DefaultListBehavior?: any): void;

        /**
        * ListParagraphs
        **/
        readonly ListParagraphs: WpsListParagraphs;

        RemoveNumbers(NumberType?: any): void;

        /**
        * SingleListTemplate
        **/
        readonly SingleListTemplate: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        ConvertNumbersToText(NumberType?: any): void;

        ApplyListTemplateOld(ListTemplate?: WpsListTemplate, ContinuePreviousList?: any): void;

        CanContinuePreviousList(ListTemplate?: WpsListTemplate, prop?: WpsWdContinue): void;

        /**
        * StyleName
        **/
        readonly StyleName: string;

        ApplyListTemplateWithLevel(ListTemplate?: WpsListTemplate, ContinuePreviousList?: any, DefaultListBehavior?: any, ApplyLevel?: any): void;

    }

    interface WpsFootnotes {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Location
        **/
        Location: WpsWdFootnoteLocation;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NumberStyle
        **/
        NumberStyle: WpsWdNoteNumberStyle;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * StartingNumber
        **/
        StartingNumber: number;

        /**
        * NumberingRule
        **/
        NumberingRule: WpsWdNumberingRule;

        /**
        * Separator
        **/
        readonly Separator: WpsRange;

        /**
        * ContinuationSeparator
        **/
        readonly ContinuationSeparator: WpsRange;

        /**
        * ContinuationNotice
        **/
        readonly ContinuationNotice: WpsRange;

        Item(Index?: number, prop?: WpsFootnote): void;

        Add(Range?: WpsRange, Reference?: any, Text?: any, prop?: WpsFootnote): void;

        Convert(): void;

        SwapWithEndnotes(): void;

        ResetContinuationSeparator(): void;

        ResetSeparator(): void;

        ResetContinuationNotice(): void;

    }

    interface WpsFootnote {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Reference
        **/
        readonly Reference: WpsRange;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsRows {
        /**
        * HeadingFormat
        **/
        HeadingFormat: number;

        /**
        * LeftIndent
        **/
        LeftIndent: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

        /**
        * AllowBreakAcrossPages
        **/
        AllowBreakAcrossPages: number;

        /**
        * Height
        **/
        Height: number;

        /**
        * Alignment
        **/
        Alignment: WpsWdRowAlignment;

        Item(Index?: number, prop?: WpsRow): void;

        /**
        * SpaceBetweenColumns
        **/
        SpaceBetweenColumns: number;

        /**
        * HeightRule
        **/
        HeightRule: WpsWdRowHeightRule;

        /**
        * First
        **/
        readonly First: WpsRow;

        /**
        * Last
        **/
        readonly Last: WpsRow;

        /**
        * HorizontalPosition
        **/
        HorizontalPosition: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        ConvertToTextOld(Separator?: any, prop?: WpsRange): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * DistanceTop
        **/
        DistanceTop: number;

        SetHeight(RowHeight?: number, HeightRule?: WpsWdRowHeightRule): void;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        Add(BeforeRow?: any, prop?: WpsRow): void;

        Select(): void;

        Delete(): void;

        SetLeftIndent(LeftIndent?: number, RulerStyle?: WpsWdRulerStyle): void;

        DistributeHeight(): void;

        ConvertToText(Separator?: any, NestedTables?: any, prop?: WpsRange): void;

        /**
        * WrapAroundText
        **/
        WrapAroundText: number;

        /**
        * DistanceBottom
        **/
        DistanceBottom: number;

        /**
        * DistanceLeft
        **/
        DistanceLeft: number;

        /**
        * DistanceRight
        **/
        DistanceRight: number;

        /**
        * VerticalPosition
        **/
        VerticalPosition: number;

        /**
        * RelativeHorizontalPosition
        **/
        RelativeHorizontalPosition: WpsWdRelativeHorizontalPosition;

        /**
        * RelativeVerticalPosition
        **/
        RelativeVerticalPosition: WpsWdRelativeVerticalPosition;

        /**
        * AllowOverlap
        **/
        AllowOverlap: number;

        /**
        * TableDirection
        **/
        TableDirection: WpsWdTableDirection;

    }

    interface WpsRectangle {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Top
        **/
        readonly Top: number;

        /**
        * RectangleType
        **/
        readonly RectangleType: WpsWdRectangleType;

        /**
        * Left
        **/
        readonly Left: number;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Lines
        **/
        readonly Lines: WpsLines;

    }

    interface WpsTextInput {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Valid
        **/
        readonly Valid: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Format
        **/
        readonly Format: string;

        EditType(Type?: WpsWdTextFormFieldType, Default?: any, Format?: any, Enabled?: any): void;

        /**
        * Default
        **/
        Default: string;

        /**
        * Type
        **/
        readonly Type: WpsWdTextFormFieldType;

        /**
        * Width
        **/
        Width: number;

        Clear(): void;

    }

    interface WpsSentences {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: number, prop?: WpsRange): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * First
        **/
        readonly First: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Last
        **/
        readonly Last: WpsRange;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

    }

    interface WpsCharacters {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: number, prop?: WpsRange): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * First
        **/
        readonly First: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Last
        **/
        readonly Last: WpsRange;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

    }

    interface WpsEmailSignature {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * NewMessageSignature
        **/
        NewMessageSignature: string;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ReplyMessageSignature
        **/
        ReplyMessageSignature: string;

        /**
        * EmailSignatureEntries
        **/
        readonly EmailSignatureEntries: WpsEmailSignatureEntries;

    }

    interface WpsComments {
        /**
        * ShowBy
        **/
        ShowBy: string;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsComment): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Range?: WpsRange, Text?: any, prop?: WpsComment): void;

    }

    interface WpsMailMergeField {
        /**
        * Code
        **/
        Code: WpsRange;

        /**
        * Locked
        **/
        Locked: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Previous
        **/
        readonly Previous: WpsMailMergeField;

        /**
        * Creator
        **/
        readonly Creator: number;

        Select(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        readonly Type: WpsWdFieldType;

        /**
        * Next
        **/
        readonly Next: WpsMailMergeField;

        Copy(): void;

        Cut(): void;

        Delete(): void;

    }

    interface WpsComment {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Edit(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Reference
        **/
        readonly Reference: WpsRange;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * ShowTip
        **/
        ShowTip: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Author
        **/
        Author: string;

        /**
        * Scope
        **/
        readonly Scope: WpsRange;

        /**
        * Initial
        **/
        Initial: string;

        Delete(): void;

        /**
        * Date
        **/
        readonly Date: string;

        /**
        * Ancestor
        **/
        readonly Ancestor: WpsComment;

        /**
        * IsInk
        **/
        readonly IsInk: boolean;

        /**
        * Done
        **/
        Done: boolean;

        /**
        * Contact
        **/
        readonly Contact: WpsCoAuthor;

        DeleteRecursively(): void;

        /**
        * Replies
        **/
        readonly Replies: WpsComments;

    }

    interface WpsAxis {
        /**
        * TickLabels
        **/
        readonly TickLabels: WpsTickLabels;

        /**
        * CategoryNames
        **/
        CategoryNames: any;

        /**
        * HasMinorGridlines
        **/
        HasMinorGridlines: boolean;

        /**
        * TickMarkSpacing
        **/
        TickMarkSpacing: number;

        /**
        * HasMajorGridlines
        **/
        HasMajorGridlines: boolean;

        /**
        * AxisBetweenCategories
        **/
        AxisBetweenCategories: boolean;

        /**
        * MajorGridlines
        **/
        readonly MajorGridlines: WpsGridlines;

        /**
        * AxisGroup
        **/
        readonly AxisGroup: Kso.KsoXlAxisGroup;

        /**
        * MinorTickMark
        **/
        MinorTickMark: Kso.KsoXlTickMark;

        Delete(prop?: any): void;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * AxisTitle
        **/
        readonly AxisTitle: WpsAxisTitle;

        /**
        * CrossesAt
        **/
        CrossesAt: number;

        /**
        * Crosses
        **/
        Crosses: Kso.KsoXlAxisCrosses;

        /**
        * HasTitle
        **/
        HasTitle: boolean;

        /**
        * MinorUnitScale
        **/
        MinorUnitScale: Kso.KsoXlTimeUnit;

        /**
        * MajorTickMark
        **/
        MajorTickMark: Kso.KsoXlTickMark;

        /**
        * MajorUnit
        **/
        MajorUnit: number;

        /**
        * LogBase
        **/
        LogBase: number;

        /**
        * TickLabelSpacingIsAuto
        **/
        TickLabelSpacingIsAuto: boolean;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * BaseUnitIsAuto
        **/
        BaseUnitIsAuto: boolean;

        /**
        * MajorUnitIsAuto
        **/
        MajorUnitIsAuto: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * DisplayUnit
        **/
        DisplayUnit: Kso.KsoXlDisplayUnit;

        /**
        * MaximumScale
        **/
        MaximumScale: number;

        /**
        * TickLabelSpacing
        **/
        TickLabelSpacing: number;

        Select(prop?: any): void;

        /**
        * MaximumScaleIsAuto
        **/
        MaximumScaleIsAuto: boolean;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * MinimumScale
        **/
        MinimumScale: number;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * MinimumScaleIsAuto
        **/
        MinimumScaleIsAuto: boolean;

        /**
        * MinorGridlines
        **/
        readonly MinorGridlines: WpsGridlines;

        /**
        * MinorUnit
        **/
        MinorUnit: number;

        /**
        * Type
        **/
        Type: Kso.KsoXlAxisType;

        /**
        * MinorUnitIsAuto
        **/
        MinorUnitIsAuto: boolean;

        /**
        * BaseUnit
        **/
        BaseUnit: Kso.KsoXlTimeUnit;

        /**
        * ScaleType
        **/
        ScaleType: Kso.KsoXlScaleType;

        /**
        * ReversePlotOrder
        **/
        ReversePlotOrder: boolean;

        /**
        * TickLabelPosition
        **/
        TickLabelPosition: Kso.KsoXlTickLabelPosition;

        /**
        * MajorUnitScale
        **/
        MajorUnitScale: Kso.KsoXlTimeUnit;

        /**
        * CategoryType
        **/
        CategoryType: Kso.KsoXlCategoryType;

        /**
        * Left
        **/
        readonly Left: number;

        /**
        * Top
        **/
        readonly Top: number;

        /**
        * DisplayUnitCustom
        **/
        DisplayUnitCustom: number;

        /**
        * HasDisplayUnitLabel
        **/
        HasDisplayUnitLabel: boolean;

        /**
        * DisplayUnitLabel
        **/
        readonly DisplayUnitLabel: WpsDisplayUnitLabel;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsCoAuthors {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsCoAuthor): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface WpsCoAuthor {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * EmailAddress
        **/
        readonly EmailAddress: string;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * IsMe
        **/
        readonly IsMe: boolean;

        /**
        * ID
        **/
        readonly ID: string;

        /**
        * Locks
        **/
        readonly Locks: WpsCoAuthLocks;

    }

    interface WpsContentControls {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsContentControl): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Type?: WpsWdContentControlType, Range?: any, prop?: WpsContentControl): void;

    }

    interface WpsCoAuthLocks {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsCoAuthLock): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        RemoveEphemeralLocks(): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Add(Range?: any, Type?: WpsWdLockType, prop?: WpsCoAuthLock): void;

    }

    interface WpsCoAuthLock {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * HeaderFooter
        **/
        readonly HeaderFooter: boolean;

        /**
        * Type
        **/
        readonly Type: WpsWdLockType;

        /**
        * Owner
        **/
        readonly Owner: WpsCoAuthor;

        Unlock(): void;

    }

    interface WpsSections {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: number, prop?: WpsSection): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * First
        **/
        readonly First: WpsSection;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Last
        **/
        readonly Last: WpsSection;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * PageSetup
        **/
        PageSetup: WpsPageSetup;

        Add(Range?: any, Start?: any, prop?: WpsSection): void;

    }

    interface WpsSection {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * PageSetup
        **/
        PageSetup: WpsPageSetup;

        /**
        * Headers
        **/
        readonly Headers: WpsHeadersFooters;

        /**
        * Footers
        **/
        readonly Footers: WpsHeadersFooters;

        /**
        * ProtectedForForms
        **/
        ProtectedForForms: boolean;

    }

    interface WpsTextFrame extends Kso.KsoTextFrame {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * ContainingRange
        **/
        readonly ContainingRange: WpsRange;

        /**
        * HorizontalAnchor
        **/
        HorizontalAnchor: Kso.KsoMsoHorizontalAnchor;

        /**
        * TextRange
        **/
        readonly TextRange: WpsRange;

        /**
        * Next
        **/
        Next: Kso.KsoTextFrame;

        /**
        * Previous
        **/
        Previous: Kso.KsoTextFrame;

        /**
        * PathFormat
        **/
        PathFormat: Kso.KsoMsoPathFormat;

        /**
        * Overflowing
        **/
        readonly Overflowing: boolean;

        /**
        * HasText
        **/
        readonly HasText: number;

        BreakForwardLink(): void;

        ValidLinkTarget(TargetTextFrame?: Kso.KsoTextFrame, prop?: boolean): void;

        /**
        * AutoSize
        **/
        AutoSize: number;

        /**
        * WordWrap
        **/
        WordWrap: number;

        /**
        * VerticalAnchor
        **/
        VerticalAnchor: Kso.KsoMsoVerticalAnchor;

        /**
        * WarpFormat
        **/
        WarpFormat: Kso.KsoMsoWarpFormat;

        /**
        * Column
        **/
        readonly Column: Kso.KsoTextColumn2;

        /**
        * ThreeD
        **/
        readonly ThreeD: Kso.KsoThreeDFormat;

        /**
        * NoTextRotation
        **/
        NoTextRotation: Kso.KsoMsoTriState;

        DeleteText(): void;

    }

    interface WpsPoints extends Kso.KsoPoints {}

    interface WpsCorners {
        Select(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsPageSetup {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        SetAsTemplateDefault(): void;

        /**
        * BottomMargin
        **/
        BottomMargin: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * FooterDistance
        **/
        FooterDistance: number;

        /**
        * PageHeight
        **/
        PageHeight: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Gutter
        **/
        Gutter: number;

        /**
        * LeftMargin
        **/
        LeftMargin: number;

        /**
        * LayoutMode
        **/
        LayoutMode: WpsWdLayoutMode;

        /**
        * TopMargin
        **/
        TopMargin: number;

        /**
        * PageWidth
        **/
        PageWidth: number;

        /**
        * GutterOnTop
        **/
        GutterOnTop: boolean;

        /**
        * RightMargin
        **/
        RightMargin: number;

        /**
        * BookFoldRevPrinting
        **/
        BookFoldRevPrinting: boolean;

        /**
        * Orientation
        **/
        Orientation: WpsWdOrientation;

        /**
        * FirstPageTray
        **/
        FirstPageTray: WpsWdPaperTray;

        /**
        * OtherPagesTray
        **/
        OtherPagesTray: WpsWdPaperTray;

        /**
        * TwoPagesOnOne
        **/
        TwoPagesOnOne: boolean;

        /**
        * VerticalAlignment
        **/
        VerticalAlignment: WpsWdVerticalAlignment;

        /**
        * MirrorMargins
        **/
        MirrorMargins: number;

        /**
        * HeaderDistance
        **/
        HeaderDistance: number;

        /**
        * LineNumbering
        **/
        LineNumbering: WpsLineNumbering;

        /**
        * SectionStart
        **/
        SectionStart: WpsWdSectionStart;

        /**
        * OddAndEvenPagesHeaderFooter
        **/
        OddAndEvenPagesHeaderFooter: number;

        /**
        * DifferentFirstPageHeaderFooter
        **/
        DifferentFirstPageHeaderFooter: number;

        /**
        * CharsLine
        **/
        CharsLine: number;

        /**
        * SuppressEndnotes
        **/
        SuppressEndnotes: number;

        /**
        * TextColumns
        **/
        TextColumns: WpsTextColumns;

        /**
        * BookFoldPrinting
        **/
        BookFoldPrinting: boolean;

        /**
        * PaperSize
        **/
        PaperSize: WpsWdPaperSize;

        /**
        * LinesPage
        **/
        LinesPage: number;

        /**
        * ShowGrid
        **/
        ShowGrid: boolean;

        TogglePortrait(): void;

        /**
        * GutterStyle
        **/
        GutterStyle: WpsWdGutterStyleOld;

        /**
        * SectionDirection
        **/
        SectionDirection: WpsWdSectionDirection;

        /**
        * GutterPos
        **/
        GutterPos: WpsWdGutterStyle;

        /**
        * BookFoldPrintingSheets
        **/
        BookFoldPrintingSheets: number;

    }

    interface WpsPageNumbers {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NumberStyle
        **/
        NumberStyle: WpsWdPageNumberStyle;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * IncludeChapterNumber
        **/
        IncludeChapterNumber: boolean;

        /**
        * HeadingLevelForChapter
        **/
        HeadingLevelForChapter: number;

        /**
        * StartingNumber
        **/
        StartingNumber: number;

        /**
        * ChapterPageSeparator
        **/
        ChapterPageSeparator: WpsWdSeparatorType;

        /**
        * RestartNumberingAtSection
        **/
        RestartNumberingAtSection: boolean;

        /**
        * ShowFirstPageNumber
        **/
        ShowFirstPageNumber: boolean;

        Item(Index?: number, prop?: WpsPageNumber): void;

        Add(PageNumberAlignment?: any, FirstPage?: any, prop?: WpsPageNumber): void;

        /**
        * DoubleQuote
        **/
        DoubleQuote: boolean;

    }

    interface WpsPageNumber {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        Select(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Alignment
        **/
        Alignment: WpsWdPageNumberAlignment;

        Cut(): void;

        Copy(): void;

    }

    interface WpsWebOptions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * RelyOnVML
        **/
        RelyOnVML: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * OptimizeForBrowser
        **/
        OptimizeForBrowser: boolean;

        /**
        * UseLongFileNames
        **/
        UseLongFileNames: boolean;

        /**
        * BrowserLevel
        **/
        BrowserLevel: WpsWdBrowserLevel;

        /**
        * RelyOnCSS
        **/
        RelyOnCSS: boolean;

        /**
        * OrganizeInFolder
        **/
        OrganizeInFolder: boolean;

        /**
        * ScreenSize
        **/
        ScreenSize: Kso.KsoMsoScreenSize;

        /**
        * AllowPNG
        **/
        AllowPNG: boolean;

        /**
        * PixelsPerInch
        **/
        PixelsPerInch: number;

        /**
        * Encoding
        **/
        Encoding: Kso.KsoMsoEncoding;

        /**
        * FolderSuffix
        **/
        readonly FolderSuffix: string;

        UseDefaultFolderSuffix(): void;

        /**
        * TargetBrowser
        **/
        TargetBrowser: Kso.KsoMsoTargetBrowser;

    }

    interface WpsDiagramNodes extends Kso.KsoDiagramNodes {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsLineNumbering {
        /**
        * DistanceFromText
        **/
        DistanceFromText: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * RestartMode
        **/
        RestartMode: WpsWdNumberingRule;

        /**
        * CountBy
        **/
        CountBy: number;

        /**
        * StartingNumber
        **/
        StartingNumber: number;

        /**
        * Active
        **/
        Active: number;

    }

    interface WpsTextColumns {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * EvenlySpaced
        **/
        EvenlySpaced: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * LineBetween
        **/
        LineBetween: number;

        /**
        * Spacing
        **/
        Spacing: number;

        /**
        * Width
        **/
        Width: number;

        Item(Index?: number, prop?: WpsTextColumn): void;

        Add(Width?: any, Spacing?: any, EvenlySpaced?: any, prop?: WpsTextColumn): void;

        SetCount(NumColumns?: number): void;

        /**
        * FlowDirection
        **/
        FlowDirection: WpsWdFlowDirection;

    }

    interface WpsTextColumn {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Width
        **/
        Width: number;

        /**
        * SpaceAfter
        **/
        SpaceAfter: number;

    }

    interface WpsBreak {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * PageIndex
        **/
        readonly PageIndex: number;

    }

    interface WpsHyperlink {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Shape
        **/
        readonly Shape: Kso.KsoShape;

        /**
        * Creator
        **/
        readonly Creator: number;

        CreateNewDocument(FileName?: string, EditNow?: boolean, Overwrite?: boolean): void;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Name
        **/
        readonly Name: string;

        Follow(NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        AddToFavorites(): void;

        /**
        * SubAddressOld
        **/
        readonly SubAddressOld: string;

        /**
        * AddressOld
        **/
        readonly AddressOld: string;

        /**
        * EmailSubject
        **/
        EmailSubject: string;

        /**
        * Type
        **/
        readonly Type: Kso.KsoMsoHyperlinkType;

        /**
        * ExtraInfoRequired
        **/
        readonly ExtraInfoRequired: boolean;

        Delete(): void;

        /**
        * Address
        **/
        Address: string;

        /**
        * SubAddress
        **/
        SubAddress: string;

        /**
        * ScreenTip
        **/
        ScreenTip: string;

        /**
        * TextToDisplay
        **/
        TextToDisplay: string;

        /**
        * Target
        **/
        Target: string;

    }

    interface WpsFrame {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * HorizontalPosition
        **/
        HorizontalPosition: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * LockAnchor
        **/
        LockAnchor: boolean;

        /**
        * HeightRule
        **/
        HeightRule: WpsWdFrameSizeRule;

        /**
        * WidthRule
        **/
        WidthRule: WpsWdFrameSizeRule;

        /**
        * HorizontalDistanceFromText
        **/
        HorizontalDistanceFromText: number;

        /**
        * Height
        **/
        Height: number;

        /**
        * RelativeHorizontalPosition
        **/
        RelativeHorizontalPosition: WpsWdRelativeHorizontalPosition;

        /**
        * RelativeVerticalPosition
        **/
        RelativeVerticalPosition: WpsWdRelativeVerticalPosition;

        /**
        * VerticalDistanceFromText
        **/
        VerticalDistanceFromText: number;

        /**
        * VerticalPosition
        **/
        VerticalPosition: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * TextWrap
        **/
        TextWrap: boolean;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        Delete(): void;

        Select(): void;

        Copy(): void;

        Cut(): void;

    }

    interface WpsHeaderFooter {
        /**
        * LinkToPrevious
        **/
        LinkToPrevious: boolean;

        /**
        * Index
        **/
        readonly Index: WpsWdHeaderFooterIndex;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * IsHeader
        **/
        readonly IsHeader: boolean;

        /**
        * Exists
        **/
        Exists: boolean;

        /**
        * PageNumbers
        **/
        readonly PageNumbers: WpsPageNumbers;

        /**
        * Shapes
        **/
        readonly Shapes: Kso.KsoShapes;

    }

    interface WpsDocumentFields {
        /**
        * DefaultSorting
        **/
        DefaultSorting: WpsWdDocumentFieldSortBy;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsDocumentField): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Exists(Name?: string, prop?: boolean): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, Range?: any, Hidden?: any, PrintOut?: any, ReadOnly?: any, prop?: WpsDocumentField): void;

        /**
        * InsertionMode
        **/
        InsertionMode: boolean;

    }

    interface WpsOLEFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * IconPath
        **/
        readonly IconPath: string;

        Edit(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * IconIndex
        **/
        IconIndex: number;

        /**
        * ClassType
        **/
        ClassType: string;

        /**
        * DisplayAsIcon
        **/
        DisplayAsIcon: boolean;

        /**
        * IconName
        **/
        IconName: string;

        /**
        * Object
        **/
        readonly Object: any;

        /**
        * IconLabel
        **/
        IconLabel: string;

        /**
        * Label
        **/
        readonly Label: string;

        /**
        * ProgID
        **/
        readonly ProgID: string;

        Activate(): void;

        Open(): void;

        DoVerb(VerbIndex?: any): void;

        ConvertTo(ClassType?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any): void;

        ActivateAs(ClassType?: string): void;

        /**
        * PreserveFormattingOnUpdate
        **/
        PreserveFormattingOnUpdate: boolean;

    }

    interface WpsLinkFormat {
        /**
        * Locked
        **/
        Locked: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * AutoUpdate
        **/
        AutoUpdate: boolean;

        /**
        * SourceName
        **/
        readonly SourceName: string;

        /**
        * Type
        **/
        readonly Type: WpsWdLinkType;

        /**
        * SourcePath
        **/
        readonly SourcePath: string;

        /**
        * SourceFullName
        **/
        SourceFullName: string;

        /**
        * SavePictureWithDocument
        **/
        SavePictureWithDocument: boolean;

        BreakLink(): void;

        Update(): void;

    }

    interface WpsShapeRange extends Kso.KsoShapeRange {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * LockAnchor
        **/
        LockAnchor: number;

        /**
        * RelativeHorizontalPosition
        **/
        RelativeHorizontalPosition: WpsWdRelativeHorizontalPosition;

        /**
        * Hyperlink
        **/
        readonly Hyperlink: WpsHyperlink;

        /**
        * RelativeVerticalPosition
        **/
        RelativeVerticalPosition: WpsWdRelativeVerticalPosition;

        /**
        * WrapFormat
        **/
        readonly WrapFormat: WpsWrapFormat;

        /**
        * Anchor
        **/
        readonly Anchor: WpsRange;

        ConvertToFrame(prop?: WpsFrame): void;

        ConvertToInlineShape(prop?: WpsInlineShape): void;

        Activate(): void;

        /**
        * ID
        **/
        readonly ID: number;

        /**
        * LayoutInCell
        **/
        LayoutInCell: number;

        /**
        * LeftRelative
        **/
        LeftRelative: number;

        /**
        * TopRelative
        **/
        TopRelative: number;

        /**
        * WidthRelative
        **/
        WidthRelative: number;

        /**
        * HeightRelative
        **/
        HeightRelative: number;

        /**
        * RelativeHorizontalSize
        **/
        RelativeHorizontalSize: WpsWdRelativeHorizontalSize;

        /**
        * RelativeVerticalSize
        **/
        RelativeVerticalSize: WpsWdRelativeVerticalSize;

    }

    interface WpsShapes extends Kso.KsoShapes {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        AddOLEObject(ClassType?: any, FileName?: any, LinkToFile?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any, prop?: Kso.KsoShape): void;

        AddOLEControl(ClassType?: any, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any, prop?: Kso.KsoShape): void;

        AddWebVideo(EmbedCode?: string, VideoWidth?: any, VideoHeight?: any, PosterFrameImage?: any, Url?: any, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any, prop?: Kso.KsoShape): void;

    }

    interface WpsChart {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Legend
        **/
        readonly Legend: number;

        /**
        * HasTitle
        **/
        HasTitle: number;

        /**
        * ChartTitle
        **/
        readonly ChartTitle: number;

        /**
        * HeightPercent
        **/
        HeightPercent: number;

        /**
        * RightAngleAxes
        **/
        RightAngleAxes: number;

        /**
        * DepthPercent
        **/
        DepthPercent: number;

        /**
        * SubType
        **/
        SubType: number;

        /**
        * Elevation
        **/
        Elevation: number;

        /**
        * GapDepth
        **/
        GapDepth: number;

        /**
        * Perspective
        **/
        Perspective: number;

        /**
        * Application
        **/
        readonly Application: any;

        GetChartElement(x?: number, y?: number, ElementID?: number, Arg1?: number, Arg2?: number): void;

        /**
        * Rotation
        **/
        Rotation: number;

        /**
        * DisplayBlanksAs
        **/
        DisplayBlanksAs: number;

        ClearToMatchStyle(): void;

        ChartGroups(Index?: any, lcid?: number, prop?: any): void;

        SetElement(Element?: Kso.KsoMsoChartElementType): void;

        SetSourceData(Source?: string, PlotBy?: any): void;

        /**
        * HasDataTable
        **/
        HasDataTable: boolean;

        SeriesCollection(Index?: any, lcid?: number, prop?: any): void;

        /**
        * Area3DGroup
        **/
        readonly Area3DGroup: number;

        /**
        * Type
        **/
        Type: number;

        /**
        * Corners
        **/
        readonly Corners: number;

        ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, lcid?: number): void;

        /**
        * ChartType
        **/
        ChartType: Kso.KsoXlChartType;

        Refresh(): void;

        ApplyCustomType(ChartType?: Kso.KsoXlChartType, TypeName?: any): void;

        /**
        * PlotVisibleOnly
        **/
        PlotVisibleOnly: number;

        /**
        * PlotBy
        **/
        PlotBy: Kso.KsoXlRowCol;

        /**
        * HasLegend
        **/
        HasLegend: number;

        ApplyLayout(Layout?: number, ChartType?: any): void;

        Axes(Type?: any, AxisGroup?: Kso.KsoXlAxisGroup, lcid?: number, prop?: any): void;

        HasAxis(Index1?: any, Index2?: any, lcid?: number, prop?: any): void;

        ChartWizard(Source?: any, Gallery?: any, Format?: any, PlotBy?: any, CategoryLabels?: any, SeriesLabels?: any, HasLegend?: any, Title?: any, CategoryTitle?: any, ValueTitle?: any, ExtraTitle?: any, lcid?: number): void;

        /**
        * Walls
        **/
        readonly Walls: number;

        /**
        * HasPivotFields
        **/
        HasPivotFields: boolean;

        /**
        * Floor
        **/
        readonly Floor: number;

        SaveChartTemplate(FileName?: string): void;

        /**
        * PlotArea
        **/
        readonly PlotArea: number;

        /**
        * ChartArea
        **/
        readonly ChartArea: number;

        /**
        * Column3DGroup
        **/
        readonly Column3DGroup: number;

        /**
        * ChartData
        **/
        readonly ChartData: WpsChartData;

        AutoFormat(Gallery?: number, Format?: any): void;

        ColumnGroups(Index?: any, lcid?: number, prop?: any): void;

        /**
        * AutoScaling
        **/
        AutoScaling: number;

        SetBackgroundPicture(FileName?: string): void;

        CopyPicture(Appearance?: WpsXlPictureAppearance, Format?: WpsXlCopyPictureFormat, Size?: WpsXlPictureAppearance, lcid?: number): void;

        SetDefaultChart(Name?: any): void;

        /**
        * DataTable
        **/
        readonly DataTable: WpsDataTable;

        Paste(Type?: any, lcid?: number): void;

        /**
        * BarShape
        **/
        BarShape: Kso.KsoXlBarShape;

        Export(FileName?: string, FilterName?: any, Interactive?: any, prop?: boolean): void;

        /**
        * BackWall
        **/
        readonly BackWall: WpsWalls;

        ApplyChartTemplate(FileName?: string): void;

        /**
        * SideWall
        **/
        readonly SideWall: WpsWalls;

        /**
        * PivotLayout
        **/
        readonly PivotLayout: any;

        /**
        * ChartStyle
        **/
        ChartStyle: any;

        /**
        * ShowDataLabelsOverMaximum
        **/
        ShowDataLabelsOverMaximum: boolean;

        /**
        * Shapes
        **/
        readonly Shapes: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        BarGroups(Index?: any, lcid?: number, prop?: any): void;

        AreaGroups(Index?: any, lcid?: number, prop?: any): void;

        /**
        * Bar3DGroup
        **/
        readonly Bar3DGroup: number;

        /**
        * HasHiddenContent
        **/
        readonly HasHiddenContent: boolean;

        /**
        * Line3DGroup
        **/
        readonly Line3DGroup: number;

        LineGroups(Index?: any, lcid?: number, prop?: any): void;

        /**
        * Pie3DGroup
        **/
        readonly Pie3DGroup: number;

        PieGroups(Index?: any, lcid?: number, prop?: any): void;

        DoughnutGroups(Index?: any, lcid?: number, prop?: any): void;

        RadarGroups(Index?: any, lcid?: number, prop?: any): void;

        /**
        * SurfaceGroup
        **/
        readonly SurfaceGroup: number;

        XYGroups(Index?: any, lcid?: number, prop?: any): void;

        Delete(lcid?: number, prop?: any): void;

        Copy(Before?: any, After?: any, lcid?: number): void;

        Select(Replace?: any, lcid?: number, prop?: any): void;

        /**
        * ShowReportFilterFieldButtons
        **/
        ShowReportFilterFieldButtons: boolean;

        /**
        * ShowLegendFieldButtons
        **/
        ShowLegendFieldButtons: boolean;

        /**
        * ShowAxisFieldButtons
        **/
        ShowAxisFieldButtons: boolean;

        /**
        * ShowValueFieldButtons
        **/
        ShowValueFieldButtons: boolean;

        /**
        * ShowAllFieldButtons
        **/
        ShowAllFieldButtons: boolean;

        FullSeriesCollection(Index?: any, lcid?: number, prop?: any): void;

        DeleteHiddenContent(): void;

        /**
        * CategoryLabelLevel
        **/
        CategoryLabelLevel: Kso.KsoXlCategoryLabelLevel;

        /**
        * SeriesNameLevel
        **/
        SeriesNameLevel: Kso.KsoXlSeriesNameLevel;

        /**
        * ChartColor
        **/
        ChartColor: any;

        ClearToMatchColorStyle(): void;

    }

    interface WpsShape extends Kso.KsoShape {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * LockAnchor
        **/
        LockAnchor: number;

        /**
        * RelativeHorizontalPosition
        **/
        RelativeHorizontalPosition: WpsWdRelativeHorizontalPosition;

        /**
        * Hyperlink
        **/
        readonly Hyperlink: WpsHyperlink;

        /**
        * RelativeVerticalPosition
        **/
        RelativeVerticalPosition: WpsWdRelativeVerticalPosition;

        /**
        * WrapFormat
        **/
        readonly WrapFormat: WpsWrapFormat;

        /**
        * OLEFormat
        **/
        readonly OLEFormat: WpsOLEFormat;

        /**
        * Anchor
        **/
        readonly Anchor: WpsRange;

        /**
        * LinkFormat
        **/
        readonly LinkFormat: WpsLinkFormat;

        ConvertToInlineShape(prop?: WpsInlineShape): void;

        ConvertToFrame(prop?: WpsFrame): void;

        Activate(): void;

        /**
        * ID
        **/
        readonly ID: number;

        /**
        * LayoutInCell
        **/
        LayoutInCell: number;

        /**
        * LeftRelative
        **/
        LeftRelative: number;

        /**
        * TopRelative
        **/
        TopRelative: number;

        /**
        * WidthRelative
        **/
        WidthRelative: number;

        /**
        * HeightRelative
        **/
        HeightRelative: number;

        /**
        * RelativeHorizontalSize
        **/
        RelativeHorizontalSize: WpsWdRelativeHorizontalSize;

        /**
        * RelativeVerticalSize
        **/
        RelativeVerticalSize: WpsWdRelativeVerticalSize;

        /**
        * AnchorID
        **/
        readonly AnchorID: number;

        /**
        * EditID
        **/
        readonly EditID: number;

    }

    interface WpsAdjustments extends Kso.KsoAdjustments {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsConnectorFormat extends Kso.KsoConnectorFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsResearch {
        /**
        * FavoriteService
        **/
        FavoriteService: string;

        IsResearchService(ServiceID?: string, prop?: boolean): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        SetLanguagePair(LanguageFrom?: WpsWdLanguageID, LanguageTo?: WpsWdLanguageID, prop?: any): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Query(ServiceID?: string, QueryString?: string, QueryLanguage?: WpsWdLanguageID, UseSelection?: boolean, LaunchQuery?: boolean, prop?: any): void;

    }

    interface WpsCalloutFormat extends Kso.KsoCalloutFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsShapeNodes extends Kso.KsoShapeNodes {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsShapeNode extends Kso.KsoShapeNode {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsWrapFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * DistanceRight
        **/
        DistanceRight: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Side
        **/
        Side: WpsWdWrapSideType;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        Type: WpsWdWrapType;

        /**
        * DistanceLeft
        **/
        DistanceLeft: number;

        /**
        * DistanceTop
        **/
        DistanceTop: number;

        /**
        * DistanceBottom
        **/
        DistanceBottom: number;

        /**
        * AllowOverlap
        **/
        AllowOverlap: number;

    }

    interface WpsInlineShape {
        /**
        * Field
        **/
        readonly Field: WpsField;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * HorizontalLineFormat
        **/
        readonly HorizontalLineFormat: WpsHorizontalLineFormat;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * LinkFormat
        **/
        readonly LinkFormat: WpsLinkFormat;

        /**
        * Glow
        **/
        readonly Glow: Kso.KsoGlowFormat;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * PictureFormat
        **/
        PictureFormat: Kso.KsoPictureFormat;

        /**
        * Type
        **/
        readonly Type: WpsWdInlineShapeType;

        /**
        * OLEFormat
        **/
        readonly OLEFormat: WpsOLEFormat;

        /**
        * Hyperlink
        **/
        readonly Hyperlink: WpsHyperlink;

        /**
        * AlternativeText
        **/
        AlternativeText: string;

        /**
        * Height
        **/
        Height: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * ScaleHeight
        **/
        ScaleHeight: number;

        /**
        * HasChart
        **/
        readonly HasChart: Kso.KsoMsoTriState;

        /**
        * ScaleWidth
        **/
        ScaleWidth: number;

        /**
        * Shadow
        **/
        readonly Shadow: Kso.KsoShadowFormat;

        /**
        * LockAspectRatio
        **/
        LockAspectRatio: Kso.KsoMsoTriState;

        /**
        * Line
        **/
        readonly Line: Kso.KsoLineFormat;

        /**
        * EditID
        **/
        readonly EditID: number;

        Reset(): void;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoFillFormat;

        Activate(): void;

        /**
        * GroupItems
        **/
        readonly GroupItems: Kso.KsoGroupShapes;

        Select(): void;

        /**
        * Title
        **/
        Title: string;

        ConvertToShape(prop?: Kso.KsoShape): void;

        /**
        * Script
        **/
        readonly Script: Kso.KsoScript;

        /**
        * SmartArt
        **/
        readonly SmartArt: Kso.KsoSmartArt;

        /**
        * OWSAnchor
        **/
        readonly OWSAnchor: number;

        /**
        * HasSmartArt
        **/
        readonly HasSmartArt: Kso.KsoMsoTriState;

        /**
        * TextEffect
        **/
        TextEffect: Kso.KsoTextEffectFormat;

        /**
        * IsPictureBullet
        **/
        readonly IsPictureBullet: boolean;

        /**
        * Chart
        **/
        readonly Chart: WpsChart;

        /**
        * SoftEdge
        **/
        readonly SoftEdge: Kso.KsoSoftEdgeFormat;

        /**
        * Reflection
        **/
        readonly Reflection: Kso.KsoReflectionFormat;

        /**
        * AnchorID
        **/
        readonly AnchorID: number;

    }

    interface WpsHorizontalLineFormat {
        /**
        * PercentWidth
        **/
        PercentWidth: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * NoShade
        **/
        NoShade: boolean;

        /**
        * Alignment
        **/
        Alignment: WpsWdHorizontalLineAlignment;

        /**
        * WidthType
        **/
        WidthType: WpsWdHorizontalLineWidthType;

    }

    interface WpsChartTitle {
        /**
        * Caption
        **/
        Caption: string;

        Characters(Start?: any, Length?: any, prop?: WpsChartCharacters): void;

        /**
        * Top
        **/
        Top: number;

        /**
        * FormulaLocal
        **/
        FormulaLocal: string;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * Left
        **/
        Left: number;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        /**
        * HorizontalAlignment
        **/
        HorizontalAlignment: any;

        /**
        * Orientation
        **/
        Orientation: any;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Text
        **/
        Text: string;

        /**
        * VerticalAlignment
        **/
        VerticalAlignment: any;

        /**
        * ReadingOrder
        **/
        ReadingOrder: number;

        /**
        * Position
        **/
        Position: Kso.KsoXlChartElementPosition;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        Delete(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * IncludeInLayout
        **/
        IncludeInLayout: boolean;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * FormulaR1C1Local
        **/
        FormulaR1C1Local: string;

        /**
        * Formula
        **/
        Formula: string;

        /**
        * FormulaR1C1
        **/
        FormulaR1C1: string;

    }

    interface WpsChartCharacters {
        Delete(prop?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Caption
        **/
        Caption: string;

        Insert(String?: string, prop?: any): void;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Text
        **/
        Text: string;

        /**
        * PhoneticCharacters
        **/
        PhoneticCharacters: string;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsChartFont extends Kso.KsoChartFont {}

    interface WpsMailMerge {
        /**
        * Destination
        **/
        Destination: WpsWdMailMergeDestination;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        EditDataSource(): void;

        /**
        * State
        **/
        readonly State: WpsWdMailMergeState;

        /**
        * ViewMailMergeFieldCodes
        **/
        ViewMailMergeFieldCodes: number;

        CreateDataSource(Name?: any, PasswordDocument?: any, WritePasswordDocument?: any, HeaderRecord?: any, MSQuery?: any, SQLStatement?: any, SQLStatement1?: any, Connection?: any, LinkToSource?: any): void;

        /**
        * MainDocumentType
        **/
        MainDocumentType: WpsWdMailMergeMainDocType;

        EditHeaderSource(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * MailAsAttachment
        **/
        MailAsAttachment: boolean;

        /**
        * Fields
        **/
        readonly Fields: WpsMailMergeFields;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * DataSource
        **/
        readonly DataSource: WpsMailMergeDataSource;

        /**
        * SuppressBlankLines
        **/
        SuppressBlankLines: boolean;

        /**
        * MailAddressFieldName
        **/
        MailAddressFieldName: string;

        /**
        * MailSubject
        **/
        MailSubject: string;

        CreateHeaderSource(Name?: string, PasswordDocument?: any, WritePasswordDocument?: any, HeaderRecord?: any): void;

        OpenDataSource2000(Name?: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, LinkToSource?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Connection?: any, SQLStatement?: any, SQLStatement1?: any): void;

        Execute(Pause?: any): void;

        OpenHeaderSource2000(Name?: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any): void;

        Check(): void;

        EditMainDocument(): void;

        UseAddressBook(Type?: string): void;

        /**
        * HighlightMergeFields
        **/
        HighlightMergeFields: boolean;

        /**
        * MailFormat
        **/
        MailFormat: WpsWdMailMergeMailFormat;

        /**
        * ShowSendToCustom
        **/
        ShowSendToCustom: string;

        /**
        * WizardState
        **/
        WizardState: number;

        OpenDataSource(Name?: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, LinkToSource?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Connection?: any, SQLStatement?: any, SQLStatement1?: any, OpenExclusive?: any, SubType?: any): void;

        OpenHeaderSource(Name?: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, OpenExclusive?: any): void;

        ShowWizard(InitialState?: any, ShowDocumentStep?: any, ShowTemplateStep?: any, ShowDataStep?: any, ShowWriteStep?: any, ShowPreviewStep?: any, ShowMergeStep?: any): void;

    }

    interface WpsOMathFunctions {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsOMathFunction): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Range?: WpsRange, Type?: WpsWdOMathFunctionType, NumArgs?: any, NumCols?: any, prop?: WpsOMathFunction): void;

    }

    interface WpsInterior {
        /**
        * ColorIndex
        **/
        ColorIndex: any;

        /**
        * Color
        **/
        Color: any;

        /**
        * InvertIfNegative
        **/
        InvertIfNegative: any;

        /**
        * Pattern
        **/
        Pattern: any;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * PatternColor
        **/
        PatternColor: any;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * PatternColorIndex
        **/
        PatternColorIndex: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsChartFillFormat extends Kso.KsoChartFillFormat {}

    interface WpsView {
        /**
        * RevisionsMode
        **/
        RevisionsMode: WpsWdRevisionsMode;

        PreviousHeaderFooter(): void;

        /**
        * ShowAll
        **/
        ShowAll: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * ShowFieldCodes
        **/
        ShowFieldCodes: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * FullScreen
        **/
        FullScreen: boolean;

        /**
        * Type
        **/
        Type: WpsWdViewType;

        /**
        * Draft
        **/
        Draft: boolean;

        /**
        * MailMergeDataView
        **/
        MailMergeDataView: boolean;

        /**
        * Magnifier
        **/
        Magnifier: boolean;

        /**
        * RevisionsBalloonWidth
        **/
        RevisionsBalloonWidth: number;

        /**
        * RevisionsBalloonSide
        **/
        RevisionsBalloonSide: WpsWdRevisionsBalloonMargin;

        /**
        * SeekView
        **/
        SeekView: WpsWdSeekView;

        /**
        * ShowHighlight
        **/
        ShowHighlight: boolean;

        /**
        * ShowFirstLineOnly
        **/
        ShowFirstLineOnly: boolean;

        /**
        * ShowSpaces
        **/
        ShowSpaces: boolean;

        /**
        * ShowFormat
        **/
        ShowFormat: boolean;

        /**
        * SplitSpecial
        **/
        SplitSpecial: WpsWdSpecialPane;

        /**
        * ShowBookmarks
        **/
        ShowBookmarks: boolean;

        /**
        * Zoom
        **/
        readonly Zoom: WpsZoom;

        ExpandOutline(Range?: any): void;

        /**
        * ShowObjectAnchors
        **/
        ShowObjectAnchors: boolean;

        /**
        * ShowTextBoundaries
        **/
        ShowTextBoundaries: boolean;

        /**
        * RevisionsView
        **/
        RevisionsView: WpsWdRevisionsView;

        /**
        * ShowDrawings
        **/
        ShowDrawings: boolean;

        /**
        * ShowTabs
        **/
        ShowTabs: boolean;

        /**
        * ShowParagraphs
        **/
        ShowParagraphs: boolean;

        /**
        * ShowInkAnnotations
        **/
        ShowInkAnnotations: boolean;

        /**
        * ShowHyphens
        **/
        ShowHyphens: boolean;

        /**
        * ShowHiddenText
        **/
        ShowHiddenText: boolean;

        /**
        * ShowCropMarks
        **/
        ShowCropMarks: boolean;

        /**
        * DisplayBackgrounds
        **/
        DisplayBackgrounds: boolean;

        /**
        * WrapToWindow
        **/
        WrapToWindow: boolean;

        ShowAllHeadings(): void;

        /**
        * ShowPicturePlaceHolders
        **/
        ShowPicturePlaceHolders: boolean;

        /**
        * FieldShading
        **/
        FieldShading: WpsWdFieldShading;

        /**
        * ShowAnimation
        **/
        ShowAnimation: boolean;

        /**
        * ShowXMLMarkup
        **/
        ShowXMLMarkup: number;

        ShowHeading(Level?: number): void;

        /**
        * TableGridlines
        **/
        TableGridlines: boolean;

        /**
        * ShowInsertionsAndDeletions
        **/
        ShowInsertionsAndDeletions: boolean;

        /**
        * EnlargeFontsLessThan
        **/
        EnlargeFontsLessThan: number;

        /**
        * ShowMainTextLayer
        **/
        ShowMainTextLayer: boolean;

        /**
        * BrowseToWindow
        **/
        BrowseToWindow: number;

        /**
        * ShowOptionalBreaks
        **/
        ShowOptionalBreaks: boolean;

        NextHeaderFooter(): void;

        CollapseOutline(Range?: any): void;

        /**
        * ReadingLayoutAllowMultiplePages
        **/
        ReadingLayoutAllowMultiplePages: boolean;

        /**
        * ReadingLayoutAllowEditing
        **/
        ReadingLayoutAllowEditing: boolean;

        /**
        * DisplayPageBoundaries
        **/
        DisplayPageBoundaries: boolean;

        /**
        * DisplaySmartTags
        **/
        DisplaySmartTags: boolean;

        /**
        * ShowRevisionsAndComments
        **/
        ShowRevisionsAndComments: boolean;

        /**
        * ShowComments
        **/
        ShowComments: boolean;

        /**
        * ShowOtherAuthors
        **/
        ShowOtherAuthors: boolean;

        /**
        * ShowFormatChanges
        **/
        ShowFormatChanges: boolean;

        /**
        * ReadingLayoutTruncateMargins
        **/
        ReadingLayoutTruncateMargins: WpsWdReadingLayoutMargin;

        /**
        * RevisionsBalloonWidthType
        **/
        RevisionsBalloonWidthType: WpsWdRevisionsBalloonWidthType;

        /**
        * Reviewers
        **/
        readonly Reviewers: WpsReviewers;

        /**
        * RevisionsBalloonShowConnectingLines
        **/
        RevisionsBalloonShowConnectingLines: boolean;

        /**
        * ReadingLayout
        **/
        ReadingLayout: boolean;

        /**
        * ShadeEditableRanges
        **/
        ShadeEditableRanges: number;

        /**
        * Panning
        **/
        Panning: boolean;

        /**
        * ReadingLayoutActualView
        **/
        ReadingLayoutActualView: boolean;

        /**
        * ShowMarkupAreaHighlight
        **/
        ShowMarkupAreaHighlight: boolean;

        /**
        * MarkupMode
        **/
        MarkupMode: WpsWdRevisionsMode;

        /**
        * ConflictMode
        **/
        ConflictMode: boolean;

        ExpandAllHeadings(): void;

        CollapseAllHeadings(): void;

        /**
        * RevisionsFilter
        **/
        readonly RevisionsFilter: WpsRevisionsFilter;

        /**
        * PageColor
        **/
        PageColor: WpsWdPageColor;

        /**
        * ColumnWidth
        **/
        ColumnWidth: WpsWdColumnWidth;

    }

    interface WpsChartColorFormat extends Kso.KsoChartColorFormat {}

    interface WpsChartBorder {
        /**
        * ColorIndex
        **/
        ColorIndex: any;

        /**
        * Color
        **/
        Color: any;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * LineStyle
        **/
        LineStyle: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Weight
        **/
        Weight: any;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsFullSeriesCollection extends Kso.KsoFullSeriesCollection {}

    interface WpsBuildingBlockEntries {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsBuildingBlock): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, Type?: WpsWdBuildingBlockTypes, Category?: string, Range?: WpsRange, Description?: any, InsertOptions?: WpsWdDocPartInsertOptions, prop?: WpsBuildingBlock): void;

    }

    interface WpsChartFormat {
        /**
        * Fill
        **/
        readonly Fill: Kso.KsoFillFormat;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Glow
        **/
        readonly Glow: Kso.KsoGlowFormat;

        /**
        * TextFrame2
        **/
        readonly TextFrame2: Kso.KsoTextFrame2;

        /**
        * Shadow
        **/
        readonly Shadow: Kso.KsoShadowFormat;

        /**
        * Line
        **/
        readonly Line: Kso.KsoLineFormat;

        /**
        * AutoShapeType
        **/
        AutoShapeType: Kso.KsoMsoAutoShapeType;

        /**
        * PictureFormat
        **/
        readonly PictureFormat: Kso.KsoPictureFormat;

        /**
        * SoftEdge
        **/
        readonly SoftEdge: Kso.KsoSoftEdgeFormat;

        /**
        * ThreeD
        **/
        readonly ThreeD: Kso.KsoThreeDFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Adjustments
        **/
        readonly Adjustments: Kso.KsoAdjustments;

    }

    interface WpsSeriesCollection extends Kso.KsoSeriesCollection {}

    interface WpsSoftEdgeFormat extends Kso.KsoSoftEdgeFormat {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsLegend {
        Delete(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        Select(prop?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        LegendEntries(Index?: any, prop?: any): void;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Position
        **/
        Position: Kso.KsoXlLegendPosition;

        Clear(prop?: any): void;

        /**
        * Height
        **/
        Height: number;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * Left
        **/
        Left: number;

        /**
        * Top
        **/
        Top: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * IncludeInLayout
        **/
        IncludeInLayout: boolean;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsBuildingBlocks {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsBuildingBlock): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, Range?: WpsRange, Description?: any, InsertOptions?: WpsWdDocPartInsertOptions, prop?: WpsBuildingBlock): void;

    }

    interface WpsFloor {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * PictureType
        **/
        PictureType: any;

        Paste(): void;

        ClearFormats(prop?: any): void;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * Thickness
        **/
        Thickness: number;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsPlotArea {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * InsideLeft
        **/
        InsideLeft: number;

        ClearFormats(prop?: any): void;

        /**
        * Height
        **/
        Height: number;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Left
        **/
        Left: number;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * InsideHeight
        **/
        InsideHeight: number;

        /**
        * Top
        **/
        Top: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * InsideTop
        **/
        InsideTop: number;

        /**
        * InsideWidth
        **/
        InsideWidth: number;

        /**
        * Position
        **/
        Position: Kso.KsoXlChartElementPosition;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsFind extends Kso.KsoFind {
        /**
        * Found
        **/
        readonly Found: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Execute2007(FindText?: any, MatchCase?: any, MatchWholeWord?: any, MatchWildcards?: any, MatchSoundsLike?: any, MatchAllWordForms?: any, Forward?: any, Wrap?: any, Format?: any, ReplaceWith?: any, Replace?: any, MatchKashida?: any, MatchDiacritics?: any, MatchAlefHamza?: any, MatchControl?: any, MatchPrefix?: any, MatchSuffix?: any, MatchPhrase?: any, IgnoreSpace?: any, IgnorePunct?: any, prop?: boolean): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Forward
        **/
        Forward: boolean;

        /**
        * Font
        **/
        Font: WpsFont;

        /**
        * MatchAllWordForms
        **/
        MatchAllWordForms: boolean;

        /**
        * MatchWildcards
        **/
        MatchWildcards: boolean;

        /**
        * MatchSoundsLike
        **/
        MatchSoundsLike: boolean;

        /**
        * LanguageIDOther
        **/
        LanguageIDOther: WpsWdLanguageID;

        /**
        * MatchWholeWord
        **/
        MatchWholeWord: boolean;

        /**
        * MatchFuzzy
        **/
        MatchFuzzy: boolean;

        /**
        * HanjaPhoneticHangul
        **/
        HanjaPhoneticHangul: boolean;

        /**
        * MatchByte
        **/
        MatchByte: boolean;

        /**
        * ParagraphFormat
        **/
        ParagraphFormat: WpsParagraphFormat;

        /**
        * MatchPhrase
        **/
        MatchPhrase: boolean;

        /**
        * Style
        **/
        Style: any;

        /**
        * Format
        **/
        Format: boolean;

        /**
        * LanguageID
        **/
        LanguageID: WpsWdLanguageID;

        /**
        * MatchKashida
        **/
        MatchKashida: boolean;

        /**
        * Highlight
        **/
        Highlight: number;

        /**
        * Replacement
        **/
        readonly Replacement: WpsReplacement;

        /**
        * Frame
        **/
        readonly Frame: WpsFrame;

        /**
        * Wrap
        **/
        Wrap: WpsWdFindWrap;

        /**
        * LanguageIDFarEast
        **/
        LanguageIDFarEast: WpsWdLanguageID;

        /**
        * MatchDiacritics
        **/
        MatchDiacritics: boolean;

        /**
        * CorrectHangulEndings
        **/
        CorrectHangulEndings: boolean;

        ExecuteOld(FindText?: any, MatchCase?: any, MatchWholeWord?: any, MatchWildcards?: any, MatchSoundsLike?: any, MatchAllWordForms?: any, Forward?: any, Wrap?: any, Format?: any, ReplaceWith?: any, Replace?: any, prop?: boolean): void;

        ClearFormatting(): void;

        SetAllFuzzyOptions(): void;

        ClearAllFuzzyOptions(): void;

        /**
        * NoProofing
        **/
        NoProofing: number;

        /**
        * MatchAlefHamza
        **/
        MatchAlefHamza: boolean;

        /**
        * MatchSuffix
        **/
        MatchSuffix: boolean;

        /**
        * MatchControl
        **/
        MatchControl: boolean;

        ClearHitHighlight(prop?: boolean): void;

        /**
        * MatchPrefix
        **/
        MatchPrefix: boolean;

        /**
        * IgnoreSpace
        **/
        IgnoreSpace: boolean;

        /**
        * IgnorePunct
        **/
        IgnorePunct: boolean;

        HitHighlight(FindText?: any, HighlightColor?: any, TextColor?: any, MatchCase?: any, MatchWholeWord?: any, MatchPrefix?: any, MatchSuffix?: any, MatchPhrase?: any, MatchWildcards?: any, MatchSoundsLike?: any, MatchAllWordForms?: any, MatchByte?: any, MatchFuzzy?: any, MatchKashida?: any, MatchDiacritics?: any, MatchAlefHamza?: any, MatchControl?: any, IgnoreSpace?: any, IgnorePunct?: any, HanjaPhoneticHangul?: any, prop?: boolean): void;

    }

    interface WpsChartArea {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * Top
        **/
        Top: number;

        ClearContents(prop?: any): void;

        Clear(prop?: any): void;

        Copy(prop?: any): void;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        ClearFormats(prop?: any): void;

        /**
        * Height
        **/
        Height: number;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * Left
        **/
        Left: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsDataLabel {
        Delete(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        Select(prop?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * Caption
        **/
        Caption: string;

        /**
        * Top
        **/
        Top: number;

        Characters(Start?: any, Length?: any, prop?: WpsChartCharacters): void;

        /**
        * NumberFormatLinked
        **/
        NumberFormatLinked: boolean;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        /**
        * HorizontalAlignment
        **/
        HorizontalAlignment: any;

        /**
        * Left
        **/
        Left: number;

        /**
        * Orientation
        **/
        Orientation: any;

        /**
        * FormulaLocal
        **/
        FormulaLocal: string;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * _Width
        **/
        readonly _Width: number;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Separator
        **/
        Separator: any;

        /**
        * Text
        **/
        Text: string;

        /**
        * VerticalAlignment
        **/
        VerticalAlignment: any;

        /**
        * ReadingOrder
        **/
        ReadingOrder: number;

        /**
        * Position
        **/
        Position: Kso.KsoXlDataLabelPosition;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * AutoText
        **/
        AutoText: boolean;

        /**
        * NumberFormat
        **/
        NumberFormat: string;

        /**
        * NumberFormatLocal
        **/
        NumberFormatLocal: any;

        /**
        * ShowLegendKey
        **/
        ShowLegendKey: boolean;

        /**
        * Type
        **/
        Type: any;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * ShowSeriesName
        **/
        ShowSeriesName: boolean;

        /**
        * ShowCategoryName
        **/
        ShowCategoryName: boolean;

        /**
        * ShowBubbleSize
        **/
        ShowBubbleSize: boolean;

        /**
        * ShowValue
        **/
        ShowValue: boolean;

        /**
        * ShowPercentage
        **/
        ShowPercentage: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * _Height
        **/
        readonly _Height: number;

        /**
        * FormulaR1C1Local
        **/
        FormulaR1C1Local: string;

        /**
        * Formula
        **/
        Formula: string;

        /**
        * FormulaR1C1
        **/
        FormulaR1C1: string;

        /**
        * ShowRange
        **/
        ShowRange: boolean;

        /**
        * Height
        **/
        Height: number;

        /**
        * Width
        **/
        Width: number;

    }

    interface WpsTabStops {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        ClearAll(): void;

        Before(Position?: number, prop?: WpsTabStop): void;

        Item(Index?: any, prop?: WpsTabStop): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Position?: number, Alignment?: any, Leader?: any, prop?: WpsTabStop): void;

        After(Position?: number, prop?: WpsTabStop): void;

    }

    interface WpsDataTable {
        /**
        * ShowLegendKey
        **/
        ShowLegendKey: boolean;

        /**
        * HasBorderHorizontal
        **/
        HasBorderHorizontal: boolean;

        /**
        * HasBorderVertical
        **/
        HasBorderVertical: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        Delete(): void;

        Select(): void;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * HasBorderOutline
        **/
        HasBorderOutline: boolean;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsChartData {
        /**
        * IsLinked
        **/
        readonly IsLinked: boolean;

        /**
        * Workbook
        **/
        readonly Workbook: any;

        Activate(): void;

        BreakLink(): void;

        ActivateChartDataWindow(): void;

    }

    interface WpsChartGroups extends Kso.KsoChartGroups {}

    interface WpsChartGroup {
        /**
        * SeriesLines
        **/
        readonly SeriesLines: WpsSeriesLines;

        /**
        * AxisGroup
        **/
        AxisGroup: Kso.KsoXlAxisGroup;

        /**
        * DownBars
        **/
        readonly DownBars: WpsDownBars;

        /**
        * HasRadarAxisLabels
        **/
        HasRadarAxisLabels: boolean;

        /**
        * SubType
        **/
        SubType: number;

        /**
        * DropLines
        **/
        readonly DropLines: WpsDropLines;

        /**
        * FirstSliceAngle
        **/
        FirstSliceAngle: number;

        /**
        * DoughnutHoleSize
        **/
        DoughnutHoleSize: number;

        /**
        * HasHiLoLines
        **/
        HasHiLoLines: boolean;

        /**
        * GapWidth
        **/
        GapWidth: number;

        SeriesCollection(Index?: any, prop?: any): void;

        /**
        * HasDropLines
        **/
        HasDropLines: boolean;

        /**
        * HasSeriesLines
        **/
        HasSeriesLines: boolean;

        /**
        * HasUpDownBars
        **/
        HasUpDownBars: boolean;

        /**
        * HiLoLines
        **/
        readonly HiLoLines: WpsHiLoLines;

        /**
        * SplitValue
        **/
        SplitValue: any;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Overlap
        **/
        Overlap: number;

        /**
        * RadarAxisLabels
        **/
        readonly RadarAxisLabels: WpsTickLabels;

        /**
        * Type
        **/
        Type: number;

        CategoryCollection(Index?: any, lcid?: number, prop?: any): void;

        /**
        * UpBars
        **/
        readonly UpBars: WpsUpBars;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * VaryByCategories
        **/
        VaryByCategories: boolean;

        /**
        * SizeRepresents
        **/
        SizeRepresents: Kso.KsoXlSizeRepresents;

        /**
        * BubbleScale
        **/
        BubbleScale: number;

        /**
        * ShowNegativeBubbles
        **/
        ShowNegativeBubbles: boolean;

        /**
        * SplitType
        **/
        SplitType: Kso.KsoXlChartSplitType;

        /**
        * SecondPlotSize
        **/
        SecondPlotSize: number;

        /**
        * Has3DShading
        **/
        Has3DShading: boolean;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        FullCategoryCollection(Index?: any, lcid?: number, prop?: any): void;

    }

    interface WpsLegendEntry extends Kso.KsoLegendEntry {}

    interface WpsDownBars {
        Delete(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsDropLines {
        Delete(): void;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsTickLabels {
        Select(prop?: any): void;

        /**
        * Orientation
        **/
        Orientation: Kso.KsoXlTickLabelOrientation;

        /**
        * NumberFormat
        **/
        NumberFormat: string;

        /**
        * Name
        **/
        readonly Name: string;

        Delete(prop?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        /**
        * NumberFormatLinked
        **/
        NumberFormatLinked: boolean;

        /**
        * NumberFormatLocal
        **/
        NumberFormatLocal: any;

        /**
        * ReadingOrder
        **/
        ReadingOrder: number;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Depth
        **/
        readonly Depth: number;

        /**
        * Offset
        **/
        Offset: number;

        /**
        * Alignment
        **/
        Alignment: number;

        /**
        * MultiLevel
        **/
        MultiLevel: boolean;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsSeries {
        Delete(prop?: any): void;

        /**
        * InvertColorIndex
        **/
        InvertColorIndex: Kso.KsoXlColorIndex;

        Select(prop?: any): void;

        DataLabels(Index?: any, prop?: any): void;

        /**
        * Name
        **/
        Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * AxisGroup
        **/
        AxisGroup: Kso.KsoXlAxisGroup;

        /**
        * MarkerStyle
        **/
        MarkerStyle: Kso.KsoXlMarkerStyle;

        Copy(prop?: any): void;

        ClearFormats(prop?: any): void;

        /**
        * MarkerForegroundColorIndex
        **/
        MarkerForegroundColorIndex: Kso.KsoXlColorIndex;

        ErrorBar(Direction?: Kso.KsoXlErrorBarDirection, Include?: Kso.KsoXlErrorBarInclude, Type?: Kso.KsoXlErrorBarType, Amount?: any, MinusValues?: any, prop?: any): void;

        /**
        * ErrorBars
        **/
        readonly ErrorBars: WpsErrorBars;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Explosion
        **/
        Explosion: number;

        /**
        * Values
        **/
        Values: any;

        /**
        * FormulaR1C1Local
        **/
        FormulaR1C1Local: string;

        /**
        * Formula
        **/
        Formula: string;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * FormulaLocal
        **/
        FormulaLocal: string;

        /**
        * FormulaR1C1
        **/
        FormulaR1C1: string;

        /**
        * HasDataLabels
        **/
        HasDataLabels: boolean;

        /**
        * PlotColorIndex
        **/
        readonly PlotColorIndex: number;

        /**
        * LeaderLines
        **/
        readonly LeaderLines: WpsLeaderLines;

        /**
        * ApplyPictToEnd
        **/
        ApplyPictToEnd: boolean;

        /**
        * HasErrorBars
        **/
        HasErrorBars: boolean;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * InvertIfNegative
        **/
        InvertIfNegative: boolean;

        /**
        * Smooth
        **/
        Smooth: boolean;

        Points(Index?: any, prop?: any): void;

        /**
        * MarkerBackgroundColor
        **/
        MarkerBackgroundColor: number;

        /**
        * MarkerBackgroundColorIndex
        **/
        MarkerBackgroundColorIndex: Kso.KsoXlColorIndex;

        /**
        * MarkerForegroundColor
        **/
        MarkerForegroundColor: number;

        /**
        * MarkerSize
        **/
        MarkerSize: number;

        /**
        * PictureType
        **/
        PictureType: Kso.KsoXlChartPictureType;

        Paste(prop?: any): void;

        /**
        * PictureUnit2
        **/
        PictureUnit2: number;

        /**
        * PictureUnit
        **/
        PictureUnit: number;

        /**
        * XValues
        **/
        XValues: any;

        /**
        * PlotOrder
        **/
        PlotOrder: number;

        Trendlines(Index?: any, prop?: any): void;

        /**
        * Type
        **/
        Type: number;

        /**
        * HasLeaderLines
        **/
        HasLeaderLines: boolean;

        /**
        * ChartType
        **/
        ChartType: Kso.KsoXlChartType;

        ApplyCustomType(ChartType?: Kso.KsoXlChartType): void;

        /**
        * BubbleSizes
        **/
        BubbleSizes: any;

        /**
        * BarShape
        **/
        BarShape: Kso.KsoXlBarShape;

        /**
        * ApplyPictToSides
        **/
        ApplyPictToSides: boolean;

        /**
        * ApplyPictToFront
        **/
        ApplyPictToFront: boolean;

        /**
        * Has3DEffect
        **/
        Has3DEffect: boolean;

        /**
        * InvertColor
        **/
        InvertColor: number;

        ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, prop?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * IsFiltered
        **/
        IsFiltered: boolean;

    }

    interface WpsSeriesLines {
        Delete(prop?: any): void;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsUpBars {
        Delete(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsDiagramNode extends Kso.KsoDiagramNode {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsDiagramNodeChildren extends Kso.KsoDiagramNodeChildren {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsDiagram {
        /**
        * Nodes
        **/
        readonly Nodes: Kso.KsoDiagramNodes;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * AutoLayout
        **/
        AutoLayout: Kso.KsoMsoTriState;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        readonly Type: Kso.KsoMsoDiagramType;

        /**
        * Reverse
        **/
        Reverse: Kso.KsoMsoTriState;

        Convert(Type?: Kso.KsoMsoDiagramType): void;

        /**
        * AutoFormat
        **/
        AutoFormat: Kso.KsoMsoTriState;

        FitText(): void;

    }

    interface WpsCanvasShapes extends Kso.KsoCanvasShapes {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsFreeformBuilder extends Kso.KsoFreeformBuilder {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsMailMergeFields {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsMailMergeField): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        AddAsk(Range?: WpsRange, Name?: string, Prompt?: any, DefaultAskText?: any, AskOnce?: any, prop?: WpsMailMergeField): void;

        AddFillIn(Range?: WpsRange, Prompt?: any, DefaultFillInText?: any, AskOnce?: any, prop?: WpsMailMergeField): void;

        Add(Range?: WpsRange, Name?: string, prop?: WpsMailMergeField): void;

        AddIf(Range?: WpsRange, MergeField?: string, Comparison?: WpsWdMailMergeComparison, CompareTo?: any, TrueAutoText?: any, TrueText?: any, FalseAutoText?: any, FalseText?: any, prop?: WpsMailMergeField): void;

        AddMergeRec(Range?: WpsRange, prop?: WpsMailMergeField): void;

        AddMergeSeq(Range?: WpsRange, prop?: WpsMailMergeField): void;

        AddNext(Range?: WpsRange, prop?: WpsMailMergeField): void;

        AddNextIf(Range?: WpsRange, MergeField?: string, Comparison?: WpsWdMailMergeComparison, CompareTo?: any, prop?: WpsMailMergeField): void;

        AddSet(Range?: WpsRange, Name?: string, ValueText?: any, ValueAutoText?: any, prop?: WpsMailMergeField): void;

        AddSkipIf(Range?: WpsRange, MergeField?: string, Comparison?: WpsWdMailMergeComparison, CompareTo?: any, prop?: WpsMailMergeField): void;

    }

    interface WpsParagraphs {
        /**
        * SpaceAfter
        **/
        SpaceAfter: number;

        /**
        * NoLineNumber
        **/
        NoLineNumber: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * TabStops
        **/
        TabStops: WpsTabStops;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * First
        **/
        readonly First: WpsParagraph;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Last
        **/
        readonly Last: WpsParagraph;

        IndentCharWidth(Count?: number): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Format
        **/
        Format: WpsParagraphFormat;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        OpenOrCloseUp(): void;

        Item(Index?: number, prop?: WpsParagraph): void;

        /**
        * BaseLineAlignment
        **/
        BaseLineAlignment: WpsWdBaselineAlignment;

        /**
        * Style
        **/
        Style: any;

        /**
        * Alignment
        **/
        Alignment: WpsWdParagraphAlignment;

        Space15(): void;

        /**
        * KeepTogether
        **/
        KeepTogether: number;

        OutlineDemote(): void;

        /**
        * KeepWithNext
        **/
        KeepWithNext: number;

        /**
        * HangingPunctuation
        **/
        HangingPunctuation: number;

        /**
        * LeftIndent
        **/
        LeftIndent: number;

        /**
        * PageBreakBefore
        **/
        PageBreakBefore: number;

        /**
        * RightIndent
        **/
        RightIndent: number;

        /**
        * LineUnitAfter
        **/
        LineUnitAfter: number;

        Reset(): void;

        /**
        * DisableLineHeightGrid
        **/
        DisableLineHeightGrid: number;

        /**
        * FirstLineIndent
        **/
        FirstLineIndent: number;

        /**
        * LineSpacing
        **/
        LineSpacing: number;

        /**
        * LineSpacingRule
        **/
        LineSpacingRule: WpsWdLineSpacing;

        Add(Range?: any, prop?: WpsParagraph): void;

        /**
        * SpaceBefore
        **/
        SpaceBefore: number;

        TabHangingIndent(Count?: number): void;

        /**
        * Hyphenation
        **/
        Hyphenation: number;

        OpenUp(): void;

        /**
        * HalfWidthPunctuationOnTopOfLine
        **/
        HalfWidthPunctuationOnTopOfLine: number;

        /**
        * WidowControl
        **/
        WidowControl: number;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * FarEastLineBreakControl
        **/
        FarEastLineBreakControl: number;

        /**
        * WordWrap
        **/
        WordWrap: number;

        DecreaseSpacing(): void;

        /**
        * OutlineLevel
        **/
        OutlineLevel: WpsWdOutlineLevel;

        /**
        * AutoAdjustRightIndent
        **/
        AutoAdjustRightIndent: number;

        /**
        * AddSpaceBetweenFarEastAndDigit
        **/
        AddSpaceBetweenFarEastAndDigit: number;

        /**
        * AddSpaceBetweenFarEastAndAlpha
        **/
        AddSpaceBetweenFarEastAndAlpha: number;

        /**
        * ReadingOrder
        **/
        ReadingOrder: WpsWdReadingOrder;

        Outdent(): void;

        IndentFirstLineCharWidth(Count?: number): void;

        CloseUp(): void;

        TabIndent(Count?: number): void;

        Space2(): void;

        Space1(): void;

        OutlinePromote(): void;

        OutlineDemoteToBody(): void;

        Indent(): void;

        /**
        * CharacterUnitRightIndent
        **/
        CharacterUnitRightIndent: number;

        /**
        * CharacterUnitLeftIndent
        **/
        CharacterUnitLeftIndent: number;

        /**
        * CharacterUnitFirstLineIndent
        **/
        CharacterUnitFirstLineIndent: number;

        /**
        * LineUnitBefore
        **/
        LineUnitBefore: number;

        /**
        * SpaceBeforeAuto
        **/
        SpaceBeforeAuto: number;

        /**
        * SpaceAfterAuto
        **/
        SpaceAfterAuto: number;

        IncreaseSpacing(): void;

    }

    interface WpsParagraph {
        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Parent
        **/
        readonly Parent: any;

        IndentCharWidth(Count?: number): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        OpenOrCloseUp(): void;

        /**
        * BaseLineAlignment
        **/
        BaseLineAlignment: WpsWdBaselineAlignment;

        /**
        * Style
        **/
        Style: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Format
        **/
        Format: WpsParagraphFormat;

        Next(Count?: any, prop?: WpsParagraph): void;

        /**
        * TabStops
        **/
        TabStops: WpsTabStops;

        OutlineDemote(): void;

        /**
        * KeepWithNext
        **/
        KeepWithNext: number;

        /**
        * DropCap
        **/
        readonly DropCap: WpsDropCap;

        /**
        * Alignment
        **/
        Alignment: WpsWdParagraphAlignment;

        Space15(): void;

        /**
        * KeepTogether
        **/
        KeepTogether: number;

        /**
        * HangingPunctuation
        **/
        HangingPunctuation: number;

        /**
        * PageBreakBefore
        **/
        PageBreakBefore: number;

        /**
        * LeftIndent
        **/
        LeftIndent: number;

        /**
        * SpaceAfter
        **/
        SpaceAfter: number;

        /**
        * NoLineNumber
        **/
        NoLineNumber: number;

        /**
        * RightIndent
        **/
        RightIndent: number;

        /**
        * DisableLineHeightGrid
        **/
        DisableLineHeightGrid: number;

        /**
        * LineUnitAfter
        **/
        LineUnitAfter: number;

        Reset(): void;

        /**
        * FirstLineIndent
        **/
        FirstLineIndent: number;

        SelectNumber(): void;

        /**
        * LineSpacing
        **/
        LineSpacing: number;

        /**
        * LineSpacingRule
        **/
        LineSpacingRule: WpsWdLineSpacing;

        /**
        * SpaceBefore
        **/
        SpaceBefore: number;

        TabHangingIndent(Count?: number): void;

        /**
        * Hyphenation
        **/
        Hyphenation: number;

        /**
        * ID
        **/
        ID: string;

        OpenUp(): void;

        /**
        * HalfWidthPunctuationOnTopOfLine
        **/
        HalfWidthPunctuationOnTopOfLine: number;

        /**
        * WidowControl
        **/
        WidowControl: number;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * FarEastLineBreakControl
        **/
        FarEastLineBreakControl: number;

        /**
        * WordWrap
        **/
        WordWrap: number;

        /**
        * OutlineLevel
        **/
        OutlineLevel: WpsWdOutlineLevel;

        /**
        * AutoAdjustRightIndent
        **/
        AutoAdjustRightIndent: number;

        /**
        * AddSpaceBetweenFarEastAndAlpha
        **/
        AddSpaceBetweenFarEastAndAlpha: number;

        /**
        * AddSpaceBetweenFarEastAndDigit
        **/
        AddSpaceBetweenFarEastAndDigit: number;

        Outdent(): void;

        /**
        * ReadingOrder
        **/
        ReadingOrder: WpsWdReadingOrder;

        CloseUp(): void;

        IndentFirstLineCharWidth(Count?: number): void;

        ListAdvanceTo(Level1?: number, Level2?: number, Level3?: number, Level4?: number, Level5?: number, Level6?: number, Level7?: number, Level8?: number, Level9?: number): void;

        TabIndent(Count?: number): void;

        Space1(): void;

        Space2(): void;

        Previous(Count?: any, prop?: WpsParagraph): void;

        OutlinePromote(): void;

        OutlineDemoteToBody(): void;

        Indent(): void;

        /**
        * CharacterUnitRightIndent
        **/
        CharacterUnitRightIndent: number;

        /**
        * CharacterUnitLeftIndent
        **/
        CharacterUnitLeftIndent: number;

        /**
        * CharacterUnitFirstLineIndent
        **/
        CharacterUnitFirstLineIndent: number;

        /**
        * LineUnitBefore
        **/
        LineUnitBefore: number;

        /**
        * SpaceBeforeAuto
        **/
        SpaceBeforeAuto: number;

        /**
        * IsStyleSeparator
        **/
        readonly IsStyleSeparator: boolean;

        /**
        * SpaceAfterAuto
        **/
        SpaceAfterAuto: number;

        ResetAdvanceTo(): void;

        SeparateList(): void;

        JoinList(): void;

        /**
        * MirrorIndents
        **/
        MirrorIndents: number;

        /**
        * TextboxTightWrap
        **/
        TextboxTightWrap: WpsWdTextboxTightWrap;

        ListNumberOriginal(Level?: number, prop?: number): void;

        /**
        * ParaID
        **/
        readonly ParaID: number;

        /**
        * TextID
        **/
        readonly TextID: number;

        /**
        * CollapsedState
        **/
        CollapsedState: boolean;

        /**
        * CollapseHeadingByDefault
        **/
        CollapseHeadingByDefault: boolean;

    }

    interface WpsParagraphFormat {
        IndentCharWidth(Count?: number): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        OpenOrCloseUp(): void;

        /**
        * BaseLineAlignment
        **/
        BaseLineAlignment: WpsWdBaselineAlignment;

        /**
        * Style
        **/
        Style: any;

        /**
        * CollapsedByDefault
        **/
        CollapsedByDefault: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Alignment
        **/
        Alignment: WpsWdParagraphAlignment;

        Space15(): void;

        /**
        * KeepTogether
        **/
        KeepTogether: number;

        /**
        * KeepWithNext
        **/
        KeepWithNext: number;

        /**
        * HangingPunctuation
        **/
        HangingPunctuation: number;

        /**
        * LeftIndent
        **/
        LeftIndent: number;

        /**
        * PageBreakBefore
        **/
        PageBreakBefore: number;

        /**
        * SpaceAfter
        **/
        SpaceAfter: number;

        /**
        * NoLineNumber
        **/
        NoLineNumber: number;

        /**
        * RightIndent
        **/
        RightIndent: number;

        /**
        * LineUnitAfter
        **/
        LineUnitAfter: number;

        Reset(): void;

        /**
        * DisableLineHeightGrid
        **/
        DisableLineHeightGrid: number;

        /**
        * FirstLineIndent
        **/
        FirstLineIndent: number;

        /**
        * LineSpacing
        **/
        LineSpacing: number;

        /**
        * LineSpacingRule
        **/
        LineSpacingRule: WpsWdLineSpacing;

        /**
        * SpaceBefore
        **/
        SpaceBefore: number;

        TabHangingIndent(Count?: number): void;

        /**
        * Hyphenation
        **/
        Hyphenation: number;

        OpenUp(): void;

        /**
        * HalfWidthPunctuationOnTopOfLine
        **/
        HalfWidthPunctuationOnTopOfLine: number;

        /**
        * WidowControl
        **/
        WidowControl: number;

        /**
        * FarEastLineBreakControl
        **/
        FarEastLineBreakControl: number;

        /**
        * WordWrap
        **/
        WordWrap: number;

        /**
        * OutlineLevel
        **/
        OutlineLevel: WpsWdOutlineLevel;

        /**
        * AutoAdjustRightIndent
        **/
        AutoAdjustRightIndent: number;

        /**
        * AddSpaceBetweenFarEastAndDigit
        **/
        AddSpaceBetweenFarEastAndDigit: number;

        /**
        * AddSpaceBetweenFarEastAndAlpha
        **/
        AddSpaceBetweenFarEastAndAlpha: number;

        /**
        * TabStops
        **/
        TabStops: WpsTabStops;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * ReadingOrder
        **/
        ReadingOrder: WpsWdReadingOrder;

        IndentFirstLineCharWidth(Count?: number): void;

        CloseUp(): void;

        TabIndent(Count?: number): void;

        Space2(): void;

        Space1(): void;

        /**
        * CharacterUnitRightIndent
        **/
        CharacterUnitRightIndent: number;

        /**
        * CharacterUnitLeftIndent
        **/
        CharacterUnitLeftIndent: number;

        /**
        * CharacterUnitFirstLineIndent
        **/
        CharacterUnitFirstLineIndent: number;

        /**
        * LineUnitBefore
        **/
        LineUnitBefore: number;

        /**
        * SpaceBeforeAuto
        **/
        SpaceBeforeAuto: number;

        /**
        * SpaceAfterAuto
        **/
        SpaceAfterAuto: number;

        /**
        * MirrorIndents
        **/
        MirrorIndents: number;

        /**
        * TextboxTightWrap
        **/
        TextboxTightWrap: WpsWdTextboxTightWrap;

    }

    interface WpsTabStop {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Previous
        **/
        readonly Previous: WpsTabStop;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Alignment
        **/
        Alignment: WpsWdTabAlignment;

        /**
        * Leader
        **/
        Leader: WpsWdTabLeader;

        /**
        * Position
        **/
        Position: number;

        /**
        * CustomTab
        **/
        readonly CustomTab: boolean;

        /**
        * Next
        **/
        readonly Next: WpsTabStop;

        Clear(): void;

    }

    interface WpsDataLabels {
        Delete(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        Select(prop?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * HorizontalAlignment
        **/
        HorizontalAlignment: any;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * NumberFormatLinked
        **/
        NumberFormatLinked: boolean;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * Orientation
        **/
        Orientation: any;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * VerticalAlignment
        **/
        VerticalAlignment: any;

        /**
        * ReadingOrder
        **/
        ReadingOrder: number;

        /**
        * Position
        **/
        Position: Kso.KsoXlDataLabelPosition;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * AutoText
        **/
        AutoText: boolean;

        /**
        * NumberFormat
        **/
        NumberFormat: string;

        /**
        * NumberFormatLocal
        **/
        NumberFormatLocal: any;

        /**
        * ShowLegendKey
        **/
        ShowLegendKey: boolean;

        /**
        * Type
        **/
        Type: any;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * ShowSeriesName
        **/
        ShowSeriesName: boolean;

        /**
        * ShowCategoryName
        **/
        ShowCategoryName: boolean;

        /**
        * ShowBubbleSize
        **/
        ShowBubbleSize: boolean;

        /**
        * ShowValue
        **/
        ShowValue: boolean;

        /**
        * ShowPercentage
        **/
        ShowPercentage: boolean;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Separator
        **/
        Separator: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: any, prop?: WpsDataLabel): void;

        _NewEnum(prop?: any): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        _Default(Index?: any, prop?: WpsDataLabel): void;

        Propagate(Index?: any): void;

        /**
        * ShowRange
        **/
        ShowRange: boolean;

    }

    interface WpsHyperlinks {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        _Add(Anchor?: any, Address?: any, SubAddress?: any, prop?: WpsHyperlink): void;

        Item(Index?: any, prop?: WpsHyperlink): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Add(Anchor?: any, Address?: any, SubAddress?: any, ScreenTip?: any, TextToDisplay?: any, Target?: any, prop?: WpsHyperlink): void;

    }

    interface WpsStyle {
        /**
        * Locked
        **/
        Locked: boolean;

        /**
        * Description
        **/
        readonly Description: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NameLocal
        **/
        NameLocal: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        readonly Type: WpsWdStyleType;

        /**
        * BaseStyle
        **/
        BaseStyle: any;

        /**
        * BuiltIn
        **/
        readonly BuiltIn: boolean;

        LinkToListTemplate(ListTemplate?: WpsListTemplate, ListLevelNumber?: any): void;

        /**
        * Hidden
        **/
        Hidden: boolean;

        /**
        * NextParagraphStyle
        **/
        NextParagraphStyle: any;

        /**
        * InUse
        **/
        readonly InUse: boolean;

        /**
        * Linked
        **/
        readonly Linked: boolean;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * ParagraphFormat
        **/
        ParagraphFormat: WpsParagraphFormat;

        /**
        * Visibility
        **/
        Visibility: boolean;

        /**
        * Font
        **/
        Font: WpsFont;

        /**
        * Frame
        **/
        readonly Frame: WpsFrame;

        /**
        * LanguageID
        **/
        LanguageID: WpsWdLanguageID;

        /**
        * NoProofing
        **/
        NoProofing: number;

        /**
        * AutomaticallyUpdate
        **/
        AutomaticallyUpdate: boolean;

        /**
        * ListTemplate
        **/
        readonly ListTemplate: WpsListTemplate;

        /**
        * ListLevelNumber
        **/
        readonly ListLevelNumber: number;

        /**
        * LanguageIDFarEast
        **/
        LanguageIDFarEast: WpsWdLanguageID;

        Delete(): void;

        /**
        * LinkStyle
        **/
        LinkStyle: any;

        /**
        * NoSpaceBetweenParagraphsOfSameStyle
        **/
        NoSpaceBetweenParagraphsOfSameStyle: boolean;

        /**
        * Table
        **/
        readonly Table: WpsTableStyle;

        /**
        * Priority
        **/
        Priority: number;

        /**
        * UnhideWhenUsed
        **/
        UnhideWhenUsed: boolean;

        /**
        * QuickStyle
        **/
        QuickStyle: boolean;

    }

    interface WpsTextRetrievalMode {
        /**
        * IncludeFieldCodes
        **/
        IncludeFieldCodes: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * IncludeHiddenText
        **/
        IncludeHiddenText: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ViewType
        **/
        ViewType: WpsWdViewType;

    }

    interface WpsDialog {
        Update(): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Show(TimeOut?: any, prop?: number): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Display(TimeOut?: any, prop?: number): void;

        /**
        * DefaultTab
        **/
        DefaultTab: WpsWdWordDialogTab;

        /**
        * Type
        **/
        readonly Type: WpsWdWordDialog;

        Execute(): void;

        /**
        * CommandBarId
        **/
        readonly CommandBarId: number;

        /**
        * CommandName
        **/
        readonly CommandName: string;

    }

    interface WpsDialogs {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: WpsWdWordDialog, prop?: WpsDialog): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsFields {
        Update(prop?: number): void;

        /**
        * Locked
        **/
        Locked: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsField): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        ToggleShowCodes(): void;

        Unlink(): void;

        UpdateSource(): void;

        Add(Range?: WpsRange, Type?: any, Text?: any, PreserveFormatting?: any, prop?: WpsField): void;

    }

    interface WpsSubdocuments {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsSubdocument): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Expanded
        **/
        Expanded: boolean;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        AddFromRange(Range?: WpsRange, prop?: WpsSubdocument): void;

        Merge(FirstSubdocument?: any, LastSubdocument?: any): void;

        AddFromFile(Name?: any, ConfirmConversions?: any, ReadOnly?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, prop?: WpsSubdocument): void;

        Delete(): void;

        Select(): void;

    }

    interface WpsFormFields {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsFormField): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Shaded
        **/
        Shaded: boolean;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Add(Range?: WpsRange, Type?: WpsWdFieldType, prop?: WpsFormField): void;

    }

    interface WpsFormField {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ExitMacro
        **/
        ExitMacro: string;

        /**
        * Type
        **/
        readonly Type: WpsWdFieldType;

        /**
        * EntryMacro
        **/
        EntryMacro: string;

        /**
        * OwnStatus
        **/
        OwnStatus: boolean;

        /**
        * OwnHelp
        **/
        OwnHelp: boolean;

        /**
        * HelpText
        **/
        HelpText: string;

        /**
        * StatusText
        **/
        StatusText: string;

        /**
        * Enabled
        **/
        Enabled: boolean;

        /**
        * Result
        **/
        Result: string;

        /**
        * TextInput
        **/
        readonly TextInput: WpsTextInput;

        /**
        * CheckBox
        **/
        readonly CheckBox: WpsCheckBox;

        /**
        * DropDown
        **/
        readonly DropDown: WpsDropDown;

        /**
        * Next
        **/
        readonly Next: WpsFormField;

        /**
        * Previous
        **/
        readonly Previous: WpsFormField;

        /**
        * CalculateOnExit
        **/
        CalculateOnExit: boolean;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        Select(): void;

        Copy(): void;

        Cut(): void;

        Delete(): void;

    }

    interface WpsDropDown {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Valid
        **/
        readonly Valid: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Value
        **/
        Value: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Default
        **/
        Default: number;

        /**
        * ListEntries
        **/
        readonly ListEntries: WpsListEntries;

    }

    interface WpsListEntries {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsListEntry): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Clear(): void;

        Add(Name?: string, Index?: any, prop?: WpsListEntry): void;

    }

    interface WpsListEntry {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsHeadingStyle {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Style
        **/
        Style: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Level
        **/
        Level: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsHeadingStyles {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsHeadingStyle): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Style?: any, Level?: number, prop?: WpsHeadingStyle): void;

    }

    interface WpsFrames {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsFrame): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Range?: WpsRange, prop?: WpsFrame): void;

    }

    interface WpsListFormat {
        /**
        * ListLevelNumber
        **/
        ListLevelNumber: number;

        /**
        * ListValue
        **/
        readonly ListValue: number;

        /**
        * List
        **/
        readonly List: WpsList;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * ListTemplate
        **/
        readonly ListTemplate: WpsListTemplate;

        /**
        * ListString
        **/
        readonly ListString: string;

        /**
        * SingleList
        **/
        readonly SingleList: boolean;

        /**
        * SingleListTemplate
        **/
        readonly SingleListTemplate: boolean;

        /**
        * ListType
        **/
        readonly ListType: WpsWdListType;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        CanContinuePreviousList(ListTemplate?: WpsListTemplate, prop?: WpsWdContinue): void;

        RemoveNumbers(NumberType?: any): void;

        ConvertNumbersToText(NumberType?: any): void;

        CountNumberedItems(NumberType?: any, Level?: any, prop?: number): void;

        ApplyNumberDefaultOld(): void;

        ApplyBulletDefaultOld(): void;

        ApplyOutlineNumberDefaultOld(): void;

        ApplyListTemplateOld(ListTemplate?: WpsListTemplate, ContinuePreviousList?: any, ApplyTo?: any): void;

        ListOutdent(): void;

        ApplyOutlineNumberDefault(DefaultListBehavior?: any): void;

        ListIndent(): void;

        ApplyBulletDefault(DefaultListBehavior?: any): void;

        ApplyListTemplateWithLevel(ListTemplate?: WpsListTemplate, ContinuePreviousList?: any, ApplyTo?: any, DefaultListBehavior?: any, ApplyLevel?: any): void;

        ApplyNumberDefault(DefaultListBehavior?: any): void;

        ApplyListTemplate(ListTemplate?: WpsListTemplate, ContinuePreviousList?: any, ApplyTo?: any, DefaultListBehavior?: any): void;

        /**
        * ListPictureBullet
        **/
        readonly ListPictureBullet: WpsInlineShape;

    }

    interface WpsAutoTextEntry {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Value
        **/
        Value: string;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * StyleName
        **/
        readonly StyleName: string;

        Insert(Where?: WpsRange, RichText?: any, prop?: WpsRange): void;

    }

    interface WpsListParagraphs {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsParagraph): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsListTemplates {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsListTemplate): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(OutlineNumbered?: any, Name?: any, prop?: WpsListTemplate): void;

    }

    interface WpsListTemplate {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        Name: string;

        /**
        * OutlineNumbered
        **/
        OutlineNumbered: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ListLevels
        **/
        readonly ListLevels: WpsListLevels;

        Convert(Level?: any, prop?: WpsListTemplate): void;

    }

    interface WpsListLevels {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsListLevel): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsListLevel {
        /**
        * TrailingCharacter
        **/
        TrailingCharacter: WpsWdTrailingCharacter;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * NumberFormat
        **/
        NumberFormat: string;

        /**
        * NumberStyle
        **/
        NumberStyle: WpsWdListNumberStyle;

        /**
        * TabPosition
        **/
        TabPosition: number;

        /**
        * NumberPosition
        **/
        NumberPosition: number;

        /**
        * Alignment
        **/
        Alignment: WpsWdListLevelAlignment;

        /**
        * TextPosition
        **/
        TextPosition: number;

        /**
        * ResetOnHigherOld
        **/
        ResetOnHigherOld: boolean;

        /**
        * StartAt
        **/
        StartAt: number;

        /**
        * LinkedStyle
        **/
        LinkedStyle: string;

        /**
        * Font
        **/
        Font: WpsFont;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ResetOnHigher
        **/
        ResetOnHigher: number;

        /**
        * PictureBullet
        **/
        readonly PictureBullet: WpsInlineShape;

        ApplyPictureBullet(FileName?: string, prop?: WpsInlineShape): void;

    }

    interface WpsMailMessage {
        DisplaySelectNamesDialog(): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        CheckName(): void;

        DisplayMoveDialog(): void;

        DisplayProperties(): void;

        Forward(): void;

        GoToNext(): void;

        GoToPrevious(): void;

        Reply(): void;

        ReplyAll(): void;

        ToggleHeader(): void;

    }

    interface WpsRevision {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Style
        **/
        readonly Style: WpsStyle;

        Accept(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Author
        **/
        readonly Author: string;

        /**
        * Date
        **/
        readonly Date: string;

        /**
        * Type
        **/
        readonly Type: WpsWdRevisionType;

        Reject(): void;

        /**
        * FormatDescription
        **/
        readonly FormatDescription: string;

        /**
        * MovedRange
        **/
        readonly MovedRange: WpsRange;

        /**
        * Cells
        **/
        readonly Cells: WpsCells;

    }

    interface WpsRevisions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsRevision): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        RejectAll(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        AcceptAll(): void;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsTableStyle {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * BottomPadding
        **/
        BottomPadding: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * RightPadding
        **/
        RightPadding: number;

        /**
        * RowStripe
        **/
        RowStripe: number;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * AllowPageBreaks
        **/
        AllowPageBreaks: boolean;

        /**
        * LeftPadding
        **/
        LeftPadding: number;

        /**
        * TopPadding
        **/
        TopPadding: number;

        /**
        * Alignment
        **/
        Alignment: WpsWdRowAlignment;

        /**
        * Spacing
        **/
        Spacing: number;

        Condition(ConditionCode?: WpsWdConditionCode, prop?: WpsConditionalStyle): void;

        /**
        * TableDirection
        **/
        TableDirection: WpsWdTableDirection;

        /**
        * AllowBreakAcrossPage
        **/
        AllowBreakAcrossPage: number;

        /**
        * LeftIndent
        **/
        LeftIndent: number;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        /**
        * ColumnStripe
        **/
        ColumnStripe: number;

    }

    interface WpsCoAuthoring {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Conflicts
        **/
        readonly Conflicts: WpsConflicts;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Locks
        **/
        readonly Locks: WpsCoAuthLocks;

        /**
        * Authors
        **/
        readonly Authors: WpsCoAuthors;

        /**
        * Updates
        **/
        readonly Updates: WpsCoAuthUpdates;

        /**
        * Me
        **/
        readonly Me: WpsCoAuthor;

        /**
        * PendingUpdates
        **/
        readonly PendingUpdates: boolean;

        /**
        * CanShare
        **/
        readonly CanShare: boolean;

        /**
        * CanMerge
        **/
        readonly CanMerge: boolean;

    }

    interface WpsSynonymInfo {
        /**
        * Found
        **/
        readonly Found: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Word
        **/
        readonly Word: string;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * PartOfSpeechList
        **/
        readonly PartOfSpeechList: any;

        /**
        * Parent
        **/
        readonly Parent: any;

        SynonymList(Meaning?: any, prop?: any): void;

        /**
        * MeaningCount
        **/
        readonly MeaningCount: number;

        /**
        * MeaningList
        **/
        readonly MeaningList: any;

        /**
        * AntonymList
        **/
        readonly AntonymList: any;

        /**
        * RelatedExpressionList
        **/
        readonly RelatedExpressionList: any;

        /**
        * RelatedWordList
        **/
        readonly RelatedWordList: any;

    }

    interface WpsReadabilityStatistic {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Value
        **/
        readonly Value: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsReadabilityStatistics {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsReadabilityStatistic): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsPdfExportOptions {
        /**
        * ViewPdfAuto
        **/
        ViewPdfAuto: boolean;

        /**
        * ConvertTablesOfContents
        **/
        ConvertTablesOfContents: boolean;

        /**
        * ConvertCommentsMode
        **/
        ConvertCommentsMode: WpsWpsPdfCommentsMode;

        EditRight(Rights?: WpsWpsPdfEditRight, prop?: boolean): void;

        /**
        * ConvertFootnotes
        **/
        ConvertFootnotes: boolean;

        /**
        * ConvertEndnotes
        **/
        ConvertEndnotes: boolean;

        /**
        * CopyRight
        **/
        CopyRight: WpsWpsPdfCopyRight;

        /**
        * ConvertSummaryInfo
        **/
        ConvertSummaryInfo: boolean;

        /**
        * PrintRight
        **/
        PrintRight: WpsWpsPdfPrintRight;

        /**
        * ConvertHyperlinks
        **/
        ConvertHyperlinks: boolean;

        /**
        * ConvertTitleStyles
        **/
        ConvertTitleStyles: boolean;

        /**
        * ConvertBuildinStyles
        **/
        ConvertBuildinStyles: boolean;

        /**
        * ConvertBookmark
        **/
        ConvertBookmark: boolean;

        /**
        * ConvertCustomStyles
        **/
        ConvertCustomStyles: boolean;

    }

    interface WpsInlineShapes {
        AddOLEControl(ClassType?: any, Range?: any, prop?: WpsInlineShape): void;

        AddPicture(FileName?: string, LinkToFile?: any, SaveWithDocument?: any, Range?: any, prop?: WpsInlineShape): void;

        AddOLEObject(ClassType?: any, FileName?: any, LinkToFile?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, Range?: any, prop?: WpsInlineShape): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsInlineShape): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        AddPictureBullet(FileName?: string, Range?: any, prop?: WpsInlineShape): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        New(Range?: WpsRange, prop?: WpsInlineShape): void;

        AddHorizontalLine(FileName?: string, Range?: any, prop?: WpsInlineShape): void;

        AddHorizontalLineStandard(Range?: any, prop?: WpsInlineShape): void;

        AddChart2(Style?: number, Type?: Kso.KsoXlChartType, Range?: any, NewLayout?: any, prop?: WpsInlineShape): void;

        AddChart(Type?: Kso.KsoXlChartType, Range?: any, prop?: WpsInlineShape): void;

        AddSmartArt(Layout?: Kso.KsoSmartArtLayout, Range?: any, prop?: WpsInlineShape): void;

        AddWebVideo(EmbedCode?: string, VideoWidth?: any, VideoHeight?: any, PosterFrameImage?: any, Url?: any, Range?: any, prop?: WpsInlineShape): void;

    }

    interface WpsSpellingSuggestion {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsSpellingSuggestions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsSpellingSuggestion): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * SpellingErrorType
        **/
        readonly SpellingErrorType: WpsWdSpellingErrorType;

    }

    interface WpsOMathRad {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * HideDeg
        **/
        HideDeg: boolean;

        /**
        * Deg
        **/
        readonly Deg: WpsOMath;

        /**
        * E
        **/
        readonly E: WpsOMath;

    }

    interface WpsSmartTag {
        Select(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * XML
        **/
        readonly XML: string;

        /**
        * DownloadURL
        **/
        readonly DownloadURL: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Properties
        **/
        readonly Properties: WpsCustomProperties;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * SmartTagActions
        **/
        readonly SmartTagActions: WpsSmartTagActions;

        /**
        * XMLNode
        **/
        readonly XMLNode: WpsXMLNode;

    }

    interface WpsSmartTags {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsSmartTag): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Name?: string, Range?: any, Properties?: any, prop?: WpsSmartTag): void;

        SmartTagsByType(Name?: string, prop?: WpsSmartTags): void;

    }

    interface WpsHTMLDivision {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * RightIndent
        **/
        RightIndent: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Borders
        **/
        readonly Borders: WpsBorders;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * SpaceAfter
        **/
        SpaceAfter: number;

        /**
        * LeftIndent
        **/
        LeftIndent: number;

        /**
        * SpaceBefore
        **/
        SpaceBefore: number;

        /**
        * HTMLDivisions
        **/
        readonly HTMLDivisions: WpsHTMLDivisions;

        HTMLDivisionParent(LevelsUp?: any, prop?: WpsHTMLDivision): void;

        Delete(): void;

    }

    interface WpsHTMLDivisions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsHTMLDivision): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

        Add(Range?: any, prop?: WpsHTMLDivision): void;

    }

    interface WpsCustomProperties {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsCustomProperty): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Name?: string, Value?: string, prop?: WpsCustomProperty): void;

    }

    interface WpsCustomProperty {
        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Value
        **/
        Value: string;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsSmartTagActions {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        ReloadActions(): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsSmartTagAction): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsSmartTagAction {
        /**
        * CheckboxState
        **/
        CheckboxState: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Execute(): void;

        /**
        * Type
        **/
        readonly Type: WpsWdSmartTagControlType;

        /**
        * ExpandHelp
        **/
        ExpandHelp: boolean;

        /**
        * PresentInPane
        **/
        readonly PresentInPane: boolean;

        /**
        * TextboxText
        **/
        TextboxText: string;

        /**
        * ListSelection
        **/
        ListSelection: number;

        /**
        * RadioGroupSelection
        **/
        RadioGroupSelection: number;

        /**
        * ExpandDocumentFragment
        **/
        ExpandDocumentFragment: boolean;

        /**
        * ActiveXControl
        **/
        readonly ActiveXControl: any;

    }

    interface WpsXMLNodes {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsXMLNode): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Name?: string, Namespace?: string, Range?: any, prop?: WpsXMLNode): void;

    }

    interface WpsCaptionLabel {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NumberStyle
        **/
        NumberStyle: WpsWdCaptionNumberStyle;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * BuiltIn
        **/
        readonly BuiltIn: boolean;

        /**
        * ID
        **/
        readonly ID: WpsWdCaptionLabelID;

        /**
        * IncludeChapterNumber
        **/
        IncludeChapterNumber: boolean;

        /**
        * ChapterStyleLevel
        **/
        ChapterStyleLevel: number;

        /**
        * Separator
        **/
        Separator: WpsWdSeparatorType;

        /**
        * Position
        **/
        Position: WpsWdCaptionPosition;

        Delete(): void;

    }

    interface WpsCaptionLabels {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsCaptionLabel): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, prop?: WpsCaptionLabel): void;

    }

    interface WpsXMLChildNodeSuggestions {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsXMLChildNodeSuggestion): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsXMLSchemaReferences {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * AllowSaveAsXMLWithoutValidation
        **/
        AllowSaveAsXMLWithoutValidation: boolean;

        /**
        * HideValidationErrors
        **/
        HideValidationErrors: boolean;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * ShowPlaceholderText
        **/
        ShowPlaceholderText: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * AutomaticValidation
        **/
        AutomaticValidation: boolean;

        /**
        * IgnoreMixedContent
        **/
        IgnoreMixedContent: boolean;

        Item(Index?: any, prop?: WpsXMLSchemaReference): void;

        Validate(): void;

        Add(NamespaceURI?: any, Alias?: any, FileName?: any, InstallForAllUsers?: boolean, prop?: WpsXMLSchemaReference): void;

    }

    interface WpsXMLSchemaReference {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * NamespaceURI
        **/
        readonly NamespaceURI: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        Reload(): void;

        /**
        * Location
        **/
        readonly Location: string;

    }

    interface WpsFootnoteOptions {
        /**
        * LayoutColumns
        **/
        LayoutColumns: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NumberStyle
        **/
        NumberStyle: WpsWdNoteNumberStyle;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Location
        **/
        Location: WpsWdFootnoteLocation;

        /**
        * NumberingRule
        **/
        NumberingRule: WpsWdNumberingRule;

        /**
        * StartingNumber
        **/
        StartingNumber: number;

    }

    interface WpsTablesOfAuthorities {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsTableOfAuthorities): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        NextCitation(ShortCitation?: string): void;

        MarkAllCitations(ShortCitation?: string, LongCitation?: any, LongCitationAutoText?: any, Category?: any): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Format
        **/
        Format: WpsWdToaFormat;

        Add(Range?: WpsRange, Category?: any, Bookmark?: any, Passim?: any, KeepEntryFormatting?: any, Separator?: any, IncludeSequenceName?: any, EntrySeparator?: any, PageRangeSeparator?: any, IncludeCategoryHeader?: any, PageNumberSeparator?: any, prop?: WpsTableOfAuthorities): void;

        MarkCitation(Range?: WpsRange, ShortCitation?: string, LongCitation?: any, LongCitationAutoText?: any, Category?: any, prop?: WpsField): void;

    }

    interface WpsEndnoteOptions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NumberStyle
        **/
        NumberStyle: WpsWdNoteNumberStyle;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Location
        **/
        Location: WpsWdEndnoteLocation;

        /**
        * NumberingRule
        **/
        NumberingRule: WpsWdNumberingRule;

        /**
        * StartingNumber
        **/
        StartingNumber: number;

    }

    interface WpsOMathMat {
        /**
        * Cols
        **/
        readonly Cols: WpsOMathMatCols;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * RowSpacingRule
        **/
        RowSpacingRule: WpsWdOMathSpacingRule;

        Cell(Row?: number, Col?: number, prop?: WpsOMath): void;

        /**
        * Rows
        **/
        readonly Rows: WpsOMathMatRows;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Align
        **/
        Align: WpsWdOMathVertAlignType;

        /**
        * PlcHoldHidden
        **/
        PlcHoldHidden: boolean;

        /**
        * RowSpacing
        **/
        RowSpacing: number;

        /**
        * ColSpacing
        **/
        ColSpacing: number;

        /**
        * ColGapRule
        **/
        ColGapRule: WpsWdOMathSpacingRule;

        /**
        * ColGap
        **/
        ColGap: number;

    }

    interface WpsEditor {
        /**
        * ID
        **/
        readonly ID: string;

        Delete(): void;

        DeleteAll(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * NextRange
        **/
        readonly NextRange: WpsRange;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        SelectAll(): void;

    }

    interface WpsEditors {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsEditor): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(EditorID?: any, prop?: WpsEditor): void;

    }

    interface WpsOMaths {
        BuildUp(): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsOMath): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        Linearize(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Range?: WpsRange, prop?: WpsRange): void;

    }

    interface WpsOMath {
        ConvertToLiteralText(): void;

        /**
        * ParentFunction
        **/
        readonly ParentFunction: WpsOMathFunction;

        /**
        * Functions
        **/
        readonly Functions: WpsOMathFunctions;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * ArgSize
        **/
        ArgSize: number;

        /**
        * ParentOMath
        **/
        readonly ParentOMath: WpsOMath;

        /**
        * ArgIndex
        **/
        readonly ArgIndex: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ParentRow
        **/
        readonly ParentRow: WpsOMathMatRow;

        /**
        * Type
        **/
        Type: WpsWdOMathType;

        /**
        * ParentCol
        **/
        readonly ParentCol: WpsOMathMatCol;

        /**
        * Justification
        **/
        Justification: WpsWdOMathJc;

        /**
        * ParentArg
        **/
        readonly ParentArg: WpsOMath;

        /**
        * NestingLevel
        **/
        readonly NestingLevel: number;

        /**
        * Breaks
        **/
        readonly Breaks: WpsOMathBreaks;

        /**
        * AlignPoint
        **/
        AlignPoint: number;

        Linearize(): void;

        BuildUp(): void;

        Remove(): void;

        ConvertToMathText(): void;

        ConvertToNormalText(): void;

    }

    interface WpsOMathFunction {
        /**
        * Type
        **/
        readonly Type: WpsWdOMathFunctionType;

        /**
        * Box
        **/
        readonly Box: WpsOMathBox;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Args
        **/
        readonly Args: WpsOMathArgs;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Acc
        **/
        readonly Acc: WpsOMathAcc;

        /**
        * Bar
        **/
        readonly Bar: WpsOMathBar;

        /**
        * BorderBox
        **/
        readonly BorderBox: WpsOMathBorderBox;

        /**
        * Delim
        **/
        readonly Delim: WpsOMathDelim;

        /**
        * EqArray
        **/
        readonly EqArray: WpsOMathEqArray;

        /**
        * Frac
        **/
        readonly Frac: WpsOMathFrac;

        /**
        * Func
        **/
        readonly Func: WpsOMathFunc;

        /**
        * GroupChar
        **/
        readonly GroupChar: WpsOMathGroupChar;

        /**
        * LimLow
        **/
        readonly LimLow: WpsOMathLimLow;

        /**
        * Rad
        **/
        readonly Rad: WpsOMathRad;

        /**
        * LimUpp
        **/
        readonly LimUpp: WpsOMathLimUpp;

        /**
        * ScrSubSup
        **/
        readonly ScrSubSup: WpsOMathScrSubSup;

        /**
        * Mat
        **/
        readonly Mat: WpsOMathMat;

        /**
        * Nary
        **/
        readonly Nary: WpsOMathNary;

        /**
        * Phantom
        **/
        readonly Phantom: WpsOMathPhantom;

        /**
        * ScrPre
        **/
        readonly ScrPre: WpsOMathScrPre;

        /**
        * ScrSup
        **/
        readonly ScrSup: WpsOMathScrSup;

        /**
        * ScrSub
        **/
        readonly ScrSub: WpsOMathScrSub;

        /**
        * OMath
        **/
        readonly OMath: WpsOMath;

        Remove(prop?: WpsOMathFunction): void;

    }

    interface WpsCategoryCollection extends Kso.KsoCategoryCollection {
        _NewEnum(prop?: any): void;

    }

    interface WpsDictionaries {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsDictionary): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ActiveCustomDictionary
        **/
        ActiveCustomDictionary: WpsDictionary;

        /**
        * Maximum
        **/
        readonly Maximum: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(FileName?: string, prop?: WpsDictionary): void;

        ClearAll(): void;

    }

    interface WpsConflict {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Accept(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        Reject(): void;

        /**
        * Type
        **/
        readonly Type: WpsWdRevisionType;

    }

    interface WpsConflicts {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsConflict): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        RejectAll(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        AcceptAll(): void;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsOMathAcc {
        /**
        * Char
        **/
        Char: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

    }

    interface WpsOMathArgs {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsOMath): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(BeforeArg?: any, prop?: WpsOMath): void;

    }

    interface WpsOMathBox {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * OpEmu
        **/
        OpEmu: boolean;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * Diff
        **/
        Diff: boolean;

        /**
        * NoBreak
        **/
        NoBreak: boolean;

    }

    interface WpsOMathBar {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * BarTop
        **/
        BarTop: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

    }

    interface WpsOMathBorderBox {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * StrikeV
        **/
        StrikeV: boolean;

        /**
        * StrikeH
        **/
        StrikeH: boolean;

        /**
        * HideRight
        **/
        HideRight: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * HideLeft
        **/
        HideLeft: boolean;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * HideTop
        **/
        HideTop: boolean;

        /**
        * HideBot
        **/
        HideBot: boolean;

        /**
        * StrikeBLTR
        **/
        StrikeBLTR: boolean;

        /**
        * StrikeTLBR
        **/
        StrikeTLBR: boolean;

    }

    interface WpsKeysBoundTo {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Command
        **/
        readonly Command: string;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Context
        **/
        readonly Context: any;

        /**
        * KeyCategory
        **/
        readonly KeyCategory: WpsWdKeyCategory;

        /**
        * CommandParameter
        **/
        readonly CommandParameter: string;

        Item(Index?: number, prop?: WpsKeyBinding): void;

        Key(KeyCode?: number, KeyCode2?: any, prop?: WpsKeyBinding): void;

    }

    interface WpsOMathDelim {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Shape
        **/
        Shape: WpsWdOMathShapeType;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * SepChar
        **/
        SepChar: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMathArgs;

        /**
        * Grow
        **/
        Grow: boolean;

        /**
        * BegChar
        **/
        BegChar: number;

        /**
        * EndChar
        **/
        EndChar: number;

        /**
        * NoLeftChar
        **/
        NoLeftChar: boolean;

        /**
        * NoRightChar
        **/
        NoRightChar: boolean;

    }

    interface WpsOMathFunc {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * FName
        **/
        readonly FName: WpsOMath;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

    }

    interface WpsOMathFrac {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Num
        **/
        readonly Num: WpsOMath;

        /**
        * Den
        **/
        readonly Den: WpsOMath;

        /**
        * Type
        **/
        Type: WpsWdOMathFracType;

    }

    interface WpsLanguage {
        /**
        * ActiveHyphenationDictionary
        **/
        readonly ActiveHyphenationDictionary: WpsDictionary;

        /**
        * ActiveGrammarDictionary
        **/
        readonly ActiveGrammarDictionary: WpsDictionary;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * NameLocal
        **/
        readonly NameLocal: string;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ID
        **/
        readonly ID: WpsWdLanguageID;

        /**
        * ActiveSpellingDictionary
        **/
        readonly ActiveSpellingDictionary: WpsDictionary;

        /**
        * ActiveThesaurusDictionary
        **/
        readonly ActiveThesaurusDictionary: WpsDictionary;

        /**
        * DefaultWritingStyle
        **/
        DefaultWritingStyle: string;

        /**
        * WritingStyleList
        **/
        readonly WritingStyleList: any;

        /**
        * SpellingDictionaryType
        **/
        SpellingDictionaryType: WpsWdDictionaryType;

    }

    interface WpsLanguages {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsLanguage): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsAutoTextEntries {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsAutoTextEntry): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, Range?: WpsRange, prop?: WpsAutoTextEntry): void;

        AppendToSpike(Range?: WpsRange, prop?: WpsAutoTextEntry): void;

    }

    interface WpsOMathGroupChar {
        /**
        * Char
        **/
        Char: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * AlignTop
        **/
        AlignTop: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * CharTop
        **/
        CharTop: boolean;

    }

    interface WpsFileConverters {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsFileConverter): void;

        /**
        * ConvertMacWordChevrons
        **/
        ConvertMacWordChevrons: WpsWdChevronConvertRule;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface WpsBroadcast {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Capabilities
        **/
        readonly Capabilities: number;

        /**
        * AttendeeUrl
        **/
        readonly AttendeeUrl: string;

        /**
        * State
        **/
        readonly State: Kso.KsoMsoBroadcastState;

        /**
        * PresenterServiceUrl
        **/
        readonly PresenterServiceUrl: string;

        /**
        * SessionID
        **/
        readonly SessionID: string;

        Pause(): void;

        Start(serverUrl?: string): void;

        Resume(): void;

        End(): void;

        AddMeetingNotes(notesUrl?: string, notesWacUrl?: string): void;

    }

    interface WpsOMathLimUpp {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        ToLimLow(prop?: WpsOMathFunction): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * Lim
        **/
        readonly Lim: WpsOMath;

    }

    interface WpsOMathLimLow {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        ToLimUpp(prop?: WpsOMathFunction): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * Lim
        **/
        readonly Lim: WpsOMath;

    }

    interface WpsOMathMatCols {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsOMathMatCol): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(BeforeCol?: any, prop?: WpsOMathMatCol): void;

    }

    interface WpsOMathMatRows {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsOMathMatRow): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(BeforeRow?: any, prop?: WpsOMathMatRow): void;

    }

    interface WpsOMathMatCol {
        /**
        * ColIndex
        **/
        readonly ColIndex: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Args
        **/
        readonly Args: WpsOMathArgs;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Align
        **/
        Align: WpsWdOMathHorizAlignType;

    }

    interface WpsOMathMatRow {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Args
        **/
        readonly Args: WpsOMathArgs;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * RowIndex
        **/
        readonly RowIndex: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsOMathNary {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Char
        **/
        Char: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Grow
        **/
        Grow: boolean;

        /**
        * Sub
        **/
        readonly Sub: WpsOMath;

        /**
        * Sup
        **/
        readonly Sup: WpsOMath;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * SubSupLim
        **/
        SubSupLim: boolean;

        /**
        * HideSup
        **/
        HideSup: boolean;

        /**
        * HideSub
        **/
        HideSub: boolean;

    }

    interface WpsOMathPhantom {
        /**
        * ZeroDesc
        **/
        ZeroDesc: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * ZeroAsc
        **/
        ZeroAsc: boolean;

        /**
        * Show
        **/
        Show: boolean;

        /**
        * ZeroWid
        **/
        ZeroWid: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * Transp
        **/
        Transp: boolean;

        /**
        * Smash
        **/
        Smash: boolean;

    }

    interface WpsOMathScrSup {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * Sup
        **/
        readonly Sup: WpsOMath;

    }

    interface WpsOMathScrSub {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * Sub
        **/
        readonly Sub: WpsOMath;

    }

    interface WpsOMathScrPre {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Sup
        **/
        readonly Sup: WpsOMath;

        /**
        * Sub
        **/
        readonly Sub: WpsOMath;

        /**
        * E
        **/
        readonly E: WpsOMath;

        ToScrSubSup(prop?: WpsOMathFunction): void;

    }

    interface WpsLeaderLines {
        /**
        * Parent
        **/
        readonly Parent: any;

        Delete(): void;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        Select(): void;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsXSLTransform {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Alias(AllUsers?: boolean, prop?: string): void;

        Location(AllUsers?: boolean, prop?: string): void;

        /**
        * ID
        **/
        readonly ID: string;

    }

    interface WpsXSLTransforms {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsXSLTransform): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Location?: string, Alias?: any, InstallForAllUsers?: boolean, prop?: WpsXSLTransform): void;

    }

    interface WpsOMathScrSubSup {
        RemoveSub(prop?: WpsOMathFunction): void;

        RemoveSup(prop?: WpsOMathFunction): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * AlignScripts
        **/
        AlignScripts: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * E
        **/
        readonly E: WpsOMath;

        /**
        * Sub
        **/
        readonly Sub: WpsOMath;

        /**
        * Sup
        **/
        readonly Sup: WpsOMath;

        ToScrPre(prop?: WpsOMathFunction): void;

    }

    interface WpsAddIn {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Installed
        **/
        Installed: boolean;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Path
        **/
        readonly Path: string;

        /**
        * Autoload
        **/
        readonly Autoload: boolean;

        /**
        * Compiled
        **/
        readonly Compiled: boolean;

        Delete(): void;

    }

    interface WpsOMathBreak {
        /**
        * AlignAt
        **/
        AlignAt: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsOMathBreaks {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsOMathBreak): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Range?: WpsRange, prop?: WpsOMathBreak): void;

    }

    interface WpsListGallery {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ListTemplates
        **/
        readonly ListTemplates: WpsListTemplates;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Modified(Index?: number, prop?: boolean): void;

        Reset(Index?: number): void;

    }

    interface WpsContentControl {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * LockContentControl
        **/
        LockContentControl: boolean;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * XMLMapping
        **/
        readonly XMLMapping: WpsXMLMapping;

        /**
        * LockContents
        **/
        LockContents: boolean;

        /**
        * Type
        **/
        Type: WpsWdContentControlType;

        Copy(): void;

        Cut(): void;

        Delete(DeleteContents?: boolean): void;

        /**
        * DropdownListEntries
        **/
        readonly DropdownListEntries: WpsContentControlListEntries;

        /**
        * Level
        **/
        readonly Level: WpsWdContentControlLevel;

        /**
        * DateDisplayFormat
        **/
        DateDisplayFormat: string;

        /**
        * PlaceholderText
        **/
        readonly PlaceholderText: WpsBuildingBlock;

        SetPlaceholderText(BuildingBlock?: WpsBuildingBlock, Range?: WpsRange, Text?: string): void;

        /**
        * Title
        **/
        Title: string;

        /**
        * Temporary
        **/
        Temporary: boolean;

        /**
        * MultiLine
        **/
        MultiLine: boolean;

        /**
        * ParentContentControl
        **/
        readonly ParentContentControl: WpsContentControl;

        /**
        * ID
        **/
        readonly ID: string;

        /**
        * ShowingPlaceholderText
        **/
        readonly ShowingPlaceholderText: boolean;

        /**
        * DateStorageFormat
        **/
        DateStorageFormat: WpsWdContentControlDateStorageFormat;

        /**
        * BuildingBlockType
        **/
        BuildingBlockType: WpsWdBuildingBlockTypes;

        /**
        * BuildingBlockCategory
        **/
        BuildingBlockCategory: string;

        /**
        * DateDisplayLocale
        **/
        DateDisplayLocale: WpsWdLanguageID;

        Ungroup(): void;

        /**
        * DefaultTextStyle
        **/
        DefaultTextStyle: any;

        /**
        * DateCalendarType
        **/
        DateCalendarType: WpsWdCalendarType;

        /**
        * Tag
        **/
        Tag: string;

        /**
        * Checked
        **/
        Checked: boolean;

        SetCheckedSymbol(CharacterNumber?: number, Font?: string): void;

        SetUncheckedSymbol(CharacterNumber?: number, Font?: string): void;

        /**
        * Color
        **/
        Color: WpsWdColor;

        /**
        * Appearance
        **/
        Appearance: WpsWdContentControlAppearance;

        /**
        * RepeatingSectionItems
        **/
        readonly RepeatingSectionItems: WpsRepeatingSectionItemColl;

        /**
        * RepeatingSectionItemTitle
        **/
        RepeatingSectionItemTitle: string;

        /**
        * AllowInsertDeleteSection
        **/
        AllowInsertDeleteSection: boolean;

    }

    interface WpsXMLMapping {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * CustomXMLNode
        **/
        readonly CustomXMLNode: Kso.KsoCustomXMLNode;

        /**
        * PrefixMappings
        **/
        readonly PrefixMappings: string;

        /**
        * Creator
        **/
        readonly Creator: number;

        SetMappingByNode(Node?: Kso.KsoCustomXMLNode, prop?: boolean): void;

        Delete(): void;

        SetMapping(XPath?: string, PrefixMapping?: string, Source?: Kso.KsoCustomXMLPart, prop?: boolean): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * CustomXMLPart
        **/
        readonly CustomXMLPart: Kso.KsoCustomXMLPart;

        /**
        * IsMapped
        **/
        readonly IsMapped: boolean;

        /**
        * XPath
        **/
        readonly XPath: string;

    }

    interface WpsFileConverter {
        /**
        * CanSave
        **/
        readonly CanSave: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * FormatName
        **/
        readonly FormatName: string;

        /**
        * CanOpen
        **/
        readonly CanOpen: boolean;

        /**
        * OpenFormat
        **/
        readonly OpenFormat: number;

        /**
        * ClassName
        **/
        readonly ClassName: string;

        /**
        * SaveFormat
        **/
        readonly SaveFormat: number;

        /**
        * Path
        **/
        readonly Path: string;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Extensions
        **/
        readonly Extensions: string;

    }

    interface WpsContentControlListEntries {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsContentControlListEntry): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Text?: string, Value?: string, Index?: number, prop?: WpsContentControlListEntry): void;

        Clear(): void;

    }

    interface WpsContentControlListEntry {
        /**
        * Index
        **/
        Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        MoveUp(): void;

        Delete(): void;

        /**
        * Value
        **/
        Value: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        MoveDown(): void;

        /**
        * Text
        **/
        Text: string;

        Select(): void;

    }

    interface WpsBuildingBlock {
        /**
        * Description
        **/
        Description: string;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Category
        **/
        readonly Category: WpsCategory;

        /**
        * Type
        **/
        readonly Type: WpsBuildingBlockType;

        /**
        * ID
        **/
        readonly ID: string;

        /**
        * Value
        **/
        Value: string;

        /**
        * InsertOptions
        **/
        InsertOptions: number;

        Delete(): void;

        Insert(Where?: WpsRange, RichText?: any, prop?: WpsRange): void;

    }

    interface WpsBuildingBlockTypes {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: WpsWdBuildingBlockTypes, prop?: WpsBuildingBlockType): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsBuildingBlockType {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Categories
        **/
        readonly Categories: WpsCategories;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsCategories {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsCategory): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsRepeatingSectionItemColl {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsRepeatingSectionItem): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsRepeatingSectionItem {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        InsertItemBefore(prop?: WpsRepeatingSectionItem): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

        InsertItemAfter(prop?: WpsRepeatingSectionItem): void;

    }

    interface WpsCoAuthUpdate {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsCoAuthUpdates {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsCoAuthUpdate): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface WpsZoom {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * PageFit
        **/
        PageFit: WpsWdPageFit;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * PageColumns
        **/
        PageColumns: number;

        /**
        * Percentage
        **/
        Percentage: number;

        /**
        * PageRows
        **/
        PageRows: number;

    }

    interface WpsDocumentField {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * StoryType
        **/
        readonly StoryType: WpsWdStoryType;

        /**
        * Value
        **/
        Value: string;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Hidden
        **/
        Hidden: boolean;

        /**
        * PrintOut
        **/
        PrintOut: boolean;

        /**
        * ReadOnly
        **/
        ReadOnly: boolean;

        InsertDocument(prop?: string): void;

        Select(): void;

        Delete(DeleteWithContent?: boolean): void;

    }

    interface WpsTrendline {
        Delete(prop?: any): void;

        /**
        * DataLabel
        **/
        readonly DataLabel: WpsDataLabel;

        /**
        * Name
        **/
        Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Intercept
        **/
        Intercept: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * DisplayEquation
        **/
        DisplayEquation: boolean;

        /**
        * Backward
        **/
        Backward: number;

        ClearFormats(prop?: any): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * DisplayRSquared
        **/
        DisplayRSquared: boolean;

        /**
        * Forward
        **/
        Forward: number;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * InterceptIsAuto
        **/
        InterceptIsAuto: boolean;

        /**
        * NameIsAuto
        **/
        NameIsAuto: boolean;

        /**
        * Order
        **/
        Order: number;

        /**
        * Period
        **/
        Period: number;

        Select(prop?: any): void;

        /**
        * Type
        **/
        Type: Kso.KsoXlTrendlineType;

        /**
        * Forward2
        **/
        Forward2: number;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Backward2
        **/
        Backward2: number;

    }

    interface WpsStyles {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsStyle): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, Type?: any, prop?: WpsStyle): void;

    }

    interface WpsTablesOfFigures {
        MarkEntry(Range?: WpsRange, Entry?: any, EntryAutoText?: any, TableID?: any, Level?: any, prop?: WpsField): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsTableOfFigures): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        AddOld(Range?: WpsRange, Caption?: any, IncludeLabel?: any, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any, IncludePageNumbers?: any, AddedStyles?: any, prop?: WpsTableOfFigures): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Format
        **/
        Format: WpsWdTofFormat;

        Add(Range?: WpsRange, Caption?: any, IncludeLabel?: any, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any, IncludePageNumbers?: any, AddedStyles?: any, UseHyperlinks?: any, HidePageNumbersInWeb?: any, prop?: WpsTableOfFigures): void;

    }

    interface WpsSmartTagRecognizer {
        /**
        * ProgID
        **/
        readonly ProgID: string;

        /**
        * FullName
        **/
        readonly FullName: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Enabled
        **/
        Enabled: boolean;

        /**
        * Caption
        **/
        readonly Caption: string;

    }

    interface WpsSmartTagRecognizers {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsSmartTagRecognizer): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        ReloadRecognizers(): void;

    }

    interface WpsTableOfFigures {
        /**
        * UpperHeadingLevel
        **/
        UpperHeadingLevel: number;

        /**
        * LowerHeadingLevel
        **/
        LowerHeadingLevel: number;

        /**
        * RightAlignPageNumbers
        **/
        RightAlignPageNumbers: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        UpdatePageNumbers(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Caption
        **/
        Caption: string;

        /**
        * IncludeLabel
        **/
        IncludeLabel: boolean;

        /**
        * UseHeadingStyles
        **/
        UseHeadingStyles: boolean;

        /**
        * IncludePageNumbers
        **/
        IncludePageNumbers: boolean;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * UseFields
        **/
        UseFields: boolean;

        /**
        * TableID
        **/
        TableID: string;

        /**
        * HeadingStyles
        **/
        readonly HeadingStyles: WpsHeadingStyles;

        /**
        * TabLeader
        **/
        TabLeader: WpsWdTabLeader;

        Delete(): void;

        Update(): void;

        /**
        * UseHyperlinks
        **/
        UseHyperlinks: boolean;

        /**
        * HidePageNumbersInWeb
        **/
        HidePageNumbersInWeb: boolean;

    }

    interface WpsVariable {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Value
        **/
        Value: string;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsVariables {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsVariable): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Name?: string, Value?: any, prop?: WpsVariable): void;

    }

    interface WpsMailMergeFieldName {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsMailMergeFieldNames {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsMailMergeFieldName): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsMailMergeDataField {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Value
        **/
        readonly Value: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsMailMergeDataFields {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsMailMergeDataField): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsMappedDataField {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Value
        **/
        readonly Value: string;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * DataFieldName
        **/
        readonly DataFieldName: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * DataFieldIndex
        **/
        DataFieldIndex: number;

    }

    interface WpsMappedDataFields {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: WpsWdMappedDataFields, prop?: WpsMappedDataField): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface WpsEnvelope {
        /**
        * DefaultSize
        **/
        DefaultSize: string;

        /**
        * DefaultWidth
        **/
        DefaultWidth: number;

        /**
        * AddressFromTop
        **/
        AddressFromTop: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * DefaultPrintBarCode
        **/
        DefaultPrintBarCode: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * SenderNamefromLeft
        **/
        SenderNamefromLeft: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * DefaultHeight
        **/
        DefaultHeight: number;

        /**
        * Address
        **/
        readonly Address: WpsRange;

        /**
        * ReturnAddress
        **/
        readonly ReturnAddress: WpsRange;

        /**
        * DefaultPrintFIMA
        **/
        DefaultPrintFIMA: boolean;

        /**
        * DefaultOmitReturnAddress
        **/
        DefaultOmitReturnAddress: boolean;

        PrintOut(ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any, Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any, DefaultFaceUp?: any, DefaultOrientation?: any, PrintEPostage?: any, Vertical?: any, RecipientNamefromLeft?: any, RecipientNamefromTop?: any, RecipientPostalfromLeft?: any, RecipientPostalfromTop?: any, SenderNamefromLeft?: any, SenderNamefromTop?: any, SenderPostalfromLeft?: any, SenderPostalfromTop?: any): void;

        /**
        * FeedSource
        **/
        FeedSource: WpsWdPaperTray;

        UpdateDocument(): void;

        /**
        * AddressFromLeft
        **/
        AddressFromLeft: number;

        /**
        * ReturnAddressFromTop
        **/
        ReturnAddressFromTop: number;

        /**
        * ReturnAddressFromLeft
        **/
        ReturnAddressFromLeft: number;

        Options(): void;

        /**
        * AddressStyle
        **/
        readonly AddressStyle: WpsStyle;

        /**
        * ReturnAddressStyle
        **/
        readonly ReturnAddressStyle: WpsStyle;

        /**
        * DefaultOrientation
        **/
        DefaultOrientation: WpsWdEnvelopeOrientation;

        /**
        * DefaultFaceUp
        **/
        DefaultFaceUp: boolean;

        Insert2000(ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any, Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any, DefaultFaceUp?: any, DefaultOrientation?: any): void;

        PrintOut2000(ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any, Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any, DefaultFaceUp?: any, DefaultOrientation?: any): void;

        /**
        * Vertical
        **/
        Vertical: boolean;

        /**
        * RecipientNamefromTop
        **/
        RecipientNamefromTop: number;

        /**
        * RecipientNamefromLeft
        **/
        RecipientNamefromLeft: number;

        /**
        * RecipientPostalfromTop
        **/
        RecipientPostalfromTop: number;

        /**
        * RecipientPostalfromLeft
        **/
        RecipientPostalfromLeft: number;

        /**
        * SenderNamefromTop
        **/
        SenderNamefromTop: number;

        /**
        * SenderPostalfromLeft
        **/
        SenderPostalfromLeft: number;

        /**
        * SenderPostalfromTop
        **/
        SenderPostalfromTop: number;

        Insert(ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any, Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any, DefaultFaceUp?: any, DefaultOrientation?: any, PrintEPostage?: any, Vertical?: any, RecipientNamefromLeft?: any, RecipientNamefromTop?: any, RecipientPostalfromLeft?: any, RecipientPostalfromTop?: any, SenderNamefromLeft?: any, SenderNamefromTop?: any, SenderPostalfromLeft?: any, SenderPostalfromTop?: any): void;

    }

    interface WpsTablesOfContents {
        MarkEntry(Range?: WpsRange, Entry?: any, EntryAutoText?: any, TableID?: any, Level?: any, prop?: WpsField): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsTableOfContents): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        AddOld(Range?: WpsRange, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any, IncludePageNumbers?: any, AddedStyles?: any, prop?: WpsTableOfContents): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Format
        **/
        Format: WpsWdTocFormat;

        Add2000(Range?: WpsRange, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any, IncludePageNumbers?: any, AddedStyles?: any, UseHyperlinks?: any, HidePageNumbersInWeb?: any, prop?: WpsTableOfContents): void;

        Add(Range?: WpsRange, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any, IncludePageNumbers?: any, AddedStyles?: any, UseHyperlinks?: any, HidePageNumbersInWeb?: any, UseOutlineLevels?: any, prop?: WpsTableOfContents): void;

    }

    interface WpsTableOfContents {
        /**
        * LowerHeadingLevel
        **/
        LowerHeadingLevel: number;

        /**
        * UpperHeadingLevel
        **/
        UpperHeadingLevel: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        UpdatePageNumbers(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * UseHeadingStyles
        **/
        UseHeadingStyles: boolean;

        /**
        * UseFields
        **/
        UseFields: boolean;

        /**
        * HeadingStyles
        **/
        readonly HeadingStyles: WpsHeadingStyles;

        /**
        * TableID
        **/
        TableID: string;

        /**
        * RightAlignPageNumbers
        **/
        RightAlignPageNumbers: boolean;

        /**
        * IncludePageNumbers
        **/
        IncludePageNumbers: boolean;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * TabLeader
        **/
        TabLeader: WpsWdTabLeader;

        Delete(): void;

        Update(): void;

        /**
        * UseHyperlinks
        **/
        UseHyperlinks: boolean;

        /**
        * HidePageNumbersInWeb
        **/
        HidePageNumbersInWeb: boolean;

    }

    interface WpsTableOfAuthorities {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * IncludeSequenceName
        **/
        IncludeSequenceName: string;

        /**
        * Passim
        **/
        Passim: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * KeepEntryFormatting
        **/
        KeepEntryFormatting: boolean;

        /**
        * Category
        **/
        Category: number;

        /**
        * Bookmark
        **/
        Bookmark: string;

        /**
        * Separator
        **/
        Separator: string;

        /**
        * EntrySeparator
        **/
        EntrySeparator: string;

        /**
        * PageRangeSeparator
        **/
        PageRangeSeparator: string;

        /**
        * IncludeCategoryHeader
        **/
        IncludeCategoryHeader: boolean;

        /**
        * PageNumberSeparator
        **/
        PageNumberSeparator: string;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * TabLeader
        **/
        TabLeader: WpsWdTabLeader;

        Delete(): void;

        Update(): void;

    }

    interface WpsWindow {
        /**
        * Selection
        **/
        readonly Selection: WpsSelection;

        PageScroll(Down?: any, Up?: any): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Panes
        **/
        readonly Panes: WpsPanes;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ActivePane
        **/
        readonly ActivePane: WpsPane;

        /**
        * DisplayRightRuler
        **/
        DisplayRightRuler: boolean;

        /**
        * Top
        **/
        Top: number;

        PrintOut(Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any, PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;

        /**
        * Document
        **/
        readonly Document: WpsDocument;

        /**
        * Left
        **/
        Left: number;

        SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;

        /**
        * Width
        **/
        Width: number;

        /**
        * Height
        **/
        Height: number;

        /**
        * Split
        **/
        Split: boolean;

        NewWindow(prop?: WpsWindow): void;

        /**
        * SplitVertical
        **/
        SplitVertical: number;

        Activate(): void;

        /**
        * Caption
        **/
        Caption: string;

        /**
        * EnvelopeVisible
        **/
        EnvelopeVisible: boolean;

        /**
        * WindowState
        **/
        WindowState: WpsWdWindowState;

        ToggleShowAllReviewers(): void;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * DisplayRulers
        **/
        DisplayRulers: boolean;

        /**
        * DisplayVerticalRuler
        **/
        DisplayVerticalRuler: boolean;

        /**
        * View
        **/
        readonly View: WpsView;

        /**
        * Hwnd
        **/
        readonly Hwnd: number;

        /**
        * UsableHeight
        **/
        readonly UsableHeight: number;

        /**
        * UsableWidth
        **/
        readonly UsableWidth: number;

        /**
        * Type
        **/
        readonly Type: WpsWdWindowType;

        /**
        * Next
        **/
        readonly Next: WpsWindow;

        /**
        * Previous
        **/
        readonly Previous: WpsWindow;

        Close(SaveChanges?: any, RouteDocument?: any): void;

        /**
        * WindowNumber
        **/
        readonly WindowNumber: number;

        /**
        * DisplayVerticalScrollBar
        **/
        DisplayVerticalScrollBar: boolean;

        /**
        * DisplayHorizontalScrollBar
        **/
        DisplayHorizontalScrollBar: boolean;

        /**
        * StyleAreaWidth
        **/
        StyleAreaWidth: number;

        /**
        * DocumentMapPercentWidth
        **/
        DocumentMapPercentWidth: number;

        /**
        * DisplayScreenTips
        **/
        DisplayScreenTips: boolean;

        /**
        * HorizontalPercentScrolled
        **/
        HorizontalPercentScrolled: number;

        /**
        * VerticalPercentScrolled
        **/
        VerticalPercentScrolled: number;

        /**
        * DocumentMap
        **/
        DocumentMap: boolean;

        ToggleRibbon(): void;

        /**
        * Active
        **/
        readonly Active: boolean;

        /**
        * IMEMode
        **/
        IMEMode: WpsWdIMEMode;

        LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;

        PrintOutOld(Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any, PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any): void;

        SetFocus(): void;

        /**
        * ShowSourceDocuments
        **/
        ShowSourceDocuments: WpsWdShowSourceDocuments;

        RangeFromPoint(x?: number, y?: number, prop?: any): void;

        ScrollIntoView(obj?: any, Start?: any): void;

        GetPoint(ScreenPixelsLeft?: number, ScreenPixelsTop?: number, ScreenPixelsWidth?: number, ScreenPixelsHeight?: number, obj?: any): void;

        PrintOut2000(Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any, PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;

        /**
        * DisplayLeftScrollBar
        **/
        DisplayLeftScrollBar: boolean;

        /**
        * Visible
        **/
        Visible: boolean;

        /**
        * Thumbnails
        **/
        Thumbnails: boolean;

    }

    interface WpsWindows {
        CompareSideBySideWith(Document?: any, prop?: boolean): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsWindow): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Window?: any, prop?: WpsWindow): void;

        Arrange(ArrangeStyle?: any): void;

        BreakSideBySide(prop?: boolean): void;

        ResetPositionsSideBySide(): void;

        /**
        * SyncScrollingSideBySide
        **/
        SyncScrollingSideBySide: boolean;

    }

    interface WpsPane {
        /**
        * DisplayRulers
        **/
        DisplayRulers: boolean;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Selection
        **/
        readonly Selection: WpsSelection;

        PageScroll(Down?: any, Up?: any): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * DisplayVerticalRuler
        **/
        DisplayVerticalRuler: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Document
        **/
        readonly Document: WpsDocument;

        /**
        * Zooms
        **/
        readonly Zooms: WpsZooms;

        /**
        * View
        **/
        readonly View: WpsView;

        /**
        * Next
        **/
        readonly Next: WpsPane;

        /**
        * Previous
        **/
        readonly Previous: WpsPane;

        /**
        * HorizontalPercentScrolled
        **/
        HorizontalPercentScrolled: number;

        /**
        * Pages
        **/
        readonly Pages: WpsPages;

        /**
        * VerticalPercentScrolled
        **/
        VerticalPercentScrolled: number;

        /**
        * MinimumFontSize
        **/
        MinimumFontSize: number;

        /**
        * BrowseToWindow
        **/
        BrowseToWindow: boolean;

        NewFrameset(): void;

        Close(): void;

        /**
        * BrowseWidth
        **/
        readonly BrowseWidth: number;

        Activate(): void;

        LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;

        SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;

        AutoScroll(Velocity?: number): void;

        TOCInFrameset(): void;

        /**
        * Frameset
        **/
        readonly Frameset: WpsFrameset;

    }

    interface WpsTrendlines extends Kso.KsoTrendlines {}

    interface WpsSelection {
        /**
        * Text
        **/
        Text: string;

        Delete(Unit?: any, Count?: any, prop?: number): void;

        /**
        * Tables
        **/
        readonly Tables: WpsTables;

        EndOf(Unit?: any, Extend?: any, prop?: number): void;

        Sort(ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any, SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any, SubFieldNumber?: any, SubFieldNumber2?: any, SubFieldNumber3?: any): void;

        /**
        * Orientation
        **/
        Orientation: WpsWdTextOrientation;

        /**
        * StoryType
        **/
        readonly StoryType: WpsWdStoryType;

        Extend(Character?: any): void;

        /**
        * IPAtEndOfLine
        **/
        readonly IPAtEndOfLine: boolean;

        /**
        * FormattedText
        **/
        FormattedText: WpsRange;

        /**
        * Cells
        **/
        readonly Cells: WpsCells;

        ConvertToTable(Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any, ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any, AutoFitBehavior?: any, DefaultTableBehavior?: any, prop?: WpsTable): void;

        /**
        * Start
        **/
        Start: number;

        /**
        * HeaderFooter
        **/
        readonly HeaderFooter: WpsHeaderFooter;

        Information(Type?: WpsWdInformation, prop?: any): void;

        /**
        * Type
        **/
        readonly Type: WpsWdSelectionType;

        /**
        * StoryLength
        **/
        readonly StoryLength: number;

        /**
        * End
        **/
        End: number;

        InsertAfter(Text?: string): void;

        InRange(Range?: WpsRange, prop?: boolean): void;

        /**
        * Font
        **/
        Font: WpsFont;

        MoveEnd(Unit?: any, Count?: any, prop?: number): void;

        /**
        * Style
        **/
        Style: any;

        ExportAsFixedFormat(OutputFileName?: string, ExportFormat?: WpsWdExportFormat, OpenAfterExport?: boolean, OptimizeFor?: WpsWdExportOptimizeFor, ExportCurrentPage?: boolean, Item?: WpsWdExportItem, IncludeDocProps?: boolean, KeepIRM?: boolean, CreateBookmarks?: WpsWdExportCreateBookmarks, DocStructureTags?: boolean, BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, FixedFormatExtClassPtr?: any): void;

        /**
        * Bookmarks
        **/
        readonly Bookmarks: WpsBookmarks;

        /**
        * Words
        **/
        readonly Words: WpsWords;

        /**
        * Sentences
        **/
        readonly Sentences: WpsSentences;

        /**
        * Hyperlinks
        **/
        readonly Hyperlinks: WpsHyperlinks;

        /**
        * Sections
        **/
        readonly Sections: WpsSections;

        /**
        * Characters
        **/
        readonly Characters: WpsCharacters;

        /**
        * Footnotes
        **/
        readonly Footnotes: WpsFootnotes;

        /**
        * ParagraphFormat
        **/
        ParagraphFormat: WpsParagraphFormat;

        /**
        * Endnotes
        **/
        readonly Endnotes: WpsEndnotes;

        /**
        * Find
        **/
        readonly Find: Kso.KsoFind;

        /**
        * Comments
        **/
        readonly Comments: WpsComments;

        /**
        * Paragraphs
        **/
        readonly Paragraphs: WpsParagraphs;

        MoveUp(Unit?: any, Count?: any, Extend?: any, prop?: number): void;

        Collapse(Direction?: any): void;

        TypeParagraph(): void;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * Borders
        **/
        Borders: WpsBorders;

        /**
        * LanguageDetected
        **/
        LanguageDetected: boolean;

        InsertRowsBelow(NumRows?: any): void;

        /**
        * StartIsActive
        **/
        StartIsActive: boolean;

        /**
        * Shading
        **/
        readonly Shading: WpsShading;

        BoldRun(): void;

        /**
        * Flags
        **/
        Flags: WpsWdSelectionFlags;

        Select(): void;

        /**
        * Fields
        **/
        readonly Fields: WpsFields;

        /**
        * PreviousBookmarkID
        **/
        readonly PreviousBookmarkID: number;

        RtlRun(): void;

        /**
        * FormFields
        **/
        readonly FormFields: WpsFormFields;

        /**
        * ColumnSelectMode
        **/
        ColumnSelectMode: boolean;

        /**
        * Frames
        **/
        readonly Frames: WpsFrames;

        GoToNext(What?: WpsWdGoToItem, prop?: WpsRange): void;

        /**
        * PageSetup
        **/
        PageSetup: WpsPageSetup;

        /**
        * LanguageID
        **/
        LanguageID: WpsWdLanguageID;

        Move(Unit?: any, Count?: any, prop?: number): void;

        /**
        * ExtendMode
        **/
        ExtendMode: boolean;

        /**
        * IsEndOfRowMark
        **/
        readonly IsEndOfRowMark: boolean;

        /**
        * LanguageIDFarEast
        **/
        LanguageIDFarEast: WpsWdLanguageID;

        /**
        * LanguageIDOther
        **/
        LanguageIDOther: WpsWdLanguageID;

        /**
        * Rows
        **/
        readonly Rows: WpsRows;

        /**
        * Columns
        **/
        readonly Columns: WpsColumns;

        /**
        * BookmarkID
        **/
        readonly BookmarkID: number;

        /**
        * Active
        **/
        readonly Active: boolean;

        MoveStartWhile(Cset?: any, Count?: any, prop?: number): void;

        /**
        * InlineShapes
        **/
        readonly InlineShapes: WpsInlineShapes;

        InsertBefore(Text?: string): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        DetectLanguage(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Document
        **/
        readonly Document: WpsDocument;

        /**
        * ShapeRange
        **/
        readonly ShapeRange: Kso.KsoShapeRange;

        SetRange(Start?: number, End?: number): void;

        Next(Unit?: any, Count?: any, prop?: WpsRange): void;

        Previous(Unit?: any, Count?: any, prop?: WpsRange): void;

        StartOf(Unit?: any, Extend?: any, prop?: number): void;

        MoveStart(Unit?: any, Count?: any, prop?: number): void;

        /**
        * DocumentFields
        **/
        readonly DocumentFields: WpsDocumentFields;

        MoveWhile(Cset?: any, Count?: any, prop?: number): void;

        MoveEndWhile(Cset?: any, Count?: any, prop?: number): void;

        /**
        * OMaths
        **/
        readonly OMaths: WpsOMaths;

        MoveUntil(Cset?: any, Count?: any, prop?: number): void;

        MoveStartUntil(Cset?: any, Count?: any, prop?: number): void;

        /**
        * EndnoteOptions
        **/
        readonly EndnoteOptions: WpsEndnoteOptions;

        MoveEndUntil(Cset?: any, Count?: any, prop?: number): void;

        Cut(): void;

        Copy(): void;

        Paste(): void;

        InsertBreak(Type?: any): void;

        InsertFile(FileName?: string, Range?: any, ConfirmConversions?: any, Link?: any, Attachment?: any): void;

        InStory(Range?: WpsRange, prop?: boolean): void;

        Expand(Unit?: any, prop?: number): void;

        InsertParagraph(): void;

        InsertParagraphAfter(): void;

        ConvertToTableOld(Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any, ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any, prop?: WpsTable): void;

        InsertDateTimeOld(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any): void;

        GoToEditableRange(EditorID?: any, prop?: WpsRange): void;

        InsertSymbol(CharacterNumber?: number, Font?: any, Unicode?: any, Bias?: any): void;

        InsertCrossReference_2002(ReferenceType?: any, ReferenceKind?: WpsWdReferenceKind, ReferenceItem?: any, InsertAsHyperlink?: any, IncludePosition?: any): void;

        InsertCaptionXP(Label?: any, Title?: any, TitleAutoText?: any, Position?: any): void;

        CopyAsPicture(): void;

        SortOld(ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any, SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, LanguageID?: any): void;

        SortAscending(): void;

        SortDescending(): void;

        IsEqual(Range?: WpsRange, prop?: boolean): void;

        LtrPara(): void;

        Calculate(prop?: number): void;

        InsertRows(NumRows?: any): void;

        GoTo(What?: any, Which?: any, Count?: any, Name?: any, prop?: WpsRange): void;

        GoToPrevious(What?: WpsWdGoToItem, prop?: WpsRange): void;

        EscapeKey(): void;

        PasteSpecial(IconIndex?: any, Link?: any, Placement?: any, DisplayAsIcon?: any, DataType?: any, IconFileName?: any, IconLabel?: any): void;

        PreviousField(prop?: WpsField): void;

        NextField(prop?: WpsField): void;

        InsertParagraphBefore(): void;

        InsertCells(ShiftCells?: any): void;

        Shrink(): void;

        MoveLeft(Unit?: any, Count?: any, Extend?: any, prop?: number): void;

        MoveRight(Unit?: any, Count?: any, Extend?: any, prop?: number): void;

        MoveDown(Unit?: any, Count?: any, Extend?: any, prop?: number): void;

        HomeKey(Unit?: any, Extend?: any, prop?: number): void;

        EndKey(Unit?: any, Extend?: any, prop?: number): void;

        TypeText(Text?: string): void;

        CopyFormat(): void;

        PasteFormat(): void;

        TypeBackspace(): void;

        NextSubdocument(): void;

        PreviousSubdocument(): void;

        SelectColumn(): void;

        SelectCurrentColor(): void;

        SelectCurrentFont(): void;

        SelectCurrentAlignment(): void;

        PasteAppendTable(): void;

        SelectCurrentSpacing(): void;

        SelectCurrentIndent(): void;

        SelectCurrentTabs(): void;

        CreateTextbox(): void;

        WholeStory(): void;

        SelectRow(): void;

        SplitTable(): void;

        InsertColumns(): void;

        InsertFormula(Formula?: any, NumberFormat?: any): void;

        NextRevision(Wrap?: any, prop?: WpsRevision): void;

        PreviousRevision(Wrap?: any, prop?: WpsRevision): void;

        PasteAsNestedTable(): void;

        InsertDateTime(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any, DateLanguage?: any, CalendarType?: any): void;

        CreateAutoTextEntry(Name?: string, StyleName?: string, prop?: WpsAutoTextEntry): void;

        SelectCell(): void;

        InsertColumnsRight(): void;

        InsertRowsAbove(NumRows?: any): void;

        LtrRun(): void;

        ItalicRun(): void;

        RtlPara(): void;

        Sort2000(ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any, SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;

        /**
        * NoProofing
        **/
        NoProofing: number;

        /**
        * TopLevelTables
        **/
        readonly TopLevelTables: WpsTables;

        ClearParagraphStyle(): void;

        /**
        * FitTextWidth
        **/
        FitTextWidth: number;

        ClearFormatting(): void;

        /**
        * HTMLDivisions
        **/
        readonly HTMLDivisions: WpsHTMLDivisions;

        /**
        * SmartTags
        **/
        readonly SmartTags: WpsSmartTags;

        /**
        * ChildShapeRange
        **/
        readonly ChildShapeRange: Kso.KsoShapeRange;

        /**
        * HasChildShapeRange
        **/
        readonly HasChildShapeRange: boolean;

        /**
        * FootnoteOptions
        **/
        readonly FootnoteOptions: WpsFootnoteOptions;

        ToggleCharacterCode(): void;

        PasteAndFormat(Type?: WpsWdRecoveryType): void;

        PasteExcelTable(LinkedToExcel?: boolean, WordFormatting?: boolean, RTF?: boolean): void;

        ShrinkDiscontiguousSelection(): void;

        InsertStyleSeparator(): void;

        ReadingModeShrinkFont(): void;

        /**
        * XMLNodes
        **/
        readonly XMLNodes: WpsXMLNodes;

        /**
        * XMLParentNode
        **/
        readonly XMLParentNode: WpsXMLNode;

        /**
        * Editors
        **/
        readonly Editors: WpsEditors;

        XML(DataOnly?: boolean, prop?: string): void;

        /**
        * EnhMetaFileBits
        **/
        readonly EnhMetaFileBits: any;

        InsertXML(XML?: string, Transform?: any): void;

        InsertCaption(Label?: any, Title?: any, TitleAutoText?: any, Position?: any, ExcludeLabel?: any): void;

        InsertCrossReference(ReferenceType?: any, ReferenceKind?: WpsWdReferenceKind, ReferenceItem?: any, InsertAsHyperlink?: any, IncludePosition?: any, SeparateNumbers?: any, SeparatorString?: any): void;

        /**
        * WordOpenXML
        **/
        readonly WordOpenXML: string;

        ClearCharacterAllFormatting(): void;

        ClearCharacterStyle(): void;

        ClearCharacterDirectFormatting(): void;

        /**
        * ContentControls
        **/
        readonly ContentControls: WpsContentControls;

        /**
        * ParentContentControl
        **/
        readonly ParentContentControl: WpsContentControl;

        ReadingModeGrowFont(): void;

        ClearParagraphAllFormatting(): void;

        ClearParagraphDirectFormatting(): void;

        InsertNewPage(): void;

        SortByHeadings(SortFieldType?: any, SortOrder?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;

    }

    interface WpsRevisionsFilter {
        /**
        * View
        **/
        View: WpsWdRevisionsView;

        /**
        * Markup
        **/
        Markup: WpsWdRevisionsMarkup;

        /**
        * Reviewers
        **/
        readonly Reviewers: WpsReviewers;

        ToggleShowAllReviewers(): void;

    }

    interface WpsFrameset {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * FrameName
        **/
        FrameName: string;

        /**
        * HeightType
        **/
        HeightType: WpsWdFramesetSizeType;

        /**
        * Type
        **/
        readonly Type: WpsWdFramesetType;

        /**
        * FrameScrollbarType
        **/
        FrameScrollbarType: WpsWdScrollbarType;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * ParentFrameset
        **/
        readonly ParentFrameset: WpsFrameset;

        /**
        * Width
        **/
        Width: number;

        /**
        * WidthType
        **/
        WidthType: WpsWdFramesetSizeType;

        /**
        * Height
        **/
        Height: number;

        /**
        * ChildFramesetCount
        **/
        readonly ChildFramesetCount: number;

        ChildFramesetItem(Index?: number, prop?: WpsFrameset): void;

        /**
        * FramesetBorderWidth
        **/
        FramesetBorderWidth: number;

        /**
        * FramesetBorderColor
        **/
        FramesetBorderColor: WpsWdColor;

        /**
        * FrameResizable
        **/
        FrameResizable: boolean;

        /**
        * FrameDisplayBorders
        **/
        FrameDisplayBorders: boolean;

        /**
        * FrameDefaultURL
        **/
        FrameDefaultURL: string;

        /**
        * FrameLinkToFile
        **/
        FrameLinkToFile: boolean;

        AddNewFrame(Where?: WpsWdFramesetNewFrameLocation, prop?: WpsFrameset): void;

        Delete(): void;

    }

    interface WpsPage {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Left
        **/
        readonly Left: number;

        /**
        * Breaks
        **/
        readonly Breaks: WpsBreaks;

        /**
        * Top
        **/
        readonly Top: number;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Rectangles
        **/
        readonly Rectangles: WpsRectangles;

        /**
        * EnhMetaFileBits
        **/
        readonly EnhMetaFileBits: any;

        SaveAsPNG(FileName?: string): void;

    }

    interface WpsRectangles {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsRectangle): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsBreaks {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsBreak): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsTemplates {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsTemplate): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        LoadBuildingBlocks(): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface WpsTemplate {
        /**
        * ListTemplates
        **/
        readonly ListTemplates: WpsListTemplates;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * LanguageID
        **/
        LanguageID: WpsWdLanguageID;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Type
        **/
        readonly Type: WpsWdTemplateType;

        /**
        * Path
        **/
        readonly Path: string;

        /**
        * Saved
        **/
        Saved: boolean;

        /**
        * AutoTextEntries
        **/
        readonly AutoTextEntries: WpsAutoTextEntries;

        /**
        * FullName
        **/
        readonly FullName: string;

        /**
        * FarEastLineBreakLevel
        **/
        FarEastLineBreakLevel: WpsWdFarEastLineBreakLevel;

        /**
        * BuiltInDocumentProperties
        **/
        readonly BuiltInDocumentProperties: any;

        /**
        * CustomDocumentProperties
        **/
        readonly CustomDocumentProperties: any;

        /**
        * LanguageIDFarEast
        **/
        LanguageIDFarEast: WpsWdLanguageID;

        /**
        * NoProofing
        **/
        NoProofing: number;

        Save(): void;

        /**
        * KerningByAlgorithm
        **/
        KerningByAlgorithm: boolean;

        /**
        * JustificationMode
        **/
        JustificationMode: WpsWdJustificationMode;

        /**
        * NoLineBreakBefore
        **/
        NoLineBreakBefore: string;

        /**
        * NoLineBreakAfter
        **/
        NoLineBreakAfter: string;

        OpenAsDocument(prop?: WpsDocument): void;

        /**
        * FarEastLineBreakLanguage
        **/
        FarEastLineBreakLanguage: WpsWdFarEastLineBreakLanguageID;

        /**
        * BuildingBlockEntries
        **/
        readonly BuildingBlockEntries: WpsBuildingBlockEntries;

        /**
        * BuildingBlockTypes
        **/
        readonly BuildingBlockTypes: WpsBuildingBlockTypes;

    }

    interface WpsRoutingSlip {
        /**
        * Message
        **/
        Message: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * TrackStatus
        **/
        TrackStatus: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ReturnWhenDone
        **/
        ReturnWhenDone: boolean;

        /**
        * Subject
        **/
        Subject: string;

        /**
        * Delivery
        **/
        Delivery: WpsWdRoutingSlipDelivery;

        /**
        * Protect
        **/
        Protect: WpsWdProtectionType;

        /**
        * Status
        **/
        readonly Status: WpsWdRoutingSlipStatus;

        Recipients(Index?: any, prop?: any): void;

        Reset(): void;

        AddRecipient(Recipient?: string): void;

    }

    interface WpsTablesOfAuthoritiesCategories {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsTableOfAuthoritiesCategory): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsTableOfAuthoritiesCategory {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsIndexes {
        MarkEntry(Range?: WpsRange, Entry?: any, EntryAutoText?: any, CrossReference?: any, CrossReferenceAutoText?: any, BookmarkName?: any, Bold?: any, Italic?: any, Reading?: any, prop?: WpsField): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsIndex): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        AddOld(Range?: WpsRange, HeadingSeparator?: any, RightAlignPageNumbers?: any, Type?: any, NumberOfColumns?: any, AccentedLetters?: any, prop?: WpsIndex): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Format
        **/
        Format: WpsWdIndexFormat;

        MarkAllEntries(Range?: WpsRange, Entry?: any, EntryAutoText?: any, CrossReference?: any, CrossReferenceAutoText?: any, BookmarkName?: any, Bold?: any, Italic?: any): void;

        AutoMarkEntries(ConcordanceFileName?: string): void;

        Add(Range?: WpsRange, HeadingSeparator?: any, RightAlignPageNumbers?: any, Type?: any, NumberOfColumns?: any, AccentedLetters?: any, SortBy?: any, IndexLanguage?: any, prop?: WpsIndex): void;

    }

    interface WpsIndex {
        /**
        * RightAlignPageNumbers
        **/
        RightAlignPageNumbers: boolean;

        /**
        * SortBy
        **/
        SortBy: WpsWdIndexSortBy;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * AccentedLetters
        **/
        AccentedLetters: boolean;

        /**
        * Range
        **/
        readonly Range: WpsRange;

        /**
        * HeadingSeparator
        **/
        HeadingSeparator: WpsWdHeadingSeparator;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        Type: WpsWdIndexType;

        /**
        * NumberOfColumns
        **/
        NumberOfColumns: number;

        /**
        * TabLeader
        **/
        TabLeader: WpsWdTabLeader;

        Delete(): void;

        /**
        * Filter
        **/
        Filter: WpsWdIndexFilter;

        Update(): void;

        /**
        * IndexLanguage
        **/
        IndexLanguage: WpsWdLanguageID;

    }

    interface WpsStoryRanges {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: WpsWdStoryType, prop?: WpsRange): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsVersions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsVersion): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * AutoVersion
        **/
        AutoVersion: WpsWdAutoVersions;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Save(Comment?: any): void;

    }

    interface WpsVersion {
        Open(prop?: WpsDocument): void;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * SavedBy
        **/
        readonly SavedBy: string;

        OpenOld(): void;

        /**
        * Date
        **/
        readonly Date: string;

        /**
        * Comment
        **/
        readonly Comment: string;

    }

    interface WpsLetterContent {
        /**
        * PageDesign
        **/
        PageDesign: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * EnclosureNumber
        **/
        EnclosureNumber: number;

        /**
        * IncludeHeaderFooter
        **/
        IncludeHeaderFooter: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Subject
        **/
        Subject: string;

        /**
        * SalutationType
        **/
        SalutationType: WpsWdSalutationType;

        /**
        * DateFormat
        **/
        DateFormat: string;

        /**
        * Letterhead
        **/
        Letterhead: boolean;

        /**
        * LetterStyle
        **/
        LetterStyle: WpsWdLetterStyle;

        /**
        * LetterheadLocation
        **/
        LetterheadLocation: WpsWdLetterheadLocation;

        /**
        * LetterheadSize
        **/
        LetterheadSize: number;

        /**
        * RecipientName
        **/
        RecipientName: string;

        /**
        * ReturnAddressShortForm
        **/
        ReturnAddressShortForm: string;

        /**
        * RecipientAddress
        **/
        RecipientAddress: string;

        /**
        * SenderCompany
        **/
        SenderCompany: string;

        /**
        * Salutation
        **/
        Salutation: string;

        /**
        * RecipientReference
        **/
        RecipientReference: string;

        /**
        * MailingInstructions
        **/
        MailingInstructions: string;

        /**
        * RecipientCode
        **/
        RecipientCode: string;

        /**
        * SenderInitials
        **/
        SenderInitials: string;

        /**
        * AttentionLine
        **/
        AttentionLine: string;

        /**
        * CCList
        **/
        CCList: string;

        /**
        * ReturnAddress
        **/
        ReturnAddress: string;

        /**
        * SenderName
        **/
        SenderName: string;

        /**
        * Closing
        **/
        Closing: string;

        /**
        * SenderJobTitle
        **/
        SenderJobTitle: string;

        /**
        * InfoBlock
        **/
        InfoBlock: boolean;

        /**
        * RecipientGender
        **/
        RecipientGender: WpsWdSalutationGender;

        /**
        * SenderCode
        **/
        SenderCode: string;

        /**
        * SenderCity
        **/
        SenderCity: string;

        /**
        * SenderGender
        **/
        SenderGender: WpsWdSalutationGender;

        /**
        * SenderReference
        **/
        SenderReference: string;

    }

    interface WpsBrowser {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Previous(): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Target
        **/
        Target: WpsWdBrowseTarget;

        Next(): void;

    }

    interface WpsEmail {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * CurrentEmailAuthor
        **/
        readonly CurrentEmailAuthor: WpsEmailAuthor;

    }

    interface WpsEmailAuthor {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Style
        **/
        readonly Style: WpsStyle;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsOtherCorrectionsException {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsOtherCorrectionsExceptions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsOtherCorrectionsException): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, prop?: WpsOtherCorrectionsException): void;

    }

    interface WpsStyleSheet {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * FullName
        **/
        readonly FullName: string;

        /**
        * Title
        **/
        Title: string;

        /**
        * Type
        **/
        Type: WpsWdStyleSheetLinkType;

        /**
        * Path
        **/
        readonly Path: string;

        Move(Precedence?: WpsWdStyleSheetPrecedence): void;

        Delete(): void;

    }

    interface WpsStyleSheets {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsStyleSheet): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(FileName?: string, LinkType?: WpsWdStyleSheetLinkType, Title?: string, Precedence?: WpsWdStyleSheetPrecedence, prop?: WpsStyleSheet): void;

    }

    interface WpsAutoCorrectEntries {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsAutoCorrectEntry): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        AddRichText(Name?: string, Range?: WpsRange, prop?: WpsAutoCorrectEntry): void;

        Add(Name?: string, Value?: string, prop?: WpsAutoCorrectEntry): void;

    }

    interface WpsBibliography {
        GenerateUniqueTag(prop?: string): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * BibliographyStyle
        **/
        BibliographyStyle: string;

        /**
        * Sources
        **/
        readonly Sources: WpsSources;

    }

    interface WpsSource {
        Field(Name?: string, prop?: string): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * XML
        **/
        readonly XML: string;

        /**
        * Tag
        **/
        readonly Tag: string;

        /**
        * Cited
        **/
        readonly Cited: boolean;

    }

    interface WpsSources {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: WpsSource): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Data?: string): void;

    }

    interface WpsProtectedViewWindow {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Edit(PasswordTemplate?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, prop?: WpsDocument): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Width
        **/
        Width: number;

        Activate(): void;

        /**
        * Caption
        **/
        Caption: string;

        /**
        * Top
        **/
        Top: number;

        /**
        * Document
        **/
        readonly Document: WpsDocument;

        /**
        * Left
        **/
        Left: number;

        /**
        * Height
        **/
        Height: number;

        /**
        * WindowState
        **/
        WindowState: WpsWdWindowState;

        ToggleRibbon(): void;

        /**
        * Active
        **/
        readonly Active: boolean;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Visible
        **/
        Visible: boolean;

        /**
        * SourceName
        **/
        readonly SourceName: string;

        /**
        * SourcePath
        **/
        readonly SourcePath: string;

        Close(): void;

    }

    interface WpsSystem {
        /**
        * MacintoshName
        **/
        readonly MacintoshName: string;

        /**
        * LanguageDesignation
        **/
        readonly LanguageDesignation: string;

        /**
        * ProcessorType
        **/
        readonly ProcessorType: string;

        ProfileString(Section?: string, Key?: string, prop?: string): void;

        /**
        * OperatingSystem
        **/
        readonly OperatingSystem: string;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Version
        **/
        readonly Version: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * FreeDiskSpace
        **/
        readonly FreeDiskSpace: number;

        /**
        * Country
        **/
        readonly Country: WpsWdCountry;

        /**
        * HorizontalResolution
        **/
        readonly HorizontalResolution: number;

        /**
        * VerticalResolution
        **/
        readonly VerticalResolution: number;

        PrivateProfileString(FileName?: string, Section?: string, Key?: string, prop?: string): void;

        /**
        * MathCoprocessorInstalled
        **/
        readonly MathCoprocessorInstalled: boolean;

        /**
        * ComputerType
        **/
        readonly ComputerType: string;

        Connect(Path?: string, Drive?: any, Password?: any): void;

        /**
        * QuickDrawInstalled
        **/
        readonly QuickDrawInstalled: boolean;

        /**
        * Cursor
        **/
        Cursor: WpsWdCursorType;

        MSInfo(): void;

        /**
        * CountryRegion
        **/
        readonly CountryRegion: WpsWdCountry;

    }

    interface WpsAutoCorrect {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * OtherCorrectionsAutoAdd
        **/
        OtherCorrectionsAutoAdd: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * CorrectTableCells
        **/
        CorrectTableCells: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * CorrectInitialCaps
        **/
        CorrectInitialCaps: boolean;

        /**
        * ReplaceTextFromSpellingChecker
        **/
        ReplaceTextFromSpellingChecker: boolean;

        /**
        * FirstLetterExceptions
        **/
        readonly FirstLetterExceptions: WpsFirstLetterExceptions;

        /**
        * CorrectSentenceCaps
        **/
        CorrectSentenceCaps: boolean;

        /**
        * CorrectDays
        **/
        CorrectDays: boolean;

        /**
        * HangulAndAlphabetAutoAdd
        **/
        HangulAndAlphabetAutoAdd: boolean;

        /**
        * ReplaceText
        **/
        ReplaceText: boolean;

        /**
        * Entries
        **/
        readonly Entries: WpsAutoCorrectEntries;

        /**
        * FirstLetterAutoAdd
        **/
        FirstLetterAutoAdd: boolean;

        /**
        * TwoInitialCapsExceptions
        **/
        readonly TwoInitialCapsExceptions: WpsTwoInitialCapsExceptions;

        /**
        * TwoInitialCapsAutoAdd
        **/
        TwoInitialCapsAutoAdd: boolean;

        /**
        * CorrectCapsLock
        **/
        CorrectCapsLock: boolean;

        /**
        * OtherCorrectionsExceptions
        **/
        readonly OtherCorrectionsExceptions: WpsOtherCorrectionsExceptions;

        /**
        * CorrectHangulAndAlphabet
        **/
        CorrectHangulAndAlphabet: boolean;

        /**
        * HangulAndAlphabetExceptions
        **/
        readonly HangulAndAlphabetExceptions: WpsHangulAndAlphabetExceptions;

        /**
        * CorrectKeyboardSetting
        **/
        CorrectKeyboardSetting: boolean;

        /**
        * DisplayAutoCorrectOptions
        **/
        DisplayAutoCorrectOptions: boolean;

    }

    interface WpsTask {
        /**
        * WindowState
        **/
        WindowState: WpsWdWindowState;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Left
        **/
        Left: number;

        /**
        * Top
        **/
        Top: number;

        /**
        * Width
        **/
        Width: number;

        /**
        * Height
        **/
        Height: number;

        /**
        * Visible
        **/
        Visible: boolean;

        Activate(Wait?: any): void;

        Close(): void;

        Move(Left?: number, Top?: number): void;

        Resize(Width?: number, Height?: number): void;

        SendWindowMessage(Message?: number, wParam?: number, lParam?: number): void;

    }

    interface WpsAutoCorrectEntry {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Value
        **/
        Value: string;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        Apply(Range?: WpsRange): void;

        /**
        * RichText
        **/
        readonly RichText: boolean;

    }

    interface WpsFirstLetterException {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsFirstLetterExceptions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsFirstLetterException): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, prop?: WpsFirstLetterException): void;

    }

    interface WpsTwoInitialCapsException {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsTwoInitialCapsExceptions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsTwoInitialCapsException): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, prop?: WpsTwoInitialCapsException): void;

    }

    interface WpsHangulAndAlphabetException {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsHangulAndAlphabetExceptions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsHangulAndAlphabetException): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, prop?: WpsHangulAndAlphabetException): void;

    }

    interface WpsEmailOptions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * MarkComments
        **/
        MarkComments: boolean;

        /**
        * ComposeStyle
        **/
        readonly ComposeStyle: WpsStyle;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * RelyOnCSS
        **/
        RelyOnCSS: boolean;

        /**
        * UseThemeStyle
        **/
        UseThemeStyle: boolean;

        /**
        * MarkCommentsWith
        **/
        MarkCommentsWith: string;

        /**
        * AutoFormatAsYouTypeDeleteAutoSpaces
        **/
        AutoFormatAsYouTypeDeleteAutoSpaces: boolean;

        /**
        * EmailSignature
        **/
        readonly EmailSignature: WpsEmailSignature;

        /**
        * ReplyStyle
        **/
        readonly ReplyStyle: WpsStyle;

        /**
        * ThemeName
        **/
        ThemeName: string;

        Dummy3(): void;

        /**
        * Dummy2
        **/
        readonly Dummy2: boolean;

        /**
        * Dummy1
        **/
        readonly Dummy1: boolean;

        /**
        * NewColorOnReply
        **/
        NewColorOnReply: boolean;

        /**
        * AutoFormatAsYouTypeApplyFirstIndents
        **/
        AutoFormatAsYouTypeApplyFirstIndents: boolean;

        /**
        * PlainTextStyle
        **/
        readonly PlainTextStyle: WpsStyle;

        /**
        * UseThemeStyleOnReply
        **/
        UseThemeStyleOnReply: boolean;

        /**
        * EmbedSmartTag
        **/
        EmbedSmartTag: boolean;

        /**
        * AutoFormatAsYouTypeApplyHeadings
        **/
        AutoFormatAsYouTypeApplyHeadings: boolean;

        /**
        * AutoFormatAsYouTypeApplyBorders
        **/
        AutoFormatAsYouTypeApplyBorders: boolean;

        /**
        * AutoFormatAsYouTypeApplyBulletedLists
        **/
        AutoFormatAsYouTypeApplyBulletedLists: boolean;

        /**
        * AutoFormatAsYouTypeApplyNumberedLists
        **/
        AutoFormatAsYouTypeApplyNumberedLists: boolean;

        /**
        * AutoFormatAsYouTypeReplaceQuotes
        **/
        AutoFormatAsYouTypeReplaceQuotes: boolean;

        /**
        * AutoFormatAsYouTypeReplaceSymbols
        **/
        AutoFormatAsYouTypeReplaceSymbols: boolean;

        /**
        * AutoFormatAsYouTypeReplaceOrdinals
        **/
        AutoFormatAsYouTypeReplaceOrdinals: boolean;

        /**
        * AutoFormatAsYouTypeReplaceFractions
        **/
        AutoFormatAsYouTypeReplaceFractions: boolean;

        /**
        * AutoFormatAsYouTypeReplacePlainTextEmphasis
        **/
        AutoFormatAsYouTypeReplacePlainTextEmphasis: boolean;

        /**
        * AutoFormatAsYouTypeFormatListItemBeginning
        **/
        AutoFormatAsYouTypeFormatListItemBeginning: boolean;

        /**
        * AutoFormatAsYouTypeInsertOvers
        **/
        AutoFormatAsYouTypeInsertOvers: boolean;

        /**
        * AutoFormatAsYouTypeAutoLetterWizard
        **/
        AutoFormatAsYouTypeAutoLetterWizard: boolean;

        /**
        * AutoFormatAsYouTypeReplaceFarEastDashes
        **/
        AutoFormatAsYouTypeReplaceFarEastDashes: boolean;

        /**
        * AutoFormatAsYouTypeDefineStyles
        **/
        AutoFormatAsYouTypeDefineStyles: boolean;

        /**
        * AutoFormatAsYouTypeReplaceHyperlinks
        **/
        AutoFormatAsYouTypeReplaceHyperlinks: boolean;

        /**
        * AutoFormatAsYouTypeApplyTables
        **/
        AutoFormatAsYouTypeApplyTables: boolean;

        /**
        * AutoFormatAsYouTypeApplyDates
        **/
        AutoFormatAsYouTypeApplyDates: boolean;

        /**
        * AutoFormatAsYouTypeApplyClosings
        **/
        AutoFormatAsYouTypeApplyClosings: boolean;

        /**
        * AutoFormatAsYouTypeMatchParentheses
        **/
        AutoFormatAsYouTypeMatchParentheses: boolean;

        /**
        * AutoFormatAsYouTypeInsertClosings
        **/
        AutoFormatAsYouTypeInsertClosings: boolean;

        /**
        * HTMLFidelity
        **/
        HTMLFidelity: WpsWdEmailHTMLFidelity;

        /**
        * TabIndentKey
        **/
        TabIndentKey: boolean;

    }

    interface WpsFontNames {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: number, prop?: string): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsDictionary {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * LanguageID
        **/
        LanguageID: WpsWdLanguageID;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        readonly Type: WpsWdDictionaryType;

        /**
        * Path
        **/
        readonly Path: string;

        /**
        * ReadOnly
        **/
        readonly ReadOnly: boolean;

        /**
        * LanguageSpecific
        **/
        LanguageSpecific: boolean;

        Delete(): void;

    }

    interface WpsOLEParameters {
        SetDocumentPassWord(passwd?: any): void;

    }

    interface WpsMailingLabel {
        PrintOut2000(Name?: any, Address?: any, ExtractAddress?: any, LaserTray?: any, SingleLabel?: any, Row?: any, Column?: any): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * DefaultPrintBarCode
        **/
        DefaultPrintBarCode: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * DefaultLaserTray
        **/
        DefaultLaserTray: WpsWdPaperTray;

        /**
        * CustomLabels
        **/
        readonly CustomLabels: WpsCustomLabels;

        /**
        * DefaultLabelName
        **/
        DefaultLabelName: string;

        CreateNewDocumentByID(LabelID?: any, Address?: any, AutoText?: any, ExtractAddress?: any, LaserTray?: any, PrintEPostageLabel?: any, Vertical?: any, prop?: WpsDocument): void;

        CreateNewDocument2000(Name?: any, Address?: any, AutoText?: any, ExtractAddress?: any, LaserTray?: any, prop?: WpsDocument): void;

        LabelOptions(): void;

        CreateNewDocument(Name?: any, Address?: any, AutoText?: any, ExtractAddress?: any, LaserTray?: any, PrintEPostageLabel?: any, Vertical?: any, prop?: WpsDocument): void;

        PrintOut(Name?: any, Address?: any, ExtractAddress?: any, LaserTray?: any, SingleLabel?: any, Row?: any, Column?: any, PrintEPostageLabel?: any, Vertical?: any): void;

        /**
        * Vertical
        **/
        Vertical: boolean;

        PrintOutByID(LabelID?: any, Address?: any, ExtractAddress?: any, LaserTray?: any, SingleLabel?: any, Row?: any, Column?: any, PrintEPostageLabel?: any, Vertical?: any): void;

    }

    interface WpsCustomLabels {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsCustomLabel): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, DotMatrix?: any, prop?: WpsCustomLabel): void;

    }

    interface WpsCustomLabel {
        /**
        * SideMargin
        **/
        SideMargin: number;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * DotMatrix
        **/
        readonly DotMatrix: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * TopMargin
        **/
        TopMargin: number;

        /**
        * Height
        **/
        Height: number;

        /**
        * Width
        **/
        Width: number;

        Delete(): void;

        /**
        * VerticalPitch
        **/
        VerticalPitch: number;

        /**
        * HorizontalPitch
        **/
        HorizontalPitch: number;

        /**
        * NumberAcross
        **/
        NumberAcross: number;

        /**
        * NumberDown
        **/
        NumberDown: number;

        /**
        * PageSize
        **/
        PageSize: WpsWdCustomLabelPageSize;

        /**
        * Valid
        **/
        readonly Valid: boolean;

    }

    interface WpsAutoCaptions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsAutoCaption): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        CancelAutoInsert(): void;

    }

    interface WpsEmailSignatureEntries {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsEmailSignatureEntry): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, Range?: WpsRange, prop?: WpsEmailSignatureEntry): void;

    }

    interface WpsAutoCaption {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * CaptionLabel
        **/
        CaptionLabel: any;

        /**
        * AutoInsert
        **/
        AutoInsert: boolean;

    }

    interface WpsAddIns {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsAddIn): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Unload(RemoveFromList?: boolean): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(FileName?: string, Install?: any, prop?: WpsAddIn): void;

    }

    interface WpsListGalleries {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: WpsWdListGalleryType, prop?: WpsListGallery): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsKeyBinding {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Protected
        **/
        readonly Protected: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Command
        **/
        readonly Command: string;

        /**
        * KeyString
        **/
        readonly KeyString: string;

        /**
        * KeyCategory
        **/
        readonly KeyCategory: WpsWdKeyCategory;

        /**
        * KeyCode
        **/
        readonly KeyCode: number;

        /**
        * KeyCode2
        **/
        readonly KeyCode2: number;

        /**
        * CommandParameter
        **/
        readonly CommandParameter: string;

        /**
        * Context
        **/
        readonly Context: any;

        Clear(): void;

        Disable(): void;

        Execute(): void;

        Rebind(KeyCategory?: WpsWdKeyCategory, Command?: string, CommandParameter?: any): void;

    }

    interface WpsKeyBindings {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        ClearAll(): void;

        Item(Index?: number, prop?: WpsKeyBinding): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Context
        **/
        readonly Context: any;

        Add(KeyCategory?: WpsWdKeyCategory, Command?: string, KeyCode?: number, KeyCode2?: any, CommandParameter?: any, prop?: WpsKeyBinding): void;

        Key(KeyCode?: number, KeyCode2?: any, prop?: WpsKeyBinding): void;

    }

    interface WpsOptions {
        /**
        * MarginAlignmentGuides
        **/
        MarginAlignmentGuides: boolean;

        /**
        * EnableSound
        **/
        EnableSound: boolean;

        /**
        * AllowReadingMode
        **/
        AllowReadingMode: boolean;

        /**
        * MultipleWordConversionsMode
        **/
        MultipleWordConversionsMode: WpsWdMultipleWordConversionsMode;

        /**
        * AutoFormatAsYouTypeReplaceHyperlinks
        **/
        AutoFormatAsYouTypeReplaceHyperlinks: boolean;

        /**
        * AutoFormatApplyHeadings
        **/
        AutoFormatApplyHeadings: boolean;

        /**
        * FrenchReform
        **/
        FrenchReform: WpsWdFrenchSpeller;

        /**
        * MoveToTextMark
        **/
        MoveToTextMark: WpsWdMoveToTextMark;

        /**
        * BlueScreen
        **/
        BlueScreen: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * DeletedTextMark
        **/
        DeletedTextMark: WpsWdDeletedTextMark;

        /**
        * InlineConversion
        **/
        InlineConversion: boolean;

        /**
        * MapPaperSize
        **/
        MapPaperSize: boolean;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * PasteOptionKeepBulletsAndNumbers
        **/
        PasteOptionKeepBulletsAndNumbers: boolean;

        /**
        * WPDocNavKeys
        **/
        WPDocNavKeys: boolean;

        /**
        * RevisedLinesMark
        **/
        RevisedLinesMark: WpsWdRevisedLinesMark;

        /**
        * ShowControlCharacters
        **/
        ShowControlCharacters: boolean;

        /**
        * DefaultTrayID
        **/
        DefaultTrayID: number;

        /**
        * WPHelp
        **/
        WPHelp: boolean;

        /**
        * CheckHangulEndings
        **/
        CheckHangulEndings: boolean;

        /**
        * AllowFastSave
        **/
        AllowFastSave: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ShowFormatError
        **/
        ShowFormatError: boolean;

        /**
        * AutoFormatAsYouTypeReplaceOrdinals
        **/
        AutoFormatAsYouTypeReplaceOrdinals: boolean;

        /**
        * AllowAccentedUppercase
        **/
        AllowAccentedUppercase: boolean;

        /**
        * Pagination
        **/
        Pagination: boolean;

        /**
        * AutoFormatAsYouTypeInsertClosings
        **/
        AutoFormatAsYouTypeInsertClosings: boolean;

        /**
        * ConfirmConversions
        **/
        ConfirmConversions: boolean;

        /**
        * AutoFormatAsYouTypeReplaceQuotes
        **/
        AutoFormatAsYouTypeReplaceQuotes: boolean;

        /**
        * AnimateScreenMovements
        **/
        AnimateScreenMovements: boolean;

        DefaultFilePath(Path?: WpsWdDefaultFilePath, prop?: string): void;

        /**
        * ArabicNumeral
        **/
        ArabicNumeral: WpsWdArabicNumeral;

        /**
        * UpdateLinksAtOpen
        **/
        UpdateLinksAtOpen: boolean;

        /**
        * SnapToShapes
        **/
        SnapToShapes: boolean;

        /**
        * SavePropertiesPrompt
        **/
        SavePropertiesPrompt: boolean;

        /**
        * CommentsColor
        **/
        CommentsColor: WpsWdColorIndex;

        /**
        * SendMailAttach
        **/
        SendMailAttach: boolean;

        /**
        * AutoFormatReplaceOrdinals
        **/
        AutoFormatReplaceOrdinals: boolean;

        /**
        * ShortMenuNames
        **/
        ShortMenuNames: boolean;

        /**
        * StrictTaaMarboota
        **/
        StrictTaaMarboota: boolean;

        /**
        * AutoFormatAsYouTypeApplyClosings
        **/
        AutoFormatAsYouTypeApplyClosings: boolean;

        /**
        * MeasurementUnit
        **/
        MeasurementUnit: WpsWdMeasurementUnits;

        /**
        * EnvelopeFeederInstalled
        **/
        readonly EnvelopeFeederInstalled: boolean;

        /**
        * ButtonFieldClicks
        **/
        ButtonFieldClicks: number;

        /**
        * RTFInClipboard
        **/
        RTFInClipboard: boolean;

        /**
        * PrintProperties
        **/
        PrintProperties: boolean;

        /**
        * UpdateFieldsAtPrint
        **/
        UpdateFieldsAtPrint: boolean;

        /**
        * DefaultTray
        **/
        DefaultTray: string;

        /**
        * LocalNetworkFile
        **/
        LocalNetworkFile: boolean;

        /**
        * PrintFieldCodes
        **/
        PrintFieldCodes: boolean;

        /**
        * BibliographyStyle
        **/
        BibliographyStyle: string;

        /**
        * PrintComments
        **/
        PrintComments: boolean;

        /**
        * PrintHiddenText
        **/
        PrintHiddenText: boolean;

        /**
        * TabIndentKey
        **/
        TabIndentKey: boolean;

        /**
        * PrintDrawingObjects
        **/
        PrintDrawingObjects: boolean;

        /**
        * UpdateLinksAtPrint
        **/
        UpdateLinksAtPrint: boolean;

        /**
        * PrintBackgrounds
        **/
        PrintBackgrounds: boolean;

        /**
        * PrintBackground
        **/
        PrintBackground: boolean;

        /**
        * CreateBackup
        **/
        CreateBackup: boolean;

        /**
        * AutoWordSelection
        **/
        AutoWordSelection: boolean;

        /**
        * SaveNormalPrompt
        **/
        SaveNormalPrompt: boolean;

        /**
        * ReplaceSelection
        **/
        ReplaceSelection: boolean;

        /**
        * StrictRussianE
        **/
        StrictRussianE: boolean;

        /**
        * SaveInterval
        **/
        SaveInterval: number;

        /**
        * BackgroundSave
        **/
        BackgroundSave: boolean;

        /**
        * InsertedTextMark
        **/
        InsertedTextMark: WpsWdInsertedTextMark;

        /**
        * AutoFormatAsYouTypeApplyFirstIndents
        **/
        AutoFormatAsYouTypeApplyFirstIndents: boolean;

        /**
        * INSKeyForPaste
        **/
        INSKeyForPaste: boolean;

        /**
        * DisableFeaturesbyDefault
        **/
        DisableFeaturesbyDefault: boolean;

        /**
        * InsertedTextColor
        **/
        InsertedTextColor: WpsWdColorIndex;

        /**
        * AutoFormatApplyBulletedLists
        **/
        AutoFormatApplyBulletedLists: boolean;

        /**
        * DeletedTextColor
        **/
        DeletedTextColor: WpsWdColorIndex;

        /**
        * PrintXMLTag
        **/
        PrintXMLTag: boolean;

        /**
        * GridOriginVertical
        **/
        GridOriginVertical: number;

        /**
        * RevisedLinesColor
        **/
        RevisedLinesColor: WpsWdColorIndex;

        /**
        * Overtype
        **/
        Overtype: boolean;

        /**
        * VirusProtection
        **/
        VirusProtection: boolean;

        /**
        * AllowOpenInDraftView
        **/
        AllowOpenInDraftView: boolean;

        /**
        * MoveFromTextMark
        **/
        MoveFromTextMark: WpsWdMoveFromTextMark;

        /**
        * DocumentViewDirection
        **/
        DocumentViewDirection: WpsWdDocumentViewDirection;

        /**
        * AllowDragAndDrop
        **/
        AllowDragAndDrop: boolean;

        /**
        * SmartCutPaste
        **/
        SmartCutPaste: boolean;

        /**
        * AutoFormatAsYouTypeReplaceSymbols
        **/
        AutoFormatAsYouTypeReplaceSymbols: boolean;

        /**
        * PictureEditor
        **/
        PictureEditor: string;

        /**
        * RevisedPropertiesMark
        **/
        RevisedPropertiesMark: WpsWdRevisedPropertiesMark;

        /**
        * AllowPixelUnits
        **/
        AllowPixelUnits: boolean;

        /**
        * RevisedPropertiesColor
        **/
        RevisedPropertiesColor: WpsWdColorIndex;

        /**
        * MatchFuzzyCase
        **/
        MatchFuzzyCase: boolean;

        /**
        * IgnoreUppercase
        **/
        IgnoreUppercase: boolean;

        /**
        * SnapToGrid
        **/
        SnapToGrid: boolean;

        /**
        * PasteSmartStyleBehavior
        **/
        PasteSmartStyleBehavior: boolean;

        /**
        * GridDistanceHorizontal
        **/
        GridDistanceHorizontal: number;

        /**
        * GridDistanceVertical
        **/
        GridDistanceVertical: number;

        /**
        * GridOriginHorizontal
        **/
        GridOriginHorizontal: number;

        /**
        * IMEAutomaticControl
        **/
        IMEAutomaticControl: boolean;

        /**
        * AutoFormatApplyLists
        **/
        AutoFormatApplyLists: boolean;

        /**
        * AutoFormatApplyOtherParas
        **/
        AutoFormatApplyOtherParas: boolean;

        /**
        * AllowClickAndTypeMouse
        **/
        AllowClickAndTypeMouse: boolean;

        /**
        * AutoFormatReplaceQuotes
        **/
        AutoFormatReplaceQuotes: boolean;

        /**
        * AutoFormatReplaceSymbols
        **/
        AutoFormatReplaceSymbols: boolean;

        /**
        * AutoFormatReplaceFractions
        **/
        AutoFormatReplaceFractions: boolean;

        /**
        * AutoFormatReplacePlainTextEmphasis
        **/
        AutoFormatReplacePlainTextEmphasis: boolean;

        /**
        * MatchFuzzyDash
        **/
        MatchFuzzyDash: boolean;

        /**
        * AutoFormatPreserveStyles
        **/
        AutoFormatPreserveStyles: boolean;

        /**
        * INSKeyForOvertype
        **/
        INSKeyForOvertype: boolean;

        /**
        * AutoFormatAsYouTypeApplyHeadings
        **/
        AutoFormatAsYouTypeApplyHeadings: boolean;

        /**
        * ShowMenuFloaties
        **/
        ShowMenuFloaties: boolean;

        /**
        * AutoFormatAsYouTypeApplyBorders
        **/
        AutoFormatAsYouTypeApplyBorders: boolean;

        /**
        * AutoFormatAsYouTypeApplyBulletedLists
        **/
        AutoFormatAsYouTypeApplyBulletedLists: boolean;

        /**
        * AutoFormatAsYouTypeApplyNumberedLists
        **/
        AutoFormatAsYouTypeApplyNumberedLists: boolean;

        /**
        * AutoFormatAsYouTypeReplaceFractions
        **/
        AutoFormatAsYouTypeReplaceFractions: boolean;

        /**
        * AutoFormatAsYouTypeReplacePlainTextEmphasis
        **/
        AutoFormatAsYouTypeReplacePlainTextEmphasis: boolean;

        /**
        * AutoFormatAsYouTypeFormatListItemBeginning
        **/
        AutoFormatAsYouTypeFormatListItemBeginning: boolean;

        /**
        * AutoFormatAsYouTypeDefineStyles
        **/
        AutoFormatAsYouTypeDefineStyles: boolean;

        /**
        * MatchFuzzyIterationMark
        **/
        MatchFuzzyIterationMark: boolean;

        /**
        * AutoFormatPlainTextWordMail
        **/
        AutoFormatPlainTextWordMail: boolean;

        /**
        * AutoFormatReplaceHyperlinks
        **/
        AutoFormatReplaceHyperlinks: boolean;

        /**
        * DefaultHighlightColorIndex
        **/
        DefaultHighlightColorIndex: WpsWdColorIndex;

        /**
        * SuggestFromMainDictionaryOnly
        **/
        SuggestFromMainDictionaryOnly: boolean;

        /**
        * DefaultBorderLineStyle
        **/
        DefaultBorderLineStyle: WpsWdLineStyle;

        /**
        * CheckSpellingAsYouType
        **/
        CheckSpellingAsYouType: boolean;

        /**
        * CheckGrammarAsYouType
        **/
        CheckGrammarAsYouType: boolean;

        /**
        * IgnoreInternetAndFileAddresses
        **/
        IgnoreInternetAndFileAddresses: boolean;

        /**
        * ShowReadabilityStatistics
        **/
        ShowReadabilityStatistics: boolean;

        /**
        * IgnoreMixedDigits
        **/
        IgnoreMixedDigits: boolean;

        /**
        * DisplayPasteOptions
        **/
        DisplayPasteOptions: boolean;

        /**
        * SuggestSpellingCorrections
        **/
        SuggestSpellingCorrections: boolean;

        /**
        * DefaultBorderLineWidth
        **/
        DefaultBorderLineWidth: WpsWdLineWidth;

        /**
        * CheckGrammarWithSpelling
        **/
        CheckGrammarWithSpelling: boolean;

        /**
        * PasteAdjustTableFormatting
        **/
        PasteAdjustTableFormatting: boolean;

        /**
        * DefaultOpenFormat
        **/
        DefaultOpenFormat: WpsWdOpenFormat;

        /**
        * AutoKeyboardSwitching
        **/
        AutoKeyboardSwitching: boolean;

        /**
        * PrintDraft
        **/
        PrintDraft: boolean;

        /**
        * PrintReverse
        **/
        PrintReverse: boolean;

        /**
        * MatchFuzzyAY
        **/
        MatchFuzzyAY: boolean;

        /**
        * MatchFuzzyZJ
        **/
        MatchFuzzyZJ: boolean;

        /**
        * MatchFuzzyHF
        **/
        MatchFuzzyHF: boolean;

        /**
        * MatchFuzzyTC
        **/
        MatchFuzzyTC: boolean;

        /**
        * MatchFuzzyBV
        **/
        MatchFuzzyBV: boolean;

        /**
        * MatchFuzzyDZ
        **/
        MatchFuzzyDZ: boolean;

        /**
        * AutoFormatAsYouTypeApplyTables
        **/
        AutoFormatAsYouTypeApplyTables: boolean;

        /**
        * AutoFormatApplyFirstIndents
        **/
        AutoFormatApplyFirstIndents: boolean;

        /**
        * AutoFormatMatchParentheses
        **/
        AutoFormatMatchParentheses: boolean;

        /**
        * AutoFormatReplaceFarEastDashes
        **/
        AutoFormatReplaceFarEastDashes: boolean;

        /**
        * MatchFuzzyKiKu
        **/
        MatchFuzzyKiKu: boolean;

        /**
        * AutoFormatDeleteAutoSpaces
        **/
        AutoFormatDeleteAutoSpaces: boolean;

        /**
        * AutoFormatAsYouTypeApplyDates
        **/
        AutoFormatAsYouTypeApplyDates: boolean;

        /**
        * AutoFormatAsYouTypeMatchParentheses
        **/
        AutoFormatAsYouTypeMatchParentheses: boolean;

        /**
        * AutoFormatAsYouTypeReplaceFarEastDashes
        **/
        AutoFormatAsYouTypeReplaceFarEastDashes: boolean;

        /**
        * AutoFormatAsYouTypeDeleteAutoSpaces
        **/
        AutoFormatAsYouTypeDeleteAutoSpaces: boolean;

        /**
        * AutoFormatAsYouTypeAutoLetterWizard
        **/
        AutoFormatAsYouTypeAutoLetterWizard: boolean;

        /**
        * AutoFormatAsYouTypeInsertOvers
        **/
        AutoFormatAsYouTypeInsertOvers: boolean;

        /**
        * DisplayGridLines
        **/
        DisplayGridLines: boolean;

        /**
        * MatchFuzzyByte
        **/
        MatchFuzzyByte: boolean;

        /**
        * MatchFuzzyHiragana
        **/
        MatchFuzzyHiragana: boolean;

        /**
        * MatchFuzzySmallKana
        **/
        MatchFuzzySmallKana: boolean;

        /**
        * MatchFuzzyKanji
        **/
        MatchFuzzyKanji: boolean;

        /**
        * MatchFuzzyOldKana
        **/
        MatchFuzzyOldKana: boolean;

        /**
        * MatchFuzzyProlongedSoundMark
        **/
        MatchFuzzyProlongedSoundMark: boolean;

        /**
        * MatchFuzzyPunctuation
        **/
        MatchFuzzyPunctuation: boolean;

        /**
        * MatchFuzzySpace
        **/
        MatchFuzzySpace: boolean;

        /**
        * ApplyFarEastFontsToAscii
        **/
        ApplyFarEastFontsToAscii: boolean;

        /**
        * ConvertHighAnsiToFarEast
        **/
        ConvertHighAnsiToFarEast: boolean;

        /**
        * PrintOddPagesInAscendingOrder
        **/
        PrintOddPagesInAscendingOrder: boolean;

        /**
        * PrintEvenPagesInAscendingOrder
        **/
        PrintEvenPagesInAscendingOrder: boolean;

        /**
        * DefaultBorderColorIndex
        **/
        DefaultBorderColorIndex: WpsWdColorIndex;

        /**
        * EnableMisusedWordsDictionary
        **/
        EnableMisusedWordsDictionary: boolean;

        /**
        * DiacriticColorVal
        **/
        DiacriticColorVal: WpsWdColor;

        /**
        * AllowCombinedAuxiliaryForms
        **/
        AllowCombinedAuxiliaryForms: boolean;

        /**
        * DeletedCellColor
        **/
        DeletedCellColor: WpsWdCellColor;

        /**
        * InterpretHighAnsi
        **/
        InterpretHighAnsi: WpsWdHighAnsiText;

        /**
        * HangulHanjaFastConversion
        **/
        HangulHanjaFastConversion: boolean;

        /**
        * EnableHangulHanjaRecentOrdering
        **/
        EnableHangulHanjaRecentOrdering: boolean;

        SetWPHelpOptions(CommandKeyHelp?: any, DocNavigationKeys?: any, MouseSimulation?: any, DemoGuidance?: any, DemoSpeed?: any, HelpType?: any): void;

        /**
        * DefaultBorderColor
        **/
        DefaultBorderColor: WpsWdColor;

        /**
        * UseCharacterUnit
        **/
        UseCharacterUnit: boolean;

        /**
        * AllowCompoundNounProcessing
        **/
        AllowCompoundNounProcessing: boolean;

        /**
        * MonthNames
        **/
        MonthNames: WpsWdMonthNames;

        /**
        * MoveToTextColor
        **/
        MoveToTextColor: WpsWdColorIndex;

        /**
        * CursorMovement
        **/
        CursorMovement: WpsWdCursorMovement;

        /**
        * VisualSelection
        **/
        VisualSelection: WpsWdVisualSelection;

        /**
        * ShowDiacritics
        **/
        ShowDiacritics: boolean;

        /**
        * AddControlCharacters
        **/
        AddControlCharacters: boolean;

        /**
        * AddBiDirectionalMarksWhenSavingTextFile
        **/
        AddBiDirectionalMarksWhenSavingTextFile: boolean;

        /**
        * ShowDevTools
        **/
        ShowDevTools: boolean;

        /**
        * StrictInitialAlefHamza
        **/
        StrictInitialAlefHamza: boolean;

        /**
        * StrictFinalYaa
        **/
        StrictFinalYaa: boolean;

        /**
        * HebrewMode
        **/
        HebrewMode: WpsWdHebSpellStart;

        /**
        * ArabicMode
        **/
        ArabicMode: WpsWdAraSpeller;

        /**
        * UseGermanSpellingReform
        **/
        UseGermanSpellingReform: boolean;

        /**
        * AddHebDoubleQuote
        **/
        AddHebDoubleQuote: boolean;

        /**
        * UseDiffDiacColor
        **/
        UseDiffDiacColor: boolean;

        /**
        * BibliographySort
        **/
        BibliographySort: string;

        /**
        * OptimizeForWord97byDefault
        **/
        OptimizeForWord97byDefault: boolean;

        /**
        * TypeNReplace
        **/
        TypeNReplace: boolean;

        /**
        * DefaultEPostageApp
        **/
        DefaultEPostageApp: string;

        /**
        * SequenceCheck
        **/
        SequenceCheck: boolean;

        /**
        * BackgroundOpen
        **/
        BackgroundOpen: boolean;

        /**
        * PasteAdjustWordSpacing
        **/
        PasteAdjustWordSpacing: boolean;

        /**
        * PasteAdjustParagraphSpacing
        **/
        PasteAdjustParagraphSpacing: boolean;

        /**
        * PasteMergeFromPPT
        **/
        PasteMergeFromPPT: boolean;

        /**
        * PasteMergeFromXL
        **/
        PasteMergeFromXL: boolean;

        /**
        * CtrlClickHyperlinkToOpen
        **/
        CtrlClickHyperlinkToOpen: boolean;

        /**
        * PictureWrapType
        **/
        PictureWrapType: WpsWdWrapTypeMerged;

        /**
        * DisplaySmartTagButtons
        **/
        DisplaySmartTagButtons: boolean;

        /**
        * DisableFeaturesIntroducedAfterbyDefault
        **/
        DisableFeaturesIntroducedAfterbyDefault: WpsWdDisableFeaturesIntroducedAfter;

        /**
        * PasteSmartCutPaste
        **/
        PasteSmartCutPaste: boolean;

        /**
        * PromptUpdateStyle
        **/
        PromptUpdateStyle: boolean;

        /**
        * DefaultTextEncoding
        **/
        DefaultTextEncoding: Kso.KsoMsoEncoding;

        /**
        * LabelSmartTags
        **/
        LabelSmartTags: boolean;

        /**
        * WarnBeforeSavingPrintingSendingMarkup
        **/
        WarnBeforeSavingPrintingSendingMarkup: boolean;

        /**
        * StoreRSIDOnSave
        **/
        StoreRSIDOnSave: boolean;

        /**
        * FormatScanning
        **/
        FormatScanning: boolean;

        /**
        * PasteMergeLists
        **/
        PasteMergeLists: boolean;

        /**
        * AlertIfNotDefault
        **/
        AlertIfNotDefault: boolean;

        /**
        * AutoCreateNewDrawings
        **/
        AutoCreateNewDrawings: boolean;

        /**
        * SmartParaSelection
        **/
        SmartParaSelection: boolean;

        /**
        * RevisionsBalloonPrintOrientation
        **/
        RevisionsBalloonPrintOrientation: WpsWdRevisionsBalloonPrintOrientation;

        /**
        * ShowMarkupOpenSave
        **/
        ShowMarkupOpenSave: boolean;

        /**
        * SmartCursoring
        **/
        SmartCursoring: boolean;

        /**
        * InsertedCellColor
        **/
        InsertedCellColor: WpsWdCellColor;

        /**
        * MergedCellColor
        **/
        MergedCellColor: WpsWdCellColor;

        /**
        * SplitCellColor
        **/
        SplitCellColor: WpsWdCellColor;

        /**
        * EnableLegacyIMEMode
        **/
        EnableLegacyIMEMode: boolean;

        /**
        * ShowSelectionFloaties
        **/
        ShowSelectionFloaties: boolean;

        /**
        * EnableLivePreview
        **/
        EnableLivePreview: boolean;

        /**
        * EnableProofingToolsAdvertisement
        **/
        EnableProofingToolsAdvertisement: boolean;

        /**
        * OMathAutoBuildUp
        **/
        OMathAutoBuildUp: boolean;

        /**
        * AlwaysUseClearType
        **/
        AlwaysUseClearType: boolean;

        /**
        * UseNormalStyleForList
        **/
        UseNormalStyleForList: boolean;

        /**
        * PasteFormatWithinDocument
        **/
        PasteFormatWithinDocument: WpsWdPasteOptions;

        /**
        * PasteFormatBetweenDocuments
        **/
        PasteFormatBetweenDocuments: WpsWdPasteOptions;

        /**
        * PasteFormatBetweenStyledDocuments
        **/
        PasteFormatBetweenStyledDocuments: WpsWdPasteOptions;

        /**
        * PasteFormatFromExternalSource
        **/
        PasteFormatFromExternalSource: WpsWdPasteOptions;

        /**
        * RepeatWord
        **/
        RepeatWord: boolean;

        /**
        * ContextualSpeller
        **/
        ContextualSpeller: boolean;

        /**
        * MoveFromTextColor
        **/
        MoveFromTextColor: WpsWdColorIndex;

        /**
        * OMathCopyLF
        **/
        OMathCopyLF: boolean;

        /**
        * DoNotPromptForConvert
        **/
        DoNotPromptForConvert: boolean;

        /**
        * PrecisePositioning
        **/
        PrecisePositioning: boolean;

        /**
        * UpdateStyleListBehavior
        **/
        UpdateStyleListBehavior: WpsWdUpdateStyleListBehavior;

        /**
        * ParagraphAlignmentGuides
        **/
        ParagraphAlignmentGuides: boolean;

        /**
        * SpanishMode
        **/
        SpanishMode: WpsWdSpanishSpeller;

        /**
        * PortugalReform
        **/
        PortugalReform: WpsWdPortugueseReform;

        /**
        * BrazilReform
        **/
        BrazilReform: WpsWdPortugueseReform;

        /**
        * UpdateFieldsWithTrackedChangesAtPrint
        **/
        UpdateFieldsWithTrackedChangesAtPrint: boolean;

        /**
        * DisplayAlignmentGuides
        **/
        DisplayAlignmentGuides: boolean;

        /**
        * PageAlignmentGuides
        **/
        PageAlignmentGuides: boolean;

        /**
        * EnableLiveDrag
        **/
        EnableLiveDrag: boolean;

        /**
        * UseSubPixelPositioning
        **/
        UseSubPixelPositioning: boolean;

        /**
        * PreferCloudSaveLocations
        **/
        PreferCloudSaveLocations: boolean;

        /**
        * SkyDriveSignInOption
        **/
        SkyDriveSignInOption: boolean;

        /**
        * ExpandHeadingsOnOpen
        **/
        ExpandHeadingsOnOpen: boolean;

        /**
        * UseLocalUserInfo
        **/
        UseLocalUserInfo: boolean;

    }

    interface WpsHangulHanjaConversionDictionaries {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsDictionary): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * BuiltinDictionary
        **/
        readonly BuiltinDictionary: WpsDictionary;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ActiveCustomDictionary
        **/
        ActiveCustomDictionary: WpsDictionary;

        /**
        * Maximum
        **/
        readonly Maximum: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(FileName?: string, prop?: WpsDictionary): void;

        ClearAll(): void;

    }

    interface WpsDefaultWebOptions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * OptimizeForBrowser
        **/
        OptimizeForBrowser: boolean;

        /**
        * UseLongFileNames
        **/
        UseLongFileNames: boolean;

        /**
        * UpdateLinksOnSave
        **/
        UpdateLinksOnSave: boolean;

        /**
        * BrowserLevel
        **/
        BrowserLevel: WpsWdBrowserLevel;

        /**
        * RelyOnCSS
        **/
        RelyOnCSS: boolean;

        /**
        * OrganizeInFolder
        **/
        OrganizeInFolder: boolean;

        /**
        * CheckIfOfficeIsHTMLEditor
        **/
        CheckIfOfficeIsHTMLEditor: boolean;

        /**
        * CheckIfWordIsDefaultHTMLEditor
        **/
        CheckIfWordIsDefaultHTMLEditor: boolean;

        /**
        * RelyOnVML
        **/
        RelyOnVML: boolean;

        /**
        * ScreenSize
        **/
        ScreenSize: Kso.KsoMsoScreenSize;

        /**
        * AllowPNG
        **/
        AllowPNG: boolean;

        /**
        * PixelsPerInch
        **/
        PixelsPerInch: number;

        /**
        * Encoding
        **/
        Encoding: Kso.KsoMsoEncoding;

        /**
        * AlwaysSaveInDefaultEncoding
        **/
        AlwaysSaveInDefaultEncoding: boolean;

        /**
        * Fonts
        **/
        readonly Fonts: Kso.KsoWebPageFonts;

        /**
        * FolderSuffix
        **/
        readonly FolderSuffix: string;

        /**
        * TargetBrowser
        **/
        TargetBrowser: Kso.KsoMsoTargetBrowser;

        /**
        * SaveNewWebPagesAsWebArchives
        **/
        SaveNewWebPagesAsWebArchives: boolean;

    }

    interface WpsEmailSignatureEntry {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsTaskPane {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Visible
        **/
        Visible: boolean;

    }

    interface WpsTaskPanes {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: WpsWdTaskPanes, prop?: WpsTaskPane): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsXMLNamespace {
        AttachToDocument(Document?: any): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * URI
        **/
        readonly URI: string;

        DefaultTransform(AllUsers?: boolean, prop?: WpsXSLTransform): void;

        Location(AllUsers?: boolean, prop?: string): void;

        Alias(AllUsers?: boolean, prop?: string): void;

        /**
        * XSLTransforms
        **/
        readonly XSLTransforms: WpsXSLTransforms;

        Delete(): void;

    }

    interface WpsXMLNamespaces {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsXMLNamespace): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Path?: string, NamespaceURI?: any, Alias?: any, InstallForAllUsers?: boolean, prop?: WpsXMLNamespace): void;

        InstallManifest(Path?: string, InstallForAllUsers?: boolean): void;

    }

    interface WpsOMathAutoCorrect {
        /**
        * Functions
        **/
        readonly Functions: WpsOMathRecognizedFunctions;

        /**
        * UseOutsideOMath
        **/
        UseOutsideOMath: boolean;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ReplaceText
        **/
        ReplaceText: boolean;

        /**
        * Entries
        **/
        readonly Entries: WpsOMathAutoCorrectEntries;

    }

    interface WpsOMathAutoCorrectEntries {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsOMathAutoCorrectEntry): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, Value?: string, prop?: WpsOMathAutoCorrectEntry): void;

    }

    interface WpsOMathAutoCorrectEntry {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Value
        **/
        Value: string;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsOMathRecognizedFunction {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        Delete(): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface WpsOMathRecognizedFunctions {
        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsOMathRecognizedFunction): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, prop?: WpsOMathRecognizedFunction): void;

    }

    interface WpsUndoRecord {
        /**
        * CustomRecordLevel
        **/
        readonly CustomRecordLevel: number;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * CustomRecordName
        **/
        readonly CustomRecordName: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        StartCustomRecord(Name?: string): void;

        EndCustomRecord(): void;

        /**
        * IsRecordingCustomRecord
        **/
        readonly IsRecordingCustomRecord: boolean;

    }

    interface WpsProtectedViewWindows {
        Open(FileName?: any, AddToRecentFiles?: any, PasswordDocument?: any, Visible?: any, OpenAndRepair?: any, prop?: WpsProtectedViewWindow): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        Item(Index?: any, prop?: WpsProtectedViewWindow): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface WpsOfdExportOptions {
        /**
        * ViewOfdAuto
        **/
        ViewOfdAuto: boolean;

        /**
        * ConvertRevisionType
        **/
        ConvertRevisionType: boolean;

        /**
        * ConvertCommentsMode
        **/
        ConvertCommentsMode: WpsWpsPdfCommentsMode;

        EditRight(Rights?: WpsWpsPdfEditRight, prop?: boolean): void;

        /**
        * ConvertFootnotes
        **/
        ConvertFootnotes: boolean;

        /**
        * ConvertEndnotes
        **/
        ConvertEndnotes: boolean;

        /**
        * CopyRight
        **/
        CopyRight: WpsWpsPdfCopyRight;

        /**
        * ConvertSummaryInfo
        **/
        ConvertSummaryInfo: boolean;

        /**
        * PrintRight
        **/
        PrintRight: WpsWpsPdfPrintRight;

        /**
        * ConvertHyperlinks
        **/
        ConvertHyperlinks: boolean;

        /**
        * ConvertTitleStyles
        **/
        ConvertTitleStyles: boolean;

        /**
        * ConvertBuildinStyles
        **/
        ConvertBuildinStyles: boolean;

        /**
        * ConvertBookmark
        **/
        ConvertBookmark: boolean;

        /**
        * ConvertCustomStyles
        **/
        ConvertCustomStyles: boolean;

        /**
        * SelectServiceProvider
        **/
        SelectServiceProvider: WpsKsoOfdServiceProviderType;

    }

    interface WpsGlobal {
        /**
        * System
        **/
        readonly System: WpsSystem;

        /**
        * Selection
        **/
        readonly Selection: WpsSelection;

        /**
        * Windows
        **/
        readonly Windows: WpsWindows;

        CheckSpelling(Word?: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any, prop?: boolean): void;

        /**
        * Application
        **/
        readonly Application: WpsApplication;

        /**
        * IsSandboxed
        **/
        readonly IsSandboxed: boolean;

        /**
        * CustomizationContext
        **/
        CustomizationContext: any;

        /**
        * ActiveWindow
        **/
        readonly ActiveWindow: WpsWindow;

        PicasToPoints(Picas?: number, prop?: number): void;

        DDEInitiate(App?: string, Topic?: string, prop?: number): void;

        /**
        * HangulHanjaDictionaries
        **/
        readonly HangulHanjaDictionaries: WpsHangulHanjaConversionDictionaries;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * ActivePrinter
        **/
        ActivePrinter: string;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * LandscapeFontNames
        **/
        readonly LandscapeFontNames: WpsFontNames;

        /**
        * Documents
        **/
        readonly Documents: WpsDocuments;

        /**
        * ActiveDocument
        **/
        readonly ActiveDocument: WpsDocument;

        LinesToPoints(Lines?: number, prop?: number): void;

        /**
        * WordBasic
        **/
        readonly WordBasic: any;

        /**
        * PrintPreview
        **/
        PrintPreview: boolean;

        Help(HelpType?: any): void;

        /**
        * RecentFiles
        **/
        readonly RecentFiles: WpsRecentFiles;

        /**
        * NormalTemplate
        **/
        readonly NormalTemplate: WpsTemplate;

        DDERequest(Channel?: number, Item?: string, prop?: string): void;

        /**
        * AutoCorrect
        **/
        readonly AutoCorrect: WpsAutoCorrect;

        /**
        * FileConverters
        **/
        readonly FileConverters: WpsFileConverters;

        /**
        * AddIns
        **/
        readonly AddIns: WpsAddIns;

        /**
        * PortraitFontNames
        **/
        readonly PortraitFontNames: WpsFontNames;

        /**
        * FontNames
        **/
        readonly FontNames: WpsFontNames;

        /**
        * Languages
        **/
        readonly Languages: WpsLanguages;

        /**
        * Dialogs
        **/
        readonly Dialogs: WpsDialogs;

        /**
        * ListGalleries
        **/
        readonly ListGalleries: WpsListGalleries;

        /**
        * Assistant
        **/
        readonly Assistant: Kso.KsoAssistant;

        /**
        * CaptionLabels
        **/
        readonly CaptionLabels: WpsCaptionLabels;

        /**
        * AutoCaptions
        **/
        readonly AutoCaptions: WpsAutoCaptions;

        PointsToCentimeters(Points?: number, prop?: number): void;

        KeysBoundTo(KeyCategory?: WpsWdKeyCategory, Command?: string, CommandParameter?: any, prop?: WpsKeysBoundTo): void;

        /**
        * Tasks
        **/
        readonly Tasks: WpsTasks;

        /**
        * MacroContainer
        **/
        readonly MacroContainer: any;

        /**
        * CommandBars
        **/
        readonly CommandBars: Kso.KsoCommandBars;

        InchesToPoints(Inches?: number, prop?: number): void;

        SynonymInfo(Word?: string, LanguageID?: any, prop?: WpsSynonymInfo): void;

        /**
        * Templates
        **/
        readonly Templates: WpsTemplates;

        DDETerminate(Channel?: number): void;

        /**
        * KeyBindings
        **/
        readonly KeyBindings: WpsKeyBindings;

        FindKey(KeyCode?: number, KeyCode2?: any, prop?: WpsKeyBinding): void;

        /**
        * Options
        **/
        readonly Options: WpsOptions;

        KeyString(KeyCode?: number, KeyCode2?: any, prop?: string): void;

        /**
        * CustomDictionaries
        **/
        readonly CustomDictionaries: WpsDictionaries;

        /**
        * StatusBar
        **/
        StatusBar: string;

        CleanString(String?: string, prop?: string): void;

        /**
        * ShowVisualBasicEditor
        **/
        ShowVisualBasicEditor: boolean;

        IsObjectValid(Object?: any, prop?: boolean): void;

        MillimetersToPoints(Millimeters?: number, prop?: number): void;

        CentimetersToPoints(Centimeters?: number, prop?: number): void;

        Repeat(Times?: any, prop?: boolean): void;

        DDEExecute(Channel?: number, Command?: string): void;

        DDEPoke(Channel?: number, Item?: string, Data?: string): void;

        DDETerminateAll(): void;

        ChangeFileOpenDirectory(Path?: string): void;

        BuildKeyCode(Arg1?: WpsWdKey, Arg2?: any, Arg3?: any, Arg4?: any, prop?: number): void;

        PointsToInches(Points?: number, prop?: number): void;

        GetSpellingSuggestions(Word?: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, SuggestionMode?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any, prop?: WpsSpellingSuggestions): void;

        NewWindow(prop?: WpsWindow): void;

        PointsToMillimeters(Points?: number, prop?: number): void;

        PointsToPicas(Points?: number, prop?: number): void;

        PointsToLines(Points?: number, prop?: number): void;

        PointsToPixels(Points?: number, fVertical?: any, prop?: number): void;

        PixelsToPoints(Pixels?: number, fVertical?: any, prop?: number): void;

        /**
        * LanguageSettings
        **/
        readonly LanguageSettings: Kso.KsoLanguageSettings;

        /**
        * AnswerWizard
        **/
        readonly AnswerWizard: Kso.KsoAnswerWizard;

        /**
        * AutoCorrectEmail
        **/
        readonly AutoCorrectEmail: WpsAutoCorrect;

        /**
        * ProtectedViewWindows
        **/
        readonly ProtectedViewWindows: WpsProtectedViewWindows;

        /**
        * ActiveProtectedViewWindow
        **/
        readonly ActiveProtectedViewWindow: WpsProtectedViewWindow;

    }

    interface WpsGridlines {
        Delete(prop?: any): void;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsLegendEntries extends Kso.KsoLegendEntries {}

    interface WpsLegendKey {
        Delete(prop?: any): void;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        ClearFormats(prop?: any): void;

        /**
        * Smooth
        **/
        Smooth: boolean;

        /**
        * MarkerBackgroundColor
        **/
        MarkerBackgroundColor: number;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Left
        **/
        readonly Left: number;

        /**
        * InvertIfNegative
        **/
        InvertIfNegative: boolean;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
        * MarkerBackgroundColorIndex
        **/
        MarkerBackgroundColorIndex: Kso.KsoXlColorIndex;

        /**
        * MarkerForegroundColor
        **/
        MarkerForegroundColor: number;

        /**
        * MarkerForegroundColorIndex
        **/
        MarkerForegroundColorIndex: Kso.KsoXlColorIndex;

        /**
        * MarkerSize
        **/
        MarkerSize: number;

        /**
        * MarkerStyle
        **/
        MarkerStyle: Kso.KsoXlMarkerStyle;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * PictureType
        **/
        PictureType: number;

        /**
        * PictureUnit2
        **/
        PictureUnit2: number;

        /**
        * PictureUnit
        **/
        PictureUnit: number;

        Select(prop?: any): void;

        /**
        * Top
        **/
        readonly Top: number;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsErrorBars {
        Delete(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        Select(prop?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        ClearFormats(prop?: any): void;

        /**
        * EndStyle
        **/
        EndStyle: Kso.KsoXlEndStyleCap;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface WpsAxes extends Kso.KsoAxes {}

    interface WpsAxisTitle {
        /**
        * Caption
        **/
        Caption: string;

        Characters(Start?: any, Length?: any, prop?: WpsChartCharacters): void;

        /**
        * Top
        **/
        Top: number;

        /**
        * FormulaLocal
        **/
        FormulaLocal: string;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * Left
        **/
        Left: number;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        /**
        * HorizontalAlignment
        **/
        HorizontalAlignment: any;

        /**
        * Orientation
        **/
        Orientation: any;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Text
        **/
        Text: string;

        /**
        * VerticalAlignment
        **/
        VerticalAlignment: any;

        /**
        * ReadingOrder
        **/
        ReadingOrder: number;

        /**
        * Position
        **/
        Position: Kso.KsoXlChartElementPosition;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        Delete(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * IncludeInLayout
        **/
        IncludeInLayout: boolean;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * FormulaR1C1Local
        **/
        FormulaR1C1Local: string;

        /**
        * Formula
        **/
        Formula: string;

        /**
        * FormulaR1C1
        **/
        FormulaR1C1: string;

    }

    interface WpsDisplayUnitLabel {
        /**
        * Caption
        **/
        Caption: string;

        Characters(Start?: any, Length?: any, prop?: WpsChartCharacters): void;

        /**
        * Top
        **/
        Top: number;

        /**
        * FormulaLocal
        **/
        FormulaLocal: string;

        /**
        * Shadow
        **/
        Shadow: boolean;

        /**
        * Left
        **/
        Left: number;

        /**
        * Font
        **/
        readonly Font: Kso.KsoChartFont;

        /**
        * HorizontalAlignment
        **/
        HorizontalAlignment: any;

        /**
        * Orientation
        **/
        Orientation: any;

        /**
        * Format
        **/
        readonly Format: WpsChartFormat;

        /**
        * Text
        **/
        Text: string;

        /**
        * VerticalAlignment
        **/
        VerticalAlignment: any;

        /**
        * ReadingOrder
        **/
        ReadingOrder: number;

        /**
        * Position
        **/
        Position: Kso.KsoXlChartElementPosition;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Interior
        **/
        readonly Interior: WpsInterior;

        /**
        * Fill
        **/
        readonly Fill: Kso.KsoChartFillFormat;

        Delete(prop?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: WpsChartBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(prop?: any): void;

        /**
        * IncludeInLayout
        **/
        IncludeInLayout: boolean;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * FormulaR1C1Local
        **/
        FormulaR1C1Local: string;

        /**
        * Formula
        **/
        Formula: string;

        /**
        * FormulaR1C1
        **/
        FormulaR1C1: string;

    }

    interface WpsChartCategory {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * IsFiltered
        **/
        IsFiltered: boolean;

    }

    enum WpsWdOMathBreakSub {
        wdOMathBreakSubMinusMinus=0,
        wdOMathBreakSubPlusMinus=1,
        wdOMathBreakSubMinusPlus=2,
    }

    enum WpsWdOMathBreakBin {
        wdOMathBreakBinBefore=0,
        wdOMathBreakBinAfter=1,
        wdOMathBreakBinRepeat=2,
    }

    enum WpsWdCharacterWidth {
        wdWidthHalfWidth=6,
        wdWidthFullWidth=7,
    }

    enum WpsWdCharacterCase {
        wdUpperCase=1,
        wdFullWidth=7,
        wdNextCase=-1,
        wdTitleSentence=4,
        wdLowerCase=0,
        wdTitleWord=2,
        wdHalfWidth=6,
        wdToggleCase=5,
        wdKatakana=8,
        wdHiragana=9,
    }

    enum WpsWdMailSystem {
        wdPowerTalk=2,
        wdNoMailSystem=0,
        wdMAPIandPowerTalk=3,
        wdMAPI=1,
    }

    enum WpsWdStoryType {
        wdEndnoteContinuationNoticeStory=17,
        wdEvenPagesFooterStory=8,
        wdMainTextStory=1,
        wdFootnotesStory=2,
        wdPrimaryFooterStory=9,
        wdTextFrameStory=5,
        wdFootnoteContinuationNoticeStory=14,
        wdEndnotesStory=3,
        wdCommentsStory=4,
        wdEvenPagesHeaderStory=6,
        wdPrimaryHeaderStory=7,
        wdFirstPageHeaderStory=10,
        wdFirstPageFooterStory=11,
        wdFootnoteSeparatorStory=12,
        wdFootnoteContinuationSeparatorStory=13,
        wdEndnoteSeparatorStory=15,
        wdEndnoteContinuationSeparatorStory=16,
    }

    enum WpsWdGoToItem {
        wdGoToSection=0,
        wdGoToPage=1,
        wdGoToFootnote=4,
        wdGoToBookmark=-1,
        wdGoToTable=2,
        wdGoToLine=3,
        wdGoToField=7,
        wdGoToComment=6,
        wdGoToEndnote=5,
        wdGoToGraphic=8,
        wdGoToObject=9,
        wdGoToEquation=10,
        wdGoToHeading=11,
        wdGoToPercent=12,
        wdGoToSpellingError=13,
        wdGoToProofreadingError=15,
        wdGoToGrammaticalError=14,
    }

    enum WpsWdMoveFromTextMark {
        wdMoveFromTextMarkNone=5,
        wdMoveFromTextMarkCaret=3,
        wdMoveFromTextMarkHidden=0,
        wdMoveFromTextMarkDoubleStrikeThrough=1,
        wdMoveFromTextMarkItalic=7,
        wdMoveFromTextMarkStrikeThrough=2,
        wdMoveFromTextMarkPound=4,
        wdMoveFromTextMarkBold=6,
        wdMoveFromTextMarkUnderline=8,
        wdMoveFromTextMarkDoubleUnderline=9,
        wdMoveFromTextMarkColorOnly=10,
    }

    enum WpsWdTemplateType {
        wdNormalTemplate=0,
        wdGlobalTemplate=1,
        wdAttachedTemplate=2,
    }

    enum WpsWdFramesetNewFrameLocation {
        wdFramesetNewFrameAbove=0,
        wdFramesetNewFrameBelow=1,
        wdFramesetNewFrameRight=2,
        wdFramesetNewFrameLeft=3,
    }

    enum WpsWdEnclosureType {
        wdEnclosureCircle=0,
        wdEnclosureSquare=1,
        wdEnclosureTriangle=2,
        wdEnclosureDiamond=3,
    }

    enum WpsWdLinkType {
        wdLinkTypeChart=8,
        wdLinkTypeText=2,
        wdLinkTypeOLE=0,
        wdLinkTypePicture=1,
        wdLinkTypeDDEAuto=7,
        wdLinkTypeDDE=6,
        wdLinkTypeReference=3,
        wdLinkTypeInclude=4,
        wdLinkTypeImport=5,
    }

    enum WpsWdPageNumberStyle {
        wdPageNumberStyleArabic=0,
        wdPageNumberStyleKanjiDigit=11,
        wdPageNumberStyleHindiCardinalText=52,
        wdPageNumberStyleUppercaseRoman=1,
        wdPageNumberStyleLowercaseRoman=2,
        wdPageNumberStyleArabicFullWidth=14,
        wdPageNumberStyleUppercaseLetter=3,
        wdPageNumberStyleLowercaseLetter=4,
        wdPageNumberStyleKanji=10,
        wdPageNumberStyleKanjiTraditional=16,
        wdPageNumberStyleHebrewLetter2=47,
        wdPageNumberStyleHebrewLetter1=45,
        wdPageNumberStyleHanjaRead=41,
        wdPageNumberStyleNumberInCircle=18,
        wdPageNumberStyleHanjaReadDigit=42,
        wdPageNumberStyleTradChinNum2=34,
        wdPageNumberStyleTradChinNum1=33,
        wdPageNumberStyleSimpChinNum2=38,
        wdPageNumberStyleSimpChinNum1=37,
        wdPageNumberStyleArabicLetter2=48,
        wdPageNumberStyleArabicLetter1=46,
        wdPageNumberStyleHindiLetter2=50,
        wdPageNumberStyleHindiLetter1=49,
        wdPageNumberStyleHindiArabic=51,
        wdPageNumberStyleThaiLetter=53,
        wdPageNumberStyleThaiArabic=54,
        wdPageNumberStyleThaiCardinalText=55,
        wdPageNumberStyleVietCardinalText=56,
        wdPageNumberStyleNumberInDash=57,
    }

    enum WpsWdColorIndex {
        wdGray50=15,
        wdRed=6,
        wdAuto=0,
        wdYellow=7,
        wdBlack=1,
        wdPink=5,
        wdDarkYellow=14,
        wdDarkBlue=9,
        wdBlue=2,
        wdBrightGreen=4,
        wdByAuthor=-1,
        wdTurquoise=3,
        wdWhite=8,
        wdTeal=10,
        wdGreen=11,
        wdViolet=12,
        wdDarkRed=13,
        wdGray25=16,
        wdNoHighlight=0,
    }

    enum WpsWdJustificationMode {
        wdJustificationModeExpand=0,
        wdJustificationModeCompress=1,
        wdJustificationModeCompressKana=2,
    }

    enum WpsWdCaptionNumberStyle {
        wdCaptionNumberStyleArabic=0,
        wdCaptionNumberStyleArabicFullWidth=14,
        wdCaptionNumberStyleUppercaseLetter=3,
        wdCaptionNumberStyleVietCardinalText=56,
        wdCaptionNumberStyleArabicLetter2=48,
        wdCaptionNumberStyleArabicLetter1=46,
        wdCaptionNumberStyleUppercaseRoman=1,
        wdCaptionNumberStyleLowercaseRoman=2,
        wdCaptionNumberStyleKanjiDigit=11,
        wdCaptionNumberStyleLowercaseLetter=4,
        wdCaptionNumberStyleKanji=10,
        wdCaptionNumberStyleHindiCardinalText=52,
        wdCaptionNumberStyleKanjiTraditional=16,
        wdCaptionNumberStyleNumberInCircle=18,
        wdCaptionNumberStyleGanada=24,
        wdCaptionNumberStyleChosung=25,
        wdCaptionNumberStyleZodiac2=31,
        wdCaptionNumberStyleZodiac1=30,
        wdCaptionNumberStyleHanjaRead=41,
        wdCaptionNumberStyleHanjaReadDigit=42,
        wdCaptionNumberStyleTradChinNum3=35,
        wdCaptionNumberStyleTradChinNum2=34,
        wdCaptionNumberStyleSimpChinNum3=39,
        wdCaptionNumberStyleSimpChinNum2=38,
        wdCaptionNumberStyleHebrewLetter2=47,
        wdCaptionNumberStyleHebrewLetter1=45,
        wdCaptionNumberStyleHindiLetter2=50,
        wdCaptionNumberStyleHindiLetter1=49,
        wdCaptionNumberStyleHindiArabic=51,
        wdCaptionNumberStyleThaiLetter=53,
        wdCaptionNumberStyleThaiArabic=54,
        wdCaptionNumberStyleThaiCardinalText=55,
    }

    enum WpsWdContinue {
        wdResetList=1,
        wdContinueDisabled=0,
        wdContinueList=2,
    }

    enum WpsWdBaselineAlignment {
        wdBaselineAlignTop=0,
        wdBaselineAlignBaseline=2,
        wdBaselineAlignCenter=1,
        wdBaselineAlignAuto=4,
        wdBaselineAlignFarEast50=3,
    }

    enum WpsWdHeadingSeparator {
        wdHeadingSeparatorNone=0,
        wdHeadingSeparatorBlankLine=1,
        wdHeadingSeparatorLetterFull=4,
        wdHeadingSeparatorLetterLow=3,
        wdHeadingSeparatorLetter=2,
    }

    enum WpsWdOpenFormat {
        wdOpenFormatAuto=0,
        wdOpenFormatUnicodeText=5,
        wdOpenFormatDocument97=1,
        wdOpenFormatDocument=1,
        wdOpenFormatTemplate97=2,
        wdOpenFormatXML=8,
        wdOpenFormatTemplate=2,
        wdOpenFormatText=4,
        wdOpenFormatRTF=3,
        wdOpenFormatAllWord=6,
        wdOpenFormatEncodedText=5,
        wdOpenFormatWebPages=7,
        wdOpenFormatXMLDocument=9,
        wdOpenFormatXMLDocumentMacroEnabled=10,
        wdOpenFormatXMLTemplate=11,
        wdOpenFormatXMLTemplateMacroEnabled=12,
        wdOpenFormatAllWordTemplates=13,
        wdOpenFormatXMLDocumentSerialized=14,
        wdOpenFormatOpenDocumentText=18,
        wdOpenFormatXMLDocumentMacroEnabledSerialized=15,
        wdOpenFormatXMLTemplateSerialized=16,
        wdOpenFormatXMLTemplateMacroEnabledSerialized=17,
    }

    enum WpsWdIMEMode {
        wdIMEModeNoControl=0,
        wdIMEModeOff=2,
        wdIMEModeOn=1,
        wdIMEModeKatakana=5,
        wdIMEModeAlpha=8,
        wdIMEModeHiragana=4,
        wdIMEModeHangulFull=9,
        wdIMEModeKatakanaHalf=6,
        wdIMEModeAlphaFull=7,
        wdIMEModeHangul=10,
    }

    enum WpsWdSeekView {
        wdSeekMainDocument=0,
        wdSeekPrimaryFooter=4,
        wdSeekFootnotes=7,
        wdSeekPrimaryHeader=1,
        wdSeekEvenPagesFooter=6,
        wdSeekFirstPageHeader=2,
        wdSeekEndnotes=8,
        wdSeekFirstPageFooter=5,
        wdSeekEvenPagesHeader=3,
        wdSeekCurrentPageHeader=9,
        wdSeekCurrentPageFooter=10,
    }

    enum WpsWdIndexFilter {
        wdIndexFilterMedium=5,
        wdIndexFilterNone=0,
        wdIndexFilterAiueo=1,
        wdIndexFilterFull=6,
        wdIndexFilterAkasatana=2,
        wdIndexFilterLow=4,
        wdIndexFilterChosung=3,
    }

    enum WpsWdAlignmentTabAlignment {
        wdCenter=1,
        wdLeft=0,
        wdRight=2,
    }

    enum WpsWdFarEastLineBreakLevel {
        wdFarEastLineBreakLevelNormal=0,
        wdFarEastLineBreakLevelStrict=1,
        wdFarEastLineBreakLevelCustom=2,
    }

    enum WpsWdAlertLevel {
        wdAlertsNone=0,
        wdAlertsMessageBox=-2,
        wdAlertsAll=-1,
    }

    enum WpsWdIndexSortBy {
        wdIndexSortByStroke=0,
        wdIndexSortBySyllable=1,
    }

    enum WpsWdStyleType {
        wdStyleTypeParagraph=1,
        wdStyleTypeCharacter=2,
        wdStyleTypeList=4,
        wdStyleTypeTable=3,
        wdStyleTypeLinked=6,
        wdStyleTypeParagraphOnly=5,
    }

    enum WpsWdSummaryLength {
        wd10Sentences=-2,
        wd10Percent=-6,
        wd20Sentences=-3,
        wd100Words=-4,
        wd25Percent=-7,
        wd500Words=-5,
        wd50Percent=-8,
        wd75Percent=-9,
    }

    enum WpsWdMultipleWordConversionsMode {
        wdHangulToHanja=0,
        wdHanjaToHangul=1,
    }

    enum WpsWdBrowserLevel {
        wdBrowserLevelV4=0,
        wdBrowserLevelMicrosoftInternetExplorer6=2,
        wdBrowserLevelMicrosoftInternetExplorer5=1,
    }

    enum WpsWdHeaderFooterIndex {
        wdHeaderFooterEvenPages=3,
        wdHeaderFooterPrimary=1,
        wdHeaderFooterFirstPage=2,
    }

    enum WpsWdDeleteCells {
        wdDeleteCellsShiftLeft=0,
        wdDeleteCellsShiftUp=1,
        wdDeleteCellsEntireColumn=3,
        wdDeleteCellsEntireRow=2,
    }

    enum WpsKsoOfdServiceProviderType {
        KsoOfdServiceProviderSuwell=0,
        KsoOfdServiceProviderFoxit=1,
    }

    enum WpsWdTextureIndex {
        wdTexture10Percent=100,
        wdTexture15Percent=150,
        wdTextureNone=0,
        wdTexture2Pt5Percent=25,
        wdTexture25Percent=250,
        wdTexture20Percent=200,
        wdTexture5Percent=50,
        wdTexture7Pt5Percent=75,
        wdTextureDarkCross=-5,
        wdTexture12Pt5Percent=125,
        wdTexture17Pt5Percent=175,
        wdTexture27Pt5Percent=275,
        wdTexture22Pt5Percent=225,
        wdTexture35Percent=350,
        wdTexture30Percent=300,
        wdTexture37Pt5Percent=375,
        wdTexture32Pt5Percent=325,
        wdTextureDiagonalDown=-9,
        wdTexture45Percent=450,
        wdTexture40Percent=400,
        wdTexture47Pt5Percent=475,
        wdTexture42Pt5Percent=425,
        wdTextureDarkDiagonalDown=-3,
        wdTexture55Percent=550,
        wdTexture50Percent=500,
        wdTexture57Pt5Percent=575,
        wdTexture52Pt5Percent=525,
        wdTexture65Percent=650,
        wdTexture60Percent=600,
        wdTexture67Pt5Percent=675,
        wdTexture62Pt5Percent=625,
        wdTexture75Percent=750,
        wdTexture70Percent=700,
        wdTexture77Pt5Percent=775,
        wdTexture72Pt5Percent=725,
        wdTextureSolid=1000,
        wdTexture85Percent=850,
        wdTexture80Percent=800,
        wdTexture87Pt5Percent=875,
        wdTexture82Pt5Percent=825,
        wdTexture95Percent=950,
        wdTexture90Percent=900,
        wdTexture97Pt5Percent=975,
        wdTexture92Pt5Percent=925,
        wdTextureDarkDiagonalUp=-4,
        wdTextureDarkHorizontal=-1,
        wdTextureDarkVertical=-2,
        wdTextureDarkDiagonalCross=-6,
        wdTextureHorizontal=-7,
        wdTextureVertical=-8,
        wdTextureDiagonalUp=-10,
        wdTextureCross=-11,
        wdTextureDiagonalCross=-12,
    }

    enum WpsWdHighAnsiText {
        wdHighAnsiIsFarEast=0,
        wdHighAnsiIsHighAnsi=1,
        wdAutoDetectHighAnsiFarEast=2,
    }

    enum WpsWdLineSpacing {
        wdLineSpaceSingle=0,
        wdLineSpace1pt5=1,
        wdLineSpaceDouble=2,
        wdLineSpaceAtLeast=3,
        wdLineSpaceExactly=4,
        wdLineSpaceMultiple=5,
    }

    enum WpsWdUnderline {
        wdUnderlineDashHeavy=23,
        wdUnderlineWavyHeavy=27,
        wdUnderlineNone=0,
        wdUnderlineDash=7,
        wdUnderlineSingle=1,
        wdUnderlineWords=2,
        wdUnderlineDouble=3,
        wdUnderlineDotted=4,
        wdUnderlineDotDash=9,
        wdUnderlineThick=6,
        wdUnderlineDotDotDash=10,
        wdUnderlineWavy=11,
        wdUnderlineDottedHeavy=20,
        wdUnderlineDotDashHeavy=25,
        wdUnderlineDotDotDashHeavy=26,
        wdUnderlineDashLong=39,
        wdUnderlineDashLongHeavy=55,
        wdUnderlineWavyDouble=43,
    }

    enum WpsWdEmphasisMark {
        wdEmphasisMarkNone=0,
        wdEmphasisMarkOverSolidCircle=1,
        wdEmphasisMarkOverComma=2,
        wdEmphasisMarkOverWhiteCircle=3,
        wdEmphasisMarkUnderSolidCircle=4,
    }

    enum WpsWdInternationalIndex {
        wdListSeparator=17,
        wdInternationalPM=23,
        wdDecimalSeparator=18,
        wdThousandsSeparator=19,
        wdCurrencyCode=20,
        wdDateSeparator=25,
        wdInternationalAM=22,
        wd24HourClock=21,
        wdTimeSeparator=24,
        wdProductLanguageID=26,
    }

    enum WpsWdAnimation {
        wdAnimationBlinkingBackground=2,
        wdAnimationNone=0,
        wdAnimationLasVegasLights=1,
        wdAnimationShimmer=6,
        wdAnimationSparkleText=3,
        wdAnimationMarchingBlackAnts=4,
        wdAnimationMarchingRedAnts=5,
    }

    enum WpsWdAutoMacros {
        wdAutoExec=0,
        wdAutoNew=1,
        wdAutoOpen=2,
        wdAutoClose=3,
        wdAutoExit=4,
        wdAutoSync=5,
    }

    enum WpsWdSectionDirection {
        wdSectionDirectionRtl=0,
        wdSectionDirectionLtr=1,
    }

    enum WpsWdCaptionPosition {
        wdCaptionPositionAbove=0,
        wdCaptionPositionBelow=1,
    }

    enum WpsWdTableFormat {
        wdTableFormatGrid8=23,
        wdTableFormatGrid7=22,
        wdTableFormatGrid6=21,
        wdTableFormatGrid5=20,
        wdTableFormatGrid4=19,
        wdTableFormatGrid3=18,
        wdTableFormatGrid2=17,
        wdTableFormatGrid1=16,
        wdTableFormatNone=0,
        wdTableFormatColorful2=9,
        wdTableFormatColorful1=8,
        wdTableFormatColumns5=15,
        wdTableFormatColumns4=14,
        wdTableFormatColumns3=13,
        wdTableFormatColumns2=12,
        wdTableFormatColumns1=11,
        wdTableFormatClassic1=4,
        wdTableFormatClassic2=5,
        wdTableFormatClassic3=6,
        wdTableFormatClassic4=7,
        wdTableFormatSimple1=1,
        wdTableFormatSimple2=2,
        wdTableFormatSimple3=3,
        wdTableFormatColorful3=10,
        wdTableFormatSubtle2=39,
        wdTableFormatSubtle1=38,
        wdTableFormatList8=31,
        wdTableFormatList7=30,
        wdTableFormatList6=29,
        wdTableFormatList5=28,
        wdTableFormatList4=27,
        wdTableFormatList3=26,
        wdTableFormatList2=25,
        wdTableFormatList1=24,
        wdTableFormat3DEffects3=34,
        wdTableFormat3DEffects2=33,
        wdTableFormat3DEffects1=32,
        wdTableFormatContemporary=35,
        wdTableFormatElegant=36,
        wdTableFormatProfessional=37,
        wdTableFormatWeb3=42,
        wdTableFormatWeb2=41,
        wdTableFormatWeb1=40,
    }

    enum WpsWdFrameSizeRule {
        wdFrameAtLeast=1,
        wdFrameAuto=0,
        wdFrameExact=2,
    }

    enum WpsWdCountry {
        wdChile=56,
        wdGermany=49,
        wdUS=1,
        wdChina=86,
        wdCanada=2,
        wdDenmark=45,
        wdNorway=47,
        wdLatinAmerica=3,
        wdSpain=34,
        wdNetherlands=31,
        wdFrance=33,
        wdUK=44,
        wdMexico=52,
        wdItaly=39,
        wdSweden=46,
        wdPeru=51,
        wdIceland=354,
        wdVenezuela=58,
        wdArgentina=54,
        wdBrazil=55,
        wdJapan=81,
        wdTaiwan=886,
        wdKorea=82,
        wdFinland=358,
    }

    enum WpsWdSeparatorType {
        wdSeparatorHyphen=0,
        wdSeparatorPeriod=1,
        wdSeparatorColon=2,
        wdSeparatorEmDash=3,
        wdSeparatorEnDash=4,
    }

    enum WpsWdListNumberStyle {
        wdListNumberStylePictureBullet=249,
        wdListNumberStyleOrdinalText=7,
        wdListNumberStyleArabicLZ=22,
        wdListNumberStyleArabicLZ2=62,
        wdListNumberStyleArabicLZ3=63,
        wdListNumberStyleArabicLZ4=64,
        wdListNumberStyleHanjaRead=41,
        wdListNumberStyleArabic=0,
        wdListNumberStyleArabic1=46,
        wdListNumberStyleArabic2=48,
        wdListNumberStyleLowercaseRoman=2,
        wdListNumberStyleUppercaseRoman=1,
        wdListNumberStyleOrdinal=5,
        wdListNumberStyleCardinalText=6,
        wdListNumberStyleLowercaseLetter=4,
        wdListNumberStyleUppercaseLetter=3,
        wdListNumberStyleTradChinNum1=33,
        wdListNumberStyleTradChinNum2=34,
        wdListNumberStyleTradChinNum3=35,
        wdListNumberStyleTradChinNum4=36,
        wdListNumberStyleBullet=23,
        wdListNumberStyleKanji=10,
        wdListNumberStyleHindiCardinalText=52,
        wdListNumberStyleKanjiDigit=11,
        wdListNumberStyleAiueoHalfWidth=12,
        wdListNumberStyleHindiArabic=51,
        wdListNumberStyleHindiLetter1=49,
        wdListNumberStyleHindiLetter2=50,
        wdListNumberStyleIrohaHalfWidth=13,
        wdListNumberStyleKanjiTraditional2=17,
        wdListNumberStyleArabicFullWidth=14,
        wdListNumberStyleVietCardinalText=56,
        wdListNumberStyleKanjiTraditional=16,
        wdListNumberStyleNumberInCircle=18,
        wdListNumberStyleAiueo=20,
        wdListNumberStyleGanada=24,
        wdListNumberStyleIroha=21,
        wdListNumberStyleChosung=25,
        wdListNumberStyleGBNum1=26,
        wdListNumberStyleGBNum2=27,
        wdListNumberStyleGBNum3=28,
        wdListNumberStyleGBNum4=29,
        wdListNumberStyleZodiac1=30,
        wdListNumberStyleZodiac2=31,
        wdListNumberStyleZodiac3=32,
        wdListNumberStyleSimpChinNum1=37,
        wdListNumberStyleSimpChinNum2=38,
        wdListNumberStyleSimpChinNum3=39,
        wdListNumberStyleSimpChinNum4=40,
        wdListNumberStyleHanja=44,
        wdListNumberStyleHanjaReadDigit=42,
        wdListNumberStyleHangul=43,
        wdListNumberStyleHebrew1=45,
        wdListNumberStyleHebrew2=47,
        wdListNumberStyleThaiLetter=53,
        wdListNumberStyleThaiArabic=54,
        wdListNumberStyleThaiCardinalText=55,
        wdListNumberStyleLowercaseRussian=58,
        wdListNumberStyleUppercaseRussian=59,
        wdListNumberStyleLowercaseGreek=60,
        wdListNumberStyleUppercaseGreek=61,
        wdListNumberStyleLowercaseTurkish=65,
        wdListNumberStyleUppercaseTurkish=66,
        wdListNumberStyleLowercaseBulgarian=67,
        wdListNumberStyleUppercaseBulgarian=68,
        wdListNumberStyleLegal=253,
        wdListNumberStyleLegalLZ=254,
        wdListNumberStyleNone=255,
    }

    enum WpsWdPageNumberAlignment {
        wdAlignPageNumberLeft=0,
        wdAlignPageNumberInside=3,
        wdAlignPageNumberCenter=1,
        wdAlignPageNumberRight=2,
        wdAlignPageNumberOutside=4,
    }

    enum WpsWdRowAlignment {
        wdAlignRowLeft=0,
        wdAlignRowCenter=1,
        wdAlignRowRight=2,
    }

    enum WpsWdBorderType {
        wdBorderTop=-1,
        wdBorderVertical=-6,
        wdBorderLeft=-2,
        wdBorderBottom=-3,
        wdBorderDiagonalUp=-8,
        wdBorderRight=-4,
        wdBorderHorizontal=-5,
        wdBorderDiagonalDown=-7,
    }

    enum WpsWdDictionaryType {
        wdSpelling=0,
        wdSpellingComplete=4,
        wdGrammar=1,
        wdHangulHanjaConversion=8,
        wdSpellingCustom=5,
        wdHyphenation=3,
        wdThesaurus=2,
        wdSpellingLegal=6,
        wdSpellingMedical=7,
        wdHangulHanjaConversionCustom=9,
    }

    enum WpsWdSaveFormat {
        wdFormatDocument=0,
        wdFormatFlatXMLTemplateMacroEnabled=22,
        wdFormatTemplate97=1,
        wdFormatTemplate=1,
        wdFormatDocument97=0,
        wdFormatRTF=6,
        wdFormatTextLineBreaks=3,
        wdFormatText=2,
        wdFormatDOSText=4,
        wdFormatWebArchive=9,
        wdFormatEncodedText=7,
        wdFormatDOSTextLineBreaks=5,
        wdFormatUnicodeText=7,
        wdFormatHTML=8,
        wdFormatFilteredHTML=10,
        wdFormatXML=11,
        wdFormatXMLTemplate=14,
        wdFormatXMLDocument=12,
        wdFormatXMLDocumentMacroEnabled=13,
        wdFormatXMLTemplateMacroEnabled=15,
        wdFormatDocumentDefault=16,
        wdFormatPDF=17,
        wdFormatXPS=18,
        wdFormatFlatXML=19,
        wdFormatFlatXMLMacroEnabled=20,
        wdFormatFlatXMLTemplate=21,
        wdFormatOpenDocumentText=23,
        wdFormatStrictOpenXMLDocument=24,
    }

    enum WpsWdCheckInVersionType {
        wdCheckInMajorVersion=1,
        wdCheckInMinorVersion=0,
        wdCheckInOverwriteVersion=2,
    }

    enum WpsWdCellVerticalAlignment {
        wdCellAlignVerticalTop=0,
        wdCellAlignVerticalCenter=1,
        wdCellAlignVerticalBottom=3,
    }

    enum WpsWdShapePosition {
        wdShapeTop=-999999,
        wdShapeLeft=-999998,
        wdShapeBottom=-999997,
        wdShapeRight=-999996,
        wdShapeInside=-999994,
        wdShapeCenter=-999995,
        wdShapeOutside=-999993,
    }

    enum WpsWdFramePosition {
        wdFrameTop=-999999,
        wdFrameLeft=-999998,
        wdFrameBottom=-999997,
        wdFrameCenter=-999995,
        wdFrameRight=-999996,
        wdFrameInside=-999994,
        wdFrameOutside=-999993,
    }

    enum WpsWdSummaryMode {
        wdSummaryModeHighlight=0,
        wdSummaryModeInsert=2,
        wdSummaryModeHideAllButSummary=1,
        wdSummaryModeCreateNew=3,
    }

    enum WpsWdOLEVerb {
        wdOLEVerbPrimary=0,
        wdOLEVerbUIActivate=-4,
        wdOLEVerbShow=-1,
        wdOLEVerbOpen=-2,
        wdOLEVerbDiscardUndoState=-6,
        wdOLEVerbHide=-3,
        wdOLEVerbInPlaceActivate=-5,
    }

    enum WpsWdEnableCancelKey {
        wdCancelDisabled=0,
        wdCancelInterrupt=1,
    }

    enum WpsWdUnits {
        wdTable=15,
        wdCharacter=1,
        wdParagraphFormatting=14,
        wdWord=2,
        wdSection=8,
        wdSentence=3,
        wdLine=5,
        wdParagraph=4,
        wdScreen=7,
        wdStory=6,
        wdColumn=9,
        wdRow=10,
        wdWindow=11,
        wdCell=12,
        wdCharacterFormatting=13,
        wdItem=16,
    }

    enum WpsWdGoToDirection {
        wdGoToFirst=1,
        wdGoToNext=2,
        wdGoToLast=-1,
        wdGoToAbsolute=1,
        wdGoToRelative=2,
        wdGoToPrevious=3,
    }

    enum WpsWdRulerStyle {
        wdAdjustFirstColumn=2,
        wdAdjustProportional=1,
        wdAdjustNone=0,
        wdAdjustSameWidth=3,
    }

    enum WpsWdShapePositionRelative {
        wdShapePositionRelativeNone=-999999,
    }

    enum WpsWdInsertCells {
        wdInsertCellsShiftRight=0,
        wdInsertCellsEntireColumn=3,
        wdInsertCellsShiftDown=1,
        wdInsertCellsEntireRow=2,
    }

    enum WpsWdVerticalAlignment {
        wdAlignVerticalBottom=3,
        wdAlignVerticalJustify=2,
        wdAlignVerticalTop=0,
        wdAlignVerticalCenter=1,
    }

    enum WpsWdShowSourceDocuments {
        wdShowSourceDocumentsNone=0,
        wdShowSourceDocumentsOriginal=1,
        wdShowSourceDocumentsRevised=2,
        wdShowSourceDocumentsBoth=3,
    }

    enum WpsWdCursorType {
        wdCursorNorthwestArrow=3,
        wdCursorWait=0,
        wdCursorIBeam=1,
        wdCursorNormal=2,
    }

    enum WpsWdCollapseDirection {
        wdCollapseStart=1,
        wdCollapseEnd=0,
    }

    enum WpsWdRowHeightRule {
        wdRowHeightAuto=0,
        wdRowHeightAtLeast=1,
        wdRowHeightExactly=2,
    }

    enum WpsWdListApplyTo {
        wdListApplyToWholeList=0,
        wdListApplyToThisPointForward=1,
        wdListApplyToSelection=2,
    }

    enum WpsWdMergeSubType {
        wdMergeSubTypeOther=0,
        wdMergeSubTypeOLEDBText=5,
        wdMergeSubTypeAccess=1,
        wdMergeSubTypeOAL=2,
        wdMergeSubTypeOutlook=6,
        wdMergeSubTypeOLEDBWord=3,
        wdMergeSubTypeWord2000=8,
        wdMergeSubTypeWorks=4,
        wdMergeSubTypeWord=7,
    }

    enum WpsWdParagraphAlignment {
        wdAlignParagraphCenter=1,
        wdAlignParagraphLeft=0,
        wdAlignParagraphThaiJustify=9,
        wdAlignParagraphJustify=3,
        wdAlignParagraphJustifyHi=7,
        wdAlignParagraphRight=2,
        wdAlignParagraphJustifyMed=5,
        wdAlignParagraphDistribute=4,
        wdAlignParagraphJustifyLow=8,
    }

    enum WpsWdListType {
        wdListNoNumbering=0,
        wdListListNumOnly=1,
        wdListBullet=2,
        wdListMixedNumbering=5,
        wdListSimpleNumbering=3,
        wdListOutlineNumbering=4,
        wdListPictureBullet=6,
    }

    enum WpsWdListLevelAlignment {
        wdListLevelAlignCenter=1,
        wdListLevelAlignLeft=0,
        wdListLevelAlignRight=2,
    }

    enum WpsWdTabAlignment {
        wdAlignTabLeft=0,
        wdAlignTabCenter=1,
        wdAlignTabRight=2,
        wdAlignTabBar=4,
        wdAlignTabDecimal=3,
        wdAlignTabList=6,
    }

    enum WpsWdTocFormat {
        wdTOCTemplate=0,
        wdTOCSimple=6,
        wdTOCClassic=1,
        wdTOCDistinctive=2,
        wdTOCModern=4,
        wdTOCFancy=3,
        wdTOCFormal=5,
    }

    enum WpsWdTofFormat {
        wdTOFCentered=3,
        wdTOFTemplate=0,
        wdTOFFormal=4,
        wdTOFClassic=1,
        wdTOFDistinctive=2,
        wdTOFSimple=5,
    }

    enum WpsWdToaFormat {
        wdTOATemplate=0,
        wdTOAClassic=1,
        wdTOADistinctive=2,
        wdTOASimple=4,
        wdTOAFormal=3,
    }

    enum WpsWdTrailingCharacter {
        wdTrailingTab=0,
        wdTrailingSpace=1,
        wdTrailingNone=2,
    }

    enum WpsWdHorizontalInVerticalType {
        wdHorizontalInVerticalNone=0,
        wdHorizontalInVerticalFitInLine=1,
        wdHorizontalInVerticalResizeLine=2,
    }

    enum WpsWdListGalleryType {
        wdBulletGallery=1,
        wdOutlineNumberGallery=3,
        wdNumberGallery=2,
    }

    enum WpsWdExportCreateBookmarks {
        wdExportCreateNoBookmarks=0,
        wdExportCreateHeadingBookmarks=1,
        wdExportCreateWordBookmarks=2,
    }

    enum WpsWdOMathSpacingRule {
        wdOMathSpacingSingle=0,
        wdOMathSpacingExactly=3,
        wdOMathSpacing1pt5=1,
        wdOMathSpacingDouble=2,
        wdOMathSpacingMultiple=4,
    }

    enum WpsWdStyleSheetLinkType {
        wdStyleSheetLinkTypeLinked=0,
        wdStyleSheetLinkTypeImported=1,
    }

    enum WpsWdNoteNumberStyle {
        wdNoteNumberStyleArabic=0,
        wdNoteNumberStyleSymbol=9,
        wdNoteNumberStyleUppercaseRoman=1,
        wdNoteNumberStyleLowercaseRoman=2,
        wdNoteNumberStyleVietCardinalText=56,
        wdNoteNumberStyleUppercaseLetter=3,
        wdNoteNumberStyleLowercaseLetter=4,
        wdNoteNumberStyleArabicFullWidth=14,
        wdNoteNumberStyleKanji=10,
        wdNoteNumberStyleKanjiDigit=11,
        wdNoteNumberStyleKanjiTraditional=16,
        wdNoteNumberStyleNumberInCircle=18,
        wdNoteNumberStyleHindiLetter2=50,
        wdNoteNumberStyleHindiLetter1=49,
        wdNoteNumberStyleHanjaRead=41,
        wdNoteNumberStyleHanjaReadDigit=42,
        wdNoteNumberStyleTradChinNum2=34,
        wdNoteNumberStyleTradChinNum1=33,
        wdNoteNumberStyleSimpChinNum2=38,
        wdNoteNumberStyleSimpChinNum1=37,
        wdNoteNumberStyleHebrewLetter2=47,
        wdNoteNumberStyleHebrewLetter1=45,
        wdNoteNumberStyleArabicLetter2=48,
        wdNoteNumberStyleArabicLetter1=46,
        wdNoteNumberStyleHindiArabic=51,
        wdNoteNumberStyleThaiArabic=54,
        wdNoteNumberStyleHindiCardinalText=52,
        wdNoteNumberStyleThaiLetter=53,
        wdNoteNumberStyleThaiCardinalText=55,
    }

    enum WpsWdStatistic {
        wdStatisticWords=0,
        wdStatisticCharactersWithSpaces=5,
        wdStatisticPages=2,
        wdStatisticLines=1,
        wdStatisticFarEastCharacters=6,
        wdStatisticCharacters=3,
        wdStatisticParagraphs=4,
    }

    enum WpsWdSaveOptions {
        wdDoNotSaveChanges=0,
        wdSaveChanges=-1,
        wdPromptToSaveChanges=-2,
    }

    enum WpsWdBuiltInProperty {
        wdPropertyAppName=9,
        wdPropertyCompany=21,
        wdPropertyKeywords=4,
        wdPropertyComments=5,
        wdPropertyTitle=1,
        wdPropertyCharsWSpaces=30,
        wdPropertySubject=2,
        wdPropertyTemplate=6,
        wdPropertySlides=25,
        wdPropertyAuthor=3,
        wdPropertyRevision=8,
        wdPropertyLastAuthor=7,
        wdPropertyTimeLastPrinted=10,
        wdPropertyTimeCreated=11,
        wdPropertyTimeLastSaved=12,
        wdPropertyVBATotalEdit=13,
        wdPropertyWords=15,
        wdPropertyPages=14,
        wdPropertyCharacters=16,
        wdPropertySecurity=17,
        wdPropertyCategory=18,
        wdPropertyFormat=19,
        wdPropertyManager=20,
        wdPropertyBytes=22,
        wdPropertyLines=23,
        wdPropertyParas=24,
        wdPropertyNotes=26,
        wdPropertyHiddenSlides=27,
        wdPropertyMMClips=28,
        wdPropertyHyperlinkBase=29,
    }

    enum WpsWdBrowseTarget {
        wdBrowseComment=3,
        wdBrowseEndnote=5,
        wdBrowseGraphic=8,
        wdBrowseFootnote=4,
        wdBrowseTable=7,
        wdBrowsePage=1,
        wdBrowseSection=2,
        wdBrowseHeading=9,
        wdBrowseField=6,
        wdBrowseEdit=10,
        wdBrowseFind=11,
        wdBrowseGoTo=12,
    }

    enum WpsWdNumberType {
        wdNumberParagraph=1,
        wdNumberAllNumbers=3,
        wdNumberListNum=2,
    }

    enum WpsWdEditionOption {
        wdCancelPublisher=0,
        wdSendPublisher=1,
        wdSelectPublisher=2,
        wdOpenSource=7,
        wdAutomaticUpdate=3,
        wdManualUpdate=4,
        wdUpdateSubscriber=6,
        wdChangeAttributes=5,
    }

    enum WpsWdPictureLinkType {
        wdLinkDataOnDisk=2,
        wdLinkNone=0,
        wdLinkDataInDoc=1,
    }

    enum WpsWdLineStyle {
        wdLineStyleDashDot=5,
        wdLineStyleDashLargeGap=4,
        wdLineStyleNone=0,
        wdLineStyleSingle=1,
        wdLineStyleThickThinMedGap=13,
        wdLineStyleTriple=8,
        wdLineStyleDot=2,
        wdLineStyleDouble=7,
        wdLineStyleDashSmallGap=3,
        wdLineStyleThinThickMedGap=12,
        wdLineStyleDashDotDot=6,
        wdLineStyleThinThickSmallGap=9,
        wdLineStyleOutset=23,
        wdLineStyleDoubleWavy=19,
        wdLineStyleThickThinSmallGap=10,
        wdLineStyleThinThickThinSmallGap=11,
        wdLineStyleDashDotStroked=20,
        wdLineStyleThinThickThinMedGap=14,
        wdLineStyleThinThickLargeGap=15,
        wdLineStyleThickThinLargeGap=16,
        wdLineStyleThinThickThinLargeGap=17,
        wdLineStyleSingleWavy=18,
        wdLineStyleEmboss3D=21,
        wdLineStyleEngrave3D=22,
        wdLineStyleInset=24,
    }

    enum WpsWdLineWidth {
        wdLineWidth150pt=12,
        wdLineWidth450pt=36,
        wdLineWidth025pt=2,
        wdLineWidth050pt=4,
        wdLineWidth225pt=18,
        wdLineWidth075pt=6,
        wdLineWidth100pt=8,
        wdLineWidth300pt=24,
        wdLineWidth600pt=48,
    }

    enum WpsWdWrapTypeMerged {
        wdWrapMergeInline=0,
        wdWrapMergeSquare=1,
        wdWrapMergeTight=2,
        wdWrapMergeBehind=3,
        wdWrapMergeFront=4,
        wdWrapMergeThrough=5,
        wdWrapMergeTopBottom=6,
    }

    enum WpsWdBreakType {
        wdLineBreakClearLeft=9,
        wdSectionBreakNextPage=2,
        wdColumnBreak=8,
        wdLineBreak=6,
        wdSectionBreakContinuous=3,
        wdSectionBreakEvenPage=4,
        wdSectionBreakOddPage=5,
        wdLineBreakClearRight=10,
        wdTextWrappingBreak=11,
        wdPageBreak=7,
    }

    enum WpsWdTabLeader {
        wdTabLeaderSpaces=0,
        wdTabLeaderMiddleDot=5,
        wdTabLeaderDots=1,
        wdTabLeaderDashes=2,
        wdTabLeaderLines=3,
        wdTabLeaderHeavy=4,
    }

    enum WpsWdMeasurementUnits {
        wdMillimeters=2,
        wdInches=0,
        wdPicas=4,
        wdCentimeters=1,
        wdPoints=3,
    }

    enum WpsWdDropPosition {
        wdDropMargin=2,
        wdDropNone=0,
        wdDropNormal=1,
    }

    enum WpsWdNumberingRule {
        wdRestartContinuous=0,
        wdRestartPage=2,
        wdRestartSection=1,
    }

    enum WpsWdFootnoteLocation {
        wdBottomOfPage=0,
        wdBeneathText=1,
    }

    enum WpsWdEndnoteLocation {
        wdEndOfSection=0,
        wdEndOfDocument=1,
    }

    enum WpsWdSortSeparator {
        wdSortSeparateByTabs=0,
        wdSortSeparateByDefaultTableSeparator=2,
        wdSortSeparateByCommas=1,
    }

    enum WpsWdDocumentFieldSortBy {
        wdDocumentFieldSortByName=0,
        wdDocumentFieldSortByLocation=1,
    }

    enum WpsWdTableFieldSeparator {
        wdSeparateByParagraphs=0,
        wdSeparateByTabs=1,
        wdSeparateByCommas=2,
        wdSeparateByDefaultListSeparator=3,
    }

    enum WpsWdKeyCategory {
        wdKeyCategoryNil=-1,
        wdKeyCategoryAutoText=4,
        wdKeyCategoryPrefix=7,
        wdKeyCategorySymbol=6,
        wdKeyCategoryDisable=0,
        wdKeyCategoryFont=3,
        wdKeyCategoryStyle=5,
        wdKeyCategoryCommand=1,
        wdKeyCategoryMacro=2,
    }

    enum WpsWdSortFieldType {
        wdSortFieldAlphanumeric=0,
        wdSortFieldJapanJIS=4,
        wdSortFieldNumeric=1,
        wdSortFieldDate=2,
        wdSortFieldSyllable=3,
        wdSortFieldStroke=5,
        wdSortFieldKoreaKS=6,
    }

    enum WpsWdSortOrder {
        wdSortOrderAscending=0,
        wdSortOrderDescending=1,
    }

    enum WpsWdTableFormatApply {
        wdTableFormatApplyBorders=1,
        wdTableFormatApplyShading=2,
        wdTableFormatApplyHeadingRows=32,
        wdTableFormatApplyFirstColumn=128,
        wdTableFormatApplyColor=8,
        wdTableFormatApplyFont=4,
        wdTableFormatApplyLastColumn=256,
        wdTableFormatApplyAutoFit=16,
        wdTableFormatApplyLastRow=64,
    }

    enum WpsWdExportRange {
        wdExportFromTo=3,
        wdExportAllDocument=0,
        wdExportSelection=1,
        wdExportCurrentPage=2,
    }

    enum WpsWdViewTypeOld {
        wdPageView=3,
        wdOnlineView=6,
    }

    enum WpsWdLanguageID {
        wdCherokee=1116,
        wdMongolian=1104,
        wdArabicBahrain=15361,
        wdNoProofing=1024,
        wdLanguageNone=0,
        wdAfrikaans=1078,
        wdEnglishCaribbean=9225,
        wdAlbanian=1052,
        wdHawaiian=1141,
        wdAmharic=1118,
        wdSpanishGuatemala=4106,
        wdArmenian=1067,
        wdArabicYemen=9217,
        wdArabicAlgeria=5121,
        wdArabicIraq=2049,
        wdSerbianCyrillic=3098,
        wdArabicEgypt=3073,
        wdArabicJordan=11265,
        wdMalayalam=1100,
        wdAssamese=1101,
        wdArabicKuwait=13313,
        wdArabicLebanon=12289,
        wdArabicMorocco=6145,
        wdAzeriLatin=1068,
        wdSesotho=1072,
        wdArabicLibya=4097,
        wdArabicOman=8193,
        wdBasque=1069,
        wdArabicQatar=16385,
        wdArabic=1025,
        wdSlovak=1051,
        wdEnglishUK=2057,
        wdArabicSyria=10241,
        wdFinnish=1035,
        wdByelorussian=1059,
        wdArabicTunisia=7169,
        wdDutch=1043,
        wdEdo=1126,
        wdArabicUAE=14337,
        wdSpanishModernSort=3082,
        wdEnglishSouthAfrica=7177,
        wdOriya=1096,
        wdAzeriCyrillic=2092,
        wdEnglishNewZealand=5129,
        wdBengali=1093,
        wdBulgarian=1026,
        wdBurmese=1109,
        wdDivehi=1125,
        wdCroatian=1050,
        wdCatalan=1027,
        wdEnglishIreland=6153,
        wdBelgianDutch=2067,
        wdChineseHongKongSAR=3076,
        wdChineseMacaoSAR=5124,
        wdFrenchMorocco=14348,
        wdSimplifiedChinese=2052,
        wdEnglishUS=1033,
        wdChineseSingapore=4100,
        wdTraditionalChinese=1028,
        wdCzech=1029,
        wdFilipino=1124,
        wdDanish=1030,
        wdGalician=1110,
        wdFulfulde=1127,
        wdEnglishAUS=3081,
        wdEnglishBelize=10249,
        wdEnglishCanadian=4105,
        wdPunjabi=1094,
        wdFrenchWestIndies=7180,
        wdEnglishJamaica=8201,
        wdEnglishPhilippines=13321,
        wdSpanishChile=13322,
        wdEnglishTrinidadTobago=11273,
        wdEnglishZimbabwe=12297,
        wdEnglishIndonesia=14345,
        wdRomanian=1048,
        wdEstonian=1061,
        wdFaeroese=1080,
        wdPersian=1065,
        wdBelgianFrench=2060,
        wdIgbo=1136,
        wdFrenchCameroon=11276,
        wdFrenchCanadian=3084,
        wdSyriac=1114,
        wdFrenchCotedIvoire=12300,
        wdSpanishColombia=9226,
        wdFrench=1036,
        wdFrenchLuxembourg=5132,
        wdFrenchMali=13324,
        wdFrenchMonaco=6156,
        wdVietnamese=1066,
        wdTelugu=1098,
        wdFrenchReunion=8204,
        wdFrenchSenegal=10252,
        wdFrenchHaiti=15372,
        wdSwissFrench=4108,
        wdFrenchCongoDRC=9228,
        wdFrisianNetherlands=1122,
        wdGaelicIreland=2108,
        wdGaelicScotland=1084,
        wdGeorgian=1079,
        wdGermanAustria=3079,
        wdGerman=1031,
        wdGermanLiechtenstein=5127,
        wdGermanLuxembourg=4103,
        wdUzbekLatin=1091,
        wdSwissGerman=2055,
        wdGreek=1032,
        wdGuarani=1140,
        wdGujarati=1095,
        wdHausa=1128,
        wdHebrew=1037,
        wdLao=1108,
        wdHindi=1081,
        wdHungarian=1038,
        wdIbibio=1129,
        wdIcelandic=1039,
        wdTurkmen=1090,
        wdIndonesian=1057,
        wdInuktitut=1117,
        wdItalian=1040,
        wdSwissItalian=2064,
        wdTswana=1074,
        wdJapanese=1041,
        wdKannada=1099,
        wdKanuri=1137,
        wdKashmiri=1120,
        wdKazakh=1087,
        wdSorbian=1070,
        wdKhmer=1107,
        wdKirghiz=1088,
        wdKonkani=1111,
        wdKorean=1042,
        wdKyrgyz=1088,
        wdLatin=1142,
        wdLatvian=1062,
        wdLithuanian=1063,
        wdMacedonianFYROM=1071,
        wdMalaysian=1086,
        wdMalayBruneiDarussalam=2110,
        wdMaltese=1082,
        wdManipuri=1112,
        wdMarathi=1102,
        wdNepali=1121,
        wdWelsh=1106,
        wdNorwegianBokmol=1044,
        wdNorwegianNynorsk=2068,
        wdOromo=1138,
        wdPashto=1123,
        wdPolish=1045,
        wdPortugueseBrazil=1046,
        wdPortuguese=2070,
        wdRhaetoRomanic=1047,
        wdRomanianMoldova=2072,
        wdRussianMoldova=2073,
        wdRussian=1049,
        wdSamiLappish=1083,
        wdSanskrit=1103,
        wdSerbianLatin=2074,
        wdSinhalese=1115,
        wdSlovenian=1060,
        wdSindhi=1113,
        wdSindhiPakistan=2137,
        wdSomali=1143,
        wdSpanishArgentina=11274,
        wdSpanishBolivia=16394,
        wdSpanishCostaRica=5130,
        wdSpanishDominicanRepublic=7178,
        wdSpanishEcuador=12298,
        wdSpanishElSalvador=17418,
        wdSpanishHonduras=18442,
        wdMexicanSpanish=2058,
        wdSpanishNicaragua=19466,
        wdSpanishPanama=6154,
        wdSpanishParaguay=15370,
        wdSpanishPeru=10250,
        wdSpanishPuertoRico=20490,
        wdSpanish=1034,
        wdSpanishUruguay=14346,
        wdSpanishVenezuela=8202,
        wdSutu=1072,
        wdSwahili=1089,
        wdSwedishFinland=2077,
        wdSwedish=1053,
        wdTajik=1064,
        wdTamazight=1119,
        wdTamazightLatin=2143,
        wdTamil=1097,
        wdTatar=1092,
        wdThai=1054,
        wdYiddish=1085,
        wdTibetan=1105,
        wdTigrignaEthiopic=1139,
        wdTigrignaEritrea=2163,
        wdTsonga=1073,
        wdTurkish=1055,
        wdUkrainian=1058,
        wdUrdu=1056,
        wdUzbekCyrillic=2115,
        wdVenda=1075,
        wdXhosa=1076,
        wdYi=1144,
        wdYoruba=1130,
        wdZulu=1077,
    }

    enum WpsWdFieldType {
        wdFieldEmpty=-1,
        wdFieldSet=6,
        wdFieldRef=3,
        wdFieldRevisionNum=24,
        wdFieldIndexEntry=4,
        wdFieldPageRef=37,
        wdFieldTOA=73,
        wdFieldFootnoteRef=5,
        wdFieldTOC=13,
        wdFieldStyleRef=10,
        wdFieldGoToButton=50,
        wdFieldLink=56,
        wdFieldIf=7,
        wdFieldIndex=8,
        wdFieldComments=19,
        wdFieldSubject=16,
        wdFieldTOAEntry=74,
        wdFieldTOCEntry=9,
        wdFieldRefDoc=11,
        wdFieldSequence=12,
        wdFieldInfo=14,
        wdFieldSymbol=57,
        wdFieldSubscriber=82,
        wdFieldFormula=49,
        wdFieldTitle=15,
        wdFieldTime=32,
        wdFieldIncludePicture=67,
        wdFieldMacroButton=51,
        wdFieldBarCode=63,
        wdFieldAuthor=17,
        wdFieldKeyWord=18,
        wdFieldNumChars=28,
        wdFieldLastSavedBy=20,
        wdFieldCreateDate=21,
        wdFieldSaveDate=22,
        wdFieldDocVariable=64,
        wdFieldPrintDate=23,
        wdFieldEditTime=25,
        wdFieldEmbed=58,
        wdFieldNumPages=26,
        wdFieldNumWords=27,
        wdFieldFileName=29,
        wdFieldUserName=60,
        wdFieldTemplate=30,
        wdFieldExpression=34,
        wdFieldDate=31,
        wdFieldPage=33,
        wdFieldQuote=35,
        wdFieldInclude=36,
        wdFieldAsk=38,
        wdFieldFillIn=39,
        wdFieldData=40,
        wdFieldNext=41,
        wdFieldAutoNumOutline=52,
        wdFieldMergeRec=44,
        wdFieldNextIf=42,
        wdFieldSkipIf=43,
        wdFieldDDE=45,
        wdFieldFormDropDown=83,
        wdFieldDDEAuto=46,
        wdFieldGlossary=47,
        wdFieldSection=65,
        wdFieldPrint=48,
        wdFieldUserAddress=62,
        wdFieldAutoNumLegal=53,
        wdFieldAutoNum=54,
        wdFieldImport=55,
        wdFieldMergeField=59,
        wdFieldUserInitials=61,
        wdFieldSectionPages=66,
        wdFieldIncludeText=68,
        wdFieldFileSize=69,
        wdFieldFormTextInput=70,
        wdFieldFormCheckBox=71,
        wdFieldNoteRef=72,
        wdFieldMergeSeq=75,
        wdFieldPrivate=77,
        wdFieldDatabase=78,
        wdFieldAutoText=79,
        wdFieldCompare=80,
        wdFieldAddin=81,
        wdFieldAdvance=84,
        wdFieldDocProperty=85,
        wdFieldOCX=87,
        wdFieldHyperlink=88,
        wdFieldAutoTextList=89,
        wdFieldListNum=90,
        wdFieldHTMLActiveX=91,
        wdFieldBidiOutline=92,
        wdFieldAddressBlock=93,
        wdFieldGreetingLine=94,
        wdFieldShape=95,
        wdFieldCitation=96,
        wdFieldBibliography=97,
        wdFieldMergeBarcode=98,
        wdFieldDisplayBarcode=99,
    }

    enum WpsWdBuiltinStyle {
        wdStyleHeading3=-4,
        wdStyleBodyText3=-82,
        wdStyleListBullet2=-55,
        wdStyleListBullet3=-56,
        wdStyleListBullet4=-57,
        wdStyleListBullet5=-58,
        wdStyleListNumber2=-59,
        wdStyleListNumber3=-60,
        wdStyleListNumber4=-61,
        wdStyleListNumber5=-62,
        wdStyleNormal=-1,
        wdStyleEnvelopeAddress=-37,
        wdStyleHeading4=-5,
        wdStyleEnvelopeReturn=-38,
        wdStyleBodyText=-67,
        wdStyleHeading1=-2,
        wdStyleIndex7=-17,
        wdStyleHeading2=-3,
        wdStyleTOC8=-27,
        wdStyleHeading5=-6,
        wdStyleHeading6=-7,
        wdStyleHeading7=-8,
        wdStyleTitle=-63,
        wdStyleFooter=-33,
        wdStyleHeading8=-9,
        wdStyleHeading9=-10,
        wdStyleIndex1=-11,
        wdStyleClosing=-64,
        wdStyleIndex2=-12,
        wdStyleNoteHeading=-80,
        wdStyleIndex3=-13,
        wdStyleList=-48,
        wdStyleIndex4=-14,
        wdStyleIndex5=-15,
        wdStyleIndex6=-16,
        wdStyleTOAHeading=-47,
        wdStyleFootnoteText=-30,
        wdStyleIndex8=-18,
        wdStyleIndex9=-19,
        wdStyleTOC1=-20,
        wdStyleTOC2=-21,
        wdStyleTOC3=-22,
        wdStyleTOC4=-23,
        wdStyleCaption=-35,
        wdStyleTOC5=-24,
        wdStyleIntenseEmphasis=-262,
        wdStyleList2=-51,
        wdStyleList3=-52,
        wdStyleList4=-53,
        wdStyleList5=-54,
        wdStyleTOC6=-25,
        wdStyleTOC7=-26,
        wdStyleIndexHeading=-34,
        wdStyleTOC9=-28,
        wdStyleNormalIndent=-29,
        wdStyleCommentText=-31,
        wdStyleHeader=-32,
        wdStyleTableOfFigures=-36,
        wdStyleTableOfAuthorities=-45,
        wdStyleFootnoteReference=-39,
        wdStyleCommentReference=-40,
        wdStyleEndnoteReference=-43,
        wdStyleLineNumber=-41,
        wdStylePageNumber=-42,
        wdStyleEndnoteText=-44,
        wdStyleMacroText=-46,
        wdStyleListBullet=-49,
        wdStyleListNumber=-50,
        wdStyleSignature=-65,
        wdStyleDefaultParagraphFont=-66,
        wdStyleBodyTextIndent=-68,
        wdStyleListContinue5=-73,
        wdStyleListContinue4=-72,
        wdStyleListContinue3=-71,
        wdStyleListContinue2=-70,
        wdStyleListContinue=-69,
        wdStyleMessageHeader=-74,
        wdStyleSubtitle=-75,
        wdStyleSalutation=-76,
        wdStyleDate=-77,
        wdStyleBodyTextFirstIndent2=-79,
        wdStyleBodyTextFirstIndent=-78,
        wdStyleBodyText2=-81,
        wdStyleBodyTextIndent2=-83,
        wdStyleBodyTextIndent3=-84,
        wdStyleBlockQuotation=-85,
        wdStyleHyperlink=-86,
        wdStyleHyperlinkFollowed=-87,
        wdStyleStrong=-88,
        wdStyleEmphasis=-89,
        wdStyleNavPane=-90,
        wdStylePlainText=-91,
        wdStyleHtmlNormal=-95,
        wdStyleSubtleEmphasis=-261,
        wdStyleHtmlAcronym=-96,
        wdStyleHtmlAddress=-97,
        wdStyleHtmlCite=-98,
        wdStyleHtmlCode=-99,
        wdStyleHtmlDfn=-100,
        wdStyleHtmlKbd=-101,
        wdStyleHtmlPre=-102,
        wdStyleHtmlSamp=-103,
        wdStyleHtmlTt=-104,
        wdStyleHtmlVar=-105,
        wdStyleNormalTable=-106,
        wdStyleNormalObject=-158,
        wdStyleTableLightShading=-159,
        wdStyleTableLightList=-160,
        wdStyleTableLightGrid=-161,
        wdStyleTableMediumShading2=-163,
        wdStyleTableMediumShading1=-162,
        wdStyleTableMediumList2=-165,
        wdStyleTableMediumList1=-164,
        wdStyleTableMediumGrid3=-168,
        wdStyleTableMediumGrid2=-167,
        wdStyleTableMediumGrid1=-166,
        wdStyleTableDarkList=-169,
        wdStyleTableColorfulShading=-170,
        wdStyleTableColorfulList=-171,
        wdStyleTableColorfulGrid=-172,
        wdStyleTableLightShadingAccent1=-173,
        wdStyleTableLightListAccent1=-174,
        wdStyleTableLightGridAccent1=-175,
        wdStyleTableMediumShading2Accent1=-177,
        wdStyleTableMediumShading1Accent1=-176,
        wdStyleTableMediumList1Accent1=-178,
        wdStyleListParagraph=-180,
        wdStyleQuote=-181,
        wdStyleIntenseQuote=-182,
        wdStyleSubtleReference=-263,
        wdStyleIntenseReference=-264,
        wdStyleBookTitle=-265,
        wdStyleBibliography=-266,
        wdStyleTocHeading=-267,
    }

    enum WpsWdWordDialogTab {
        wdDialogToolsOptionsTabCompatibility=525,
        wdDialogFormatFontTabFont=600000,
        wdDialogToolsOptionsTabSave=209,
        wdDialogToolsOptionsTabView=204,
        wdDialogToolsOptionsTabBidi=1029,
        wdDialogToolsOptionsTabGeneral=203,
        wdDialogToolsAutoManagerTabAutoFormat=1700003,
        wdDialogToolsOptionsTabTrackChanges=386,
        wdDialogInsertIndexAndTablesTabIndex=400000,
        wdDialogFilePageSetupTabCharsLines=150004,
        wdDialogToolsOptionsTabEdit=224,
        wdDialogToolsOptionsTabProofread=211,
        wdDialogFormatDrawingObjectTabTextbox=1200005,
        wdDialogToolsOptionsTabPrint=208,
        wdDialogToolsOptionsTabUserInfo=213,
        wdDialogToolsAutoManagerTabAutoCorrect=1700000,
        wdDialogFormatBulletsAndNumberingTabNumbered=1500001,
        wdDialogToolsOptionsTabTypography=739,
        wdDialogToolsOptionsTabFileLocations=225,
        wdDialogToolsOptionsTabFuzzy=790,
        wdDialogToolsOptionsTabHangulHanjaConversion=786,
        wdDialogToolsOptionsTabSecurity=1361,
        wdDialogToolsAutoCorrectExceptionsTabInitialCaps=1400001,
        wdDialogFilePageSetupTabMargins=150000,
        wdDialogFilePageSetupTabPaper=150001,
        wdDialogToolsAutoManagerTabAutoFormatAsYouType=1700001,
        wdDialogOrganizerTabAutoText=500001,
        wdDialogFilePageSetupTabLayout=150003,
        wdDialogInsertSymbolTabSymbols=200000,
        wdDialogInsertSymbolTabSpecialCharacters=200001,
        wdDialogToolsAutoCorrectExceptionsTabFirstLetter=1400000,
        wdDialogNoteOptionsTabAllFootnotes=300000,
        wdDialogNoteOptionsTabAllEndnotes=300001,
        wdDialogFormatFontTabCharacterSpacing=600001,
        wdDialogInsertIndexAndTablesTabTableOfContents=400001,
        wdDialogInsertIndexAndTablesTabTableOfFigures=400002,
        wdDialogInsertIndexAndTablesTabTableOfAuthorities=400003,
        wdDialogToolsAutoCorrectExceptionsTabHangulAndAlphabet=1400002,
        wdDialogOrganizerTabStyles=500000,
        wdDialogFormatDrawingObjectTabSize=1200001,
        wdDialogOrganizerTabCommandBars=500002,
        wdDialogFormatBordersAndShadingTabShading=700002,
        wdDialogOrganizerTabMacros=500003,
        wdDialogFormatFontTabAnimation=600002,
        wdDialogFormatBordersAndShadingTabBorders=700000,
        wdDialogTemplatesXMLExpansionPacks=2100002,
        wdDialogFormatBordersAndShadingTabPageBorder=700001,
        wdDialogLetterWizardTabSenderInfo=1600003,
        wdDialogLetterWizardTabRecipientInfo=1600001,
        wdDialogToolsEnvelopesAndLabelsTabEnvelopes=800000,
        wdDialogEmailOptionsTabQuoting=1900002,
        wdDialogLetterWizardTabLetterFormat=1600000,
        wdDialogToolsEnvelopesAndLabelsTabLabels=800001,
        wdDialogFormatParagraphTabIndentsAndSpacing=1000000,
        wdDialogFormatParagraphTabTextFlow=1000001,
        wdDialogFormatDrawingObjectTabColorsAndLines=1200000,
        wdDialogFormatParagraphTabTeisai=1000002,
        wdDialogFormatDrawingObjectTabPosition=1200002,
        wdDialogFormatDrawingObjectTabWrapping=1200003,
        wdDialogFormatDrawingObjectTabPicture=1200004,
        wdDialogFormatDrawingObjectTabWeb=1200006,
        wdDialogFormatDrawingObjectTabHR=1200007,
        wdDialogToolsAutoCorrectExceptionsTabIac=1400003,
        wdDialogFormatBulletsAndNumberingTabBulleted=1500000,
        wdDialogFormatBulletsAndNumberingTabOutlineNumbered=1500002,
        wdDialogLetterWizardTabOtherElements=1600002,
        wdDialogToolsAutoManagerTabAutoText=1700002,
        wdDialogToolsAutoManagerTabSmartTags=1700004,
        wdDialogTablePropertiesTabTable=1800000,
        wdDialogTablePropertiesTabRow=1800001,
        wdDialogTablePropertiesTabColumn=1800002,
        wdDialogTablePropertiesTabCell=1800003,
        wdDialogEmailOptionsTabSignature=1900000,
        wdDialogEmailOptionsTabStationary=1900001,
        wdDialogWebOptionsBrowsers=2000000,
        wdDialogWebOptionsGeneral=2000000,
        wdDialogWebOptionsFiles=2000001,
        wdDialogWebOptionsPictures=2000002,
        wdDialogWebOptionsEncoding=2000003,
        wdDialogStyleManagementTabRecommend=2200001,
        wdDialogWebOptionsFonts=2000004,
        wdDialogToolsOptionsTabAcetate=1266,
        wdDialogTemplates=2100000,
        wdDialogTemplatesXMLSchema=2100001,
        wdDialogTemplatesLinkedCSS=2100003,
        wdDialogStyleManagementTabEdit=2200000,
        wdDialogStyleManagementTabRestrict=2200002,
    }

    enum WpsWdWordDialogTabHID {
        wdDialogFilePageSetupTabPaperSize=150001,
        wdDialogFilePageSetupTabPaperSource=150002,
    }

    enum WpsWdRectangleType {
        wdTextRectangle=0,
        wdShapeRectangle=1,
        wdPageBorderRectangle=4,
        wdLineBetweenColumnRectangle=5,
        wdMarkupRectangle=2,
        wdMarkupRectangleButton=3,
        wdSelection=6,
        wdSystem=7,
        wdMarkupRectangleArea=8,
        wdReadingModeNavigation=9,
        wdMarkupRectangleMoveMatch=10,
        wdReadingModePanningArea=11,
        wdMailNavArea=12,
        wdDocumentControlRectangle=13,
    }

    enum WpsWdWordDialog {
        wdDialogHelpWordPerfectHelp=10,
        wdDialogFilePrintSetup=97,
        wdDialogHelpAbout=9,
        wdDialogInsertPicture=163,
        wdDialogFormatDefineStyleTabs=183,
        wdDialogMailMergeInsertAddressBlock=1305,
        wdDialogMailMergeOpenDataSource=81,
        wdDialogContentControlProperties=2394,
        wdDialogToolsOptionsSmartTag=1395,
        wdDialogInsertTableOfContents=171,
        wdDialogToolsCustomize=152,
        wdDialogToolsTemplates=87,
        wdDialogLetterWizard=821,
        wdDialogFileOpen=80,
        wdDialogToolsGrammarSettings=885,
        wdDialogEditReplace=117,
        wdDialogFileNew=79,
        wdDialogFormatFrame=190,
        wdDialogDocumentStatistics=78,
        wdDialogMailMergeOpenHeaderSource=82,
        wdDialogFormatDefineStylePara=182,
        wdDialogFormatStyle=180,
        wdDialogInsertBreak=159,
        wdDialogMailMergeInsertFields=1307,
        wdDialogFormatChangeCase=322,
        wdDialogFileSaveAs=84,
        wdDialogTextToTable=127,
        wdDialogDocumentInspector=1482,
        wdDialogFileSummaryInfo=86,
        wdDialogFilePrint=88,
        wdDialogInsertAddCaption=402,
        wdDialogInsertField=166,
        wdDialogFileFind=99,
        wdDialogEditPasteSpecial=111,
        wdDialogTableToText=128,
        wdDialogToolsCompareDocuments=198,
        wdDialogFormatAddrFonts=103,
        wdDialogEditFind=112,
        wdDialogFormatDefineStyleFrame=184,
        wdDialogIMESetDefault=1094,
        wdDialogEditStyle=120,
        wdDialogFormatDefineStyleLang=186,
        wdDialogEditLinks=124,
        wdDialogToolsMacroRecord=214,
        wdDialogEditObject=125,
        wdDialogFormatDefineStyleBorders=185,
        wdDialogEditAutoText=985,
        wdDialogTableInsertTable=129,
        wdDialogToolsMacro=215,
        wdDialogTableInsertCells=130,
        wdDialogToolsOptionsFuzzy=790,
        wdDialogDrawAlign=634,
        wdDialogTableInsertRow=131,
        wdDialogTableDeleteCells=133,
        wdDialogTableSplitCells=137,
        wdDialogTableRowHeight=142,
        wdDialogToolsHighlightChanges=197,
        wdDialogToolsCreateEnvelope=173,
        wdDialogTableColumnWidth=143,
        wdDialogInsertFootnote=370,
        wdDialogMarkIndexEntry=169,
        wdDialogInsertSymbol=162,
        wdDialogInsertFile=164,
        wdDialogInsertDateTime=165,
        wdDialogFormatSectionLayout=176,
        wdDialogConsistencyChecker=1121,
        wdDialogToolsOptions=974,
        wdDialogTableFormula=348,
        wdDialogInsertMergeField=167,
        wdDialogInsertBookmark=168,
        wdDialogToolsOptionsAutoFormatAsYouType=778,
        wdDialogInsertIndex=170,
        wdDialogInsertObject=172,
        wdDialogFormatFont=174,
        wdDialogFormatParagraph=175,
        wdDialogFormatColumns=177,
        wdDialogFileDocumentLayout=178,
        wdDialogFilePageSetup=178,
        wdDialogFormatTabs=179,
        wdDialogToolsOptionsSpellingAndGrammar=211,
        wdDialogFormatDefineStyleFont=181,
        wdDialogToolsThesaurus=194,
        wdDialogFormatPicture=187,
        wdDialogToolsLanguage=188,
        wdDialogFormatBordersAndShading=189,
        wdDialogShowRepairs=1381,
        wdDialogEditTOACategory=625,
        wdDialogToolsHyphenation=195,
        wdDialogToolsBulletsNumbers=196,
        wdDialogToolsRevisions=197,
        wdDialogBuildingBlockOrganizer=2067,
        wdDialogTableSort=199,
        wdDialogToolsOptionsGeneral=203,
        wdDialogToolsOptionsBidi=1029,
        wdDialogToolsOptionsView=204,
        wdDialogToolsAdvancedSettings=206,
        wdDialogTableOfCaptionsOptions=551,
        wdDialogToolsOptionsPrint=208,
        wdDialogToolsOptionsSave=209,
        wdDialogToolsOptionsUserInfo=213,
        wdDialogFrameSetProperties=1074,
        wdDialogWindowActivate=220,
        wdDialogFormatRetAddrFonts=221,
        wdDialogOrganizer=222,
        wdDialogToolsOptionsEdit=224,
        wdDialogToolsOptionsFileLocations=225,
        wdDialogToolsWordCount=228,
        wdDialogToolsAutoSummarize=874,
        wdDialogControlRun=235,
        wdDialogMarkCitation=463,
        wdDialogInsertPageNumbers=294,
        wdDialogTableAutoFormat=563,
        wdDialogFormatPageNumber=298,
        wdDialogCopyFile=300,
        wdDialogMailMergeHelper=680,
        wdDialogUpdateTOC=331,
        wdDialogInsertDatabase=341,
        wdDialogFormFieldOptions=353,
        wdDialogFileMacPageSetupGX=444,
        wdDialogInsertCaption=357,
        wdDialogInsertCaptionNumbering=358,
        wdDialogInsertAutoCaption=359,
        wdDialogFormFieldHelp=361,
        wdDialogInsertCrossReference=367,
        wdDialogMailMergeCreateHeaderSource=643,
        wdDialogNoteOptions=373,
        wdDialogToolsAutoCorrect=378,
        wdDialogViewZoom=577,
        wdDialogToolsOptionsTrackChanges=386,
        wdDialogConvertObject=392,
        wdDialogConnect=420,
        wdDialogToolsCustomizeKeyboard=432,
        wdDialogToolsCustomizeMenus=433,
        wdDialogToolsMergeDocuments=435,
        wdDialogMarkTableOfContentsEntry=442,
        wdDialogFilePrintOneCopy=445,
        wdDialogEditFrame=458,
        wdDialogTableOfContentsOptions=470,
        wdDialogTCSCTranslator=1156,
        wdDialogInsertTableOfAuthorities=471,
        wdDialogInsertTableOfFigures=472,
        wdDialogInsertIndexAndTables=473,
        wdDialogMailMergeFindRecipient=1326,
        wdDialogInsertFormField=483,
        wdDialogFormatDropCap=488,
        wdDialogToolsCreateLabels=489,
        wdDialogToolsProtectDocument=503,
        wdDialogFormatStyleGallery=505,
        wdDialogToolsAcceptRejectChanges=506,
        wdDialogToolsOptionsEditCopyPaste=1356,
        wdDialogHelpWordPerfectHelpOptions=511,
        wdDialogPermission=1469,
        wdDialogToolsUnprotectDocument=521,
        wdDialogEditCreatePublisher=732,
        wdDialogToolsOptionsCompatibility=525,
        wdDialogMailMergeFindRecord=569,
        wdDialogInsertNumber=812,
        wdDialogMailMergeCreateDataSource=642,
        wdDialogReviewAfmtRevisions=570,
        wdDialogToolsDictionary=989,
        wdDialogToolsProtectSection=578,
        wdDialogFontSubstitution=581,
        wdDialogInsertSubdocument=583,
        wdDialogNewToolbar=586,
        wdDialogToolsEnvelopesAndLabels=607,
        wdDialogFormatCallout=610,
        wdDialogTableFormatCell=612,
        wdDialogToolsCustomizeMenuBar=615,
        wdDialogFileRoutingSlip=624,
        wdDialogToolsManageFields=631,
        wdDialogDrawSnapToGrid=633,
        wdDialogEditPublishOptions=735,
        wdDialogMailMerge=676,
        wdDialogMailMergeCheck=677,
        wdDialogMailMergeQueryOptions=681,
        wdDialogFileMacPageSetup=685,
        wdDialogListCommands=723,
        wdDialogEditSubscribeTo=733,
        wdDialogEditSubscribeOptions=736,
        wdDialogFileMacCustomPageSetupGX=737,
        wdDialogToolsOptionsTypography=739,
        wdDialogToolsAutoCorrectExceptions=762,
        wdDialogMailMergeUseAddressBook=779,
        wdDialogToolsHangulHanjaConversion=784,
        wdDialogEditGoToOld=811,
        wdDialogFormatBulletsAndNumbering=824,
        wdDialogToolsSpellingAndGrammar=828,
        wdDialogToolsCreateDirectory=833,
        wdDialogTableWrapping=854,
        wdDialogFormatTheme=855,
        wdDialogTableProperties=861,
        wdDialogCreateSource=1922,
        wdDialogEmailOptions=863,
        wdDialogCreateAutoText=872,
        wdDialogEditGoTo=896,
        wdDialogWebOptions=898,
        wdDialogInsertHyperlink=925,
        wdDialogToolsOptionsAutoFormat=959,
        wdDialogToolsAutoManager=915,
        wdDialogFileVersions=945,
        wdDialogFormatDrawingObject=960,
        wdDialogFitText=983,
        wdDialogPhoneticGuide=986,
        wdDialogFileSaveVersion=1007,
        wdDialogTableTableOptions=1080,
        wdDialogTableCellOptions=1081,
        wdDialogHorizontalInVertical=1160,
        wdDialogTwoLinesInOne=1161,
        wdDialogFormatEncloseCharacters=1162,
        wdDialogFormatStylesCustom=1248,
        wdDialogCSSLinks=1261,
        wdDialogInsertWebComponent=1324,
        wdDialogToolsOptionsSecurity=1361,
        wdDialogSearch=1363,
        wdDialogInsertSource=2120,
        wdDialogMailMergeInsertAsk=4047,
        wdDialogMailMergeInsertFillIn=4048,
        wdDialogMailMergeInsertIf=4049,
        wdDialogMailMergeInsertNextIf=4053,
        wdDialogMailMergeInsertSet=4054,
        wdDialogMailMergeInsertSkipIf=4055,
        wdDialogMailMergeFieldMapping=1304,
        wdDialogMailMergeInsertGreetingLine=1306,
        wdDialogMailMergeRecipients=1308,
        wdDialogMailMergeSetDocumentType=1339,
        wdDialogLabelOptions=1367,
        wdDialogXMLElementAttributes=1460,
        wdDialogSchemaLibrary=1417,
        wdDialogMyPermission=1437,
        wdDialogXMLOptions=1425,
        wdDialogFormattingRestrictions=1427,
        wdDialogSourceManager=1920,
        wdDialogStyleManagement=1948,
        wdDialogInsertPlaceholder=2348,
        wdDialogOMathRecognizedFunctions=2165,
        wdDialogCompatibilityChecker=2439,
        wdDialogExportAsFixedFormat=2349,
        wdDialogFileNew2007=1116,
    }

    enum WpsWdFieldKind {
        wdFieldKindNone=0,
        wdFieldKindHot=1,
        wdFieldKindWarm=2,
        wdFieldKindCold=3,
    }

    enum WpsWdReplace {
        wdReplaceNone=0,
        wdReplaceOne=1,
        wdReplaceAll=2,
    }

    enum WpsWdTextFormFieldType {
        wdDateText=2,
        wdNumberText=1,
        wdRegularText=0,
        wdCurrentTimeText=4,
        wdCurrentDateText=3,
        wdCalculationText=5,
    }

    enum WpsWdChevronConvertRule {
        wdNeverConvert=0,
        wdAlwaysConvert=1,
        wdAskToNotConvert=2,
        wdAskToConvert=3,
    }

    enum WpsWdMailMergeMailFormat {
        wdMailFormatPlainText=0,
        wdMailFormatHTML=1,
    }

    enum WpsWdMailMergeMainDocType {
        wdDirectory=3,
        wdNotAMergeDocument=-1,
        wdEnvelopes=2,
        wdFormLetters=0,
        wdMailingLabels=1,
        wdCatalog=3,
        wdEMail=4,
        wdFax=5,
    }

    enum WpsWdMailMergeState {
        wdNormalDocument=0,
        wdMainAndHeader=3,
        wdMainDocumentOnly=1,
        wdMainAndDataSource=2,
        wdMainAndSourceAndHeader=4,
        wdDataSource=5,
    }

    enum WpsWdMailMergeDestination {
        wdSendToNewDocument=0,
        wdSendToPrinter=1,
        wdSendToEmail=2,
        wdSendToFax=3,
    }

    enum WpsWdMailMergeActiveRecord {
        wdNoActiveRecord=-1,
        wdNextDataSourceRecord=-8,
        wdFirstRecord=-4,
        wdNextRecord=-2,
        wdLastRecord=-5,
        wdPreviousRecord=-3,
        wdFirstDataSourceRecord=-6,
        wdLastDataSourceRecord=-7,
        wdPreviousDataSourceRecord=-9,
    }

    enum WpsWdMailMergeDefaultRecord {
        wdDefaultFirstRecord=1,
        wdDefaultLastRecord=-16,
    }

    enum WpsWdHorizontalLineWidthType {
        wdHorizontalLinePercentWidth=-1,
        wdHorizontalLineFixedWidth=-2,
    }

    enum WpsWdFontBias {
        wdFontBiasDontCare=255,
        wdFontBiasDefault=0,
        wdFontBiasFareast=1,
    }

    enum WpsWdMailMergeDataSource {
        wdMergeInfoFromMSQueryDDE=3,
        wdNoMergeInfo=-1,
        wdMergeInfoFromODSO=5,
        wdMergeInfoFromODBC=4,
        wdMergeInfoFromWord=0,
        wdMergeInfoFromAccessDDE=1,
        wdMergeInfoFromExcelDDE=2,
    }

    enum WpsWdMailMergeComparison {
        wdMergeIfIsNotBlank=7,
        wdMergeIfGreaterThanOrEqual=5,
        wdMergeIfLessThan=2,
        wdMergeIfEqual=0,
        wdMergeIfNotEqual=1,
        wdMergeIfLessThanOrEqual=4,
        wdMergeIfGreaterThan=3,
        wdMergeIfIsBlank=6,
    }

    enum WpsWdBookmarkSortBy {
        wdSortByName=0,
        wdSortByLocation=1,
    }

    enum WpsWdFrenchSpeller {
        wdFrenchPreReform=1,
        wdFrenchBoth=0,
        wdFrenchPostReform=2,
    }

    enum WpsWdOMathShapeType {
        wdOMathShapeCentered=0,
        wdOMathShapeMatch=1,
    }

    enum WpsWdWindowState {
        wdWindowStateNormal=0,
        wdWindowStateMaximize=1,
        wdWindowStateMinimize=2,
    }

    enum WpsWdStyleSort {
        wdStyleSortByType=4,
        wdStyleSortByName=0,
        wdStyleSortRecommended=1,
        wdStyleSortByFont=2,
        wdStyleSortByBasedOn=3,
    }

    enum WpsWdWindowType {
        wdWindowDocument=0,
        wdWindowTemplate=1,
    }

    enum WpsWdViewType {
        wdMasterView=5,
        wdNormalView=1,
        wdConflictView=8,
        wdReadingView=7,
        wdOutlineView=2,
        wdWebView=6,
        wdPrintView=3,
        wdPrintPreview=4,
    }

    enum WpsWdSpecialPane {
        wdPaneNone=0,
        wdPanePrimaryHeader=1,
        wdPaneEndnotes=8,
        wdPaneEvenPagesFooter=6,
        wdPaneFirstPageHeader=2,
        wdPaneFirstPageFooter=5,
        wdPaneCurrentPageHeader=16,
        wdPaneEvenPagesHeader=3,
        wdPaneFootnotes=7,
        wdPanePrimaryFooter=4,
        wdPaneCurrentPageFooter=17,
        wdPaneFootnoteContinuationNotice=9,
        wdPaneFootnoteContinuationSeparator=10,
        wdPaneFootnoteSeparator=11,
        wdPaneEndnoteContinuationNotice=12,
        wdPaneEndnoteContinuationSeparator=13,
        wdPaneEndnoteSeparator=14,
        wdPaneComments=15,
        wdPaneRevisions=18,
        wdPaneRevisionsHoriz=19,
        wdPaneRevisionsVert=20,
    }

    enum WpsWdPageFit {
        wdPageFitNone=0,
        wdPageFitFullPage=1,
        wdPageFitTextFit=3,
        wdPageFitBestFit=2,
    }

    enum WpsWdPaperTray {
        wdPrinterOnlyBin=1,
        wdPrinterEnvelopeFeed=5,
        wdPrinterDefaultBin=0,
        wdPrinterManualFeed=4,
        wdPrinterUpperBin=1,
        wdPrinterLowerBin=2,
        wdPrinterMiddleBin=3,
        wdPrinterAutomaticSheetFeed=7,
        wdPrinterManualEnvelopeFeed=6,
        wdPrinterTractorFeed=8,
        wdPrinterSmallFormatBin=9,
        wdPrinterLargeFormatBin=10,
        wdPrinterLargeCapacityBin=11,
        wdPrinterPaperCassette=14,
        wdPrinterFormSource=15,
    }

    enum WpsWdApplyQuickStyleSets {
        wdSessionStartSet=1,
        wdTemplateSet=2,
    }

    enum WpsWdFindWrap {
        wdFindStop=0,
        wdFindContinue=1,
        wdFindAsk=2,
    }

    enum WpsWdOrientation {
        wdOrientPortrait=0,
        wdOrientLandscape=1,
    }

    enum WpsWdSelectionFlags {
        wdSelReplace=16,
        wdSelActive=8,
        wdSelStartActive=1,
        wdSelAtEOL=2,
        wdSelOvertype=4,
    }

    enum WpsWdSelectionType {
        wdSelectionNormal=2,
        wdNoSelection=0,
        wdSelectionIP=1,
        wdSelectionBlock=6,
        wdSelectionFrame=3,
        wdSelectionColumn=4,
        wdSelectionRow=5,
        wdSelectionShape=8,
        wdSelectionInlineShape=7,
    }

    enum WpsWdCaptionLabelID {
        wdCaptionEquation=-3,
        wdCaptionFigure=-1,
        wdCaptionTable=-2,
    }

    enum WpsWdDefaultListBehavior {
        wdWord10ListBehavior=2,
        wdWord8ListBehavior=0,
        wdWord9ListBehavior=1,
    }

    enum WpsWdReferenceKind {
        wdEntireCaption=2,
        wdNumberNoContext=-3,
        wdContentText=-1,
        wdNumberRelativeContext=-2,
        wdOnlyCaptionText=4,
        wdNumberFullContext=-4,
        wdFootnoteNumber=5,
        wdOnlyLabelAndNumber=3,
        wdEndnoteNumber=6,
        wdPageNumber=7,
        wdPosition=15,
        wdFootnoteNumberFormatted=16,
        wdEndnoteNumberFormatted=17,
    }

    enum WpsWdReferenceType {
        wdRefTypeNumberedItem=0,
        wdRefTypeHeading=1,
        wdRefTypeBookmark=2,
        wdRefTypeFootnote=3,
        wdRefTypeEndnote=4,
    }

    enum WpsWdIndexFormat {
        wdIndexTemplate=0,
        wdIndexClassic=1,
        wdIndexModern=3,
        wdIndexFancy=2,
        wdIndexBulleted=4,
        wdIndexSimple=6,
        wdIndexFormal=5,
    }

    enum WpsWdIndexType {
        wdIndexIndent=0,
        wdIndexRunin=1,
    }

    enum WpsWdRevisionsMode {
        wdMixedRevisions=2,
        wdBalloonRevisions=0,
        wdInLineRevisions=1,
    }

    enum WpsWdRevisionsView {
        wdRevisionsViewFinal=0,
        wdRevisionsViewOriginal=1,
    }

    enum WpsWdRevisionsWrap {
        wdWrapNever=0,
        wdWrapAlways=1,
        wdWrapAsk=2,
    }

    enum WpsWdRevisionType {
        wdRevisionReconcile=6,
        wdRevisionInsert=1,
        wdNoRevision=0,
        wdRevisionDelete=2,
        wdRevisionConflict=7,
        wdRevisionProperty=3,
        wdRevisionStyle=8,
        wdRevisionDisplayField=5,
        wdRevisionParagraphNumber=4,
        wdRevisionReplace=9,
        wdRevisionParagraphProperty=10,
        wdRevisionTableProperty=11,
        wdRevisionConflictDelete=21,
        wdRevisionSectionProperty=12,
        wdRevisionStyleDefinition=13,
        wdRevisionMovedFrom=14,
        wdRevisionMovedTo=15,
        wdRevisionCellInsertion=16,
        wdRevisionCellDeletion=17,
        wdRevisionCellMerge=18,
        wdRevisionCellSplit=19,
        wdRevisionConflictInsert=20,
    }

    enum WpsWdRoutingSlipDelivery {
        wdOneAfterAnother=0,
        wdAllAtOnce=1,
    }

    enum WpsWdRoutingSlipStatus {
        wdNotYetRouted=0,
        wdRouteComplete=2,
        wdRouteInProgress=1,
    }

    enum WpsWdCellColor {
        wdCellColorLightPurple=4,
        wdCellColorPink=1,
        wdCellColorNoHighlight=0,
        wdCellColorByAuthor=-1,
        wdCellColorLightGreen=6,
        wdCellColorLightBlue=2,
        wdCellColorLightYellow=3,
        wdCellColorLightOrange=5,
        wdCellColorLightGray=7,
    }

    enum WpsWdSectionStart {
        wdSectionNewColumn=1,
        wdSectionContinuous=0,
        wdSectionNewPage=2,
        wdSectionEvenPage=3,
        wdSectionOddPage=4,
    }

    enum WpsWdDocumentKind {
        wdDocumentNotSpecified=0,
        wdDocumentLetter=1,
        wdDocumentEmail=2,
    }

    enum WpsWdKey {
        wdKey9=57,
        wdKeyCloseSquareBrace=221,
        wdKeyB=66,
        wdKeyEsc=27,
        wdKeyG=71,
        wdKeyHyphen=189,
        wdNoKey=255,
        wdKeyNumeric7=103,
        wdKeyA=65,
        wdKeyCommand=512,
        wdKeyF2=113,
        wdKeyNumeric2=98,
        wdKeyShift=256,
        wdKeyY=89,
        wdKeyF=70,
        wdKeyC=67,
        wdKeyNumeric5=101,
        wdKeyControl=512,
        wdKeyAlt=1024,
        wdKeyZ=90,
        wdKeyDelete=46,
        wdKeyBackspace=8,
        wdKeyW=87,
        wdKeyD=68,
        wdKeyOption=1024,
        wdKeyNumeric5Special=12,
        wdKeyE=69,
        wdKeyH=72,
        wdKeyI=73,
        wdKeyU=85,
        wdKeySemiColon=186,
        wdKeyJ=74,
        wdKey0=48,
        wdKeyK=75,
        wdKeyEnd=35,
        wdKeyL=76,
        wdKeyM=77,
        wdKeyInsert=45,
        wdKeyN=78,
        wdKeyX=88,
        wdKeyO=79,
        wdKeyNumeric1=97,
        wdKeyP=80,
        wdKeyQ=81,
        wdKeyNumeric4=100,
        wdKey3=51,
        wdKeyR=82,
        wdKey2=50,
        wdKeyS=83,
        wdKeyT=84,
        wdKeyV=86,
        wdKey1=49,
        wdKey4=52,
        wdKeyHome=36,
        wdKey5=53,
        wdKey6=54,
        wdKeyNumeric8=104,
        wdKeyNumeric3=99,
        wdKey7=55,
        wdKey8=56,
        wdKeyTab=9,
        wdKeyReturn=13,
        wdKeyPause=19,
        wdKeySpacebar=32,
        wdKeyPageUp=33,
        wdKeyPageDown=34,
        wdKeyNumeric0=96,
        wdKeySlash=191,
        wdKeyNumeric6=102,
        wdKeyNumeric9=105,
        wdKeyNumericMultiply=106,
        wdKeyNumericAdd=107,
        wdKeyNumericSubtract=109,
        wdKeyNumericDecimal=110,
        wdKeyNumericDivide=111,
        wdKeyF1=112,
        wdKeyF3=114,
        wdKeyF4=115,
        wdKeyF5=116,
        wdKeyF6=117,
        wdKeyF7=118,
        wdKeyF8=119,
        wdKeyF9=120,
        wdKeyF16=127,
        wdKeyF15=126,
        wdKeyF14=125,
        wdKeyF13=124,
        wdKeyF12=123,
        wdKeyF11=122,
        wdKeyF10=121,
        wdKeyScrollLock=145,
        wdKeyEquals=187,
        wdKeyComma=188,
        wdKeyPeriod=190,
        wdKeyBackSingleQuote=192,
        wdKeyOpenSquareBrace=219,
        wdKeyBackSlash=220,
        wdKeySingleQuote=222,
    }

    enum WpsWdDocumentType {
        wdTypeDocument=0,
        wdTypeFrameset=2,
        wdTypeTemplate=1,
    }

    enum WpsWdLockType {
        wdLockNone=0,
        wdLockReservation=1,
        wdLockEphemeral=2,
        wdLockChanged=3,
    }

    enum WpsWdOriginalFormat {
        wdWordDocument=0,
        wdOriginalDocumentFormat=1,
        wdPromptUser=2,
    }

    enum WpsWdTableDirection {
        wdTableDirectionLtr=1,
        wdTableDirectionRtl=0,
    }

    enum WpsWdRelocate {
        wdRelocateUp=0,
        wdRelocateDown=1,
    }

    enum WpsWdVisualSelection {
        wdVisualSelectionBlock=0,
        wdVisualSelectionContinuous=1,
    }

    enum WpsWdInsertedTextMark {
        wdInsertedTextMarkDoubleStrikeThrough=7,
        wdInsertedTextMarkStrikeThrough=6,
        wdInsertedTextMarkNone=0,
        wdInsertedTextMarkBold=1,
        wdInsertedTextMarkItalic=2,
        wdInsertedTextMarkUnderline=3,
        wdInsertedTextMarkDoubleUnderline=4,
        wdInsertedTextMarkColorOnly=5,
    }

    enum WpsWdRevisedLinesMark {
        wdRevisedLinesMarkNone=0,
        wdRevisedLinesMarkLeftBorder=1,
        wdRevisedLinesMarkRightBorder=2,
        wdRevisedLinesMarkOutsideBorder=3,
    }

    enum WpsWdDeletedTextMark {
        wdDeletedTextMarkDoubleUnderline=8,
        wdDeletedTextMarkHidden=0,
        wdDeletedTextMarkColorOnly=9,
        wdDeletedTextMarkStrikeThrough=1,
        wdDeletedTextMarkCaret=2,
        wdDeletedTextMarkItalic=6,
        wdDeletedTextMarkPound=3,
        wdDeletedTextMarkNone=4,
        wdDeletedTextMarkBold=5,
        wdDeletedTextMarkUnderline=7,
        wdDeletedTextMarkDoubleStrikeThrough=10,
    }

    enum WpsWdRevisedPropertiesMark {
        wdRevisedPropertiesMarkColorOnly=5,
        wdRevisedPropertiesMarkBold=1,
        wdRevisedPropertiesMarkNone=0,
        wdRevisedPropertiesMarkStrikeThrough=6,
        wdRevisedPropertiesMarkItalic=2,
        wdRevisedPropertiesMarkUnderline=3,
        wdRevisedPropertiesMarkDoubleUnderline=4,
        wdRevisedPropertiesMarkDoubleStrikeThrough=7,
    }

    enum WpsWdFieldShading {
        wdFieldShadingNever=0,
        wdFieldShadingWhenSelected=2,
        wdFieldShadingAlways=1,
    }

    enum WpsWdDefaultFilePath {
        wdWorkgroupTemplatesPath=3,
        wdDocumentsPath=0,
        wdToolsPath=6,
        wdPicturesPath=1,
        wdTutorialPath=7,
        wdUserTemplatesPath=2,
        wdUserOptionsPath=4,
        wdAutoRecoverPath=5,
        wdStartupPath=8,
        wdProgramPath=9,
        wdGraphicsFiltersPath=10,
        wdTextConvertersPath=11,
        wdProofingToolsPath=12,
        wdTempFilePath=13,
        wdStyleGalleryPath=15,
        wdCurrentFolderPath=14,
        wdBorderArtPath=19,
    }

    enum WpsWdSpanishSpeller {
        wdSpanishTuteoOnly=0,
        wdSpanishTuteoAndVoseo=1,
        wdSpanishVoseoOnly=2,
    }

    enum WpsWdCompatibility {
        wdNoColumnBalance=5,
        wdNoTabHangIndent=1,
        wdNoSpaceRaiseLower=2,
        wdPrintColBlack=3,
        wdWrapTrailSpaces=4,
        wdConvMailMergeEsc=6,
        wdUseWord97LineBreakingRules=42,
        wdExpandShiftReturn=14,
        wdOrigWordTableRules=9,
        wdDontAdjustLineHeightInTable=36,
        wdNoSpaceForUL=21,
        wdSuppressSpBfAfterPgBrk=7,
        wdFootnoteLayoutLikeWW8=34,
        wdSuppressTopSpacing=8,
        wdTransparentMetafiles=10,
        wdAllowSpaceOfSameStyleInTable=54,
        wdSpacingInWholePoints=18,
        wdShowBreaksInFrames=11,
        wdSwapBordersFacingPages=12,
        wdApplyBreakingRules=46,
        wdShapeLayoutLikeWW8=33,
        wdLeaveBackslashAlone=13,
        wdTruncateFontHeight=24,
        wdHangulWidthLikeWW11=59,
        wdUseWord2002TableStyleRules=49,
        wdNoLeading=20,
        wdDontULTrailSpace=15,
        wdDontBalanceSingleByteDoubleByteWidth=16,
        wdSuppressTopSpacingMac5=17,
        wdDontVertAlignCellWithShape=61,
        wdPrintBodyTextBeforeHeader=19,
        wdMWSmallCaps=22,
        wdDontAutofitConstrainedTables=56,
        wdSelectFieldWithFirstOrLastCharacter=45,
        wdDontSnapTextToGridInTableWithObjects=44,
        wdNoExtraLineSpacing=23,
        wdSubFontBySize=25,
        wdLayoutTableRowsApart=41,
        wdUsePrinterMetrics=26,
        wdFELineBreak11=53,
        wdAutospaceLikeWW7=38,
        wdWW6BorderRules=27,
        wdSuppressBottomSpacing=29,
        wdWPSpaceWidth=30,
        wdExactOnTop=28,
        wdWPJustification=31,
        wdLineWrapLikeWord6=32,
        wdDontUseHTMLParagraphAutoSpacing=35,
        wdForgetLastTabAlignment=37,
        wdAlignTablesRowByRow=39,
        wdGrowAutofit=50,
        wdLayoutRawTableWidth=40,
        wdDontBreakWrappedTables=43,
        wdDontWrapTextWithPunctuation=47,
        wdDontBreakConstrainedForcedTables=62,
        wdDontUseAsianBreakRulesInGrid=48,
        wdUseNormalStyleForList=51,
        wdDontUseIndentAsNumberingTabStop=52,
        wdWW11IndentRules=55,
        wdAutofitLikeWW11=57,
        wdUnderlineTabInNumList=58,
        wdSplitPgBreakAndParaMark=60,
        wdDontVertAlignInTextbox=63,
        wdWord11KerningPairs=64,
        wdCachedColBalance=65,
        wdDisableOTKerning=66,
        wdFlipMirrorIndents=67,
        wdDontOverrideTableStyleFontSzAndJustification=68,
        wdUseWord2010TableStyleRules=69,
    }

    enum WpsWdPaperSize {
        wdPaperFolio=18,
        wdPaperExecutive=5,
        wdPaper10x14=0,
        wdPaperLetterSmall=3,
        wdPaper11x17=1,
        wdPaperA4Small=8,
        wdPaperA3=6,
        wdPaperLetter=2,
        wdPaperLedger=19,
        wdPaperLegal=4,
        wdPaperB4=10,
        wdPaperA4=7,
        wdPaperFanfoldUS=17,
        wdPaperB5=11,
        wdPaperA5=9,
        wdPaperEnvelopeMonarch=39,
        wdPaperESheet=14,
        wdPaperDSheet=13,
        wdPaperCSheet=12,
        wdPaperEnvelopePersonal=40,
        wdPaperFanfoldLegalGerman=15,
        wdPaperFanfoldStdGerman=16,
        wdPaperNote=20,
        wdPaperQuarto=21,
        wdPaperStatement=22,
        wdPaperTabloid=23,
        wdPaperEnvelope9=24,
        wdPaperEnvelope14=28,
        wdPaperEnvelope12=27,
        wdPaperEnvelope11=26,
        wdPaperEnvelope10=25,
        wdPaperEnvelopeB6=31,
        wdPaperEnvelopeB5=30,
        wdPaperEnvelopeB4=29,
        wdPaperEnvelopeC65=36,
        wdPaperEnvelopeC6=35,
        wdPaperEnvelopeC5=34,
        wdPaperEnvelopeC4=33,
        wdPaperEnvelopeC3=32,
        wdPaperEnvelopeDL=37,
        wdPaperEnvelopeItaly=38,
        wdPaperCustom=41,
    }

    enum WpsWdCustomLabelPageSize {
        wdCustomLabelA5LS=5,
        wdCustomLabelLetterLS=1,
        wdCustomLabelLetter=0,
        wdCustomLabelMini=7,
        wdCustomLabelHigakiLS=12,
        wdCustomLabelHigaki=11,
        wdCustomLabelA4=2,
        wdCustomLabelA4LS=3,
        wdCustomLabelA5=4,
        wdCustomLabelB5=6,
        wdCustomLabelFanfold=8,
        wdCustomLabelVertHalfSheet=9,
        wdCustomLabelVertHalfSheetLS=10,
        wdCustomLabelB4JIS=13,
    }

    enum WpsWdProtectionType {
        wdNoProtection=-1,
        wdAllowOnlyRevisions=0,
        wdAllowOnlyComments=1,
        wdAllowOnlyFormFields=2,
        wdAllowOnlyReading=3,
    }

    enum WpsWdPartOfSpeech {
        wdConjunction=5,
        wdAdjective=0,
        wdNoun=1,
        wdIdiom=8,
        wdAdverb=2,
        wdVerb=3,
        wdPreposition=6,
        wdPronoun=4,
        wdInterjection=7,
        wdOther=9,
    }

    enum WpsWdSubscriberFormats {
        wdSubscriberBestFormat=0,
        wdSubscriberRTF=1,
        wdSubscriberText=2,
        wdSubscriberPict=4,
    }

    enum WpsWdEditionType {
        wdPublisher=0,
        wdSubscriber=1,
    }

    enum WpsWdRelativeHorizontalPosition {
        wdRelativeHorizontalPositionMargin=0,
        wdRelativeHorizontalPositionCharacter=3,
        wdRelativeHorizontalPositionPage=1,
        wdRelativeHorizontalPositionOuterMarginArea=7,
        wdRelativeHorizontalPositionColumn=2,
        wdRelativeHorizontalPositionLeftMarginArea=4,
        wdRelativeHorizontalPositionRightMarginArea=5,
        wdRelativeHorizontalPositionInnerMarginArea=6,
    }

    enum WpsWdPrintOutPages {
        wdPrintAllPages=0,
        wdPrintOddPagesOnly=1,
        wdPrintEvenPagesOnly=2,
    }

    enum WpsWdRelativeVerticalPosition {
        wdRelativeVerticalPositionLine=3,
        wdRelativeVerticalPositionPage=1,
        wdRelativeVerticalPositionMargin=0,
        wdRelativeVerticalPositionOuterMarginArea=7,
        wdRelativeVerticalPositionInnerMarginArea=6,
        wdRelativeVerticalPositionParagraph=2,
        wdRelativeVerticalPositionTopMarginArea=4,
        wdRelativeVerticalPositionBottomMarginArea=5,
    }

    enum WpsWdMailerPriority {
        wdPriorityHigh=3,
        wdPriorityNormal=1,
        wdPriorityLow=2,
    }

    enum WpsWdHelpType {
        wdHelpUsingHelp=10,
        wdHelpQuickPreview=8,
        wdHelp=0,
        wdHelpAbout=1,
        wdHelpIchitaro=11,
        wdHelpActiveWindow=2,
        wdHelpPSSHelp=7,
        wdHelpContents=3,
        wdHelpKeyboard=6,
        wdHelpExamplesAndDemos=4,
        wdHelpIndex=5,
        wdHelpSearch=9,
        wdHelpPE2=12,
        wdHelpHWP=13,
    }

    enum WpsWdOLEType {
        wdOLELink=0,
        wdOLEEmbed=1,
        wdOLEControl=2,
    }

    enum WpsWdOLEPlacement {
        wdInLine=0,
        wdFloatOverText=1,
    }

    enum WpsWdEnvelopeOrientation {
        wdCenterLandscape=4,
        wdLeftPortrait=0,
        wdLeftClockwise=6,
        wdLeftLandscape=3,
        wdCenterPortrait=1,
        wdRightLandscape=5,
        wdRightPortrait=2,
        wdCenterClockwise=7,
        wdRightClockwise=8,
    }

    enum WpsWdLetterStyle {
        wdFullBlock=0,
        wdModifiedBlock=1,
        wdSemiBlock=2,
    }

    enum WpsWdLetterheadLocation {
        wdLetterTop=0,
        wdLetterBottom=1,
        wdLetterLeft=2,
        wdLetterRight=3,
    }

    enum WpsWdSalutationType {
        wdSalutationInformal=0,
        wdSalutationFormal=1,
        wdSalutationBusiness=2,
        wdSalutationOther=3,
    }

    enum WpsWdExportItem {
        wdExportDocumentContent=0,
        wdExportDocumentWithMarkup=7,
    }

    enum WpsWdFramesetType {
        wdFramesetTypeFrameset=0,
        wdFramesetTypeFrame=1,
    }

    enum WpsWdSalutationGender {
        wdGenderNeutral=2,
        wdGenderFemale=0,
        wdGenderMale=1,
        wdGenderUnknown=3,
    }

    enum WpsWdMovementType {
        wdMove=0,
        wdExtend=1,
    }

    enum WpsWdConstants {
        wdForward=1073741823,
        wdUndefined=9999999,
        wdToggle=9999998,
        wdBackward=-1073741823,
        wdCreatorCode=1297307460,
        wdFirst=1,
        wdAutoPosition=0,
    }

    enum WpsWdPasteDataType {
        wdPasteBitmap=4,
        wdPasteOLEObject=0,
        wdPasteRTF=1,
        wdPasteHyperlink=7,
        wdPasteDeviceIndependentBitmap=5,
        wdPasteMetafilePicture=3,
        wdPasteText=2,
        wdPasteShape=8,
        wdPasteEnhancedMetafile=9,
        wdPasteHTML=10,
    }

    enum WpsWdPrintOutItem {
        wdPrintDocumentWithMarkup=7,
        wdPrintDocumentContent=0,
        wdPrintProperties=1,
        wdPrintStyles=3,
        wdPrintAutoTextEntries=4,
        wdPrintComments=2,
        wdPrintMarkup=2,
        wdPrintKeyAssignments=5,
        wdPrintEnvelope=6,
    }

    enum WpsWdPrintOutRange {
        wdPrintAllDocument=0,
        wdPrintSelection=1,
        wdPrintFromTo=3,
        wdPrintCurrentPage=2,
        wdPrintRangeOfPages=4,
    }

    enum WpsWdSpellingWordType {
        wdAnagram=2,
        wdSpellword=0,
        wdWildcard=1,
    }

    enum WpsWdRelativeHorizontalSize {
        wdRelativeHorizontalSizeMargin=0,
        wdRelativeHorizontalSizePage=1,
        wdRelativeHorizontalSizeOuterMarginArea=5,
        wdRelativeHorizontalSizeLeftMarginArea=2,
        wdRelativeHorizontalSizeRightMarginArea=3,
        wdRelativeHorizontalSizeInnerMarginArea=4,
    }

    enum WpsWdHebSpellStart {
        wdMixedAuthorizedScript=3,
        wdFullScript=0,
        wdMixedScript=2,
        wdPartialScript=1,
    }

    enum WpsWdSpellingErrorType {
        wdSpellingCorrect=0,
        wdSpellingNotInDictionary=1,
        wdSpellingCapitalization=2,
    }

    enum WpsWdFarEastLineBreakLanguageID {
        wdLineBreakJapanese=1041,
        wdLineBreakKorean=1042,
        wdLineBreakTraditionalChinese=1028,
        wdLineBreakSimplifiedChinese=2052,
    }

    enum WpsWdProofreadingErrorType {
        wdSpellingError=0,
        wdGrammaticalError=1,
    }

    enum WpsWdInlineShapeType {
        wdInlineShapeEmbeddedOLEObject=1,
        wdInlineShapeHorizontalLine=6,
        wdInlineShapeLinkedOLEObject=2,
        wdInlineShapePicture=3,
        wdInlineShapePictureBullet=9,
        wdInlineShapeLinkedPictureHorizontalLine=8,
        wdInlineShapeLinkedPicture=4,
        wdInlineShapeOWSAnchor=11,
        wdInlineShapePictureHorizontalLine=7,
        wdInlineShapeOLEControlObject=5,
        wdInlineShapeScriptAnchor=10,
        wdInlineShapeChart=12,
        wdInlineShapeDiagram=13,
        wdInlineShapeLockedCanvas=14,
        wdInlineShapeSmartArt=15,
        wdInlineShapeWebVideo=16,
    }

    enum WpsXlChartPicturePlacement {
        xlFrontEnd=6,
        xlFrontSides=5,
        xlSides=1,
        xlEnd=2,
        xlEndSides=3,
        xlFront=4,
        xlAllFaces=7,
    }

    enum WpsWdArrangeStyle {
        wdTiled=0,
        wdIcons=1,
    }

    enum WpsWdAutoVersions {
        wdAutoVersionOff=0,
        wdAutoVersionOnClose=1,
    }

    enum WpsWdOrganizerObject {
        wdOrganizerObjectStyles=0,
        wdOrganizerObjectAutoText=1,
        wdOrganizerObjectCommandBars=2,
        wdOrganizerObjectProjectItems=3,
    }

    enum WpsWdFindMatch {
        wdMatchParagraphMark=65551,
        wdMatchEmDash=8212,
        wdMatchAnyCharacter=65599,
        wdMatchTabCharacter=9,
        wdMatchAnyLetter=65583,
        wdMatchCommentMark=5,
        wdMatchWhiteSpace=65655,
        wdMatchAnyDigit=65567,
        wdMatchCaretCharacter=11,
        wdMatchColumnBreak=14,
        wdMatchEnDash=8211,
        wdMatchEndnoteMark=65555,
        wdMatchField=19,
        wdMatchFootnoteMark=65554,
        wdMatchGraphic=1,
        wdMatchManualLineBreak=65551,
        wdMatchManualPageBreak=65564,
        wdMatchOptionalHyphen=31,
        wdMatchNonbreakingHyphen=30,
        wdMatchNonbreakingSpace=160,
        wdMatchSectionBreak=65580,
    }

    enum WpsWdInformation {
        wdActiveEndAdjustedPageNumber=1,
        wdActiveEndSectionNumber=2,
        wdInFieldResult=45,
        wdInCitation=43,
        wdZoomPercentage=19,
        wdMaximumNumberOfRows=15,
        wdActiveEndPageNumber=3,
        wdNumberOfPagesInDocument=4,
        wdHorizontalPositionRelativeToPage=5,
        wdVerticalPositionRelativeToPage=6,
        wdHorizontalPositionRelativeToTextBoundary=7,
        wdFirstCharacterColumnNumber=9,
        wdAtEndOfRowMarker=31,
        wdVerticalPositionRelativeToTextBoundary=8,
        wdSelectionMode=20,
        wdFirstCharacterLineNumber=10,
        wdFrameIsSelected=11,
        wdWithInTable=12,
        wdStartOfRangeRowNumber=13,
        wdEndOfRangeRowNumber=14,
        wdStartOfRangeColumnNumber=16,
        wdEndOfRangeColumnNumber=17,
        wdMaximumNumberOfColumns=18,
        wdCapsLock=21,
        wdNumLock=22,
        wdOverType=23,
        wdRevisionMarking=24,
        wdInFootnoteEndnotePane=25,
        wdInCommentPane=26,
        wdReferenceOfType=32,
        wdInHeaderFooter=28,
        wdHeaderFooterType=33,
        wdInMasterDocument=34,
        wdInFootnote=35,
        wdInEndnote=36,
        wdInWordMail=37,
        wdInClipboard=38,
        wdInFieldCode=44,
        wdInCoverPage=41,
        wdInBibliography=42,
        wdInContentControl=46,
    }

    enum WpsWdWrapType {
        wdWrapSquare=0,
        wdWrapThrough=2,
        wdWrapTight=1,
        wdWrapBehind=5,
        wdWrapNone=3,
        wdWrapTopBottom=4,
        wdWrapInline=7,
        wdWrapFront=3,
    }

    enum WpsWdWrapSideType {
        wdWrapLeft=1,
        wdWrapBoth=0,
        wdWrapRight=2,
        wdWrapLargest=3,
    }

    enum WpsWdContentControlDateStorageFormat {
        wdContentControlDateStorageText=0,
        wdContentControlDateStorageDate=1,
        wdContentControlDateStorageDateTime=2,
    }

    enum WpsWdOutlineLevel {
        wdOutlineLevel9=9,
        wdOutlineLevel1=1,
        wdOutlineLevel2=2,
        wdOutlineLevel3=3,
        wdOutlineLevel4=4,
        wdOutlineLevel5=5,
        wdOutlineLevel6=6,
        wdOutlineLevel7=7,
        wdOutlineLevel8=8,
        wdOutlineLevelBodyText=10,
    }

    enum WpsWdCalendarTypeBi {
        wdCalendarTypeBidi=99,
        wdCalendarTypeGregorian=100,
    }

    enum WpsWdTextOrientation {
        wdTextOrientationHorizontal=0,
        wdTextOrientationVertical=5,
        wdTextOrientationDownward=3,
        wdTextOrientationUpward=2,
        wdTextOrientationHorizontalRotatedFarEast=4,
        wdTextOrientationVerticalFarEast=1,
    }

    enum WpsWdPageBorderArt {
        wdArtPumpkin1=65,
        wdArtScaredCat=36,
        wdArtApples=1,
        wdArtPalmsBlack=80,
        wdArtConfetti=31,
        wdArtStars3D=17,
        wdArtMapleMuffins=2,
        wdArtPalmsColor=10,
        wdArtBasicWhiteSquares=153,
        wdArtCakeSlice=3,
        wdArtWaveline=59,
        wdArtZigZagStitch=143,
        wdArtCandyCorn=4,
        wdArtTrees=9,
        wdArtFlowersPansy=43,
        wdArtCreaturesLadyBug=33,
        wdArtIceCreamCones=5,
        wdArtChampagneBottle=6,
        wdArtPartyGlass=7,
        wdArtBasicWhiteDots=147,
        wdArtSombrero=24,
        wdArtEclipsingSquares2=86,
        wdArtChristmasTree=8,
        wdArtEarth2=21,
        wdArtBalloons3Colors=11,
        wdArtTornPaperBlack=162,
        wdArtClocks=27,
        wdArtBalloonsHotAir=12,
        wdArtSawtooth=133,
        wdArtBirdsFlight=35,
        wdArtPartyFavor=13,
        wdArtLightning2=119,
        wdArtFlowersDaisies=48,
        wdArtCheckered=144,
        wdArtConfettiStreamers=14,
        wdArtCreaturesButterfly=32,
        wdArtHearts=15,
        wdArtHeartBalloon=16,
        wdArtPoinsettias=40,
        wdArtStarsShadowed=18,
        wdArtStars=19,
        wdArtCup=67,
        wdArtSun=20,
        wdArtShadowedSquares=57,
        wdArtFilm=52,
        wdArtBasicWideOutline=149,
        wdArtEarth1=22,
        wdArtPeopleHats=23,
        wdArtFlowersModern1=45,
        wdArtPencils=25,
        wdArtPackages=26,
        wdArtConfettiOutline=116,
        wdArtFirecrackers=28,
        wdArtRings=29,
        wdArtClassicalWave=56,
        wdArtMapPins=30,
        wdArtDoubleD=55,
        wdArtCreaturesFish=34,
        wdArtBats=37,
        wdArtFans=51,
        wdArtFlowersRoses=38,
        wdArtFlowersRedRose=39,
        wdArtHolly=41,
        wdArtFlowersTiny=42,
        wdArtVine=47,
        wdArtLightning1=53,
        wdArtFlowersModern2=44,
        wdArtWhiteFlowers=46,
        wdArtFlowersBlockPrint=49,
        wdArtCabins=72,
        wdArtDecoArchColor=50,
        wdArtCompass=54,
        wdArtTwistedLines1=58,
        wdArtQuadrants=60,
        wdArtCheckedBarColor=61,
        wdArtSwirligig=62,
        wdArtBasicWideInline=150,
        wdArtPushPinNote1=63,
        wdArtPushPinNote2=64,
        wdArtEggsBlack=66,
        wdArtHeartGray=68,
        wdArtCheckedBarBlack=145,
        wdArtGingerbreadMan=69,
        wdArtBabyPacifier=70,
        wdArtBabyRattle=71,
        wdArtHouseFunky=73,
        wdArtStarsBlack=74,
        wdArtSnowflakes=75,
        wdArtSnowflakeFancy=76,
        wdArtSkyrocket=77,
        wdArtSeattle=78,
        wdArtMusicNotes=79,
        wdArtMapleLeaf=81,
        wdArtPaperClips=82,
        wdArtShorebirdTracks=83,
        wdArtBasicWideMidline=148,
        wdArtPeople=84,
        wdArtPeopleWaving=85,
        wdArtHypnotic=87,
        wdArtStarsTop=157,
        wdArtDiamondsGray=88,
        wdArtDecoArch=89,
        wdArtDecoBlocks=90,
        wdArtCirclesLines=91,
        wdArtGradient=122,
        wdArtPapyrus=92,
        wdArtWoodwork=93,
        wdArtWeavingBraid=94,
        wdArtWeavingRibbon=95,
        wdArtWeavingAngles=96,
        wdArtArchedScallops=97,
        wdArtSafari=98,
        wdArtCelticKnotwork=99,
        wdArtCrazyMaze=100,
        wdArtEclipsingSquares1=101,
        wdArtBirds=102,
        wdArtFlowersTeacup=103,
        wdArtCirclesRectangles=140,
        wdArtSouthwest=105,
        wdArtNorthwest=104,
        wdArtTribal1=130,
        wdArtTribal5=110,
        wdArtTribal2=109,
        wdArtTribal3=108,
        wdArtTribal4=107,
        wdArtTribal6=106,
        wdArtXIllusions=111,
        wdArtZanyTriangles=112,
        wdArtPyramids=113,
        wdArtPyramidsAbove=114,
        wdArtConfettiGrays=115,
        wdArtConfettiWhite=117,
        wdArtMosaic=118,
        wdArtHeebieJeebies=120,
        wdArtLightBulb=121,
        wdArtTriangleParty=123,
        wdArtTwistedLines2=124,
        wdArtMoons=125,
        wdArtOvals=126,
        wdArtDoubleDiamonds=127,
        wdArtChainLink=128,
        wdArtTriangles=129,
        wdArtMarqueeToothed=131,
        wdArtSharksTeeth=132,
        wdArtSawtoothGray=134,
        wdArtPostageStamp=135,
        wdArtWeavingStrips=136,
        wdArtZigZag=137,
        wdArtCrossStitch=138,
        wdArtGems=139,
        wdArtCornerTriangles=141,
        wdArtCreaturesInsects=142,
        wdArtMarquee=146,
        wdArtBasicThinLines=151,
        wdArtBasicWhiteDashes=152,
        wdArtBasicBlackSquares=154,
        wdArtBasicBlackDashes=155,
        wdArtBasicBlackDots=156,
        wdArtCertificateBanner=158,
        wdArtHandmade2=160,
        wdArtHandmade1=159,
        wdArtTornPaper=161,
        wdArtCouponCutoutDashes=163,
        wdArtCouponCutoutDots=164,
    }

    enum WpsWdBorderDistanceFrom {
        wdBorderDistanceFromText=0,
        wdBorderDistanceFromPageEdge=1,
    }

    enum WpsWdEncloseStyle {
        wdEncloseStyleNone=0,
        wdEncloseStyleSmall=1,
        wdEncloseStyleLarge=2,
    }

    enum WpsWdLayoutMode {
        wdLayoutModeDefault=0,
        wdLayoutModeGrid=1,
        wdLayoutModeGenko=3,
        wdLayoutModeLineGrid=2,
    }

    enum WpsWdDocumentMedium {
        wdEmailMessage=0,
        wdDocument=1,
        wdWebPage=2,
    }

    enum WpsWdDocumentViewDirection {
        wdDocumentViewLtr=1,
        wdDocumentViewRtl=0,
    }

    enum WpsWdDocPartInsertOptions {
        wdInsertContent=0,
        wdInsertParagraph=1,
        wdInsertPage=2,
    }

    enum WpsWdArabicNumeral {
        wdNumeralContext=2,
        wdNumeralArabic=0,
        wdNumeralHindi=1,
        wdNumeralSystem=3,
    }

    enum WpsWdMonthNames {
        wdMonthNamesArabic=0,
        wdMonthNamesEnglish=1,
        wdMonthNamesFrench=2,
    }

    enum WpsWdCursorMovement {
        wdCursorMovementLogical=0,
        wdCursorMovementVisual=1,
    }

    enum WpsWdFlowDirection {
        wdFlowRtl=1,
        wdFlowLtr=0,
    }

    enum WpsWdDiacriticColor {
        wdDiacriticColorLatin=1,
        wdDiacriticColorBidi=0,
    }

    enum WpsWdGutterStyle {
        wdGutterPosRight=2,
        wdGutterPosLeft=0,
        wdGutterPosTop=1,
    }

    enum WpsWdGutterStyleOld {
        wdGutterStyleLatin=-10,
        wdGutterStyleBidi=2,
    }

    enum WpsWdContentControlLevel {
        wdContentControlLevelInline=0,
        wdContentControlLevelParagraph=1,
        wdContentControlLevelRow=2,
        wdContentControlLevelCell=3,
    }

    enum WpsWdDateLanguage {
        wdDateLanguageBidi=10,
        wdDateLanguageLatin=1033,
    }

    enum WpsWdCalendarType {
        wdCalendarTranslitEnglish=8,
        wdCalendarWestern=0,
        wdCalendarHebrew=2,
        wdCalendarArabic=1,
        wdCalendarTaiwan=3,
        wdCalendarSakaEra=7,
        wdCalendarTranslitFrench=9,
        wdCalendarJapan=4,
        wdCalendarThai=5,
        wdCalendarKorean=6,
        wdCalendarUmalqura=13,
    }

    enum WpsWdReadingOrder {
        wdReadingOrderRtl=0,
        wdReadingOrderLtr=1,
    }

    enum WpsWdCompatibilityMode {
        wdWord2007=12,
        wdWord2003=11,
        wdWord2013=15,
        wdWord2010=14,
        wdCurrent=65535,
    }

    enum WpsWdReadingLayoutMargin {
        wdAutomaticMargin=0,
        wdSuppressMargin=1,
        wdFullMargin=2,
    }

    enum WpsWdAraSpeller {
        wdInitialAlef=1,
        wdNone=0,
        wdFinalYaa=2,
        wdBoth=3,
    }

    enum WpsWdColor {
        wdColorGray05=15987699,
        wdColorAutomatic=-16777216,
        wdColorLightGreen=13434828,
        wdColorLightYellow=10092543,
        wdColorYellow=65535,
        wdColorGray625=6316128,
        wdColorBrightGreen=65280,
        wdColorBlue=16711680,
        wdColorBlack=0,
        wdColorTurquoise=16776960,
        wdColorRed=255,
        wdColorPink=16711935,
        wdColorLightTurquoise=16777164,
        wdColorWhite=16777215,
        wdColorGray15=14277081,
        wdColorDarkBlue=8388608,
        wdColorTeal=8421376,
        wdColorGray95=789516,
        wdColorGray65=5855577,
        wdColorGray60=6710886,
        wdColorGreen=32768,
        wdColorViolet=8388736,
        wdColorDarkRed=128,
        wdColorDarkYellow=32896,
        wdColorGray20=13421772,
        wdColorBrown=13209,
        wdColorOliveGreen=13107,
        wdColorGray90=1644825,
        wdColorGray375=10526880,
        wdColorGray125=14737632,
        wdColorLightOrange=39423,
        wdColorDarkGreen=13056,
        wdColorGray85=2500134,
        wdColorGray55=7566195,
        wdColorDarkTeal=6697728,
        wdColorTan=10079487,
        wdColorIndigo=10040115,
        wdColorOrange=26367,
        wdColorBlueGray=10053222,
        wdColorLime=52377,
        wdColorSeaGreen=6723891,
        wdColorGray10=15132390,
        wdColorAqua=13421619,
        wdColorSkyBlue=16763904,
        wdColorLightBlue=16737843,
        wdColorPaleBlue=16764057,
        wdColorGold=52479,
        wdColorPlum=6697881,
        wdColorGray25=12632256,
        wdColorRose=13408767,
        wdColorGray75=4210752,
        wdColorGray45=9211020,
        wdColorLavender=16751052,
        wdColorGray30=11776947,
        wdColorGray35=10921638,
        wdColorGray40=10066329,
        wdColorGray50=8421504,
        wdColorGray70=5000268,
        wdColorGray80=3355443,
        wdColorGray875=2105376,
    }

    enum WpsWdTablePosition {
        wdTableTop=-999999,
        wdTableRight=-999996,
        wdTableLeft=-999998,
        wdTableOutside=-999993,
        wdTableBottom=-999997,
        wdTableInside=-999994,
        wdTableCenter=-999995,
    }

    enum WpsWdDefaultTableBehavior {
        wdWord8TableBehavior=0,
        wdWord9TableBehavior=1,
    }

    enum WpsWdAutoFitBehavior {
        wdAutoFitFixed=0,
        wdAutoFitContent=1,
        wdAutoFitWindow=2,
    }

    enum WpsWdPreferredWidthType {
        wdPreferredWidthAuto=1,
        wdPreferredWidthPercent=2,
        wdPreferredWidthPoints=3,
    }

    enum WpsWdFramesetSizeType {
        wdFramesetSizeTypeRelative=2,
        wdFramesetSizeTypePercent=0,
        wdFramesetSizeTypeFixed=1,
    }

    enum WpsWdScrollbarType {
        wdScrollbarTypeYes=1,
        wdScrollbarTypeAuto=0,
        wdScrollbarTypeNo=2,
    }

    enum WpsWdTwoLinesInOneType {
        wdTwoLinesInOneSquareBrackets=3,
        wdTwoLinesInOneNone=0,
        wdTwoLinesInOneCurlyBrackets=5,
        wdTwoLinesInOneNoBrackets=1,
        wdTwoLinesInOneAngleBrackets=4,
        wdTwoLinesInOneParentheses=2,
    }

    enum WpsWpsPdfCopyRight {
        wpsPdfNotAllowCopy=0,
        wpsPdfFreeCopy=65535,
    }

    enum WpsWdHorizontalLineAlignment {
        wdHorizontalLineAlignLeft=0,
        wdHorizontalLineAlignCenter=1,
        wdHorizontalLineAlignRight=2,
    }

    enum WpsWdPhoneticGuideAlignmentType {
        wdPhoneticGuideAlignmentCenter=0,
        wdPhoneticGuideAlignmentZeroOneZero=1,
        wdPhoneticGuideAlignmentRightVertical=5,
        wdPhoneticGuideAlignmentRight=4,
        wdPhoneticGuideAlignmentOneTwoOne=2,
        wdPhoneticGuideAlignmentLeft=3,
    }

    enum WpsWdNewDocumentType {
        wdNewBlankDocument=0,
        wdNewEmailMessage=2,
        wdNewWebPage=1,
        wdNewFrameset=3,
        wdNewXMLDocument=4,
    }

    enum WpsWdKana {
        wdKanaKatakana=8,
        wdKanaHiragana=9,
    }

    enum WpsWdNumberStyleWordBasicBiDi {
        wdListNumberStyleBidi1=49,
        wdListNumberStyleBidi2=50,
        wdCaptionNumberStyleBidiLetter2=50,
        wdCaptionNumberStyleBidiLetter1=49,
        wdNoteNumberStyleBidiLetter2=50,
        wdNoteNumberStyleBidiLetter1=49,
        wdPageNumberStyleBidiLetter2=50,
        wdPageNumberStyleBidiLetter1=49,
    }

    enum WpsWdTCSCConverterDirection {
        wdTCSCConverterDirectionSCTC=0,
        wdTCSCConverterDirectionTCSC=1,
        wdTCSCConverterDirectionAuto=2,
    }

    enum WpsXlCopyPictureFormat {
        xlBitmap=2,
        xlPicture=-4147,
    }

    enum WpsWdDisableFeaturesIntroducedAfter {
        wd70=0,
        wd70FE=1,
        wd80=2,
    }

    enum WpsWdRecoveryType {
        wdFormatPlainText=22,
        wdPasteDefault=0,
        wdListRestartNumbering=8,
        wdSingleCellText=5,
        wdSingleCellTable=6,
        wdListContinueNumbering=7,
        wdTableInsertAsRows=11,
        wdChart=14,
        wdChartPicture=13,
        wdTableAppendTable=10,
        wdTableOriginalFormatting=12,
        wdChartLinked=15,
        wdFormatOriginalFormatting=16,
        wdListCombineWithExistingList=24,
        wdFormatSurroundingFormattingWithEmphasis=20,
        wdTableOverwriteCells=23,
        wdListDontMerge=25,
        wdUseDestinationStylesRecovery=19,
    }

    enum WpsWdLineEndingType {
        wdCRLF=0,
        wdLFCR=3,
        wdCROnly=1,
        wdLSPS=4,
        wdLFOnly=2,
    }

    enum WpsWdStyleSheetPrecedence {
        wdStyleSheetPrecedenceLowest=0,
        wdStyleSheetPrecedenceHighest=1,
        wdStyleSheetPrecedenceLower=-2,
        wdStyleSheetPrecedenceHigher=-1,
    }

    enum WpsWpsPdfCommentsMode {
        wpsPdfIgnoreComments=1,
        wpsPdfPrintCommentsOnly=2,
        wpsPdfCompatibleComments=3,
    }

    enum WpsWdEmailHTMLFidelity {
        wdEmailHTMLFidelityLow=1,
        wdEmailHTMLFidelityMedium=2,
        wdEmailHTMLFidelityHigh=3,
    }

    enum WpsWdMappedDataFields {
        wdDepartment=30,
        wdSuffix=6,
        wdSpouseNickname=26,
        wdLastName=5,
        wdCourtesyTitle=2,
        wdUniqueIdentifier=1,
        wdPostalCode=14,
        wdNickname=7,
        wdFirstName=3,
        wdCompany=9,
        wdMiddleName=4,
        wdCity=12,
        wdJobTitle=8,
        wdAddress3=29,
        wdEmailAddress=20,
        wdAddress2=11,
        wdAddress1=10,
        wdState=13,
        wdCountryRegion=15,
        wdBusinessPhone=16,
        wdBusinessFax=17,
        wdHomePhone=18,
        wdHomeFax=19,
        wdRubyFirstName=27,
        wdWebPageURL=21,
        wdSpouseCourtesyTitle=22,
        wdSpouseFirstName=23,
        wdSpouseMiddleName=24,
        wdSpouseLastName=25,
        wdRubyLastName=28,
    }

    enum WpsWdConditionCode {
        wdFirstRow=0,
        wdFirstColumn=4,
        wdEvenRowBanding=3,
        wdLastRow=1,
        wdOddRowBanding=2,
        wdNWCell=9,
        wdNECell=8,
        wdLastColumn=5,
        wdOddColumnBanding=6,
        wdEvenColumnBanding=7,
        wdSWCell=11,
        wdSECell=10,
    }

    enum WpsWdNumberSpacing {
        wdNumberSpacingDefault=0,
        wdNumberSpacingProportional=1,
        wdNumberSpacingTabular=2,
    }

    enum WpsWdCompareTarget {
        wdCompareTargetCurrent=1,
        wdCompareTargetSelected=0,
        wdCompareTargetNew=2,
    }

    enum WpsWdMergeTarget {
        wdMergeTargetCurrent=1,
        wdMergeTargetSelected=0,
        wdMergeTargetNew=2,
    }

    enum WpsWdUseFormattingFrom {
        wdFormattingFromSelected=1,
        wdFormattingFromCurrent=0,
        wdFormattingFromPrompt=2,
    }

    enum WpsWdRevisionsBalloonWidthType {
        wdBalloonWidthPercent=0,
        wdBalloonWidthPoints=1,
    }

    enum WpsWdRevisionsBalloonPrintOrientation {
        wdBalloonPrintOrientationAuto=0,
        wdBalloonPrintOrientationPreserve=1,
        wdBalloonPrintOrientationForceLandscape=2,
    }

    enum WpsWdRevisionsBalloonMargin {
        wdLeftMargin=0,
        wdRightMargin=1,
    }

    enum WpsWdTaskPanes {
        wdTaskPaneFormatting=0,
        wdTaskPaneRevealFormatting=1,
        wdTaskPaneDocumentActions=7,
        wdTaskPaneXMLStructure=5,
        wdTaskPaneMailMerge=2,
        wdTaskPaneTranslate=3,
        wdTaskPaneSearch=4,
        wdTaskPaneDocumentProtection=6,
        wdTaskPaneSharedWorkspace=8,
        wdTaskPaneHelp=9,
        wdTaskPaneResearch=10,
        wdTaskPaneApplyStyles=17,
        wdTaskPaneFaxService=11,
        wdTaskPaneXMLDocument=12,
        wdTaskPaneDocumentUpdates=13,
        wdTaskPaneSignature=14,
        wdTaskPaneSelection=19,
        wdTaskPaneStyleInspector=15,
        wdTaskPaneDocumentManagement=16,
        wdTaskPaneNav=18,
        wdTaskPaneProofing=20,
        wdTaskPaneXMLMapping=21,
        wdTaskPaneRevPaneFlex=22,
        wdTaskPaneThesaurus=23,
    }

    enum WpsWdShowFilter {
        wdShowFilterFormattingAvailable=4,
        wdShowFilterStylesAvailable=0,
        wdShowFilterStylesInUse=1,
        wdShowFilterStylesAll=2,
        wdShowFilterFormattingInUse=3,
        wdShowFilterFormattingRecommended=5,
    }

    enum WpsWdDocumentDirection {
        wdRightToLeft=1,
        wdLeftToRight=0,
    }

    enum WpsWdLanguageID2000 {
        wdChineseHongKong=3076,
        wdChineseMacao=5124,
        wdEnglishTrinidad=11273,
    }

    enum WpsWdLineType {
        wdTextLine=0,
        wdTableRow=1,
    }

    enum WpsWdPasteOptions {
        wdKeepSourceFormatting=0,
        wdMatchDestinationFormatting=1,
        wdKeepTextOnly=2,
        wdUseDestinationStyles=3,
    }

    enum WpsWdXMLNodeType {
        wdXMLNodeElement=1,
        wdXMLNodeAttribute=2,
    }

    enum WpsWdXMLSelectionChangeReason {
        wdXMLSelectionChangeReasonMove=0,
        wdXMLSelectionChangeReasonInsert=1,
        wdXMLSelectionChangeReasonDelete=2,
    }

    enum WpsWdXMLNodeLevel {
        wdXMLNodeLevelInline=0,
        wdXMLNodeLevelParagraph=1,
        wdXMLNodeLevelRow=2,
        wdXMLNodeLevelCell=3,
    }

    enum WpsWdSmartTagControlType {
        wdControlLabel=7,
        wdControlSmartTag=1,
        wdControlSeparator=5,
        wdControlImage=8,
        wdControlLink=2,
        wdControlRadioGroup=16,
        wdControlHelp=3,
        wdControlCheckbox=9,
        wdControlButton=6,
        wdControlHelpURL=4,
        wdControlTextbox=10,
        wdControlListbox=11,
        wdControlCombo=12,
        wdControlActiveX=13,
        wdControlDocumentFragment=14,
        wdControlDocumentFragmentURL=15,
    }

    enum WpsWdEditorType {
        wdEditorEveryone=-1,
        wdEditorEditors=-5,
        wdEditorOwners=-4,
        wdEditorCurrent=-6,
    }

    enum WpsWdXMLValidationStatus {
        wdXMLValidationStatusOK=0,
        wdXMLValidationStatusCustom=-1072898048,
    }

    enum WpsWdRemoveDocInfoType {
        wdRDITemplate=9,
        wdRDISendForReview=7,
        wdRDIAll=99,
        wdRDIRemovePersonalInformation=4,
        wdRDIComments=1,
        wdRDIDocumentProperties=8,
        wdRDIRoutingSlip=6,
        wdRDIRevisions=2,
        wdRDIVersions=3,
        wdRDIEmailHeader=5,
        wdRDIDocumentWorkspace=10,
        wdRDIInkAnnotations=11,
        wdRDIDocumentServerProperties=14,
        wdRDIDocumentManagementPolicy=15,
        wdRDIContentType=16,
        wdRDITaskpaneWebExtensions=17,
    }

    enum WpsWdMoveToTextMark {
        wdMoveToTextMarkNone=0,
        wdMoveToTextMarkDoubleStrikeThrough=7,
        wdMoveToTextMarkUnderline=3,
        wdMoveToTextMarkBold=1,
        wdMoveToTextMarkItalic=2,
        wdMoveToTextMarkDoubleUnderline=4,
        wdMoveToTextMarkColorOnly=5,
        wdMoveToTextMarkStrikeThrough=6,
    }

    enum WpsWdOMathFunctionType {
        wdOMathFunctionAcc=1,
        wdOMathFunctionBar=2,
        wdOMathFunctionBox=3,
        wdOMathFunctionBorderBox=4,
        wdOMathFunctionScrSubSup=18,
        wdOMathFunctionMat=12,
        wdOMathFunctionEqArray=6,
        wdOMathFunctionDelim=5,
        wdOMathFunctionFrac=7,
        wdOMathFunctionFunc=8,
        wdOMathFunctionGroupChar=9,
        wdOMathFunctionLimLow=10,
        wdOMathFunctionLimUpp=11,
        wdOMathFunctionNary=13,
        wdOMathFunctionPhantom=14,
        wdOMathFunctionScrPre=15,
        wdOMathFunctionRad=16,
        wdOMathFunctionScrSup=19,
        wdOMathFunctionScrSub=17,
        wdOMathFunctionText=20,
        wdOMathFunctionNormalText=21,
        wdOMathFunctionLiteralText=22,
    }

    enum WpsWdOMathHorizAlignType {
        wdOMathHorizAlignCenter=0,
        wdOMathHorizAlignLeft=1,
        wdOMathHorizAlignRight=2,
    }

    enum WpsWdOMathVertAlignType {
        wdOMathVertAlignCenter=0,
        wdOMathVertAlignTop=1,
        wdOMathVertAlignBottom=2,
    }

    enum WpsWdOMathFracType {
        wdOMathFracLin=3,
        wdOMathFracBar=0,
        wdOMathFracNoBar=1,
        wdOMathFracSkw=2,
    }

    enum WpsWdOMathType {
        wdOMathDisplay=0,
        wdOMathInline=1,
    }

    enum WpsWdOMathJc {
        wdOMathJcCenterGroup=1,
        wdOMathJcCenter=2,
        wdOMathJcRight=4,
        wdOMathJcLeft=3,
        wdOMathJcInline=7,
    }

    enum WpsWdContentControlType {
        wdContentControlRichText=0,
        wdContentControlText=1,
        wdContentControlPicture=2,
        wdContentControlCheckBox=8,
        wdContentControlGroup=7,
        wdContentControlDropdownList=4,
        wdContentControlComboBox=3,
        wdContentControlBuildingBlockGallery=5,
        wdContentControlDate=6,
        wdContentControlRepeatingSection=9,
    }

    enum WpsWdCompareDestination {
        wdCompareDestinationOriginal=0,
        wdCompareDestinationRevised=1,
        wdCompareDestinationNew=2,
    }

    enum WpsWdGranularity {
        wdGranularityCharLevel=0,
        wdGranularityWordLevel=1,
    }

    enum WpsWdMergeFormatFrom {
        wdMergeFormatFromOriginal=0,
        wdMergeFormatFromRevised=1,
        wdMergeFormatFromPrompt=2,
    }

    enum WpsWdBuildingBlockTypes {
        wdTypeCustomPageNumberBottom=26,
        wdTypeQuickParts=1,
        wdTypeCustomFooters=18,
        wdTypePageNumber=6,
        wdTypeTableOfContents=14,
        wdTypeHeaders=5,
        wdTypeCustomTableOfContents=28,
        wdTypeCoverPage=2,
        wdTypeEquations=3,
        wdTypeCustomCoverPage=16,
        wdTypeWatermarks=8,
        wdTypeFooters=4,
        wdTypeTables=7,
        wdTypeAutoText=9,
        wdTypeTextBox=10,
        wdTypeCustom4=32,
        wdTypePageNumberTop=11,
        wdTypePageNumberBottom=12,
        wdTypeCustomTextBox=24,
        wdTypePageNumberPage=13,
        wdTypeCustomTables=21,
        wdTypeCustomQuickParts=15,
        wdTypeCustomEquations=17,
        wdTypeCustomHeaders=19,
        wdTypeCustomPageNumber=20,
        wdTypeCustomWatermarks=22,
        wdTypeCustomAutoText=23,
        wdTypeCustomPageNumberTop=25,
        wdTypeCustomPageNumberPage=27,
        wdTypeBibliography=34,
        wdTypeCustom1=29,
        wdTypeCustom2=30,
        wdTypeCustom3=31,
        wdTypeCustom5=33,
        wdTypeCustomBibliography=35,
    }

    enum WpsWdAlignmentTabRelative {
        wdMargin=0,
        wdIndent=1,
    }

    enum WpsWdTextboxTightWrap {
        wdTightNone=0,
        wdTightAll=1,
        wdTightFirstAndLastLines=2,
        wdTightLastLineOnly=4,
        wdTightFirstLineOnly=3,
    }

    enum WpsWdShapeSizeRelative {
        wdShapeSizeRelativeNone=-999999,
    }

    enum WpsWdRelativeVerticalSize {
        wdRelativeVerticalSizeMargin=0,
        wdRelativeVerticalSizeInnerMarginArea=4,
        wdRelativeVerticalSizeBottomMarginArea=3,
        wdRelativeVerticalSizePage=1,
        wdRelativeVerticalSizeTopMarginArea=2,
        wdRelativeVerticalSizeOuterMarginArea=5,
    }

    enum WpsWdThemeColorIndex {
        wdNotThemeColor=-1,
        wdThemeColorMainDark1=0,
        wdThemeColorMainDark2=2,
        wdThemeColorMainLight1=1,
        wdThemeColorMainLight2=3,
        wdThemeColorAccent6=9,
        wdThemeColorAccent5=8,
        wdThemeColorAccent1=4,
        wdThemeColorAccent2=5,
        wdThemeColorAccent3=6,
        wdThemeColorAccent4=7,
        wdThemeColorHyperlink=10,
        wdThemeColorHyperlinkFollowed=11,
        wdThemeColorBackground2=14,
        wdThemeColorBackground1=12,
        wdThemeColorText2=15,
        wdThemeColorText1=13,
    }

    enum WpsWdExportFormat {
        wdExportFormatPDF=17,
        wdExportFormatXPS=18,
    }

    enum WpsWdExportOptimizeFor {
        wdExportOptimizeForPrint=0,
        wdExportOptimizeForOnScreen=1,
    }

    enum WpsXlBackground {
        xlBackgroundAutomatic=-4105,
        xlBackgroundOpaque=3,
        xlBackgroundTransparent=2,
    }

    enum WpsXlChartGallery {
        xlBuiltIn=21,
        xlAnyGallery=23,
        xlUserDefined=22,
    }

    enum WpsWpsPdfPrintRight {
        wpsPdfPrintLowQulityOnly=2,
        wpsPdfNotAllowPrint=1,
        wpsPdfFreePrint=3,
    }

    enum WpsXlDataLabelSeparator {
        xlDataLabelSeparatorDefault=1,
    }

    enum WpsXlPattern {
        xlPatternAutomatic=-4105,
        xlPatternChecker=9,
        xlPatternLightHorizontal=11,
        xlPatternGray8=18,
        xlPatternGray25=-4124,
        xlPatternGray50=-4125,
        xlPatternGray75=-4126,
        xlPatternCrissCross=16,
        xlPatternDown=-4121,
        xlPatternGray16=17,
        xlPatternGrid=15,
        xlPatternHorizontal=-4128,
        xlPatternLightDown=13,
        xlPatternLinearGradient=4000,
        xlPatternLightUp=14,
        xlPatternLightVertical=12,
        xlPatternNone=-4142,
        xlPatternSemiGray75=10,
        xlPatternSolid=1,
        xlPatternUp=-4162,
        xlPatternVertical=-4166,
        xlPatternRectangularGradient=4001,
    }

    enum WpsXlPictureAppearance {
        xlPrinter=2,
        xlScreen=1,
    }

    enum WpsXlRgbColor {
        xlAntiqueWhite=14150650,
        xlChartreuse=65407,
        xlAliceBlue=16775408,
        xlAquamarine=13959039,
        xlAqua=16776960,
        xlGray=8421504,
        xlAzure=16777200,
        xlLavender=16443110,
        xlDarkTurquoise=13749760,
        xlBeige=14480885,
        xlBlueViolet=14822282,
        xlBisque=12903679,
        xlDimGray=6908265,
        xlDimGrey=6908265,
        xlBlanchedAlmond=13495295,
        xlBlack=0,
        xlBlue=16711680,
        xlDarkGray=11119017,
        xlDarkCyan=9145088,
        xlBrown=2763429,
        xlBurlyWood=8894686,
        xlCadetBlue=10526303,
        xlLemonChiffon=13499135,
        xlDarkSlateBlue=9125192,
        xlCoral=5275647,
        xlCornflowerBlue=15570276,
        xlCornsilk=14481663,
        xlGainsboro=14474460,
        xlCrimson=3937500,
        xlDarkBlue=9109504,
        xlFuchsia=16711935,
        xlDarkSlateGray=5197615,
        xlDarkSlateGrey=5197615,
        xlDarkGoldenrod=755384,
        xlForestGreen=2263842,
        xlGreenYellow=3145645,
        xlDarkSeaGreen=9419919,
        xlTomato=4678655,
        xlDarkKhaki=7059389,
        xlDarkGreen=25600,
        xlOldLace=15136253,
        xlDarkGrey=11119017,
        xlDarkMagenta=9109643,
        xlLightBlue=15128749,
        xlDarkOliveGreen=3107669,
        xlDarkOrange=36095,
        xlDodgerBlue=16748574,
        xlDarkOrchid=13382297,
        xlDarkRed=139,
        xlDarkSalmon=8034025,
        xlDarkViolet=13828244,
        xlGrey=8421504,
        xlLightSkyBlue=16436871,
        xlLightGrey=13882323,
        xlFloralWhite=15792895,
        xlDeepPink=9639167,
        xlLightGray=13882323,
        xlLawnGreen=64636,
        xlDeepSkyBlue=16760576,
        xlPowderBlue=15130800,
        xlFireBrick=2237106,
        xlIvory=15794175,
        xlGhostWhite=16775416,
        xlGold=55295,
        xlThistle=14204888,
        xlGoldenrod=2139610,
        xlGreen=32768,
        xlHoneydew=15794160,
        xlHotPink=11823615,
        xlIndianRed=6053069,
        xlTeal=8421376,
        xlIndigo=8519755,
        xlKhaki=9234160,
        xlLavenderBlush=16118015,
        xlMintCream=16449525,
        xlLightCoral=8421616,
        xlLightCyan=9145088,
        xlLightGoldenrodYellow=13826810,
        xlLightGreen=9498256,
        xlLightPink=12695295,
        xlLightSalmon=8036607,
        xlLightSeaGreen=11186720,
        xlLightSlateGrey=10061943,
        xlLightSlateGray=10061943,
        xlLightSteelBlue=14599344,
        xlLightYellow=14745599,
        xlLime=65280,
        xlLimeGreen=3329330,
        xlLinen=15134970,
        xlMaroon=128,
        xlMediumAquamarine=11206502,
        xlMediumBlue=13434880,
        xlMediumOrchid=13850042,
        xlMediumPurple=14381203,
        xlMediumSeaGreen=7451452,
        xlMediumSlateBlue=15624315,
        xlMediumSpringGreen=10156544,
        xlMediumTurquoise=13422920,
        xlMediumVioletRed=8721863,
        xlMidnightBlue=7346457,
        xlMistyRose=14804223,
        xlMoccasin=11920639,
        xlSpringGreen=8388352,
        xlSandyBrown=6333684,
        xlNavajoWhite=11394815,
        xlNavy=8388608,
        xlNavyBlue=8388608,
        xlOlive=32896,
        xlOliveDrab=2330219,
        xlOrange=42495,
        xlOrangeRed=17919,
        xlOrchid=14053594,
        xlPaleGoldenrod=7071982,
        xlPaleGreen=10025880,
        xlPaleTurquoise=15658671,
        xlPaleVioletRed=9662683,
        xlPapayaWhip=14020607,
        xlPeachPuff=12180223,
        xlPeru=4163021,
        xlPink=13353215,
        xlPlum=14524637,
        xlPurple=8388736,
        xlRed=255,
        xlRosyBrown=9408444,
        xlRoyalBlue=14772545,
        xlSalmon=7504122,
        xlSeaGreen=5737262,
        xlSeashell=15660543,
        xlWheat=11788021,
        xlSienna=2970272,
        xlSilver=12632256,
        xlSkyBlue=15453831,
        xlSlateBlue=13458026,
        xlSlateGrey=9470064,
        xlSlateGray=9470064,
        xlSnow=16448255,
        xlSteelBlue=11829830,
        xlTan=9221330,
        xlTurquoise=13688896,
        xlYellow=65535,
        xlYellowGreen=3329434,
        xlViolet=15631086,
        xlWhite=16777215,
        xlWhiteSmoke=16119285,
    }

    enum WpsWdUpdateStyleListBehavior {
        wdListBehaviorKeepPreviousPattern=0,
        wdListBehaviorAddBulletsNumbering=1,
    }

    enum WpsXlOrientation {
        xlDownward=-4170,
        xlHorizontal=-4128,
        xlUpward=-4171,
        xlVertical=-4166,
    }

    enum WpsXlLineStyle {
        xlDash=-4115,
        xlContinuous=1,
        xlDashDot=4,
        xlDashDotDot=5,
        xlLineStyleNone=-4142,
        xlDouble=-4119,
        xlDot=-4118,
        xlSlantDashDot=13,
    }

    enum WpsWdLigatures {
        wdLigaturesNone=0,
        wdLigaturesStandard=1,
        wdLigaturesAll=15,
        wdLigaturesContextual=2,
        wdLigaturesStandardHistorical=5,
        wdLigaturesDiscretional=8,
        wdLigaturesHistorical=4,
        wdLigaturesStandardContextual=3,
        wdLigaturesContextualHistorical=6,
        wdLigaturesStandardDiscretional=9,
        wdLigaturesContextualDiscretional=10,
        wdLigaturesHistoricalDiscretional=12,
        wdLigaturesStandardContextualHistorical=7,
        wdLigaturesStandardContextualDiscretional=11,
        wdLigaturesStandardHistoricalDiscretional=13,
        wdLigaturesContextualHistoricalDiscretional=14,
    }

    enum WpsWdNumberForm {
        wdNumberFormLining=1,
        wdNumberFormDefault=0,
        wdNumberFormOldStyle=2,
    }

    enum WpsWdStylisticSet {
        wdStylisticSet20=524288,
        wdStylisticSet01=1,
        wdStylisticSet02=2,
        wdStylisticSet03=4,
        wdStylisticSet04=8,
        wdStylisticSet08=128,
        wdStylisticSetDefault=0,
        wdStylisticSet05=16,
        wdStylisticSet06=32,
        wdStylisticSet07=64,
        wdStylisticSet09=256,
        wdStylisticSet10=512,
        wdStylisticSet11=1024,
        wdStylisticSet12=2048,
        wdStylisticSet13=4096,
        wdStylisticSet14=8192,
        wdStylisticSet15=16384,
        wdStylisticSet16=32768,
        wdStylisticSet17=65536,
        wdStylisticSet18=131072,
        wdStylisticSet19=262144,
    }

    enum WpsWdProtectedViewCloseReason {
        wdProtectedViewCloseNormal=0,
        wdProtectedViewCloseEdit=1,
        wdProtectedViewCloseForced=2,
    }

    enum WpsWdPortugueseReform {
        wdPortuguesePreReform=1,
        wdPortuguesePostReform=2,
        wdPortugueseBoth=3,
    }

    enum WpsWdContentControlAppearance {
        wdContentControlHidden=2,
        wdContentControlBoundingBox=0,
        wdContentControlTags=1,
    }

    enum WpsWdPageColor {
        wdPageColorNone=0,
        wdPageColorSepia=1,
        wdPageColorInverse=2,
    }

    enum WpsWdColumnWidth {
        wdColumnWidthNarrow=1,
        wdColumnWidthDefault=2,
        wdColumnWidthWide=3,
    }

    enum WpsWdRevisionsMarkup {
        wdRevisionsMarkupSimple=1,
        wdRevisionsMarkupNone=0,
        wdRevisionsMarkupAll=2,
    }

    enum WpsWpsPdfEditRight {
        wpsPdfAssemble=1,
        wpsPdfFillForm=2,
        wpsPdfAnnotate=3,
        wpsPdfModify=4,
    }
}