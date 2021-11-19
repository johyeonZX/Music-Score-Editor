/// <reference path="lib.kso.d.ts" />

declare namespace Wpp {

    interface WppThreeDFormat extends Kso.KsoThreeDFormat {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppPresentation {
        /**
		* Signatures
		**/
        readonly Signatures: Kso.KsoSignatureSet;

        /**
		* NotesMaster
		**/
        readonly NotesMaster: WppMaster;

        AddTitleMaster(TitleMaster?: WppMaster): void;

        /**
		* HasTitleMaster
		**/
        readonly HasTitleMaster: Kso.KsoMsoTriState;

        FollowHyperlink(Address?: string, SubAddress?: string, NewWindow?: boolean, AddHistory?: boolean, ExtraInfo?: string, Method?: Kso.KsoMsoExtraInfoMethod, HeaderInfo?: string): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        ApplyTemplate2(FileName?: string, VariantGUID?: string): void;

        ApplyTemplate(FileName?: string): void;

        /**
		* FarEastLineBreakLevel
		**/
        FarEastLineBreakLevel: WppPpFarEastLineBreakLevel;

        /**
		* BuiltInDocumentProperties
		**/
        readonly BuiltInDocumentProperties: any;

        Save(): void;

        /**
		* TitleMaster
		**/
        readonly TitleMaster: WppMaster;

        Unused(): void;

        /**
		* SlideMaster
		**/
        readonly SlideMaster: WppMaster;

        /**
		* TemplateName
		**/
        readonly TemplateName: string;

        /**
		* HandoutMaster
		**/
        readonly HandoutMaster: WppMaster;

        /**
		* HTMLProject
		**/
        readonly HTMLProject: Kso.KsoHTMLProject;

        /**
		* Slides
		**/
        readonly Slides: WppSlides;

        /**
		* ExtraColors
		**/
        readonly ExtraColors: WppExtraColors;

        /**
		* PageSetup
		**/
        readonly PageSetup: WppPageSetup;

        /**
		* ColorSchemes
		**/
        readonly ColorSchemes: WppColorSchemes;

        /**
		* SlideShowSettings
		**/
        readonly SlideShowSettings: WppSlideShowSettings;

        /**
		* CustomDocumentProperties
		**/
        readonly CustomDocumentProperties: any;

        /**
		* Fonts
		**/
        readonly Fonts: WppFonts;

        /**
		* Windows
		**/
        readonly Windows: WppDocumentWindows;

        ReloadAs(cp?: Kso.KsoMsoEncoding): void;

        /**
		* LayoutDirection
		**/
        LayoutDirection: WppPpDirection;

        /**
		* Tags
		**/
        readonly Tags: WppTags;

        /**
		* PasswordEncryptionFileProperties
		**/
        readonly PasswordEncryptionFileProperties: boolean;

        /**
		* DefaultShape
		**/
        readonly DefaultShape: Kso.KsoShape;

        /**
		* ReadOnly
		**/
        readonly ReadOnly: Kso.KsoMsoTriState;

        SetUndoText(Text?: string): void;

        /**
		* FullName
		**/
        readonly FullName: string;

        SaveAs(FileName?: string, FileFormat?: WppPpSaveAsFileType, EmbedTrueTypeFonts?: Kso.KsoMsoTriState): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Path
		**/
        readonly Path: string;

        /**
		* VBASigned
		**/
        readonly VBASigned: Kso.KsoMsoTriState;

        /**
		* Saved
		**/
        Saved: Kso.KsoMsoTriState;

        NewWindow(NewWindow?: WppDocumentWindow): void;

        Close(): void;

        AddToFavorites(): void;

        CanCheckIn(CanCheckIn?: boolean): void;

        /**
		* PrintOptions
		**/
        readonly PrintOptions: WppPrintOptions;

        PrintOut(From?: number, To?: number, PrintToFile?: string, Copies?: number, Collate?: Kso.KsoMsoTriState): void;

        SaveCopyAs(FileName?: string, FileFormat?: WppPpSaveAsFileType, EmbedTrueTypeFonts?: Kso.KsoMsoTriState): void;

        /**
		* Designs
		**/
        readonly Designs: WppDesigns;

        /**
		* NoLineBreakBefore
		**/
        NoLineBreakBefore: string;

        MakeIntoTemplate(IsDesignTemplate?: Kso.KsoMsoTriState): void;

        Export(Path?: string, FilterName?: string, ScaleWidth?: number, ScaleHeight?: number): void;

        /**
		* Container
		**/
        readonly Container: any;

        /**
		* DisplayComments
		**/
        DisplayComments: Kso.KsoMsoTriState;

        /**
		* GridDistance
		**/
        GridDistance: number;

        /**
		* WebOptions
		**/
        readonly WebOptions: WppWebOptions;

        /**
		* NoLineBreakAfter
		**/
        NoLineBreakAfter: string;

        UpdateLinks(): void;

        sblt(s?: string): void;

        Convert2(FileName?: string): void;

        /**
		* PasswordEncryptionProvider
		**/
        readonly PasswordEncryptionProvider: string;

        /**
		* SlideShowWindow
		**/
        readonly SlideShowWindow: WppSlideShowWindow;

        /**
		* EnvelopeVisible
		**/
        EnvelopeVisible: Kso.KsoMsoTriState;

        /**
		* FarEastLineBreakLanguage
		**/
        FarEastLineBreakLanguage: Kso.KsoMsoFarEastLineBreakLanguageID;

        WebPagePreview(): void;

        Merge(Path?: string): void;

        /**
		* DefaultLanguageID
		**/
        DefaultLanguageID: Kso.KsoMsoLanguageID;

        /**
		* CommandBars
		**/
        readonly CommandBars: Kso.KsoCommandBars;

        /**
		* PublishObjects
		**/
        readonly PublishObjects: WppPublishObjects;

        /**
		* SnapToGrid
		**/
        SnapToGrid: Kso.KsoMsoTriState;

        CheckIn(SaveChanges?: boolean, Comments?: any, MakePublic?: any): void;

        /**
		* RemovePersonalInformation
		**/
        RemovePersonalInformation: Kso.KsoMsoTriState;

        SendForReview(Recipients?: string, Subject?: string, ShowMessage?: boolean, IncludeAttachment?: any): void;

        ReplyWithChanges(ShowMessage?: boolean): void;

        EndReview(): void;

        /**
		* HasRevisionInfo
		**/
        readonly HasRevisionInfo: WppPpRevisionInfo;

        AddBaseline(FileName?: string): void;

        /**
		* CustomXMLParts
		**/
        readonly CustomXMLParts: Kso.KsoCustomXMLParts;

        RemoveBaseline(): void;

        /**
		* PasswordEncryptionAlgorithm
		**/
        readonly PasswordEncryptionAlgorithm: string;

        /**
		* PasswordEncryptionKeyLength
		**/
        readonly PasswordEncryptionKeyLength: number;

        SetPasswordEncryptionOptions(PasswordEncryptionProvider?: string, PasswordEncryptionAlgorithm?: string, PasswordEncryptionKeyLength?: number, PasswordEncryptionFileProperties?: boolean): void;

        /**
		* Password
		**/
        Password: string;

        /**
		* WritePassword
		**/
        WritePassword: string;

        /**
		* Permission
		**/
        readonly Permission: Kso.KsoPermission;

        /**
		* SharedWorkspace
		**/
        readonly SharedWorkspace: Kso.KsoSharedWorkspace;

        /**
		* Sync
		**/
        readonly Sync: Kso.KsoSync;

        SendFaxOverInternet(Recipients?: string, Subject?: string, ShowMessage?: boolean): void;

        /**
		* DocumentLibraryVersions
		**/
        readonly DocumentLibraryVersions: Kso.KsoDocumentLibraryVersions;

        /**
		* ContentTypeProperties
		**/
        readonly ContentTypeProperties: Kso.KsoMetaProperties;

        /**
		* SectionCount
		**/
        readonly SectionCount: number;

        /**
		* HasSections
		**/
        readonly HasSections: boolean;

        NewSectionAfter(Index?: number, AfterSlide?: boolean, sectionTitle?: string, newSectionIndex?: number): void;

        DeleteSection(Index?: number): void;

        DisableSections(): void;

        sectionTitle(Index?: number, sectionTitle?: string): void;

        RemoveDocumentInformation(Type?: WppPpRemoveDocInfoType): void;

        CheckInWithVersion(SaveChanges?: boolean, Comments?: any, MakePublic?: any, VersionType?: any): void;

        ExportAsFixedFormat(Path?: string, FixedFormatType?: WppPpFixedFormatType, Intent?: WppPpFixedFormatIntent, FrameSlides?: Kso.KsoMsoTriState, HandoutOrder?: WppPpPrintHandoutOrder, OutputType?: WppPpPrintOutputType, PrintHiddenSlides?: Kso.KsoMsoTriState, PrintRange?: WppPrintRange, RangeType?: WppPpPrintRangeType, SlideShowName?: string, IncludeDocProperties?: boolean, KeepIRMSettings?: boolean, DocStructureTags?: boolean, BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, ExternalExporter?: any): void;

        /**
		* ServerPolicy
		**/
        readonly ServerPolicy: Kso.KsoServerPolicy;

        GetWorkflowTasks(GetWorkflowTasks?: Kso.KsoWorkflowTasks): void;

        GetWorkflowTemplates(GetWorkflowTemplates?: Kso.KsoWorkflowTemplates): void;

        LockServerFile(): void;

        /**
		* HasVBProject
		**/
        readonly HasVBProject: boolean;

        /**
		* DocumentInspectors
		**/
        readonly DocumentInspectors: Kso.KsoDocumentInspectors;

        /**
		* Final
		**/
        Final: boolean;

        ApplyTheme(themeName?: string): void;

        /**
		* CustomerData
		**/
        readonly CustomerData: WppCustomerData;

        /**
		* Research
		**/
        readonly Research: WppResearch;

        PublishSlides(SlideLibraryUrl?: string, Overwrite?: boolean, UseSlideOrder?: boolean): void;

        /**
		* EncryptionProvider
		**/
        EncryptionProvider: string;

        Convert(): void;

        /**
		* SectionProperties
		**/
        readonly SectionProperties: WppSectionProperties;

        /**
		* Coauthoring
		**/
        readonly Coauthoring: WppCoauthoring;

        MergeWithBaseline(withPresentation?: string, baselinePresentation?: string): void;

        /**
		* InMergeMode
		**/
        readonly InMergeMode: boolean;

        AcceptAll(): void;

        RejectAll(): void;

        EnsureAllMediaUpgraded(): void;

        /**
		* Broadcast
		**/
        readonly Broadcast: WppBroadcast;

        /**
		* HasNotesMaster
		**/
        readonly HasNotesMaster: boolean;

        /**
		* HasHandoutMaster
		**/
        readonly HasHandoutMaster: boolean;

        /**
		* CreateVideoStatus
		**/
        readonly CreateVideoStatus: WppPpMediaTaskStatus;

        CreateVideo(FileName?: string, UseTimingsAndNarrations?: boolean, DefaultSlideDuration?: number, VertResolution?: number, FramesPerSecond?: number, Quality?: number): void;

        /**
		* ChartDataPointTrack
		**/
        ChartDataPointTrack: boolean;

        ExportAsFixedFormat2(Path?: string, FixedFormatType?: WppPpFixedFormatType, Intent?: WppPpFixedFormatIntent, FrameSlides?: Kso.KsoMsoTriState, HandoutOrder?: WppPpPrintHandoutOrder, OutputType?: WppPpPrintOutputType, PrintHiddenSlides?: Kso.KsoMsoTriState, PrintRange?: WppPrintRange, RangeType?: WppPpPrintRangeType, SlideShowName?: string, IncludeDocProperties?: boolean, KeepIRMSettings?: boolean, DocStructureTags?: boolean, BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, IncludeMarkup?: boolean, ExternalExporter?: any): void;

        /**
		* Guides
		**/
        readonly Guides: WppGuides;

    }

    interface WppPresentations {
        Open(FileName?: string, ReadOnly?: Kso.KsoMsoTriState, Untitled?: Kso.KsoMsoTriState, WithWindow?: Kso.KsoMsoTriState, Open?: WppPresentation): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        CheckOut(FileName?: string): void;

        Item(Index?: any, Item?: WppPresentation): void;

        Add(WithWindow?: Kso.KsoMsoTriState, Add?: WppPresentation): void;

        OpenOld(FileName?: string, ReadOnly?: Kso.KsoMsoTriState, Untitled?: Kso.KsoMsoTriState, WithWindow?: Kso.KsoMsoTriState, OpenOld?: WppPresentation): void;

        CanCheckOut(FileName?: string, CanCheckOut?: boolean): void;

        Open2007(FileName?: string, ReadOnly?: Kso.KsoMsoTriState, Untitled?: Kso.KsoMsoTriState, WithWindow?: Kso.KsoMsoTriState, OpenAndRepair?: Kso.KsoMsoTriState, Open2007?: WppPresentation): void;

    }

    interface WppBorders {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(BorderType?: WppPpBorderType, Item?: Kso.KsoLineFormat): void;

    }

    interface WppDiagramNode extends Kso.KsoDiagramNode {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppTabStops {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* DefaultSpacing
		**/
        DefaultSpacing: number;

        Item(Index?: number, Item?: WppTabStop): void;

        Add(Type?: WppPpTabStopType, Position?: number, Add?: WppTabStop): void;

    }

    interface WppMasterEvents {}

    interface WppApplication {
        /**
		* Path
		**/
        readonly Path: string;

        /**
		* ProductCode
		**/
        readonly ProductCode: string;

        /**
		* Presentations
		**/
        readonly Presentations: WppPresentations;

        /**
		* Windows
		**/
        readonly Windows: WppDocumentWindows;

        /**
		* Assistance
		**/
        readonly Assistance: Kso.KsoAssistance;

        /**
		* DisplayAlerts
		**/
        DisplayAlerts: WppPpAlertLevel;

        /**
		* MsoDebugOptions
		**/
        readonly MsoDebugOptions: Kso.KsoMsoDebugOptions;

        /**
		* Assistant
		**/
        readonly Assistant: Kso.KsoAssistant;

        /**
		* Dialogs
		**/
        readonly Dialogs: any;

        /**
		* CommandBars
		**/
        readonly CommandBars: Kso.KsoCommandBars;

        /**
		* ActiveEncryptionSession
		**/
        readonly ActiveEncryptionSession: number;

        /**
		* ActiveWindow
		**/
        readonly ActiveWindow: WppDocumentWindow;

        /**
		* AutoCorrect
		**/
        readonly AutoCorrect: WppAutoCorrect;

        /**
		* Top
		**/
        Top: number;

        /**
		* SlideShowWindows
		**/
        readonly SlideShowWindows: WppSlideShowWindows;

        /**
		* Options
		**/
        readonly Options: WppOptions;

        /**
		* ActivePresentation
		**/
        readonly ActivePresentation: WppPresentation;

        /**
		* ActivePrinter
		**/
        readonly ActivePrinter: string;

        /**
		* Name
		**/
        readonly Name: string;

        Activate(): void;

        /**
		* Caption
		**/
        Caption: string;

        SetOptionFlag(Option?: number, State?: boolean, Persist?: boolean): void;

        /**
		* FileSearch
		**/
        readonly FileSearch: Kso.KsoFileSearch;

        /**
		* FileFind
		**/
        readonly FileFind: Kso.KsoFind;

        /**
		* Build
		**/
        readonly Build: string;

        /**
		* SmartArtLayouts
		**/
        readonly SmartArtLayouts: Kso.KsoSmartArtLayouts;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Version
		**/
        readonly Version: string;

        /**
		* OperatingSystem
		**/
        readonly OperatingSystem: string;

        /**
		* AddIns
		**/
        readonly AddIns: WppAddIns;

        /**
		* FileConverters
		**/
        readonly FileConverters: WppFileConverters;

        /**
		* Height
		**/
        Height: number;

        Help(HelpFile?: string, ContextID?: number): void;

        Quit(): void;

        OpenThemeFile(themeFileName?: string, Theme?: WppTheme): void;

        LaunchSendToPPTDialog(SlideUrls?: any): void;

        Run(MacroName?: string, safeArrayOfParams?: any[], Run?: any): void;

        /**
		* Left
		**/
        Left: number;

        PPFileDialog(Type?: WppPpFileDialogType, PPFileDialog?: any): void;

        /**
		* SmartArtQuickStyles
		**/
        readonly SmartArtQuickStyles: Kso.KsoSmartArtQuickStyles;

        /**
		* HWND
		**/
        readonly HWND: number;

        LaunchSpelling(pWindow?: WppDocumentWindow): void;

        /**
		* Width
		**/
        Width: number;

        /**
		* DisplayDocumentInformationPanel
		**/
        DisplayDocumentInformationPanel: boolean;

        /**
		* WindowState
		**/
        WindowState: WppPpWindowState;

        /**
		* Visible
		**/
        Visible: Kso.KsoMsoTriState;

        /**
		* Active
		**/
        readonly Active: Kso.KsoMsoTriState;

        /**
		* AnswerWizard
		**/
        readonly AnswerWizard: Kso.KsoAnswerWizard;

        /**
		* COMAddIns
		**/
        readonly COMAddIns: Kso.KsoCOMAddIns;

        /**
		* ShowStartupDialog
		**/
        ShowStartupDialog: Kso.KsoMsoTriState;

        /**
		* DefaultWebOptions
		**/
        readonly DefaultWebOptions: WppDefaultWebOptions;

        /**
		* LanguageSettings
		**/
        readonly LanguageSettings: Kso.KsoLanguageSettings;

        /**
		* ShowWindowsInTaskbar
		**/
        ShowWindowsInTaskbar: Kso.KsoMsoTriState;

        GetOptionFlag(Option?: number, Persist?: boolean, GetOptionFlag?: boolean): void;

        /**
		* Marker
		**/
        readonly Marker: any;

        /**
		* FeatureInstall
		**/
        FeatureInstall: Kso.KsoMsoFeatureInstall;

        /**
		* SmartArtColors
		**/
        readonly SmartArtColors: Kso.KsoSmartArtColors;

        FileDialog(Type?: Kso.KsoMsoFileDialogType, FileDialog?: Kso.KsoFileDialog): void;

        /**
		* DisplayGridLines
		**/
        DisplayGridLines: Kso.KsoMsoTriState;

        /**
		* AutomationSecurity
		**/
        AutomationSecurity: Kso.KsoMsoAutomationSecurity;

        /**
		* NewPresentation
		**/
        readonly NewPresentation: Kso.KsoNewFile;

        SetPerfMarker(Marker?: number): void;

        LaunchPublishSlidesDialog(SlideLibraryUrl?: string): void;

        /**
		* ProtectedViewWindows
		**/
        readonly ProtectedViewWindows: WppProtectedViewWindows;

        /**
		* ActiveProtectedViewWindow
		**/
        readonly ActiveProtectedViewWindow: WppProtectedViewWindow;

        /**
		* IsSandboxed
		**/
        readonly IsSandboxed: boolean;

        /**
		* ResampleMediaTasks
		**/
        readonly ResampleMediaTasks: WppResampleMediaTasks;

        StartNewUndoEntry(): void;

        /**
		* FileValidation
		**/
        FileValidation: Kso.KsoMsoFileValidationMode;

        /**
		* ChartDataPointTrack
		**/
        ChartDataPointTrack: boolean;

        /**
		* DisplayGuides
		**/
        DisplayGuides: Kso.KsoMsoTriState;

    }

    interface WppTimeLine {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* MainSequence
		**/
        readonly MainSequence: WppSequence;

        /**
		* InteractiveSequences
		**/
        readonly InteractiveSequences: WppSequences;

    }

    interface WppShadowFormat extends Kso.KsoShadowFormat {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppCollection {
        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Index(Index?: number, _Index?: any): void;

        /**
		* Count
		**/
        readonly Count: number;

    }

    interface WppSelection {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Copy(): void;

        Cut(): void;

        Unselect(): void;

        /**
		* Type
		**/
        readonly Type: WppPpSelectionType;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* SlideRange
		**/
        readonly SlideRange: WppSlideRange;

        /**
		* TextRange
		**/
        readonly TextRange: WppTextRange;

        /**
		* ChildShapeRange
		**/
        readonly ChildShapeRange: Kso.KsoShapeRange;

        /**
		* HasChildShapeRange
		**/
        readonly HasChildShapeRange: boolean;

        /**
		* TextRange2
		**/
        readonly TextRange2: Kso.KsoTextRange2;

    }

    interface WppPowerRex {
        OnAsfEncoderEvent(erorCode?: any, bstrErrorDesc?: any): void;

    }

    interface WppShapes extends Kso.KsoShapes {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

        AddTitle(Title?: Kso.KsoShape): void;

        AddOLEObject(Left?: number, Top?: number, Width?: number, Height?: number, ClassName?: string, FileName?: string, DisplayAsIcon?: Kso.KsoMsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Kso.KsoMsoTriState, OLEObject?: Kso.KsoShape): void;

        /**
		* Title
		**/
        readonly Title: Kso.KsoShape;

        /**
		* HasTitle
		**/
        readonly HasTitle: Kso.KsoMsoTriState;

        /**
		* Placeholders
		**/
        readonly Placeholders: WppPlaceholders;

        AddComment(Left?: number, Top?: number, Width?: number, Height?: number, Comment?: Kso.KsoShape): void;

        AddPlaceholder(Type?: WppPpPlaceholderType, Left?: number, Top?: number, Width?: number, Height?: number, Placeholder?: Kso.KsoShape): void;

        AddMediaObject(FileName?: string, Left?: number, Top?: number, Width?: number, Height?: number, MediaObject?: Kso.KsoShape): void;

        Paste(Paste?: Kso.KsoShapeRange): void;

        PasteSpecial(DataType?: WppPpPasteDataType, DisplayAsIcon?: Kso.KsoMsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Kso.KsoMsoTriState, PasteSpecial?: Kso.KsoShapeRange): void;

        AddMediaObject2(FileName?: string, LinkToFile?: Kso.KsoMsoTriState, SaveWithDocument?: Kso.KsoMsoTriState, Left?: number, Top?: number, Width?: number, Height?: number, MediaObject2?: Kso.KsoShape): void;

        AddMediaObjectFromEmbedTag(EmbedTag?: string, Left?: number, Top?: number, Width?: number, Height?: number, MediaObjectFromEmbedTag?: Kso.KsoShape): void;

    }

    interface WppDiagram {
        /**
		* Nodes
		**/
        readonly Nodes: Kso.KsoDiagramNodes;

        /**
		* Application
		**/
        readonly Application: any;

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

    interface WppEApplication {
        SlideShowOnPrevious(Wn?: WppSlideShowWindow): void;

        WindowSelectionChange(Sel?: WppSelection): void;

        PresentationBeforeClose(Pres?: WppPresentation, Cancel?: boolean): void;

        WindowBeforeRightClick(Sel?: WppSelection, Cancel?: boolean): void;

        WindowBeforeDoubleClick(Sel?: WppSelection, Cancel?: boolean): void;

        PresentationNewSlide(Sld?: WppSlide): void;

        PresentationCloseFinal(Pres?: WppPresentation): void;

        PresentationClose(Pres?: WppPresentation): void;

        NewPresentation(Pres?: WppPresentation): void;

        PresentationSync(Pres?: WppPresentation, SyncEventType?: Kso.KsoMsoSyncEventType): void;

        PresentationSave(Pres?: WppPresentation): void;

        PresentationOpen(Pres?: WppPresentation): void;

        AfterShapeSizeChange(shp?: Kso.KsoShape): void;

        AfterPresentationOpen(Pres?: WppPresentation): void;

        WindowActivate(Pres?: WppPresentation, Wn?: WppDocumentWindow): void;

        AfterDragDropOnSlide(Sld?: WppSlide, X?: number, Y?: number): void;

        SlideShowBegin(Wn?: WppSlideShowWindow): void;

        WindowDeactivate(Pres?: WppPresentation, Wn?: WppDocumentWindow): void;

        ProtectedViewWindowOpen(ProtViewWindow?: WppProtectedViewWindow): void;

        SlideShowNextBuild(Wn?: WppSlideShowWindow): void;

        SlideShowNextClick(Wn?: WppSlideShowWindow, nEffect?: WppEffect): void;

        SlideShowNextSlide(Wn?: WppSlideShowWindow): void;

        SlideShowEnd(Pres?: WppPresentation): void;

        PresentationPrint(Pres?: WppPresentation): void;

        SlideSelectionChanged(SldRange?: WppSlideRange): void;

        ProtectedViewWindowActivate(ProtViewWindow?: WppProtectedViewWindow): void;

        ColorSchemeChanged(SldRange?: WppSlideRange): void;

        PresentationBeforeSave(Pres?: WppPresentation, Cancel?: boolean): void;

        AfterNewPresentation(Pres?: WppPresentation): void;

        SlideShowOnNext(Wn?: WppSlideShowWindow): void;

        ProtectedViewWindowBeforeEdit(ProtViewWindow?: WppProtectedViewWindow, Cancel?: boolean): void;

        ProtectedViewWindowBeforeClose(ProtViewWindow?: WppProtectedViewWindow, ProtectedViewCloseReason?: WppPpProtectedViewCloseReason, Cancel?: boolean): void;

        ProtectedViewWindowDeactivate(ProtViewWindow?: WppProtectedViewWindow): void;

    }

    interface WppRulerLevels {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppRulerLevel): void;

    }

    interface WppRulerLevel {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* FirstMargin
		**/
        FirstMargin: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* LeftMargin
		**/
        LeftMargin: number;

    }

    interface WppShapeRange extends Kso.KsoShapeRange {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* LinkFormat
		**/
        readonly LinkFormat: WppLinkFormat;

        /**
		* PlaceholderFormat
		**/
        readonly PlaceholderFormat: WppPlaceholderFormat;

        /**
		* MediaType
		**/
        readonly MediaType: WppPpMediaType;

        /**
		* HasSmartArt
		**/
        readonly HasSmartArt: Kso.KsoMsoTriState;

        /**
		* Tags
		**/
        readonly Tags: WppTags;

        Export(PathName?: string, Filter?: WppPpShapeFormat, ScaleWidth?: number, ScaleHeight?: number, ExportMode?: WppPpExportMode): void;

        /**
		* OLEFormat
		**/
        readonly OLEFormat: WppOLEFormat;

        /**
		* AnimationSettings
		**/
        readonly AnimationSettings: WppAnimationSettings;

        /**
		* ActionSettings
		**/
        readonly ActionSettings: WppActionSettings;

        /**
		* HasTextFrame
		**/
        readonly HasTextFrame: Kso.KsoMsoTriState;

        /**
		* SoundFormat
		**/
        readonly SoundFormat: WppSoundFormat;

        _Index(Index?: number, _Index?: any): void;

        GetPolygonalRepresentation(maxPointsInBuffer?: number, pPoints?: number, numPointsInPolygon?: number, IsOpen?: Kso.KsoMsoTriState): void;

        /**
		* HasTable
		**/
        readonly HasTable: Kso.KsoMsoTriState;

        /**
		* Table
		**/
        readonly Table: WppTable;

        /**
		* CustomerData
		**/
        readonly CustomerData: WppCustomerData;

        /**
		* SmartArt
		**/
        readonly SmartArt: Kso.KsoSmartArt;

        ConvertTextToSmartArt(Layout?: Kso.KsoSmartArtLayout): void;

        /**
		* MediaFormat
		**/
        readonly MediaFormat: WppMediaFormat;

        PickupAnimation(): void;

        ApplyAnimation(): void;

        UpgradeMedia(): void;

    }

    interface WppSlideRange {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Comments
		**/
        readonly Comments: WppComments;

        /**
		* Shapes
		**/
        readonly Shapes: Kso.KsoShapes;

        /**
		* SlideID
		**/
        readonly SlideID: number;

        /**
		* HeadersFooters
		**/
        readonly HeadersFooters: WppHeadersFooters;

        /**
		* Master
		**/
        readonly Master: WppMaster;

        /**
		* Tags
		**/
        readonly Tags: WppTags;

        /**
		* SlideShowTransition
		**/
        readonly SlideShowTransition: WppSlideShowTransition;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* ColorScheme
		**/
        ColorScheme: WppColorScheme;

        /**
		* Background
		**/
        readonly Background: Kso.KsoShapeRange;

        /**
		* PrintSteps
		**/
        readonly PrintSteps: number;

        /**
		* SlideNumber
		**/
        readonly SlideNumber: number;

        Select(): void;

        /**
		* Layout
		**/
        Layout: WppPpSlideLayout;

        Cut(): void;

        ApplyTemplate2(FileName?: string, VariantGUID?: string): void;

        MoveToSectionStart(toSection?: number): void;

        ApplyTemplate(FileName?: string): void;

        Copy(): void;

        /**
		* Design
		**/
        Design: WppDesign;

        Delete(): void;

        /**
		* Scripts
		**/
        readonly Scripts: Kso.KsoScripts;

        /**
		* SlideIndex
		**/
        readonly SlideIndex: number;

        /**
		* DisplayMasterShapes
		**/
        DisplayMasterShapes: Kso.KsoMsoTriState;

        PublishSlides(SlideLibraryUrl?: string, Overwrite?: boolean, UseSlideOrder?: boolean): void;

        /**
		* FollowMasterBackground
		**/
        FollowMasterBackground: Kso.KsoMsoTriState;

        /**
		* NotesPage
		**/
        readonly NotesPage: WppSlideRange;

        /**
		* Hyperlinks
		**/
        readonly Hyperlinks: WppHyperlinks;

        Export(FileName?: string, FilterName?: string, ScaleWidth?: number, ScaleHeight?: number): void;

        Item(Index?: any, Item?: WppSlide): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* BackgroundStyle
		**/
        BackgroundStyle: Kso.KsoMsoBackgroundStyleIndex;

        ApplyThemeColorScheme(themeColorSchemeName?: string): void;

        _Index(Index?: number, _Index?: any): void;

        MoveTo(toPos?: number): void;

        /**
		* TimeLine
		**/
        readonly TimeLine: WppTimeLine;

        /**
		* SectionNumber
		**/
        readonly SectionNumber: number;

        /**
		* CustomLayout
		**/
        CustomLayout: WppCustomLayout;

        ApplyTheme(themeName?: string): void;

        /**
		* ThemeColorScheme
		**/
        readonly ThemeColorScheme: Kso.KsoThemeColorScheme;

        /**
		* CustomerData
		**/
        readonly CustomerData: WppCustomerData;

        /**
		* sectionIndex
		**/
        readonly sectionIndex: number;

        /**
		* HasNotesPage
		**/
        readonly HasNotesPage: Kso.KsoMsoTriState;

    }

    interface WppTheme {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* ThemeVariants
		**/
        readonly ThemeVariants: WppThemeVariants;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface WppShape extends Kso.KsoShape {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* LinkFormat
		**/
        readonly LinkFormat: WppLinkFormat;

        /**
		* PlaceholderFormat
		**/
        readonly PlaceholderFormat: WppPlaceholderFormat;

        /**
		* MediaType
		**/
        readonly MediaType: WppPpMediaType;

        /**
		* Table
		**/
        readonly Table: WppTable;

        /**
		* Tags
		**/
        readonly Tags: WppTags;

        Export(PathName?: string, Filter?: WppPpShapeFormat, ScaleWidth?: number, ScaleHeight?: number, ExportMode?: WppPpExportMode): void;

        /**
		* OLEFormat
		**/
        readonly OLEFormat: WppOLEFormat;

        /**
		* AnimationSettings
		**/
        readonly AnimationSettings: WppAnimationSettings;

        /**
		* ActionSettings
		**/
        readonly ActionSettings: WppActionSettings;

        /**
		* HasTextFrame
		**/
        readonly HasTextFrame: Kso.KsoMsoTriState;

        /**
		* SoundFormat
		**/
        readonly SoundFormat: WppSoundFormat;

        /**
		* HasTable
		**/
        readonly HasTable: Kso.KsoMsoTriState;

        /**
		* CustomerData
		**/
        readonly CustomerData: WppCustomerData;

        /**
		* MediaFormat
		**/
        readonly MediaFormat: WppMediaFormat;

        PickupAnimation(): void;

        ApplyAnimation(): void;

        UpgradeMedia(): void;

    }

    interface WppChart {
        /**
		* Parent
		**/
        readonly Parent: any;

        ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;

        /**
		* PlotBy
		**/
        PlotBy: Kso.KsoXlRowCol;

        Refresh(): void;

        ApplyCustomType(ChartType?: Kso.KsoXlChartType, TypeName?: any): void;

        /**
		* ChartType
		**/
        ChartType: Kso.KsoXlChartType;

        /**
		* HasDataTable
		**/
        HasDataTable: boolean;

        SetSourceData(Source?: string, PlotBy?: any): void;

        /**
		* Perspective
		**/
        Perspective: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        GetChartElement(X?: number, Y?: number, ElementID?: number, Arg1?: number, Arg2?: number): void;

        /**
		* Column3DGroup
		**/
        readonly Column3DGroup: number;

        /**
		* ChartData
		**/
        readonly ChartData: WppChartData;

        AutoFormat(Gallery?: number, Format?: any): void;

        /**
		* Name
		**/
        Name: string;

        SetBackgroundPicture(FileName?: string): void;

        _ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, lcid?: number): void;

        SetDefaultChart(Name?: any): void;

        /**
		* DataTable
		**/
        readonly DataTable: WppDataTable;

        Paste(Type?: any, lcid?: number): void;

        /**
		* BarShape
		**/
        BarShape: Kso.KsoXlBarShape;

        /**
		* Title
		**/
        Title: string;

        /**
		* BackWall
		**/
        readonly BackWall: WppWalls;

        ApplyChartTemplate(FileName?: string): void;

        /**
		* SurfaceGroup
		**/
        readonly SurfaceGroup: number;

        PieGroups(Index?: any, lcid?: number, RHS?: any): void;

        SaveChartTemplate(FileName?: string): void;

        /**
		* SideWall
		**/
        readonly SideWall: WppWalls;

        /**
		* ChartStyle
		**/
        ChartStyle: any;

        ChartGroups(Index?: any, lcid?: number, RHS?: any): void;

        RadarGroups(Index?: any, lcid?: number, RHS?: any): void;

        ClearToMatchStyle(): void;

        /**
		* Floor
		**/
        readonly Floor: number;

        /**
		* HasPivotFields
		**/
        HasPivotFields: boolean;

        /**
		* ShowDataLabelsOverMaximum
		**/
        ShowDataLabelsOverMaximum: boolean;

        Axes(Type?: any, AxisGroup?: Kso.KsoXlAxisGroup, lcid?: number, RHS?: any): void;

        ApplyLayout(Layout?: number, ChartType?: any): void;

        /**
		* Shapes
		**/
        readonly Shapes: Kso.KsoShapes;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Area3DGroup
		**/
        readonly Area3DGroup: number;

        Copy(Before?: any, After?: any, lcid?: number): void;

        BarGroups(Index?: any, lcid?: number, RHS?: any): void;

        AreaGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Bar3DGroup
		**/
        readonly Bar3DGroup: number;

        /**
		* AutoScaling
		**/
        AutoScaling: number;

        ColumnGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* HasHiddenContent
		**/
        readonly HasHiddenContent: boolean;

        /**
		* Line3DGroup
		**/
        readonly Line3DGroup: number;

        Export(FileName?: string, FilterName?: any, Interactive?: any, RHS?: boolean): void;

        LineGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Pie3DGroup
		**/
        readonly Pie3DGroup: number;

        Delete(lcid?: number): void;

        DoughnutGroups(Index?: any, lcid?: number, RHS?: any): void;

        XYGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* ChartArea
		**/
        readonly ChartArea: number;

        /**
		* ChartTitle
		**/
        readonly ChartTitle: number;

        ChartWizard(Source?: any, Gallery?: any, Format?: any, PlotBy?: any, CategoryLabels?: any, SeriesLabels?: any, HasLegend?: any, Title?: any, CategoryTitle?: any, ValueTitle?: any, ExtraTitle?: any, lcid?: number): void;

        CopyPicture(Appearance?: WppXlPictureAppearance, Format?: WppXlCopyPictureFormat, Size?: WppXlPictureAppearance, LocaleID?: number): void;

        /**
		* Corners
		**/
        readonly Corners: number;

        /**
		* DepthPercent
		**/
        DepthPercent: number;

        /**
		* DisplayBlanksAs
		**/
        DisplayBlanksAs: number;

        /**
		* Elevation
		**/
        Elevation: number;

        /**
		* GapDepth
		**/
        GapDepth: number;

        HasAxis(Index1?: any, Index2?: any, lcid?: number, RHS?: any): void;

        /**
		* HasLegend
		**/
        HasLegend: number;

        /**
		* Legend
		**/
        readonly Legend: number;

        /**
		* HasTitle
		**/
        HasTitle: number;

        /**
		* HeightPercent
		**/
        HeightPercent: number;

        /**
		* PlotArea
		**/
        readonly PlotArea: number;

        /**
		* PlotVisibleOnly
		**/
        PlotVisibleOnly: number;

        /**
		* RightAngleAxes
		**/
        RightAngleAxes: number;

        /**
		* Rotation
		**/
        Rotation: number;

        Select(Replace?: any, lcid?: number): void;

        SeriesCollection(Index?: any, lcid?: number, RHS?: any): void;

        SetElement(Element?: Kso.KsoMsoChartElementType): void;

        /**
		* Subtype
		**/
        Subtype: number;

        /**
		* Type
		**/
        Type: number;

        /**
		* Walls
		**/
        readonly Walls: number;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

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

        /**
		* AlternativeText
		**/
        AlternativeText: string;

        FullSeriesCollection(Index?: any, ppFullSeriesCollection?: any): void;

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

    interface WppPlaceholders {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: Kso.KsoShape): void;

        FindByName(Index?: any, FindByName?: Kso.KsoShape): void;

    }

    interface WppDiagramNodeChildren extends Kso.KsoDiagramNodeChildren {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppHyperlinks {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppHyperlink): void;

    }

    interface WppAdjustments extends Kso.KsoAdjustments {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppAddIn {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Loaded
		**/
        Loaded: Kso.KsoMsoTriState;

        /**
		* FullName
		**/
        readonly FullName: string;

        /**
		* Path
		**/
        readonly Path: string;

        /**
		* AutoLoad
		**/
        AutoLoad: Kso.KsoMsoTriState;

        /**
		* Registered
		**/
        Registered: Kso.KsoMsoTriState;

        /**
		* DisplayAlerts
		**/
        DisplayAlerts: Kso.KsoMsoTriState;

        /**
		* RegisteredInHKLM
		**/
        readonly RegisteredInHKLM: Kso.KsoMsoTriState;

    }

    interface WppColorFormat extends Kso.KsoColorFormat {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppCalloutFormat extends Kso.KsoCalloutFormat {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppPublishObject {
        /**
		* RangeEnd
		**/
        RangeEnd: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* FileName
		**/
        FileName: string;

        /**
		* SpeakerNotes
		**/
        SpeakerNotes: Kso.KsoMsoTriState;

        /**
		* HTMLVersion
		**/
        HTMLVersion: WppPpHTMLVersion;

        /**
		* SourceType
		**/
        SourceType: WppPpPublishSourceType;

        /**
		* SlideShowName
		**/
        SlideShowName: string;

        Publish(): void;

        /**
		* RangeStart
		**/
        RangeStart: number;

    }

    interface WppGuide {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Orientation
		**/
        readonly Orientation: WppPpGuideOrientation;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Position
		**/
        Position: number;

        /**
		* Color
		**/
        readonly Color: Kso.KsoColorFormat;

    }

    interface WppRuler {
        /**
		* Levels
		**/
        readonly Levels: WppRulerLevels;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TabStops
		**/
        readonly TabStops: WppTabStops;

    }

    interface WppConnectorFormat extends Kso.KsoConnectorFormat {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppFillFormat extends Kso.KsoFillFormat {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppMotionEffect {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ToX
		**/
        ToX: number;

        /**
		* ToY
		**/
        ToY: number;

        /**
		* ByX
		**/
        ByX: number;

        /**
		* ByY
		**/
        ByY: number;

        /**
		* FromX
		**/
        FromX: number;

        /**
		* FromY
		**/
        FromY: number;

        /**
		* Path
		**/
        Path: string;

    }

    interface WppGroupShapes extends Kso.KsoGroupShapes {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppSoundEffect {
        ImportFromFile(FileName?: string): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Type
		**/
        Type: WppPpSoundEffectType;

        Play(): void;

    }

    interface WppObjectVerbs {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: string): void;

    }

    interface WppRows {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppRow): void;

        Add(BeforeRow?: number, Add?: WppRow): void;

    }

    interface WppLineFormat extends Kso.KsoLineFormat {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppPlaySettings {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* RewindMovie
		**/
        RewindMovie: Kso.KsoMsoTriState;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* LoopUntilStopped
		**/
        LoopUntilStopped: Kso.KsoMsoTriState;

        /**
		* HideWhileNotPlaying
		**/
        HideWhileNotPlaying: Kso.KsoMsoTriState;

        /**
		* ActionVerb
		**/
        ActionVerb: string;

        /**
		* PlayOnEntry
		**/
        PlayOnEntry: Kso.KsoMsoTriState;

        /**
		* StopAfterSlides
		**/
        StopAfterSlides: number;

        /**
		* PauseAnimation
		**/
        PauseAnimation: Kso.KsoMsoTriState;

    }

    interface WppShapeNodes extends Kso.KsoShapeNodes {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppHyperlink {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Follow(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Type
		**/
        readonly Type: Kso.KsoMsoHyperlinkType;

        /**
		* EmailSubject
		**/
        EmailSubject: string;

        /**
		* SubAddress
		**/
        SubAddress: string;

        /**
		* TextToDisplay
		**/
        TextToDisplay: string;

        /**
		* ScreenTip
		**/
        ScreenTip: string;

        /**
		* Address
		**/
        Address: string;

        AddToFavorites(): void;

        /**
		* ShowAndReturn
		**/
        ShowAndReturn: Kso.KsoMsoTriState;

        CreateNewDocument(FileName?: string, EditNow?: Kso.KsoMsoTriState, Overwrite?: Kso.KsoMsoTriState): void;

        Delete(): void;

    }

    interface WppShapeNode extends Kso.KsoShapeNode {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppPictureFormat extends Kso.KsoPictureFormat {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppTextEffectFormat extends Kso.KsoTextEffectFormat {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppChartBorder {
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
        readonly Application: WppApplication;

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

    interface WppCanvasShapes extends Kso.KsoCanvasShapes {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppOptions {
        /**
		* DisplayPasteOptions
		**/
        DisplayPasteOptions: Kso.KsoMsoTriState;

        /**
		* DoNotPromptForConvert
		**/
        DoNotPromptForConvert: Kso.KsoMsoTriState;

        /**
		* ShowCoauthoringMergeChanges
		**/
        ShowCoauthoringMergeChanges: boolean;

    }

    interface WppAnimationSettings {
        /**
		* AnimationOrder
		**/
        AnimationOrder: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* DimColor
		**/
        readonly DimColor: Kso.KsoColorFormat;

        /**
		* AdvanceTime
		**/
        AdvanceTime: number;

        /**
		* EntryEffect
		**/
        EntryEffect: WppPpEntryEffect;

        /**
		* SoundEffect
		**/
        readonly SoundEffect: WppSoundEffect;

        /**
		* AfterEffect
		**/
        AfterEffect: WppPpAfterEffect;

        /**
		* AdvanceMode
		**/
        AdvanceMode: WppPpAdvanceMode;

        /**
		* PlaySettings
		**/
        readonly PlaySettings: WppPlaySettings;

        /**
		* TextLevelEffect
		**/
        TextLevelEffect: WppPpTextLevelEffect;

        /**
		* TextUnitEffect
		**/
        TextUnitEffect: WppPpTextUnitEffect;

        /**
		* Animate
		**/
        Animate: Kso.KsoMsoTriState;

        /**
		* AnimateBackground
		**/
        AnimateBackground: Kso.KsoMsoTriState;

        /**
		* AnimateTextInReverse
		**/
        AnimateTextInReverse: Kso.KsoMsoTriState;

        /**
		* ChartUnitEffect
		**/
        ChartUnitEffect: WppPpChartUnitEffect;

    }

    interface WppActionSettings {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: WppPpMouseActivation, Item?: WppActionSetting): void;

    }

    interface WppTextFrame extends Kso.KsoTextFrame {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Ruler
		**/
        readonly Ruler: WppRuler;

        /**
		* HorizontalAnchor
		**/
        HorizontalAnchor: Kso.KsoMsoHorizontalAnchor;

        /**
		* HasText
		**/
        readonly HasText: Kso.KsoMsoTriState;

        /**
		* TextRange
		**/
        readonly TextRange: WppTextRange;

        /**
		* VerticalAnchor
		**/
        VerticalAnchor: Kso.KsoMsoVerticalAnchor;

        /**
		* AutoSize
		**/
        AutoSize: WppPpAutoSize;

        /**
		* WordWrap
		**/
        WordWrap: Kso.KsoMsoTriState;

        DeleteText(): void;

    }

    interface WppOLEFormat {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* FollowColors
		**/
        FollowColors: WppPpFollowColors;

        /**
		* Parent
		**/
        readonly Parent: any;

        Activate(): void;

        DoVerb(Index?: number): void;

        /**
		* ObjectVerbs
		**/
        readonly ObjectVerbs: WppObjectVerbs;

        /**
		* Object
		**/
        readonly Object: any;

        /**
		* ProgID
		**/
        readonly ProgID: string;

    }

    interface WppSetEffect {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* To
		**/
        To: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Property
		**/
        Property: WppMsoAnimProperty;

    }

    interface WppTextRange {
        InsertBefore(NewText?: string, Before?: WppTextRange): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        ChangeCase(Type?: WppPpChangeCase): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Paste(Paste?: WppTextRange): void;

        /**
		* Start
		**/
        readonly Start: number;

        /**
		* ActionSettings
		**/
        readonly ActionSettings: WppActionSettings;

        /**
		* BoundWidth
		**/
        readonly BoundWidth: number;

        /**
		* Length
		**/
        readonly Length: number;

        PasteSpecial(DataType?: WppPpPasteDataType, DisplayAsIcon?: Kso.KsoMsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Kso.KsoMsoTriState, PasteSpecial?: WppTextRange): void;

        /**
		* BoundTop
		**/
        readonly BoundTop: number;

        AddPeriods(): void;

        /**
		* Text
		**/
        Text: string;

        /**
		* BoundLeft
		**/
        readonly BoundLeft: number;

        /**
		* BoundHeight
		**/
        readonly BoundHeight: number;

        Lines(Start?: number, Length?: number, Lines?: WppTextRange): void;

        Paragraphs(Start?: number, Length?: number, Paragraphs?: WppTextRange): void;

        Sentences(Start?: number, Length?: number, Sentences?: WppTextRange): void;

        Words(Start?: number, Length?: number, Words?: WppTextRange): void;

        /**
		* IndentLevel
		**/
        IndentLevel: number;

        Characters(Start?: number, Length?: number, Characters?: WppTextRange): void;

        Runs(Start?: number, Length?: number, Runs?: WppTextRange): void;

        RotatedBounds(X1?: number, Y1?: number, X2?: number, Y2?: number, X3?: number, Y3?: number, x4?: number, y4?: number): void;

        TrimText(TrimText?: WppTextRange): void;

        /**
		* Font
		**/
        readonly Font: WppFont;

        InsertAfter(NewText?: string, After?: WppTextRange): void;

        InsertDateTime(DateTimeFormat?: WppPpDateTimeFormat, InsertAsField?: Kso.KsoMsoTriState, DateTime?: WppTextRange): void;

        InsertSlideNumber(SlideNumber?: WppTextRange): void;

        InsertSymbol(FontName?: string, CharNumber?: number, Unicode?: Kso.KsoMsoTriState, Symbol?: WppTextRange): void;

        /**
		* ParagraphFormat
		**/
        readonly ParagraphFormat: WppParagraphFormat;

        Select(): void;

        RemovePeriods(): void;

        Cut(): void;

        Copy(): void;

        Delete(): void;

        Find(FindWhat?: string, After?: number, MatchCase?: Kso.KsoMsoTriState, WholeWords?: Kso.KsoMsoTriState, Find?: WppTextRange): void;

        Replace(FindWhat?: string, ReplaceWhat?: string, After?: number, MatchCase?: Kso.KsoMsoTriState, WholeWords?: Kso.KsoMsoTriState, Replace?: WppTextRange): void;

        /**
		* LanguageID
		**/
        LanguageID: Kso.KsoMsoLanguageID;

        LtrRun(): void;

        RtlRun(): void;

    }

    interface WppActionSetting {
        /**
		* AnimateAction
		**/
        AnimateAction: Kso.KsoMsoTriState;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Action
		**/
        Action: WppPpActionType;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ActionVerb
		**/
        ActionVerb: string;

        /**
		* Hyperlink
		**/
        readonly Hyperlink: WppHyperlink;

        /**
		* Run
		**/
        Run: string;

        /**
		* SlideShowName
		**/
        SlideShowName: string;

        /**
		* SoundEffect
		**/
        readonly SoundEffect: WppSoundEffect;

        /**
		* ShowAndReturn
		**/
        ShowAndReturn: Kso.KsoMsoTriState;

    }

    interface WppFreeformBuilder extends Kso.KsoFreeformBuilder {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppFont {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Subscript
		**/
        Subscript: Kso.KsoMsoTriState;

        /**
		* NameOther
		**/
        NameOther: string;

        /**
		* Color
		**/
        readonly Color: Kso.KsoColorFormat;

        /**
		* Bold
		**/
        Bold: Kso.KsoMsoTriState;

        /**
		* Shadow
		**/
        Shadow: Kso.KsoMsoTriState;

        /**
		* Italic
		**/
        Italic: Kso.KsoMsoTriState;

        /**
		* Emboss
		**/
        Emboss: Kso.KsoMsoTriState;

        /**
		* Underline
		**/
        Underline: Kso.KsoMsoTriState;

        /**
		* Superscript
		**/
        Superscript: Kso.KsoMsoTriState;

        /**
		* BaselineOffset
		**/
        BaselineOffset: number;

        /**
		* Embedded
		**/
        readonly Embedded: Kso.KsoMsoTriState;

        /**
		* Embeddable
		**/
        readonly Embeddable: Kso.KsoMsoTriState;

        /**
		* Size
		**/
        Size: number;

        /**
		* Name
		**/
        Name: string;

        /**
		* NameFarEast
		**/
        NameFarEast: string;

        /**
		* NameAscii
		**/
        NameAscii: string;

        /**
		* AutoRotateNumbers
		**/
        AutoRotateNumbers: Kso.KsoMsoTriState;

        /**
		* NameComplexScript
		**/
        NameComplexScript: string;

    }

    interface WppMediaFormat {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* FadeInDuration
		**/
        FadeInDuration: number;

        /**
		* SampleWidth
		**/
        readonly SampleWidth: number;

        /**
		* Muted
		**/
        Muted: boolean;

        /**
		* VideoCompressionType
		**/
        readonly VideoCompressionType: string;

        /**
		* Volume
		**/
        Volume: number;

        /**
		* Length
		**/
        readonly Length: number;

        /**
		* EndPoint
		**/
        EndPoint: number;

        /**
		* SampleHeight
		**/
        readonly SampleHeight: number;

        /**
		* StartPoint
		**/
        StartPoint: number;

        /**
		* VideoFrameRate
		**/
        readonly VideoFrameRate: number;

        /**
		* IsEmbedded
		**/
        readonly IsEmbedded: boolean;

        /**
		* FadeOutDuration
		**/
        FadeOutDuration: number;

        /**
		* MediaBookmarks
		**/
        readonly MediaBookmarks: WppMediaBookmarks;

        SetDisplayPicture(Position?: number): void;

        /**
		* IsLinked
		**/
        readonly IsLinked: boolean;

        SetDisplayPictureFromFile(FilePath?: string): void;

        Resample(Trim?: boolean, SampleHeight?: number, SampleWidth?: number, VideoFrameRate?: number, AudioSamplingRate?: number, VideoBitRate?: number): void;

        ResampleFromProfile(profile?: WppPpResampleMediaProfile): void;

        /**
		* ResamplingStatus
		**/
        readonly ResamplingStatus: WppPpMediaTaskStatus;

        /**
		* AudioCompressionType
		**/
        readonly AudioCompressionType: string;

        /**
		* AudioSamplingRate
		**/
        readonly AudioSamplingRate: number;

    }

    interface WppCell {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Select(): void;

        /**
		* Borders
		**/
        readonly Borders: WppBorders;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Shape
		**/
        readonly Shape: Kso.KsoShape;

        Merge(MergeTo?: WppCell): void;

        Split(NumRows?: number, NumColumns?: number): void;

        /**
		* Selected
		**/
        readonly Selected: boolean;

    }

    interface WppLegend {
        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Font
		**/
        readonly Font: Kso.KsoChartFont;

        LegendEntries(Index?: any, RHS?: any): void;

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

        Clear(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

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
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppParagraphFormat {
        /**
		* LineRuleBefore
		**/
        LineRuleBefore: Kso.KsoMsoTriState;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Bullet
		**/
        readonly Bullet: WppBulletFormat;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Alignment
		**/
        Alignment: WppPpParagraphAlignment;

        /**
		* LineRuleAfter
		**/
        LineRuleAfter: Kso.KsoMsoTriState;

        /**
		* SpaceAfter
		**/
        SpaceAfter: number;

        /**
		* LineRuleWithin
		**/
        LineRuleWithin: Kso.KsoMsoTriState;

        /**
		* SpaceBefore
		**/
        SpaceBefore: number;

        /**
		* SpaceWithin
		**/
        SpaceWithin: number;

        /**
		* BaseLineAlignment
		**/
        BaseLineAlignment: WppPpBaselineAlignment;

        /**
		* FarEastLineBreakControl
		**/
        FarEastLineBreakControl: Kso.KsoMsoTriState;

        /**
		* WordWrap
		**/
        WordWrap: Kso.KsoMsoTriState;

        /**
		* HangingPunctuation
		**/
        HangingPunctuation: Kso.KsoMsoTriState;

        /**
		* TextDirection
		**/
        TextDirection: WppPpDirection;

    }

    interface WppPanes {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Item(Index?: number, Item?: WppPane): void;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface WppWalls {
        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(pvar?: any): void;

        /**
		* PictureType
		**/
        PictureType: any;

        Paste(): void;

        ClearFormats(pvar?: any): void;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

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
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppTable {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Cell(Row?: number, Column?: number, Cell?: WppCell): void;

        /**
		* Columns
		**/
        readonly Columns: WppColumns;

        /**
		* Rows
		**/
        readonly Rows: WppRows;

        /**
		* TableDirection
		**/
        TableDirection: WppPpDirection;

        /**
		* LastRow
		**/
        LastRow: boolean;

        MergeBorders(): void;

        /**
		* FirstRow
		**/
        FirstRow: boolean;

        /**
		* FirstCol
		**/
        FirstCol: boolean;

        /**
		* LastCol
		**/
        LastCol: boolean;

        /**
		* HorizBanding
		**/
        HorizBanding: boolean;

        /**
		* VertBanding
		**/
        VertBanding: boolean;

        /**
		* Style
		**/
        readonly Style: WppTableStyle;

        /**
		* Background
		**/
        readonly Background: WppTableBackground;

        ScaleProportionally(scale?: number): void;

        ApplyStyle(StyleID?: string, SaveFormatting?: boolean): void;

        /**
		* AlternativeText
		**/
        AlternativeText: string;

        /**
		* Title
		**/
        Title: string;

    }

    interface WppBulletFormat {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Visible
		**/
        Visible: Kso.KsoMsoTriState;

        /**
		* RelativeSize
		**/
        RelativeSize: number;

        /**
		* Type
		**/
        Type: WppPpBulletType;

        /**
		* StartValue
		**/
        StartValue: number;

        /**
		* Character
		**/
        Character: number;

        /**
		* UseTextColor
		**/
        UseTextColor: Kso.KsoMsoTriState;

        /**
		* UseTextFont
		**/
        UseTextFont: Kso.KsoMsoTriState;

        /**
		* Font
		**/
        readonly Font: WppFont;

        /**
		* Style
		**/
        Style: WppPpNumberedBulletStyle;

        Picture(Picture?: string): void;

        /**
		* Number
		**/
        readonly Number: number;

    }

    interface WppTableBackground {
        /**
		* Fill
		**/
        readonly Fill: Kso.KsoFillFormat;

        /**
		* Picture
		**/
        readonly Picture: Kso.KsoPictureFormat;

        /**
		* Shadow
		**/
        readonly Shadow: Kso.KsoShadowFormat;

        /**
		* Reflection
		**/
        readonly Reflection: Kso.KsoReflectionFormat;

    }

    interface WppTabStop {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Type
		**/
        Type: WppPpTabStopType;

        Clear(): void;

        /**
		* Position
		**/
        Position: number;

    }

    interface WppLinkFormat {
        Update(): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SourceFullName
		**/
        SourceFullName: string;

        /**
		* AutoUpdate
		**/
        AutoUpdate: WppPpUpdateOption;

        BreakLink(): void;

    }

    interface WppCellRange {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Borders
		**/
        readonly Borders: WppBorders;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppCell): void;

    }

    interface WppPlaceholderFormat {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Type
		**/
        readonly Type: WppPpPlaceholderType;

        /**
		* ContainedType
		**/
        readonly ContainedType: Kso.KsoMsoShapeType;

    }

    interface WppTrendlines extends Kso.KsoTrendlines {}

    interface WppTags {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Value(Index?: number, Value?: string): void;

        Name(Index?: number, Name?: string): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        BinaryValue(Name?: string, BinaryValue?: number): void;

        Delete(Name?: string): void;

        Item(Name?: string, Item?: string): void;

        Add(Name?: string, Value?: string): void;

        AddBinary(Name?: string, FilePath?: string): void;

    }

    interface WppSoundFormat {
        Import(FileName?: string): void;

        Play(): void;

        Export(FileName?: string, Export?: WppPpSoundFormatType): void;

        /**
		* Type
		**/
        readonly Type: WppPpSoundFormatType;

        /**
		* SourceFullName
		**/
        readonly SourceFullName: string;

    }

    interface WppColumns {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppColumn): void;

        Add(BeforeColumn?: number, Add?: WppColumn): void;

    }

    interface WppColumn {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Delete(): void;

        Select(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Width
		**/
        Width: number;

        /**
		* Cells
		**/
        readonly Cells: WppCellRange;

    }

    interface WppRow {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Delete(): void;

        Select(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Cells
		**/
        readonly Cells: WppCellRange;

        /**
		* Height
		**/
        Height: number;

    }

    interface WppTableStyle {
        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Id
		**/
        readonly Id: string;

    }

    interface WppDataLabel {
        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

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

        Characters(Start?: any, Length?: any, RHS?: WppChartCharacters): void;

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
        readonly Format: WppChartFormat;

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
        readonly Application: WppApplication;

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

    interface WppDataTable {
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
        readonly Border: WppChartBorder;

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
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppPlayer {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Play(): void;

        GoToNextBookmark(): void;

        Pause(): void;

        /**
		* State
		**/
        readonly State: WppPpPlayerState;

        Stop(): void;

        /**
		* CurrentPosition
		**/
        CurrentPosition: number;

        GoToPreviousBookmark(): void;

    }

    interface WppDiagramNodes extends Kso.KsoDiagramNodes {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppCustomerData {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Delete(Id?: string): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Id?: string, Item?: Kso.KsoCustomXMLPart): void;

        Add(Add?: Kso.KsoCustomXMLPart): void;

    }

    interface WppTextFrame2 extends Kso.KsoTextFrame2 {
        /**
		* Application
		**/
        readonly Application: any;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* WordArtFormat
		**/
        WordArtFormat: Kso.KsoMsoPresetTextEffect;

    }

    interface WppInterior {
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
        readonly Application: WppApplication;

        /**
		* PatternColorIndex
		**/
        PatternColorIndex: any;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppChartFont extends Kso.KsoChartFont {
        /**
		* Strikethrough
		**/
        Strikethrough: any;

    }

    interface WppDownBars {
        Delete(pvar?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(pvar?: any): void;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppChartFormat {
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
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Adjustments
		**/
        readonly Adjustments: Kso.KsoAdjustments;

    }

    interface WppSequences {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppSequence): void;

        Add(Index?: number, Add?: WppSequence): void;

    }

    interface WppSequence {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        FindFirstAnimationForClick(click?: number, FindFirstAnimationForClick?: WppEffect): void;

        ConvertToTextUnitEffect(Effect?: WppEffect, unitEffect?: WppMsoAnimTextUnitEffect, ConvertToTextUnitEffect?: WppEffect): void;

        Clone(Effect?: WppEffect, Index?: number, Clone?: WppEffect): void;

        AddEffect(Shape?: Kso.KsoShape, effectId?: WppMsoAnimEffect, Level?: WppMsoAnimateByLevel, trigger?: WppMsoAnimTriggerType, Index?: number, Effect?: WppEffect): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppEffect): void;

        FindFirstAnimationFor(Shape?: Kso.KsoShape, FindFirstAnimationFor?: WppEffect): void;

        ConvertToBuildLevel(Effect?: WppEffect, Level?: WppMsoAnimateByLevel, ConvertToBuildLevel?: WppEffect): void;

        ConvertToAfterEffect(Effect?: WppEffect, After?: WppMsoAnimAfterEffect, DimColor?: number, DimSchemeColor?: WppPpColorSchemeIndex, ConvertToAfterEffect?: WppEffect): void;

        ConvertToAnimateBackground(Effect?: WppEffect, AnimateBackground?: Kso.KsoMsoTriState, ConvertToAnimateBackground?: WppEffect): void;

        ConvertToAnimateInReverse(Effect?: WppEffect, animateInReverse?: Kso.KsoMsoTriState, ConvertToAnimateInReverse?: WppEffect): void;

        AddTriggerEffect(pShape?: Kso.KsoShape, effectId?: WppMsoAnimEffect, trigger?: WppMsoAnimTriggerType, pTriggerShape?: Kso.KsoShape, bookmark?: string, Level?: WppMsoAnimateByLevel, TriggerEffect?: WppEffect): void;

    }

    interface WppChartFillFormat extends Kso.KsoChartFillFormat {}

    interface WppChartColorFormat extends Kso.KsoChartColorFormat {}

    interface WppChartData {
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

    interface WppChartGroups extends Kso.KsoChartGroups {}

    interface WppChartGroup {
        /**
		* HasSeriesLines
		**/
        HasSeriesLines: boolean;

        /**
		* DownBars
		**/
        readonly DownBars: WppDownBars;

        /**
		* HasRadarAxisLabels
		**/
        HasRadarAxisLabels: boolean;

        /**
		* FirstSliceAngle
		**/
        FirstSliceAngle: number;

        /**
		* DropLines
		**/
        readonly DropLines: WppDropLines;

        /**
		* HasDropLines
		**/
        HasDropLines: boolean;

        SeriesCollection(Index?: any, ppSeriesCollection?: any): void;

        /**
		* HasHiLoLines
		**/
        HasHiLoLines: boolean;

        /**
		* HasUpDownBars
		**/
        HasUpDownBars: boolean;

        /**
		* HiLoLines
		**/
        readonly HiLoLines: WppHiLoLines;

        /**
		* AxisGroup
		**/
        AxisGroup: Kso.KsoXlAxisGroup;

        /**
		* SeriesLines
		**/
        readonly SeriesLines: WppSeriesLines;

        CategoryCollection(Index?: any, RHS?: any): void;

        /**
		* UpBars
		**/
        readonly UpBars: WppUpBars;

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
		* ShowNegativeBubbles
		**/
        ShowNegativeBubbles: boolean;

        /**
		* SplitType
		**/
        SplitType: Kso.KsoXlChartSplitType;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* SplitValue
		**/
        SplitValue: any;

        /**
		* Has3DShading
		**/
        Has3DShading: boolean;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* BubbleScale
		**/
        BubbleScale: number;

        /**
		* DoughnutHoleSize
		**/
        DoughnutHoleSize: number;

        /**
		* GapWidth
		**/
        GapWidth: number;

        /**
		* Overlap
		**/
        Overlap: number;

        /**
		* RadarAxisLabels
		**/
        readonly RadarAxisLabels: WppTickLabels;

        /**
		* Subtype
		**/
        Subtype: number;

        /**
		* Type
		**/
        Type: number;

        /**
		* SecondPlotSize
		**/
        SecondPlotSize: number;

        FullCategoryCollection(Index?: any, RHS?: any): void;

    }

    interface WppMouseDownHandler {
        OnMouseDown(activeWin?: any): void;

    }

    interface WppDropLines {
        Select(RHS?: any): void;

        Delete(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppHiLoLines {
        Select(RHS?: any): void;

        Delete(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

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
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppGlobal {
        /**
		* SlideShowWindows
		**/
        readonly SlideShowWindows: WppSlideShowWindows;

        /**
		* ActivePresentation
		**/
        readonly ActivePresentation: WppPresentation;

        /**
		* FileConverters
		**/
        readonly FileConverters: WppFileConverters;

        /**
		* AddIns
		**/
        readonly AddIns: WppAddIns;

        /**
		* IsSandboxed
		**/
        readonly IsSandboxed: boolean;

        /**
		* ActiveWindow
		**/
        readonly ActiveWindow: WppDocumentWindow;

        /**
		* Windows
		**/
        readonly Windows: WppDocumentWindows;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Assistant
		**/
        readonly Assistant: Kso.KsoAssistant;

        /**
		* Dialogs
		**/
        readonly Dialogs: any;

        /**
		* Presentations
		**/
        readonly Presentations: WppPresentations;

        /**
		* CommandBars
		**/
        readonly CommandBars: Kso.KsoCommandBars;

        /**
		* AnswerWizard
		**/
        readonly AnswerWizard: Kso.KsoAnswerWizard;

        /**
		* ProtectedViewWindows
		**/
        readonly ProtectedViewWindows: WppProtectedViewWindows;

        /**
		* ActiveProtectedViewWindow
		**/
        readonly ActiveProtectedViewWindow: WppProtectedViewWindow;

    }

    interface WppSeriesLines {
        Delete(pvar?: any): void;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(pvar?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppUpBars {
        Delete(pvar?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(pvar?: any): void;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppTickLabels {
        Select(RHS?: any): void;

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

        Delete(RHS?: any): void;

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
		* MultiLevel
		**/
        MultiLevel: boolean;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Alignment
		**/
        Alignment: number;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

    }

    interface WppChartArea {
        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(pvar?: any): void;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Top
		**/
        Top: number;

        ClearContents(pvar?: any): void;

        Clear(pvar?: any): void;

        Copy(pvar?: any): void;

        /**
		* Font
		**/
        readonly Font: Kso.KsoChartFont;

        ClearFormats(pvar?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

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
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppChartTitle {
        /**
		* Caption
		**/
        Caption: string;

        Characters(Start?: any, Length?: any, RHS?: WppChartCharacters): void;

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
        readonly Format: WppChartFormat;

        /**
		* Text
		**/
        Text: string;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

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
        readonly Interior: WppInterior;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(RHS?: any): void;

        /**
		* IncludeInLayout
		**/
        IncludeInLayout: boolean;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

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

    interface WppChartCharacters {
        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Caption
		**/
        Caption: string;

        Insert(String?: string, RHS?: any): void;

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
		* Creator
		**/
        readonly Creator: number;

        /**
		* PhoneticCharacters
		**/
        PhoneticCharacters: string;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppPoints extends Kso.KsoPoints {}

    interface WppCorners {
        Select(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppResampleMediaTask {
        /**
		* AudioCompressionType
		**/
        readonly AudioCompressionType: string;

        /**
		* AudioSamplingRate
		**/
        readonly AudioSamplingRate: number;

        /**
		* profile
		**/
        readonly profile: WppPpResampleMediaProfile;

        /**
		* VideoCompressionType
		**/
        readonly VideoCompressionType: string;

        /**
		* SampleWidth
		**/
        readonly SampleWidth: number;

        /**
		* IsLinked
		**/
        readonly IsLinked: boolean;

        /**
		* IsEmbedded
		**/
        readonly IsEmbedded: boolean;

        /**
		* VideoFrameRate
		**/
        readonly VideoFrameRate: number;

        /**
		* SampleHeight
		**/
        readonly SampleHeight: number;

        /**
		* ContainerType
		**/
        readonly ContainerType: string;

        /**
		* Shape
		**/
        readonly Shape: Kso.KsoShape;

    }

    interface WppResampleMediaTasks {
        Item(Index?: number, Item?: WppResampleMediaTask): void;

        Pause(): void;

        Cancel(): void;

        Resume(): void;

        /**
		* PercentComplete
		**/
        readonly PercentComplete: number;

    }

    interface WppSlide {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Comments
		**/
        readonly Comments: WppComments;

        /**
		* Shapes
		**/
        readonly Shapes: Kso.KsoShapes;

        /**
		* SlideID
		**/
        readonly SlideID: number;

        /**
		* HeadersFooters
		**/
        readonly HeadersFooters: WppHeadersFooters;

        /**
		* Master
		**/
        readonly Master: WppMaster;

        /**
		* Tags
		**/
        readonly Tags: WppTags;

        /**
		* SlideShowTransition
		**/
        readonly SlideShowTransition: WppSlideShowTransition;

        /**
		* ColorScheme
		**/
        ColorScheme: WppColorScheme;

        /**
		* Background
		**/
        readonly Background: Kso.KsoShapeRange;

        /**
		* PrintSteps
		**/
        readonly PrintSteps: number;

        /**
		* SlideNumber
		**/
        readonly SlideNumber: number;

        Select(): void;

        /**
		* Layout
		**/
        Layout: WppPpSlideLayout;

        Cut(): void;

        ApplyTemplate2(FileName?: string, VariantGUID?: string): void;

        MoveToSectionStart(toSection?: number): void;

        ApplyTemplate(FileName?: string): void;

        Copy(): void;

        /**
		* Design
		**/
        Design: WppDesign;

        Delete(): void;

        /**
		* Scripts
		**/
        readonly Scripts: Kso.KsoScripts;

        /**
		* SlideIndex
		**/
        readonly SlideIndex: number;

        /**
		* DisplayMasterShapes
		**/
        DisplayMasterShapes: Kso.KsoMsoTriState;

        PublishSlides(SlideLibraryUrl?: string, Overwrite?: boolean, UseSlideOrder?: boolean): void;

        /**
		* FollowMasterBackground
		**/
        FollowMasterBackground: Kso.KsoMsoTriState;

        /**
		* NotesPage
		**/
        readonly NotesPage: WppSlideRange;

        /**
		* Hyperlinks
		**/
        readonly Hyperlinks: WppHyperlinks;

        Export(FileName?: string, FilterName?: string, ScaleWidth?: number, ScaleHeight?: number): void;

        MoveTo(toPos?: number): void;

        /**
		* TimeLine
		**/
        readonly TimeLine: WppTimeLine;

        /**
		* SectionNumber
		**/
        readonly SectionNumber: number;

        /**
		* CustomLayout
		**/
        CustomLayout: WppCustomLayout;

        ApplyTheme(themeName?: string): void;

        /**
		* ThemeColorScheme
		**/
        readonly ThemeColorScheme: Kso.KsoThemeColorScheme;

        /**
		* BackgroundStyle
		**/
        BackgroundStyle: Kso.KsoMsoBackgroundStyleIndex;

        ApplyThemeColorScheme(themeColorSchemeName?: string): void;

        /**
		* CustomerData
		**/
        readonly CustomerData: WppCustomerData;

        /**
		* sectionIndex
		**/
        readonly sectionIndex: number;

        /**
		* HasNotesPage
		**/
        readonly HasNotesPage: Kso.KsoMsoTriState;

    }

    interface WppFloor {
        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(RHS?: any): void;

        /**
		* PictureType
		**/
        PictureType: any;

        Paste(): void;

        ClearFormats(RHS?: any): void;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

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
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppPlotArea {
        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(pvar?: any): void;

        /**
		* InsideLeft
		**/
        InsideLeft: number;

        ClearFormats(pvar?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

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
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppMediaBookmarks {
        Item(Index?: number, Item?: WppMediaBookmark): void;

        Add(Position?: number, Name?: string, Add?: WppMediaBookmark): void;

    }

    interface WppMediaBookmark {
        /**
		* Index
		**/
        readonly Index: number;

        Delete(): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Position
		**/
        readonly Position: number;

    }

    interface WppHeadersFooters {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* SlideNumber
		**/
        readonly SlideNumber: WppHeaderFooter;

        /**
		* DateAndTime
		**/
        readonly DateAndTime: WppHeaderFooter;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Header
		**/
        readonly Header: WppHeaderFooter;

        /**
		* Footer
		**/
        readonly Footer: WppHeaderFooter;

        /**
		* DisplayOnTitleSlide
		**/
        DisplayOnTitleSlide: Kso.KsoMsoTriState;

        Clear(): void;

    }

    interface WppHeaderFooter {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Format
		**/
        Format: WppPpDateTimeFormat;

        /**
		* Text
		**/
        Text: string;

        /**
		* Visible
		**/
        Visible: Kso.KsoMsoTriState;

        /**
		* UseFormat
		**/
        UseFormat: Kso.KsoMsoTriState;

    }

    interface WppSlideShowTransition {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Hidden
		**/
        Hidden: Kso.KsoMsoTriState;

        /**
		* LoopSoundUntilNext
		**/
        LoopSoundUntilNext: Kso.KsoMsoTriState;

        /**
		* AdvanceOnClick
		**/
        AdvanceOnClick: Kso.KsoMsoTriState;

        /**
		* SoundEffect
		**/
        readonly SoundEffect: WppSoundEffect;

        /**
		* EntryEffect
		**/
        EntryEffect: WppPpEntryEffect;

        /**
		* AdvanceOnTime
		**/
        AdvanceOnTime: Kso.KsoMsoTriState;

        /**
		* AdvanceTime
		**/
        AdvanceTime: number;

        /**
		* Speed
		**/
        Speed: WppPpTransitionSpeed;

        /**
		* Duration
		**/
        Duration: number;

    }

    interface WppColorScheme {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Colors(SchemeColor?: WppPpColorSchemeIndex, Colors?: WppRGBColor): void;

    }

    interface WppLegendKey {
        Delete(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        ClearFormats(RHS?: any): void;

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
        readonly Interior: WppInterior;

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

        Select(RHS?: any): void;

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
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* PictureUnit
		**/
        PictureUnit: number;

        /**
		* PictureUnit2
		**/
        PictureUnit2: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppRGBColor {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* RGB
		**/
        RGB: number;

    }

    interface WppMaster {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Design
		**/
        readonly Design: WppDesign;

        Delete(): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Shapes
		**/
        readonly Shapes: Kso.KsoShapes;

        /**
		* HeadersFooters
		**/
        readonly HeadersFooters: WppHeadersFooters;

        /**
		* ColorScheme
		**/
        ColorScheme: WppColorScheme;

        /**
		* Background
		**/
        readonly Background: Kso.KsoShapeRange;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* TextStyles
		**/
        readonly TextStyles: WppTextStyles;

        /**
		* Width
		**/
        readonly Width: number;

        /**
		* Hyperlinks
		**/
        readonly Hyperlinks: WppHyperlinks;

        /**
		* Scripts
		**/
        readonly Scripts: Kso.KsoScripts;

        /**
		* TimeLine
		**/
        readonly TimeLine: WppTimeLine;

        /**
		* SlideShowTransition
		**/
        readonly SlideShowTransition: WppSlideShowTransition;

        /**
		* CustomLayouts
		**/
        readonly CustomLayouts: WppCustomLayouts;

        /**
		* Theme
		**/
        readonly Theme: Kso.KsoOfficeTheme;

        ApplyTheme(themeName?: string): void;

        /**
		* BackgroundStyle
		**/
        BackgroundStyle: Kso.KsoMsoBackgroundStyleIndex;

        /**
		* CustomerData
		**/
        readonly CustomerData: WppCustomerData;

        /**
		* Guides
		**/
        readonly Guides: WppGuides;

    }

    interface WppTextStyles {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Type?: WppPpTextStyleType, Item?: WppTextStyle): void;

    }

    interface WppGuides {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppGuide): void;

        Add(Orientation?: WppPpGuideOrientation, Position?: number, Add?: WppGuide): void;

    }

    interface WppTextStyle {
        /**
		* Levels
		**/
        readonly Levels: WppTextStyleLevels;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Ruler
		**/
        readonly Ruler: WppRuler;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TextFrame
		**/
        readonly TextFrame: Kso.KsoTextFrame;

    }

    interface WppTextStyleLevels {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Level?: number, Item?: WppTextStyleLevel): void;

    }

    interface WppTextStyleLevel {
        /**
		* ParagraphFormat
		**/
        readonly ParagraphFormat: WppParagraphFormat;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Font
		**/
        readonly Font: WppFont;

    }

    interface WppSeries {
        Delete(RHS?: any): void;

        /**
		* InvertColorIndex
		**/
        InvertColorIndex: Kso.KsoXlColorIndex;

        Select(RHS?: any): void;

        DataLabels(Index?: any, RHS?: any): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

        /**
		* AxisGroup
		**/
        AxisGroup: Kso.KsoXlAxisGroup;

        /**
		* MarkerStyle
		**/
        MarkerStyle: Kso.KsoXlMarkerStyle;

        Copy(RHS?: any): void;

        ClearFormats(RHS?: any): void;

        /**
		* MarkerForegroundColorIndex
		**/
        MarkerForegroundColorIndex: Kso.KsoXlColorIndex;

        ErrorBar(Direction?: Kso.KsoXlErrorBarDirection, Include?: Kso.KsoXlErrorBarInclude, Type?: Kso.KsoXlErrorBarType, Amount?: any, MinusValues?: any, RHS?: any): void;

        /**
		* ErrorBars
		**/
        readonly ErrorBars: WppErrorBars;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

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
        readonly LeaderLines: WppLeaderLines;

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

        _ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, RHS?: any): void;

        /**
		* InvertIfNegative
		**/
        InvertIfNegative: boolean;

        /**
		* Smooth
		**/
        Smooth: boolean;

        Points(Index?: any, RHS?: any): void;

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

        Paste(RHS?: any): void;

        /**
		* XValues
		**/
        XValues: any;

        /**
		* PlotOrder
		**/
        PlotOrder: number;

        Trendlines(Index?: any, RHS?: any): void;

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
		* Creator
		**/
        readonly Creator: number;

        /**
		* PictureUnit
		**/
        PictureUnit: number;

        /**
		* PictureUnit2
		**/
        PictureUnit2: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* InvertColor
		**/
        InvertColor: number;

        ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, RHS?: any): void;

        /**
		* IsFiltered
		**/
        IsFiltered: boolean;

    }

    interface WppDesigns {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Clone(pOriginal?: WppDesign, Index?: number, Clone?: WppDesign): void;

        Load(TemplateName?: string, Index?: number, Load?: WppDesign): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: any, Item?: WppDesign): void;

        Add(designName?: string, Index?: number, Add?: WppDesign): void;

    }

    interface WppDesign {
        AddTitleMaster(TitleMaster?: WppMaster): void;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* HasTitleMaster
		**/
        readonly HasTitleMaster: Kso.KsoMsoTriState;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SlideMaster
		**/
        readonly SlideMaster: WppMaster;

        /**
		* Preserved
		**/
        Preserved: Kso.KsoMsoTriState;

        /**
		* TitleMaster
		**/
        readonly TitleMaster: WppMaster;

        MoveTo(toPos?: number): void;

        Delete(): void;

    }

    interface WppEffect {
        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Exit
		**/
        Exit: Kso.KsoMsoTriState;

        Delete(): void;

        /**
		* Paragraph
		**/
        Paragraph: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Shape
		**/
        Shape: Kso.KsoShape;

        MoveTo(toPos?: number): void;

        MoveAfter(Effect?: WppEffect): void;

        MoveBefore(Effect?: WppEffect): void;

        /**
		* Timing
		**/
        readonly Timing: WppTiming;

        /**
		* EffectType
		**/
        EffectType: WppMsoAnimEffect;

        /**
		* EffectParameters
		**/
        readonly EffectParameters: Kso.KsoEffectParameters;

        /**
		* TextRangeStart
		**/
        readonly TextRangeStart: number;

        /**
		* TextRangeLength
		**/
        readonly TextRangeLength: number;

        /**
		* DisplayName
		**/
        readonly DisplayName: string;

        /**
		* Behaviors
		**/
        readonly Behaviors: WppAnimationBehaviors;

        /**
		* EffectInformation
		**/
        readonly EffectInformation: WppEffectInformation;

    }

    interface WppTiming {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* TriggerShape
		**/
        TriggerShape: Kso.KsoShape;

        /**
		* Duration
		**/
        Duration: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TriggerType
		**/
        TriggerType: WppMsoAnimTriggerType;

        /**
		* TriggerDelayTime
		**/
        TriggerDelayTime: number;

        /**
		* RepeatCount
		**/
        RepeatCount: number;

        /**
		* RepeatDuration
		**/
        RepeatDuration: number;

        /**
		* Speed
		**/
        Speed: number;

        /**
		* Accelerate
		**/
        Accelerate: number;

        /**
		* BounceEndIntensity
		**/
        BounceEndIntensity: number;

        /**
		* Decelerate
		**/
        Decelerate: number;

        /**
		* AutoReverse
		**/
        AutoReverse: Kso.KsoMsoTriState;

        /**
		* SmoothStart
		**/
        SmoothStart: Kso.KsoMsoTriState;

        /**
		* SmoothEnd
		**/
        SmoothEnd: Kso.KsoMsoTriState;

        /**
		* RewindAtEnd
		**/
        RewindAtEnd: Kso.KsoMsoTriState;

        /**
		* Restart
		**/
        Restart: WppMsoAnimEffectRestart;

        /**
		* BounceEnd
		**/
        BounceEnd: Kso.KsoMsoTriState;

        /**
		* TriggerBookmark
		**/
        TriggerBookmark: string;

    }

    interface WppEffectInformation {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* AfterEffect
		**/
        readonly AfterEffect: WppMsoAnimAfterEffect;

        /**
		* AnimateBackground
		**/
        readonly AnimateBackground: Kso.KsoMsoTriState;

        /**
		* SoundEffect
		**/
        readonly SoundEffect: WppSoundEffect;

        /**
		* BuildByLevelEffect
		**/
        readonly BuildByLevelEffect: WppMsoAnimateByLevel;

        /**
		* AnimateTextInReverse
		**/
        readonly AnimateTextInReverse: Kso.KsoMsoTriState;

        /**
		* Dim
		**/
        readonly Dim: Kso.KsoColorFormat;

        /**
		* PlaySettings
		**/
        readonly PlaySettings: WppPlaySettings;

        /**
		* TextUnitEffect
		**/
        readonly TextUnitEffect: WppMsoAnimTextUnitEffect;

    }

    interface WppEffectParameters extends Kso.KsoEffectParameters {
        /**
		* Size
		**/
        Size: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Color2
		**/
        readonly Color2: Kso.KsoColorFormat;

        /**
		* Direction
		**/
        Direction: WppMsoAnimDirection;

        /**
		* Amount
		**/
        Amount: number;

        /**
		* Relative
		**/
        Relative: Kso.KsoMsoTriState;

        /**
		* FontName
		**/
        FontName: string;

    }

    interface WppAnimationBehavior {
        /**
		* ScaleEffect
		**/
        readonly ScaleEffect: WppScaleEffect;

        /**
		* ColorEffect
		**/
        readonly ColorEffect: WppColorEffect;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Timing
		**/
        readonly Timing: WppTiming;

        /**
		* MotionEffect
		**/
        readonly MotionEffect: WppMotionEffect;

        /**
		* Additive
		**/
        Additive: WppMsoAnimAdditive;

        /**
		* Accumulate
		**/
        Accumulate: WppMsoAnimAccumulate;

        /**
		* Type
		**/
        Type: WppMsoAnimType;

        /**
		* RotationEffect
		**/
        readonly RotationEffect: WppRotationEffect;

        /**
		* PropertyEffect
		**/
        readonly PropertyEffect: WppPropertyEffect;

        Delete(): void;

        /**
		* CommandEffect
		**/
        readonly CommandEffect: WppCommandEffect;

        /**
		* FilterEffect
		**/
        readonly FilterEffect: WppFilterEffect;

        /**
		* SetEffect
		**/
        readonly SetEffect: WppSetEffect;

    }

    interface WppAnimationBehaviors {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppAnimationBehavior): void;

        Add(Type?: WppMsoAnimType, Index?: number, Add?: WppAnimationBehavior): void;

    }

    interface WppColorEffect {
        /**
		* By
		**/
        readonly By: Kso.KsoColorFormat;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* To
		**/
        readonly To: Kso.KsoColorFormat;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* From
		**/
        readonly From: Kso.KsoColorFormat;

    }

    interface WppScaleEffect {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ToY
		**/
        ToY: number;

        /**
		* ToX
		**/
        ToX: number;

        /**
		* ByY
		**/
        ByY: number;

        /**
		* ByX
		**/
        ByX: number;

        /**
		* FromY
		**/
        FromY: number;

        /**
		* FromX
		**/
        FromX: number;

    }

    interface WppRotationEffect {
        /**
		* By
		**/
        By: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* To
		**/
        To: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* From
		**/
        From: number;

    }

    interface WppPropertyEffect {
        /**
		* Points
		**/
        readonly Points: WppAnimationPoints;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* To
		**/
        To: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Property
		**/
        Property: WppMsoAnimProperty;

        /**
		* From
		**/
        From: any;

    }

    interface WppAnimationPoints {
        /**
		* Smooth
		**/
        Smooth: Kso.KsoMsoTriState;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppAnimationPoint): void;

        Add(Index?: number, Add?: WppAnimationPoint): void;

    }

    interface WppAnimationPoint {
        /**
		* Time
		**/
        Time: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Value
		**/
        Value: any;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Formula
		**/
        Formula: string;

    }

    interface WppCommandEffect {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Command
		**/
        Command: string;

        /**
		* Type
		**/
        Type: WppMsoAnimCommandType;

        /**
		* bookmark
		**/
        bookmark: string;

    }

    interface WppFilterEffect {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Type
		**/
        Type: WppMsoAnimFilterEffectType;

        /**
		* Subtype
		**/
        Subtype: WppMsoAnimFilterEffectSubtype;

        /**
		* Reveal
		**/
        Reveal: Kso.KsoMsoTriState;

    }

    interface WppNamedSlideShows {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: any, Item?: WppNamedSlideShow): void;

        Add(Name?: string, safeArrayOfSlideIDs?: any, Add?: WppNamedSlideShow): void;

    }

    interface WppCustomLayout {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Design
		**/
        readonly Design: WppDesign;

        Delete(): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Shapes
		**/
        readonly Shapes: Kso.KsoShapes;

        /**
		* Width
		**/
        readonly Width: number;

        /**
		* HeadersFooters
		**/
        readonly HeadersFooters: WppHeadersFooters;

        /**
		* Background
		**/
        readonly Background: Kso.KsoShapeRange;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* Hyperlinks
		**/
        readonly Hyperlinks: WppHyperlinks;

        /**
		* TimeLine
		**/
        readonly TimeLine: WppTimeLine;

        /**
		* SlideShowTransition
		**/
        readonly SlideShowTransition: WppSlideShowTransition;

        MoveTo(toPos?: number): void;

        /**
		* MatchingName
		**/
        MatchingName: string;

        Cut(): void;

        /**
		* Preserved
		**/
        Preserved: Kso.KsoMsoTriState;

        /**
		* Index
		**/
        readonly Index: number;

        Select(): void;

        Copy(): void;

        /**
		* DisplayMasterShapes
		**/
        DisplayMasterShapes: Kso.KsoMsoTriState;

        /**
		* FollowMasterBackground
		**/
        FollowMasterBackground: Kso.KsoMsoTriState;

        /**
		* ThemeColorScheme
		**/
        readonly ThemeColorScheme: Kso.KsoThemeColorScheme;

        /**
		* CustomerData
		**/
        readonly CustomerData: WppCustomerData;

        /**
		* Guides
		**/
        readonly Guides: WppGuides;

    }

    interface WppCustomLayouts {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: any, Item?: WppCustomLayout): void;

        Add(Index?: number, Add?: WppCustomLayout): void;

        Paste(Index?: number, Paste?: WppCustomLayout): void;

    }

    interface WppComments {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppComment): void;

        Add2(Left?: number, Top?: number, Author?: string, AuthorInitials?: string, Text?: string, ProviderID?: string, UserID?: string, Add?: WppComment): void;

        Add(Left?: number, Top?: number, Author?: string, AuthorInitials?: string, Text?: string, Add?: WppComment): void;

    }

    interface WppDataLabels {
        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        Select(RHS?: any): void;

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
        readonly Interior: WppInterior;

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
        readonly Application: WppApplication;

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
        readonly Format: WppChartFormat;

        /**
		* Separator
		**/
        Separator: any;

        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: WppDataLabel): void;

        _NewEnum(RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: number;

        _Default(Index?: any, RHS?: WppDataLabel): void;

        Propagate(Index?: any): void;

        /**
		* ShowRange
		**/
        ShowRange: boolean;

    }

    interface WppComment {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Top
		**/
        readonly Top: number;

        /**
		* AuthorIndex
		**/
        readonly AuthorIndex: number;

        /**
		* Author
		**/
        readonly Author: string;

        /**
		* AuthorInitials
		**/
        readonly AuthorInitials: string;

        /**
		* Text
		**/
        readonly Text: string;

        /**
		* DateTime
		**/
        readonly DateTime: string;

        /**
		* Left
		**/
        readonly Left: number;

        Delete(): void;

        /**
		* ProviderID
		**/
        readonly ProviderID: string;

        /**
		* UserID
		**/
        readonly UserID: string;

        /**
		* TimeZoneBias
		**/
        readonly TimeZoneBias: number;

        /**
		* Replies
		**/
        readonly Replies: WppComments;

        /**
		* Collapsed
		**/
        readonly Collapsed: boolean;

    }

    interface WppSldEvents {}

    interface WppSlides {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Range(Index?: any, Range?: WppSlideRange): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: any, Item?: WppSlide): void;

        FindBySlideID(SlideID?: number, FindBySlideID?: WppSlide): void;

        InsertFromFile(FileName?: string, Index?: number, SlideStart?: number, SlideEnd?: number, FromFile?: number): void;

        Add(Index?: number, Layout?: WppPpSlideLayout, Add?: WppSlide): void;

        Paste(Index?: number, Paste?: WppSlideRange): void;

        AddSlide(Index?: number, pCustomLayout?: WppCustomLayout, Slide?: WppSlide): void;

    }

    interface WppPageSetup {
        /**
		* NotesOrientation
		**/
        NotesOrientation: Kso.KsoMsoOrientation;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* FirstSlideNumber
		**/
        FirstSlideNumber: number;

        /**
		* SlideHeight
		**/
        SlideHeight: number;

        /**
		* SlideWidth
		**/
        SlideWidth: number;

        /**
		* SlideSize
		**/
        SlideSize: WppPpSlideSizeType;

        /**
		* SlideOrientation
		**/
        SlideOrientation: Kso.KsoMsoOrientation;

    }

    interface WppColorSchemes {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppColorScheme): void;

        Add(Scheme?: WppColorScheme, Add?: WppColorScheme): void;

    }

    interface WppExtraColors {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: number): void;

        Clear(): void;

        Add(Type?: number): void;

    }

    interface WppSlideShowSettings {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* LoopUntilStopped
		**/
        LoopUntilStopped: Kso.KsoMsoTriState;

        /**
		* StartingSlide
		**/
        StartingSlide: number;

        /**
		* PointerColor
		**/
        readonly PointerColor: Kso.KsoColorFormat;

        /**
		* NamedSlideShows
		**/
        readonly NamedSlideShows: WppNamedSlideShows;

        /**
		* EndingSlide
		**/
        EndingSlide: number;

        /**
		* AdvanceMode
		**/
        AdvanceMode: WppPpSlideShowAdvanceMode;

        Run(Run?: WppSlideShowWindow): void;

        /**
		* ShowType
		**/
        ShowType: WppPpSlideShowType;

        /**
		* ShowWithNarration
		**/
        ShowWithNarration: Kso.KsoMsoTriState;

        /**
		* ShowWithAnimation
		**/
        ShowWithAnimation: Kso.KsoMsoTriState;

        /**
		* SlideShowName
		**/
        SlideShowName: string;

        /**
		* RangeType
		**/
        RangeType: WppPpSlideShowRangeType;

        /**
		* ShowScrollbar
		**/
        ShowScrollbar: Kso.KsoMsoTriState;

        /**
		* ShowPresenterView
		**/
        ShowPresenterView: Kso.KsoMsoTriState;

        /**
		* ShowMediaControls
		**/
        ShowMediaControls: Kso.KsoMsoTriState;

    }

    interface WppNamedSlideShow {
        /**
		* Application
		**/
        readonly Application: WppApplication;

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
		* SlideIDs
		**/
        readonly SlideIDs: any;

        /**
		* Count
		**/
        readonly Count: number;

    }

    interface WppSlideShowWindows {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppSlideShowWindow): void;

    }

    interface WppSlideShowWindow {
        /**
		* Presentation
		**/
        readonly Presentation: WppPresentation;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* IsFullScreen
		**/
        readonly IsFullScreen: Kso.KsoMsoTriState;

        /**
		* View
		**/
        readonly View: WppSlideShowView;

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
		* HWND
		**/
        readonly HWND: number;

        /**
		* Active
		**/
        readonly Active: Kso.KsoMsoTriState;

        Activate(): void;

        /**
		* SlideNavigation
		**/
        readonly SlideNavigation: WppSlideNavigation;

    }

    interface WppSlideShowView {
        GotoClick(Index?: number): void;

        /**
		* AcceleratorsEnabled
		**/
        AcceleratorsEnabled: Kso.KsoMsoTriState;

        /**
		* IsNamedShow
		**/
        readonly IsNamedShow: Kso.KsoMsoTriState;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* State
		**/
        State: WppPpSlideShowState;

        /**
		* Slide
		**/
        readonly Slide: WppSlide;

        /**
		* PointerType
		**/
        PointerType: WppPpSlideShowPointerType;

        First(): void;

        /**
		* Zoom
		**/
        readonly Zoom: number;

        /**
		* MediaControlsHeight
		**/
        readonly MediaControlsHeight: number;

        /**
		* PresentationElapsedTime
		**/
        readonly PresentationElapsedTime: number;

        /**
		* SlideElapsedTime
		**/
        SlideElapsedTime: number;

        EndNamedShow(): void;

        Last(): void;

        /**
		* LastSlideViewed
		**/
        readonly LastSlideViewed: WppSlide;

        /**
		* MediaControlsVisible
		**/
        readonly MediaControlsVisible: Kso.KsoMsoTriState;

        /**
		* AdvanceMode
		**/
        readonly AdvanceMode: WppPpSlideShowAdvanceMode;

        /**
		* PointerColor
		**/
        readonly PointerColor: Kso.KsoColorFormat;

        /**
		* SlideShowName
		**/
        readonly SlideShowName: string;

        DrawLine(BeginX?: number, BeginY?: number, EndX?: number, EndY?: number): void;

        EraseDrawing(): void;

        Next(): void;

        InstallTracker(pTracker?: WppMouseTracker, Presenter?: Kso.KsoMsoTriState): void;

        Previous(): void;

        GotoSlide(Index?: number, ResetSlide?: Kso.KsoMsoTriState): void;

        GotoNamedShow(SlideShowName?: string): void;

        ResetSlideTime(): void;

        Exit(): void;

        /**
		* CurrentShowPosition
		**/
        readonly CurrentShowPosition: number;

        GetClickIndex(GetClickIndex?: number): void;

        GetClickCount(GetClickCount?: number): void;

        FirstAnimationIsAutomatic(FirstAnimationIsAutomatic?: boolean): void;

        Player(ShapeId?: any, Player?: WppPlayer): void;

        /**
		* MediaControlsLeft
		**/
        readonly MediaControlsLeft: number;

        /**
		* MediaControlsTop
		**/
        readonly MediaControlsTop: number;

        /**
		* MediaControlsWidth
		**/
        readonly MediaControlsWidth: number;

    }

    interface WppMouseTracker {
        OnTrack(X?: number, Y?: number): void;

        EndTrack(X?: number, Y?: number): void;

    }

    interface WppSlideNavigation {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Visible
		**/
        Visible: boolean;

    }

    interface WppPoint {
        Delete(RHS?: any): void;

        /**
		* MarkerForegroundColor
		**/
        MarkerForegroundColor: number;

        /**
		* DataLabel
		**/
        readonly DataLabel: WppDataLabel;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

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

        Copy(RHS?: any): void;

        ClearFormats(RHS?: any): void;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Explosion
		**/
        Explosion: number;

        /**
		* Interior
		**/
        readonly Interior: WppInterior;

        /**
		* Left
		**/
        readonly Left: number;

        _ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, RHS?: any): void;

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

        Paste(RHS?: any): void;

        Select(RHS?: any): void;

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

        ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, RHS?: any): void;

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
		* Creator
		**/
        readonly Creator: number;

        /**
		* PictureUnit
		**/
        PictureUnit: number;

        /**
		* PictureUnit2
		**/
        PictureUnit2: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* Top
		**/
        readonly Top: number;

        PieSliceLocation(loc?: Kso.KsoXlPieSliceLocation, Index?: Kso.KsoXlPieSliceIndex, pval?: number): void;

    }

    interface WppFonts {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: any, Item?: WppFont): void;

        Replace(Original?: string, Replacement?: string): void;

    }

    interface WppDocumentWindows {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppDocumentWindow): void;

        Arrange(arrangeStyle?: WppPpArrangeStyle): void;

    }

    interface WppDocumentWindow {
        /**
		* WindowState
		**/
        WindowState: WppPpWindowState;

        /**
		* Presentation
		**/
        readonly Presentation: WppPresentation;

        /**
		* Selection
		**/
        readonly Selection: WppSelection;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* View
		**/
        readonly View: WppView;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BlackAndWhite
		**/
        BlackAndWhite: Kso.KsoMsoTriState;

        /**
		* ViewType
		**/
        ViewType: WppPpViewType;

        /**
		* Active
		**/
        readonly Active: Kso.KsoMsoTriState;

        Activate(): void;

        /**
		* Caption
		**/
        readonly Caption: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Top
		**/
        Top: number;

        SmallScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): void;

        /**
		* Width
		**/
        Width: number;

        /**
		* Height
		**/
        Height: number;

        FitToPage(): void;

        LargeScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): void;

        /**
		* SplitVertical
		**/
        SplitVertical: number;

        NewWindow(NewWindow?: WppDocumentWindow): void;

        Close(): void;

        IsSectionExpanded(sectionIndex?: number, IsSectionExpanded?: boolean): void;

        /**
		* HWND
		**/
        readonly HWND: number;

        /**
		* ActivePane
		**/
        readonly ActivePane: WppPane;

        /**
		* Panes
		**/
        readonly Panes: WppPanes;

        /**
		* SplitHorizontal
		**/
        SplitHorizontal: number;

        RangeFromPoint(X?: number, Y?: number, RangeFromPoint?: any): void;

        PointsToScreenPixelsY(Points?: number, PointsToScreenPixelsY?: number): void;

        PointsToScreenPixelsX(Points?: number, PointsToScreenPixelsX?: number): void;

        ScrollIntoView(Left?: number, Top?: number, Width?: number, Height?: number, Start?: Kso.KsoMsoTriState): void;

        ExpandSection(sectionIndex?: number, Expand?: boolean): void;

    }

    interface WppView {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Type
		**/
        readonly Type: WppPpViewType;

        /**
		* Slide
		**/
        Slide: any;

        /**
		* Zoom
		**/
        Zoom: number;

        /**
		* PrintOptions
		**/
        readonly PrintOptions: WppPrintOptions;

        Paste(): void;

        /**
		* DisplaySlideMiniature
		**/
        DisplaySlideMiniature: Kso.KsoMsoTriState;

        GotoSlide(Index?: number): void;

        /**
		* ZoomToFit
		**/
        ZoomToFit: Kso.KsoMsoTriState;

        PasteSpecial(DataType?: WppPpPasteDataType, DisplayAsIcon?: Kso.KsoMsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Kso.KsoMsoTriState): void;

        PrintOut(From?: number, To?: number, PrintToFile?: string, Copies?: number, Collate?: Kso.KsoMsoTriState): void;

        Player(ShapeId?: any, Player?: WppPlayer): void;

        /**
		* MediaControlsVisible
		**/
        readonly MediaControlsVisible: Kso.KsoMsoTriState;

        /**
		* MediaControlsLeft
		**/
        readonly MediaControlsLeft: number;

        /**
		* MediaControlsTop
		**/
        readonly MediaControlsTop: number;

        /**
		* MediaControlsWidth
		**/
        readonly MediaControlsWidth: number;

        /**
		* MediaControlsHeight
		**/
        readonly MediaControlsHeight: number;

    }

    interface WppTrendline {
        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Intercept
		**/
        Intercept: number;

        Delete(RHS?: any): void;

        /**
		* DataLabel
		**/
        readonly DataLabel: WppDataLabel;

        /**
		* Name
		**/
        Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        ClearFormats(RHS?: any): void;

        /**
		* DisplayEquation
		**/
        DisplayEquation: boolean;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* DisplayRSquared
		**/
        DisplayRSquared: boolean;

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

        Select(RHS?: any): void;

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
        readonly Format: WppChartFormat;

        /**
		* Backward2
		**/
        Backward2: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Backward
		**/
        Backward: number;

        /**
		* Forward
		**/
        Forward: number;

    }

    interface WppPrintOptions {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* PrintColorType
		**/
        PrintColorType: WppPpPrintColorType;

        /**
		* Collate
		**/
        Collate: Kso.KsoMsoTriState;

        /**
		* OutputType
		**/
        OutputType: WppPpPrintOutputType;

        /**
		* NumberOfCopies
		**/
        NumberOfCopies: number;

        /**
		* FitToPage
		**/
        FitToPage: Kso.KsoMsoTriState;

        /**
		* PrintHiddenSlides
		**/
        PrintHiddenSlides: Kso.KsoMsoTriState;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* FrameSlides
		**/
        FrameSlides: Kso.KsoMsoTriState;

        /**
		* PrintInBackground
		**/
        PrintInBackground: Kso.KsoMsoTriState;

        /**
		* RangeType
		**/
        RangeType: WppPpPrintRangeType;

        /**
		* Ranges
		**/
        readonly Ranges: WppPrintRanges;

        /**
		* PrintFontsAsGraphics
		**/
        PrintFontsAsGraphics: Kso.KsoMsoTriState;

        /**
		* SlideShowName
		**/
        SlideShowName: string;

        /**
		* ActivePrinter
		**/
        ActivePrinter: string;

        /**
		* HandoutOrder
		**/
        HandoutOrder: WppPpPrintHandoutOrder;

        /**
		* PrintComments
		**/
        PrintComments: Kso.KsoMsoTriState;

        /**
		* sectionIndex
		**/
        sectionIndex: number;

        /**
		* HighQuality
		**/
        HighQuality: Kso.KsoMsoTriState;

    }

    interface WppPrintRange {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Start
		**/
        readonly Start: number;

        /**
		* End
		**/
        readonly End: number;

    }

    interface WppPrintRanges {
        Add(Start?: number, End?: number, Add?: WppPrintRange): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        Item(Index?: number, Item?: WppPrintRange): void;

        ClearAll(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface WppPane {
        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ViewType
		**/
        readonly ViewType: WppPpViewType;

        Activate(): void;

        /**
		* Active
		**/
        readonly Active: Kso.KsoMsoTriState;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppPublishObjects {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppPublishObject): void;

    }

    interface WppWebOptions {
        /**
		* IncludeNavigation
		**/
        IncludeNavigation: Kso.KsoMsoTriState;

        /**
		* FrameColors
		**/
        FrameColors: WppPpFrameColors;

        /**
		* ResizeGraphics
		**/
        ResizeGraphics: Kso.KsoMsoTriState;

        /**
		* ShowSlideAnimation
		**/
        ShowSlideAnimation: Kso.KsoMsoTriState;

        /**
		* AllowPNG
		**/
        AllowPNG: Kso.KsoMsoTriState;

        /**
		* ScreenSize
		**/
        ScreenSize: Kso.KsoMsoScreenSize;

        /**
		* OrganizeInFolder
		**/
        OrganizeInFolder: Kso.KsoMsoTriState;

        /**
		* UseLongFileNames
		**/
        UseLongFileNames: Kso.KsoMsoTriState;

        /**
		* RelyOnVML
		**/
        RelyOnVML: Kso.KsoMsoTriState;

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

        /**
		* HTMLVersion
		**/
        HTMLVersion: WppPpHTMLVersion;

    }

    interface WppResearch {
        IsResearchService(ServiceID?: string, IsResearchService?: boolean): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Query(ServiceID?: string, QueryString?: any, QueryLanguage?: any, UseSelection?: boolean, LaunchQuery?: boolean): void;

        SetLanguagePair(Language1?: any, Language2?: any): void;

    }

    interface WppSectionProperties {
        AddBeforeSlide(SlideIndex?: number, sectionName?: string, BeforeSlide?: number): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        Name(sectionIndex?: number, Name?: string): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        SlidesCount(sectionIndex?: number, SlidesCount?: number): void;

        /**
		* Count
		**/
        readonly Count: number;

        Rename(sectionIndex?: number, sectionName?: string): void;

        AddSection(sectionIndex?: number, sectionName?: any, Section?: number): void;

        FirstSlide(sectionIndex?: number, FirstSlide?: number): void;

        Move(sectionIndex?: number, toPos?: number): void;

        Delete(sectionIndex?: number, deleteSlides?: boolean): void;

        SectionID(sectionIndex?: number, SectionID?: string): void;

    }

    interface WppCoauthoring {
        EndReview(): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* MergeMode
		**/
        readonly MergeMode: boolean;

        /**
		* FavorServerEditsDuringMerge
		**/
        FavorServerEditsDuringMerge: boolean;

        /**
		* CoauthorCount
		**/
        readonly CoauthorCount: number;

        /**
		* PendingUpdates
		**/
        readonly PendingUpdates: boolean;

    }

    interface WppBroadcast {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        Resume(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Start(serverUrl?: string): void;

        /**
		* SessionID
		**/
        readonly SessionID: string;

        Pause(): void;

        End(): void;

        /**
		* AttendeeUrl
		**/
        readonly AttendeeUrl: string;

        /**
		* IsBroadcasting
		**/
        readonly IsBroadcasting: boolean;

        AddMeetingNotes(notesUrl?: string, notesWacUrl?: string): void;

        /**
		* State
		**/
        readonly State: Kso.KsoMsoBroadcastState;

        /**
		* Capabilities
		**/
        readonly Capabilities: number;

        /**
		* PresenterServiceUrl
		**/
        readonly PresenterServiceUrl: string;

    }

    interface WppPresEvents {}

    interface WppProtectedViewWindow {
        /**
		* WindowState
		**/
        WindowState: WppPpWindowState;

        /**
		* Presentation
		**/
        readonly Presentation: WppPresentation;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Left
		**/
        Left: number;

        /**
		* Active
		**/
        readonly Active: Kso.KsoMsoTriState;

        Activate(): void;

        /**
		* Caption
		**/
        readonly Caption: string;

        /**
		* SourcePath
		**/
        readonly SourcePath: string;

        /**
		* SourceName
		**/
        readonly SourceName: string;

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

        Close(): void;

        Edit(ModifyPassword?: string, Edit?: WppPresentation): void;

        /**
		* HWND
		**/
        readonly HWND: number;

    }

    interface WppGridlines {
        Delete(pvar?: any): void;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(pvar?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppAddIns {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: any, Item?: WppAddIn): void;

        Add(FileName?: string, Add?: WppAddIn): void;

        Remove(Index?: any): void;

    }

    interface WppDefaultWebOptions {
        /**
		* IncludeNavigation
		**/
        IncludeNavigation: Kso.KsoMsoTriState;

        /**
		* FrameColors
		**/
        FrameColors: WppPpFrameColors;

        /**
		* ResizeGraphics
		**/
        ResizeGraphics: Kso.KsoMsoTriState;

        /**
		* ShowSlideAnimation
		**/
        ShowSlideAnimation: Kso.KsoMsoTriState;

        /**
		* AllowPNG
		**/
        AllowPNG: Kso.KsoMsoTriState;

        /**
		* ScreenSize
		**/
        ScreenSize: Kso.KsoMsoScreenSize;

        /**
		* OrganizeInFolder
		**/
        OrganizeInFolder: Kso.KsoMsoTriState;

        /**
		* UseLongFileNames
		**/
        UseLongFileNames: Kso.KsoMsoTriState;

        /**
		* RelyOnVML
		**/
        RelyOnVML: Kso.KsoMsoTriState;

        /**
		* Encoding
		**/
        Encoding: Kso.KsoMsoEncoding;

        /**
		* UpdateLinksOnSave
		**/
        UpdateLinksOnSave: Kso.KsoMsoTriState;

        /**
		* CheckIfOfficeIsHTMLEditor
		**/
        CheckIfOfficeIsHTMLEditor: Kso.KsoMsoTriState;

        /**
		* AlwaysSaveInDefaultEncoding
		**/
        AlwaysSaveInDefaultEncoding: Kso.KsoMsoTriState;

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
        SaveNewWebPagesAsWebArchives: Kso.KsoMsoTriState;

        /**
		* HTMLVersion
		**/
        HTMLVersion: WppPpHTMLVersion;

    }

    interface WppAutoCorrect {
        /**
		* DisplayAutoCorrectOptions
		**/
        DisplayAutoCorrectOptions: boolean;

        /**
		* DisplayAutoLayoutOptions
		**/
        DisplayAutoLayoutOptions: boolean;

    }

    interface WppFileConverters {
        Item(Index?: any, Item?: WppFileConverter): void;

    }

    interface WppFileConverter {
        /**
		* CanSave
		**/
        readonly CanSave: boolean;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Extensions
		**/
        readonly Extensions: string;

        /**
		* ClassName
		**/
        readonly ClassName: string;

        /**
		* CanOpen
		**/
        readonly CanOpen: boolean;

        /**
		* Creator
		**/
        readonly Creator: WppFileConverters;

        /**
		* FormatName
		**/
        readonly FormatName: string;

        /**
		* Parent
		**/
        readonly Parent: WppFileConverters;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Path
		**/
        readonly Path: string;

        /**
		* OpenFormat
		**/
        readonly OpenFormat: number;

        /**
		* SaveFormat
		**/
        readonly SaveFormat: number;

    }

    interface WppProtectedViewWindows {
        Open(FileName?: string, ReadPassword?: string, OpenAndRepair?: Kso.KsoMsoTriState, Open?: WppProtectedViewWindow): void;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppProtectedViewWindow): void;

    }

    interface WppThemeVariant {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Width
		**/
        readonly Width: number;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* Id
		**/
        readonly Id: string;

    }

    interface WppThemeVariants {
        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* Parent
		**/
        readonly Parent: any;

        Item(Index?: number, Item?: WppThemeVariant): void;

    }

    interface WppOCXExtender {
        /**
		* Height
		**/
        Height: number;

        /**
		* Visible
		**/
        Visible: boolean;

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
		* ZOrderPosition
		**/
        readonly ZOrderPosition: number;

        /**
		* AltHTML
		**/
        AltHTML: string;

        /**
		* Name
		**/
        Name: string;

    }

    interface WppOCXExtenderEvents {
        GotFocus(): void;

        LostFocus(): void;

    }

    interface WppAxes extends Kso.KsoAxes {}

    interface WppAxis {
        /**
		* TickLabels
		**/
        readonly TickLabels: WppTickLabels;

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
        readonly MajorGridlines: WppGridlines;

        /**
		* AxisGroup
		**/
        readonly AxisGroup: Kso.KsoXlAxisGroup;

        /**
		* MinorTickMark
		**/
        MinorTickMark: Kso.KsoXlTickMark;

        Delete(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* AxisTitle
		**/
        readonly AxisTitle: WppAxisTitle;

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

        Select(RHS?: any): void;

        /**
		* MaximumScaleIsAuto
		**/
        MaximumScaleIsAuto: boolean;

        /**
		* Application
		**/
        readonly Application: WppApplication;

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
        readonly MinorGridlines: WppGridlines;

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
        readonly DisplayUnitLabel: WppDisplayUnitLabel;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

    }

    interface WppAxisTitle {
        /**
		* Caption
		**/
        Caption: string;

        Characters(Start?: any, Length?: any, RHS?: WppChartCharacters): void;

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
        readonly Format: WppChartFormat;

        /**
		* Text
		**/
        Text: string;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

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
        readonly Interior: WppInterior;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(RHS?: any): void;

        /**
		* IncludeInLayout
		**/
        IncludeInLayout: boolean;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

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

    interface WppDisplayUnitLabel {
        /**
		* Caption
		**/
        Caption: string;

        Characters(Start?: any, Length?: any, RHS?: WppChartCharacters): void;

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
        readonly Format: WppChartFormat;

        /**
		* Text
		**/
        Text: string;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

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
        readonly Interior: WppInterior;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        Select(RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

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

    interface WppErrorBars {
        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        ClearFormats(RHS?: any): void;

        /**
		* EndStyle
		**/
        EndStyle: Kso.KsoXlEndStyleCap;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppLeaderLines {
        /**
		* Parent
		**/
        readonly Parent: any;

        Delete(): void;

        /**
		* Border
		**/
        readonly Border: WppChartBorder;

        Select(): void;

        /**
		* Format
		**/
        readonly Format: WppChartFormat;

        /**
		* Creator
		**/
        readonly Creator: number;

        /**
		* Application
		**/
        readonly Application: WppApplication;

    }

    interface WppLegendEntries extends Kso.KsoLegendEntries {}

    interface WppLegendEntry extends Kso.KsoLegendEntry {}

    interface WppSeriesCollection extends Kso.KsoSeriesCollection {}

    interface WppFullSeriesCollection extends Kso.KsoFullSeriesCollection {}

    interface WppChartCategory {
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

    interface WppCategoryCollection extends Kso.KsoCategoryCollection {}

    interface WppPPTCtrlExtender {
        /**
		* Height
		**/
        Height: number;

        /**
		* Visible
		**/
        Visible: boolean;

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
		* ZOrderPosition
		**/
        readonly ZOrderPosition: number;

        /**
		* AltHTML
		**/
        AltHTML: string;

        /**
		* Name
		**/
        Name: string;

    }

    enum WppPpTextStyleType {
        ppDefaultStyle=1,
        ppTitleStyle=2,
        ppBodyStyle=3,
    }

    enum WppPpColorSchemeIndex {
        ppSchemeColorMixed=-2,
        ppAccent1=6,
        ppNotSchemeColor=0,
        ppShadow=3,
        ppBackground=1,
        ppForeground=2,
        ppTitle=4,
        ppFill=5,
        ppAccent2=7,
        ppAccent3=8,
    }

    enum WppPpWindowState {
        ppWindowNormal=1,
        ppWindowMinimized=2,
        ppWindowMaximized=3,
    }

    enum WppPpDirection {
        ppDirectionMixed=-2,
        ppDirectionLeftToRight=1,
        ppDirectionRightToLeft=2,
    }

    enum WppPpSaveAsFileType {
        ppSaveAsPNG=18,
        ppSaveAsPresentation=1,
        ppSaveAsPowerPoint7=2,
        ppSaveAsPowerPoint4=3,
        ppSaveAsPowerPoint3=4,
        ppSaveAsAddIn=8,
        ppSaveAsOpenXMLTheme=31,
        ppSaveAsTemplate=5,
        ppSaveAsXMLPresentation=34,
        ppSaveAsRTF=6,
        ppSaveAsOpenXMLPicturePresentation=36,
        ppSaveAsShow=7,
        ppSaveAsExternalConverter=64000,
        ppSaveAsEMF=23,
        ppSaveAsPowerPoint4FarEast=10,
        ppSaveAsDefault=11,
        ppSaveAsHTML=12,
        ppSaveAsHTMLv3=13,
        ppSaveAsMP4=39,
        ppSaveAsHTMLDual=14,
        ppSaveAsMetaFile=15,
        ppSaveAsWMV=37,
        ppSaveAsGIF=16,
        ppSaveAsJPG=17,
        ppSaveAsBMP=19,
        ppSaveAsWebArchive=20,
        ppSaveAsTIF=21,
        ppSaveAsOpenDocumentPresentation=35,
        ppSaveAsOpenXMLPresentationMacroEnabled=25,
        ppSaveAsPresForReview=22,
        ppSaveAsOpenXMLPresentation=24,
        ppSaveAsOpenXMLTemplate=26,
        ppSaveAsOpenXMLTemplateMacroEnabled=27,
        ppSaveAsOpenXMLAddin=30,
        ppSaveAsOpenXMLShow=28,
        ppSaveAsOpenXMLShowMacroEnabled=29,
        ppSaveAsPDF=32,
        ppSaveAsXPS=33,
        ppSaveAsStrictOpenXMLPresentation=38,
    }

    enum WppPpArrangeStyle {
        ppArrangeCascade=2,
        ppArrangeTiled=1,
    }

    enum WppPpViewType {
        ppViewSlide=1,
        ppViewTitleMaster=8,
        ppViewSlideMaster=2,
        ppViewThumbnails=11,
        ppViewNotesPage=3,
        ppViewOutline=6,
        ppViewHandoutMaster=4,
        ppViewNotesMaster=5,
        ppViewSlideSorter=7,
        ppViewPrintPreview=10,
        ppViewNormal=9,
        ppViewMasterThumbnails=12,
    }

    enum WppPpSlideSizeType {
        ppSlideSizeOnScreen=1,
        ppSlideSizeLetterPaper=2,
        ppSlideSizeLedgerPaper=8,
        ppSlideSize35MM=4,
        ppSlideSizeA4Paper=3,
        ppSlideSizeCustom=7,
        ppSlideSizeOverhead=5,
        ppSlideSizeBanner=6,
        ppSlideSizeA3Paper=9,
        ppSlideSizeB4ISOPaper=10,
        ppSlideSizeB5ISOPaper=11,
        ppSlideSizeB4JISPaper=12,
        ppSlideSizeB5JISPaper=13,
        ppSlideSizeHagakiCard=14,
        ppSlideSizeOnScreen16x10=16,
        ppSlideSizeOnScreen16x9=15,
    }

    enum WppPpEntryEffect {
        ppEffectMixed=-2,
        ppEffectFlipUp=3906,
        ppEffectCheckerboardDown=1026,
        ppEffectZoomCenter=3349,
        ppEffectZoomOut=3347,
        ppEffectFlyFromBottomRight=3336,
        ppEffectNone=0,
        ppEffectBoxIn=3074,
        ppEffectCut=257,
        ppEffectDissolve=1537,
        ppEffectCutThroughBlack=258,
        ppEffectWipeRight=2819,
        ppEffectRandom=513,
        ppEffectCheckerboardAcross=1025,
        ppEffectOrbitRight=3928,
        ppEffectBlindsHorizontal=769,
        ppEffectZoomBottom=3350,
        ppEffectUncoverDown=2052,
        ppEffectBlindsVertical=770,
        ppEffectCoverLeft=1281,
        ppEffectFlashOnceMedium=3842,
        ppEffectPeekFromDown=3338,
        ppEffectUncoverLeft=2049,
        ppEffectCoverUp=1282,
        ppEffectCoverRight=1283,
        ppEffectWipeDown=2820,
        ppEffectCoverDown=1284,
        ppEffectWindLeft=3939,
        ppEffectWipeLeft=2817,
        ppEffectRandomBarsVertical=2306,
        ppEffectCoverLeftUp=1285,
        ppEffectFlipLeft=3905,
        ppEffectCoverRightUp=1286,
        ppEffectCrawlFromLeft=3341,
        ppEffectOrigamiLeft=3952,
        ppEffectCoverLeftDown=1287,
        ppEffectCoverRightDown=1288,
        ppEffectFade=1793,
        ppEffectUncoverUp=2050,
        ppEffectStripsRightUp=2566,
        ppEffectStripsLeftUp=2565,
        ppEffectFadeSmoothly=3849,
        ppEffectUncoverRight=2051,
        ppEffectFlyFromBottom=3332,
        ppEffectUncoverLeftUp=2053,
        ppEffectUncoverRightUp=2054,
        ppEffectFlyFromBottomLeft=3335,
        ppEffectUncoverLeftDown=2055,
        ppEffectUncoverRightDown=2056,
        ppEffectRandomBarsHorizontal=2305,
        ppEffectHoneycomb=3898,
        ppEffectStripsUpLeft=2561,
        ppEffectOrbitDown=3929,
        ppEffectStripsUpRight=2562,
        ppEffectZoomOutSlightly=3348,
        ppEffectStripsDownLeft=2563,
        ppEffectStripsDownRight=2564,
        ppEffectZoomIn=3345,
        ppEffectFlyFromRight=3331,
        ppEffectFlyFromTop=3330,
        ppEffectCubeUp=3915,
        ppEffectStripsLeftDown=2567,
        ppEffectStretchUp=3353,
        ppEffectStripsRightDown=2568,
        ppEffectWipeUp=2818,
        ppEffectBoxOut=3073,
        ppEffectFlyFromLeft=3329,
        ppEffectFlyFromTopLeft=3333,
        ppEffectFlyFromTopRight=3334,
        ppEffectPeekFromLeft=3337,
        ppEffectCrawlFromRight=3343,
        ppEffectPeekFromRight=3339,
        ppEffectCrawlFromUp=3342,
        ppEffectFracture=3942,
        ppEffectPrestige=3941,
        ppEffectPeekFromUp=3340,
        ppEffectZoomInSlightly=3346,
        ppEffectRevealBlackRight=3897,
        ppEffectCrawlFromDown=3344,
        ppEffectPanDown=3933,
        ppEffectStretchAcross=3351,
        ppEffectStretchLeft=3352,
        ppEffectStretchRight=3354,
        ppEffectStretchDown=3355,
        ppEffectPlusOut=3851,
        ppEffectSwivel=3356,
        ppEffectSwitchLeft=3901,
        ppEffectSpiral=3357,
        ppEffectSplitHorizontalOut=3585,
        ppEffectOrbitUp=3927,
        ppEffectDoorsHorizontal=3885,
        ppEffectSplitHorizontalIn=3586,
        ppEffectWheelReverse1Spoke=3862,
        ppEffectSplitVerticalOut=3587,
        ppEffectSplitVerticalIn=3588,
        ppEffectFlashOnceFast=3841,
        ppEffectFlashOnceSlow=3843,
        ppEffectAppear=3844,
        ppEffectRevealSmoothRight=3895,
        ppEffectCircleOut=3845,
        ppEffectDiamondOut=3846,
        ppEffectCombHorizontal=3847,
        ppEffectCombVertical=3848,
        ppEffectNewsflash=3850,
        ppEffectCubeDown=3917,
        ppEffectPushDown=3852,
        ppEffectCubeLeft=3914,
        ppEffectPushLeft=3853,
        ppEffectCubeRight=3916,
        ppEffectPushRight=3854,
        ppEffectDrapeLeft=3936,
        ppEffectPushUp=3855,
        ppEffectWedge=3856,
        ppEffectWheel1Spoke=3857,
        ppEffectWheel8Spokes=3861,
        ppEffectWheel4Spokes=3860,
        ppEffectWheel3Spokes=3859,
        ppEffectWheel2Spokes=3858,
        ppEffectVortexLeft=3863,
        ppEffectVortexUp=3864,
        ppEffectVortexRight=3865,
        ppEffectVortexDown=3866,
        ppEffectRippleCenter=3867,
        ppEffectRippleRightUp=3868,
        ppEffectRippleLeftUp=3869,
        ppEffectRippleLeftDown=3870,
        ppEffectRippleRightDown=3871,
        ppEffectRotateDown=3921,
        ppEffectGlitterDiamondLeft=3872,
        ppEffectGlitterDiamondUp=3873,
        ppEffectGlitterDiamondRight=3874,
        ppEffectRevealBlackLeft=3896,
        ppEffectGlitterDiamondDown=3875,
        ppEffectGlitterHexagonLeft=3876,
        ppEffectGlitterHexagonUp=3877,
        ppEffectGlitterHexagonRight=3878,
        ppEffectGlitterHexagonDown=3879,
        ppEffectGalleryLeft=3880,
        ppEffectGalleryRight=3881,
        ppEffectConveyorLeft=3882,
        ppEffectConveyorRight=3883,
        ppEffectDoorsVertical=3884,
        ppEffectWindowVertical=3886,
        ppEffectWindowHorizontal=3887,
        ppEffectWarpIn=3888,
        ppEffectWarpOut=3889,
        ppEffectFlyThroughIn=3890,
        ppEffectFlyThroughOut=3891,
        ppEffectFlyThroughInBounce=3892,
        ppEffectFlyThroughOutBounce=3893,
        ppEffectRevealSmoothLeft=3894,
        ppEffectFerrisWheelLeft=3899,
        ppEffectFerrisWheelRight=3900,
        ppEffectSwitchUp=3902,
        ppEffectSwitchRight=3903,
        ppEffectFlipDown=3908,
        ppEffectSwitchDown=3904,
        ppEffectFlipRight=3907,
        ppEffectFlashbulb=3909,
        ppEffectShredStripsIn=3910,
        ppEffectShredStripsOut=3911,
        ppEffectShredRectangleIn=3912,
        ppEffectShredRectangleOut=3913,
        ppEffectRotateLeft=3918,
        ppEffectRotateUp=3919,
        ppEffectPageCurlSingleRight=3947,
        ppEffectRotateRight=3920,
        ppEffectBoxLeft=3922,
        ppEffectBoxUp=3923,
        ppEffectBoxRight=3924,
        ppEffectBoxDown=3925,
        ppEffectOrbitLeft=3926,
        ppEffectPanLeft=3930,
        ppEffectPanUp=3931,
        ppEffectPanRight=3932,
        ppEffectFallOverLeft=3934,
        ppEffectFallOverRight=3935,
        ppEffectDrapeRight=3937,
        ppEffectCurtains=3938,
        ppEffectWindRight=3940,
        ppEffectCrush=3943,
        ppEffectPeelOffLeft=3944,
        ppEffectPeelOffRight=3945,
        ppEffectPageCurlSingleLeft=3946,
        ppEffectPageCurlDoubleLeft=3948,
        ppEffectPageCurlDoubleRight=3949,
        ppEffectAirplaneLeft=3950,
        ppEffectAirplaneRight=3951,
        ppEffectOrigamiRight=3953,
    }

    enum WppPpGuideOrientation {
        ppHorizontalGuide=1,
        ppVerticalGuide=2,
    }

    enum WppPpNumberedBulletStyle {
        ppBulletStyleMixed=-2,
        ppBulletCircleNumWDWhitePlain=19,
        ppBulletAlphaLCPeriod=0,
        ppBulletAlphaUCPeriod=1,
        ppBulletArabicPeriod=3,
        ppBulletArabicDBPeriod=29,
        ppBulletArabicParenRight=2,
        ppBulletRomanUCParenBoth=14,
        ppBulletRomanLCParenBoth=4,
        ppBulletRomanLCParenRight=5,
        ppBulletRomanLCPeriod=6,
        ppBulletRomanUCPeriod=7,
        ppBulletHindiAlpha1Period=40,
        ppBulletAlphaUCParenBoth=10,
        ppBulletAlphaLCParenBoth=8,
        ppBulletAlphaUCParenRight=11,
        ppBulletAlphaLCParenRight=9,
        ppBulletArabicDBPlain=28,
        ppBulletKanjiKoreanPeriod=27,
        ppBulletArabicParenBoth=12,
        ppBulletArabicPlain=13,
        ppBulletRomanUCParenRight=15,
        ppBulletSimpChinPlain=16,
        ppBulletSimpChinPeriod=17,
        ppBulletKanjiKoreanPlain=26,
        ppBulletCircleNumDBPlain=18,
        ppBulletThaiNumParenBoth=35,
        ppBulletCircleNumWDBlackPlain=20,
        ppBulletTradChinPlain=21,
        ppBulletHindiNumParenRight=39,
        ppBulletKanjiSimpChinDBPeriod=38,
        ppBulletTradChinPeriod=22,
        ppBulletThaiNumPeriod=33,
        ppBulletArabicAlphaDash=23,
        ppBulletArabicAbjadDash=24,
        ppBulletHebrewAlphaDash=25,
        ppBulletThaiAlphaPeriod=30,
        ppBulletThaiAlphaParenRight=31,
        ppBulletThaiAlphaParenBoth=32,
        ppBulletThaiNumParenRight=34,
        ppBulletHindiAlphaPeriod=36,
        ppBulletHindiNumPeriod=37,
    }

    enum WppPpTabStopType {
        ppTabStopMixed=-2,
        ppTabStopRight=3,
        ppTabStopLeft=1,
        ppTabStopDecimal=4,
        ppTabStopCenter=2,
    }

    enum WppPpSlideShowAdvanceMode {
        ppSlideShowUseSlideTimings=2,
        ppSlideShowManualAdvance=1,
        ppSlideShowRehearseNewTimings=3,
    }

    enum WppPpSlideLayout {
        ppLayoutMixed=-2,
        ppLayoutComparison=34,
        ppLayoutTextAndChart=5,
        ppLayoutTextAndTwoObjects=21,
        ppLayoutObject=16,
        ppLayoutTitle=1,
        ppLayoutFourObjects=24,
        ppLayoutMediaClipAndText=18,
        ppLayoutOrgchart=7,
        ppLayoutClipArtAndVerticalText=26,
        ppLayoutText=2,
        ppLayoutChart=8,
        ppLayoutChartAndText=6,
        ppLayoutTwoColumnText=3,
        ppLayoutTable=4,
        ppLayoutTextAndClipart=9,
        ppLayoutPictureWithCaption=36,
        ppLayoutClipartAndText=10,
        ppLayoutTitleOnly=11,
        ppLayoutTextAndMediaClip=17,
        ppLayoutBlank=12,
        ppLayoutTextAndObject=13,
        ppLayoutObjectAndText=14,
        ppLayoutLargeObject=15,
        ppLayoutObjectOverText=19,
        ppLayoutTextOverObject=20,
        ppLayoutTwoObjectsAndText=22,
        ppLayoutTwoObjectsOverText=23,
        ppLayoutSectionHeader=33,
        ppLayoutVerticalText=25,
        ppLayoutVerticalTitleAndText=27,
        ppLayoutVerticalTitleAndTextOverChart=28,
        ppLayoutTwoObjects=29,
        ppLayoutObjectAndTwoObjects=30,
        ppLayoutContentWithCaption=35,
        ppLayoutTwoObjectsAndObject=31,
        ppLayoutCustom=32,
    }

    enum WppMsoAnimAccumulate {
        msoAnimAccumulateNone=1,
        msoAnimAccumulateAlways=2,
    }

    enum WppPpTextUnitEffect {
        ppAnimateUnitMixed=-2,
        ppAnimateByParagraph=0,
        ppAnimateByWord=1,
        ppAnimateByCharacter=2,
    }

    enum WppPpTextLevelEffect {
        ppAnimateLevelMixed=-2,
        ppAnimateByThirdLevel=3,
        ppAnimateLevelNone=0,
        ppAnimateByAllLevels=16,
        ppAnimateByFirstLevel=1,
        ppAnimateByFourthLevel=4,
        ppAnimateBySecondLevel=2,
        ppAnimateByFifthLevel=5,
    }

    enum WppPpPrintRangeType {
        ppPrintAll=1,
        ppPrintCurrent=3,
        ppPrintSelection=2,
        ppPrintSlideRange=4,
        ppPrintNamedSlideShow=5,
        ppPrintSection=6,
    }

    enum WppPpBaselineAlignment {
        ppBaselineAlignMixed=-2,
        ppBaselineAlignBaseline=1,
        ppBaselineAlignTop=2,
        ppBaselineAlignFarEast50=4,
        ppBaselineAlignCenter=3,
        ppBaselineAlignAuto=5,
    }

    enum WppPpChartUnitEffect {
        ppAnimateChartMixed=-2,
        ppAnimateBySeriesElements=3,
        ppAnimateBySeries=1,
        ppAnimateChartAllAtOnce=5,
        ppAnimateByCategory=2,
        ppAnimateByCategoryElements=4,
    }

    enum WppPpSlideShowRangeType {
        ppShowAll=1,
        ppShowNamedSlideShow=3,
        ppShowSlideRange=2,
    }

    enum WppPpAfterEffect {
        ppAfterEffectNothing=0,
        ppAfterEffectMixed=-2,
        ppAfterEffectHide=1,
        ppAfterEffectHideOnClick=3,
        ppAfterEffectDim=2,
    }

    enum WppPpAdvanceMode {
        ppAdvanceModeMixed=-2,
        ppAdvanceOnClick=1,
        ppAdvanceOnTime=2,
    }

    enum WppPpSoundEffectType {
        ppSoundFile=2,
        ppSoundEffectsMixed=-2,
        ppSoundNone=0,
        ppSoundStopPrevious=1,
    }

    enum WppPpChangeCase {
        ppCaseTitle=4,
        ppCaseSentence=1,
        ppCaseUpper=3,
        ppCaseLower=2,
        ppCaseToggle=5,
    }

    enum WppPpFollowColors {
        ppFollowColorsNone=0,
        ppFollowColorsMixed=-2,
        ppFollowColorsTextAndBackground=2,
        ppFollowColorsScheme=1,
    }

    enum WppPpUpdateOption {
        ppUpdateOptionAutomatic=2,
        ppUpdateOptionMixed=-2,
        ppUpdateOptionManual=1,
    }

    enum WppPpParagraphAlignment {
        ppAlignmentMixed=-2,
        ppAlignRight=3,
        ppAlignLeft=1,
        ppAlignCenter=2,
        ppAlignThaiDistribute=6,
        ppAlignJustify=4,
        ppAlignDistribute=5,
        ppAlignJustifyLow=7,
    }

    enum WppPpSoundFormatType {
        ppSoundFormatMixed=-2,
        ppSoundFormatNone=0,
        ppSoundFormatWAV=1,
        ppSoundFormatMIDI=2,
        ppSoundFormatCDAudio=3,
    }

    enum WppPpIndentControl {
        ppIndentControlMixed=-2,
        ppIndentReplaceAttr=1,
        ppIndentKeepAttr=2,
    }

    enum WppPpSlideShowPointerType {
        ppSlideShowPointerAutoArrow=4,
        ppSlideShowPointerNone=0,
        ppSlideShowPointerEraser=5,
        ppSlideShowPointerArrow=1,
        ppSlideShowPointerPen=2,
        ppSlideShowPointerAlwaysHidden=3,
    }

    enum WppMsoAnimateByLevel {
        msoAnimateDiagramDepthByBranch=14,
        msoAnimateTextByFourthLevel=5,
        msoAnimateTextByFirstLevel=2,
        msoAnimateDiagramClockwise=17,
        msoAnimateLevelMixed=-1,
        msoAnimateTextBySecondLevel=3,
        msoAnimateLevelNone=0,
        msoAnimateChartAllAtOnce=7,
        msoAnimateTextByAllLevels=1,
        msoAnimateDiagramClockwiseOut=19,
        msoAnimateDiagramClockwiseIn=18,
        msoAnimateTextByThirdLevel=4,
        msoAnimateDiagramBreadthByLevel=16,
        msoAnimateTextByFifthLevel=6,
        msoAnimateChartByCategory=8,
        msoAnimateChartByCategoryElements=9,
        msoAnimateChartBySeries=10,
        msoAnimateDiagramUp=25,
        msoAnimateDiagramOutByRing=24,
        msoAnimateChartBySeriesElements=11,
        msoAnimateDiagramInByRing=23,
        msoAnimateDiagramAllAtOnce=12,
        msoAnimateDiagramDepthByNode=13,
        msoAnimateDiagramBreadthByNode=15,
        msoAnimateDiagramCounterClockwise=20,
        msoAnimateDiagramCounterClockwiseOut=22,
        msoAnimateDiagramCounterClockwiseIn=21,
        msoAnimateDiagramDown=26,
    }

    enum WppPpSlideShowState {
        ppSlideShowDone=5,
        ppSlideShowRunning=1,
        ppSlideShowPaused=2,
        ppSlideShowBlackScreen=3,
        ppSlideShowWhiteScreen=4,
    }

    enum WppPpSlideShowType {
        ppShowTypeKiosk=3,
        ppShowTypeSpeaker=1,
        ppShowTypeWindow2=4,
        ppShowTypeWindow=2,
    }

    enum WppPpFileDialogType {
        ppFileDialogOpen=1,
        ppFileDialogSave=2,
    }

    enum WppPpPrintOutputType {
        ppPrintOutputNineSlideHandouts=9,
        ppPrintOutputSlides=1,
        ppPrintOutputNotesPages=5,
        ppPrintOutputOneSlideHandouts=10,
        ppPrintOutputTwoSlideHandouts=2,
        ppPrintOutputSixSlideHandouts=4,
        ppPrintOutputBuildSlides=7,
        ppPrintOutputOutline=6,
        ppPrintOutputThreeSlideHandouts=3,
        ppPrintOutputFourSlideHandouts=8,
    }

    enum WppPpAlertLevel {
        ppAlertsNone=1,
        ppAlertsAll=2,
    }

    enum WppPpPrintHandoutOrder {
        ppPrintHandoutVerticalFirst=1,
        ppPrintHandoutHorizontalFirst=2,
    }

    enum WppPpPrintColorType {
        ppPrintColor=1,
        ppPrintBlackAndWhite=2,
        ppPrintPureBlackAndWhite=3,
    }

    enum WppPpSelectionType {
        ppSelectionNone=0,
        ppSelectionText=3,
        ppSelectionShapes=2,
        ppSelectionSlides=1,
    }

    enum WppPpDateTimeFormat {
        ppDateTimeMMMMyy=6,
        ppDateTimeddddMMMMddyyyy=2,
        ppDateTimeFormatMixed=-2,
        ppDateTimeMdyy=1,
        ppDateTimeMMyy=7,
        ppDateTimedMMMyy=5,
        ppDateTimeMMddyyhmmAMPM=9,
        ppDateTimedMMMMyyyy=3,
        ppDateTimeMMMMdyyyy=4,
        ppDateTimehmmssAMPM=13,
        ppDateTimeMMddyyHmm=8,
        ppDateTimeFigureOut=14,
        ppDateTimeHmm=10,
        ppDateTimeHmmss=11,
        ppDateTimehmmAMPM=12,
        ppDateTimeUAQ7=21,
        ppDateTimeUAQ6=20,
        ppDateTimeUAQ5=19,
        ppDateTimeUAQ4=18,
        ppDateTimeUAQ3=17,
        ppDateTimeUAQ2=16,
        ppDateTimeUAQ1=15,
    }

    enum WppPpExportMode {
        ppRelativeToSlide=1,
        ppClipRelativeToSlide=2,
        ppScaleToFit=3,
        ppScaleXY=4,
    }

    enum WppPpShapeFormat {
        ppShapeFormatGIF=0,
        ppShapeFormatJPG=1,
        ppShapeFormatPNG=2,
        ppShapeFormatEMF=5,
        ppShapeFormatWMF=4,
        ppShapeFormatBMP=3,
    }

    enum WppPpTransitionSpeed {
        ppTransitionSpeedMixed=-2,
        ppTransitionSpeedSlow=1,
        ppTransitionSpeedMedium=2,
        ppTransitionSpeedFast=3,
    }

    enum WppPpMouseActivation {
        ppMouseClick=1,
        ppMouseOver=2,
    }

    enum WppPpActionType {
        ppActionMixed=-2,
        ppActionNone=0,
        ppActionHyperlink=7,
        ppActionNextSlide=1,
        ppActionPreviousSlide=2,
        ppActionEndShow=6,
        ppActionFirstSlide=3,
        ppActionLastSlide=4,
        ppActionNamedSlideShow=10,
        ppActionLastSlideViewed=5,
        ppActionRunMacro=8,
        ppActionRunProgram=9,
        ppActionOLEVerb=11,
        ppActionPlay=12,
    }

    enum WppMsoAnimEffectRestart {
        msoAnimEffectRestartAlways=1,
        msoAnimEffectRestartNever=3,
        msoAnimEffectRestartWhenOff=2,
    }

    enum WppPpPublishSourceType {
        ppPublishAll=1,
        ppPublishSlideRange=2,
        ppPublishNamedSlideShow=3,
    }

    enum WppPpPlaceholderType {
        ppPlaceholderBody=2,
        ppPlaceholderMixed=-2,
        ppPlaceholderCenterTitle=3,
        ppPlaceholderDate=16,
        ppPlaceholderBitmap=9,
        ppPlaceholderTitle=1,
        ppPlaceholderObject=7,
        ppPlaceholderTable=12,
        ppPlaceholderSubtitle=4,
        ppPlaceholderVerticalTitle=5,
        ppPlaceholderVerticalBody=6,
        ppPlaceholderChart=8,
        ppPlaceholderMediaClip=10,
        ppPlaceholderOrgChart=11,
        ppPlaceholderSlideNumber=13,
        ppPlaceholderHeader=14,
        ppPlaceholderFooter=15,
        ppPlaceholderVerticalObject=17,
        ppPlaceholderPicture=18,
    }

    enum WppPpAutoSize {
        ppAutoSizeMixed=-2,
        ppAutoSizeNone=0,
        ppAutoSizeShapeToFitText=1,
    }

    enum WppMsoAnimProperty {
        msoAnimNone=0,
        msoAnimHeight=4,
        msoAnimX=1,
        msoAnimY=2,
        msoAnimTextBulletCharacter=111,
        msoAnimWidth=3,
        msoAnimTextFontUnderline=109,
        msoAnimOpacity=5,
        msoAnimVisibility=8,
        msoAnimTextFontSubscript=107,
        msoAnimRotation=6,
        msoAnimShapeShadowOffsetX=1014,
        msoAnimTextBulletNumber=113,
        msoAnimColor=7,
        msoAnimShapeLineColor=1009,
        msoAnimTextFontBold=100,
        msoAnimTextFontColor=101,
        msoAnimTextBulletType=117,
        msoAnimTextFontEmboss=102,
        msoAnimTextFontItalic=103,
        msoAnimShapeFillOn=1004,
        msoAnimTextFontName=104,
        msoAnimTextFontShadow=105,
        msoAnimTextFontSize=106,
        msoAnimTextFontStrikeThrough=110,
        msoAnimTextFontSuperscript=108,
        msoAnimTextBulletFontName=112,
        msoAnimShapePictureGrayscale=1003,
        msoAnimTextBulletColor=114,
        msoAnimTextBulletRelativeSize=115,
        msoAnimTextBulletStyle=116,
        msoAnimShapePictureContrast=1000,
        msoAnimShapeFillColor=1005,
        msoAnimShapePictureBrightness=1001,
        msoAnimShapePictureGamma=1002,
        msoAnimShapeFillOpacity=1006,
        msoAnimShapeFillBackColor=1007,
        msoAnimShapeLineOn=1008,
        msoAnimShapeShadowOn=1010,
        msoAnimShapeShadowType=1011,
        msoAnimShapeShadowColor=1012,
        msoAnimShapeShadowOpacity=1013,
        msoAnimShapeShadowOffsetY=1015,
    }

    enum WppPpMediaType {
        ppMediaTypeOther=1,
        ppMediaTypeMixed=-2,
        ppMediaTypeSound=2,
        ppMediaTypeMovie=3,
    }

    enum WppPpFarEastLineBreakLevel {
        ppFarEastLineBreakLevelNormal=1,
        ppFarEastLineBreakLevelStrict=2,
        ppFarEastLineBreakLevelCustom=3,
    }

    enum WppPpFrameColors {
        ppFrameColorsWhiteTextOnBlack=4,
        ppFrameColorsBrowserColors=1,
        ppFrameColorsPresentationSchemeTextColor=2,
        ppFrameColorsPresentationSchemeAccentColor=3,
        ppFrameColorsBlackTextOnWhite=5,
    }

    enum WppMsoAnimAfterEffect {
        msoAnimAfterEffectMixed=-1,
        msoAnimAfterEffectNone=0,
        msoAnimAfterEffectDim=1,
        msoAnimAfterEffectHide=2,
        msoAnimAfterEffectHideOnNextClick=3,
    }

    enum WppPpBorderType {
        ppBorderDiagonalDown=5,
        ppBorderTop=1,
        ppBorderLeft=2,
        ppBorderDiagonalUp=6,
        ppBorderBottom=3,
        ppBorderRight=4,
    }

    enum WppPpHTMLVersion {
        ppHTMLAutodetect=4,
        ppHTMLv4=2,
        ppHTMLv3=1,
        ppHTMLDual=3,
    }

    enum WppPpBulletType {
        ppBulletPicture=3,
        ppBulletMixed=-2,
        ppBulletNone=0,
        ppBulletUnnumbered=1,
        ppBulletNumbered=2,
    }

    enum WppMsoAnimType {
        msoAnimTypeFilter=7,
        msoAnimTypeMixed=-2,
        msoAnimTypeNone=0,
        msoAnimTypeColor=2,
        msoAnimTypeMotion=1,
        msoAnimTypeScale=3,
        msoAnimTypeRotation=4,
        msoAnimTypeProperty=5,
        msoAnimTypeCommand=6,
        msoAnimTypeSet=8,
    }

    enum WppMsoAnimDirection {
        msoAnimDirectionUpRight=7,
        msoAnimDirectionHorizontalOut=24,
        msoAnimDirectionHorizontalIn=23,
        msoAnimDirectionOrdinalMask=5,
        msoAnimDirectionInSlightly=29,
        msoAnimDirectionLeft=4,
        msoAnimDirectionNone=0,
        msoAnimDirectionIn=19,
        msoAnimDirectionUp=1,
        msoAnimDirectionTopRight=13,
        msoAnimDirectionDown=3,
        msoAnimDirectionInstant=41,
        msoAnimDirectionRight=2,
        msoAnimDirectionDownRight=8,
        msoAnimDirectionCycleCounterclockwise=44,
        msoAnimDirectionUpLeft=6,
        msoAnimDirectionTop=10,
        msoAnimDirectionDownLeft=9,
        msoAnimDirectionBottom=11,
        msoAnimDirectionFontUnderline=37,
        msoAnimDirectionTopLeft=12,
        msoAnimDirectionBottomRight=14,
        msoAnimDirectionFontBold=35,
        msoAnimDirectionAcross=18,
        msoAnimDirectionBottomLeft=15,
        msoAnimDirectionHorizontal=16,
        msoAnimDirectionOutBottom=34,
        msoAnimDirectionVertical=17,
        msoAnimDirectionOut=20,
        msoAnimDirectionClockwise=21,
        msoAnimDirectionInCenter=30,
        msoAnimDirectionCounterclockwise=22,
        msoAnimDirectionVerticalIn=25,
        msoAnimDirectionVerticalOut=26,
        msoAnimDirectionSlightly=27,
        msoAnimDirectionCenter=28,
        msoAnimDirectionGradual=42,
        msoAnimDirectionInBottom=31,
        msoAnimDirectionOutSlightly=32,
        msoAnimDirectionOutCenter=33,
        msoAnimDirectionFontItalic=36,
        msoAnimDirectionFontStrikethrough=38,
        msoAnimDirectionFontAllCaps=40,
        msoAnimDirectionFontShadow=39,
        msoAnimDirectionCycleClockwise=43,
    }

    enum WppPpPasteDataType {
        ppPastePNG=6,
        ppPasteDefault=0,
        ppPasteBitmap=1,
        ppPasteHTML=8,
        ppPasteEnhancedMetafile=2,
        ppPasteMetafilePicture=3,
        ppPasteGIF=4,
        ppPasteJPG=5,
        ppPasteText=7,
        ppPasteRTF=9,
        ppPasteOLEObject=10,
        ppPasteShape=11,
    }

    enum WppMsoAnimEffect {
        msoAnimEffectCustom=0,
        msoAnimEffectAppear=1,
        msoAnimEffectWipe=22,
        msoAnimEffectFly=2,
        msoAnimEffectCrawl=7,
        msoAnimEffectBlast=64,
        msoAnimEffectFlashBulb=75,
        msoAnimEffectRiseUp=34,
        msoAnimEffectBlinds=3,
        msoAnimEffectSwish=35,
        msoAnimEffectWhip=38,
        msoAnimEffectSling=43,
        msoAnimEffectGlide=49,
        msoAnimEffectFlip=51,
        msoAnimEffectSpin=61,
        msoAnimEffectFade=10,
        msoAnimEffectWedge=20,
        msoAnimEffectBox=4,
        msoAnimEffectFlashOnce=11,
        msoAnimEffectDiamond=8,
        msoAnimEffectCheckerboard=5,
        msoAnimEffectCircle=6,
        msoAnimEffectDissolve=9,
        msoAnimEffectPeek=12,
        msoAnimEffectWheel=21,
        msoAnimEffectPlus=13,
        msoAnimEffectRandomBars=14,
        msoAnimEffectEaseIn=29,
        msoAnimEffectDescend=42,
        msoAnimEffectSpiral=15,
        msoAnimEffectSwivel=19,
        msoAnimEffectSplit=16,
        msoAnimEffectFold=53,
        msoAnimEffectStretch=17,
        msoAnimEffectStretchy=45,
        msoAnimEffectPathTeardrop=103,
        msoAnimEffectStrips=18,
        msoAnimEffectZoom=23,
        msoAnimEffectFloat=30,
        msoAnimEffectTransparency=62,
        msoAnimEffectGrowShrink=59,
        msoAnimEffectRandomEffects=24,
        msoAnimEffectChangeFontSize=57,
        msoAnimEffectBoomerang=25,
        msoAnimEffectPathEqualTriangle=98,
        msoAnimEffectBounce=26,
        msoAnimEffectZip=46,
        msoAnimEffectColorReveal=27,
        msoAnimEffectLightSpeed=32,
        msoAnimEffectCredits=28,
        msoAnimEffectGrowAndTurn=31,
        msoAnimEffectArcUp=47,
        msoAnimEffectPinwheel=33,
        msoAnimEffectThinLine=36,
        msoAnimEffectChangeFillColor=54,
        msoAnimEffectChangeLineColor=60,
        msoAnimEffectUnfold=37,
        msoAnimEffectAscend=39,
        msoAnimEffectChangeFont=55,
        msoAnimEffectPathDown=127,
        msoAnimEffectCenterRevolve=40,
        msoAnimEffectChangeFontStyle=58,
        msoAnimEffectFadedSwivel=41,
        msoAnimEffectWave=82,
        msoAnimEffectFlicker=76,
        msoAnimEffectSpinner=44,
        msoAnimEffectShimmer=52,
        msoAnimEffectFadedZoom=48,
        msoAnimEffectPathSCurve1=144,
        msoAnimEffectPathSCurve2=124,
        msoAnimEffectExpand=50,
        msoAnimEffectChangeFontColor=56,
        msoAnimEffectBoldFlash=63,
        msoAnimEffectBoldReveal=65,
        msoAnimEffectBrushOnColor=66,
        msoAnimEffectPathPeanut=112,
        msoAnimEffectBrushOnUnderline=67,
        msoAnimEffectDesaturate=74,
        msoAnimEffectColorBlend=68,
        msoAnimEffectColorWave=69,
        msoAnimEffectComplementaryColor2=71,
        msoAnimEffectComplementaryColor=70,
        msoAnimEffectContrastingColor=72,
        msoAnimEffectDarken=73,
        msoAnimEffectGrowWithColor=77,
        msoAnimEffectLighten=78,
        msoAnimEffectStyleEmphasis=79,
        msoAnimEffectTeeter=80,
        msoAnimEffectPathCurvedX=106,
        msoAnimEffectVerticalGrow=81,
        msoAnimEffectMediaPlay=83,
        msoAnimEffectPathHeartbeat=130,
        msoAnimEffectMediaPause=84,
        msoAnimEffectMediaStop=85,
        msoAnimEffectPathCircle=86,
        msoAnimEffectPathRightTriangle=87,
        msoAnimEffectPathDiamond=88,
        msoAnimEffectPathHexagon=89,
        msoAnimEffectPath8PointStar=102,
        msoAnimEffectPath4PointStar=101,
        msoAnimEffectPath6PointStar=96,
        msoAnimEffectPath5PointStar=90,
        msoAnimEffectPathCrescentMoon=91,
        msoAnimEffectPathSquare=92,
        msoAnimEffectPathTrapezoid=93,
        msoAnimEffectPathHeart=94,
        msoAnimEffectPathOctagon=95,
        msoAnimEffectPathVerticalFigure8=107,
        msoAnimEffectPathFootball=97,
        msoAnimEffectPathParallelogram=99,
        msoAnimEffectPathPentagon=100,
        msoAnimEffectPathPointyStar=104,
        msoAnimEffectPathCurvedSquare=105,
        msoAnimEffectPathCurvyStar=108,
        msoAnimEffectPathLoopdeLoop=109,
        msoAnimEffectPathBuzzsaw=110,
        msoAnimEffectPathHorizontalFigure8=111,
        msoAnimEffectPathFigure8Four=113,
        msoAnimEffectPathNeutron=114,
        msoAnimEffectPathSwoosh=115,
        msoAnimEffectPathLeft=120,
        msoAnimEffectPathBean=116,
        msoAnimEffectPathPlus=117,
        msoAnimEffectPathInvertedTriangle=118,
        msoAnimEffectPathInvertedSquare=119,
        msoAnimEffectPathTurnRight=121,
        msoAnimEffectPathArcDown=122,
        msoAnimEffectPathZigzag=123,
        msoAnimEffectPathSineWave=125,
        msoAnimEffectPathBounceLeft=126,
        msoAnimEffectPathTurnUp=128,
        msoAnimEffectPathArcUp=129,
        msoAnimEffectPathSpiralRight=131,
        msoAnimEffectPathWave=132,
        msoAnimEffectPathCurvyLeft=133,
        msoAnimEffectPathDiagonalDownRight=134,
        msoAnimEffectPathTurnDown=135,
        msoAnimEffectPathArcLeft=136,
        msoAnimEffectPathFunnel=137,
        msoAnimEffectPathSpring=138,
        msoAnimEffectPathTurnUpRight=142,
        msoAnimEffectPathBounceRight=139,
        msoAnimEffectPathSpiralLeft=140,
        msoAnimEffectPathDiagonalUpRight=141,
        msoAnimEffectPathArcRight=143,
        msoAnimEffectPathDecayingWave=145,
        msoAnimEffectPathCurvyRight=146,
        msoAnimEffectPathStairsDown=147,
        msoAnimEffectPathUp=148,
        msoAnimEffectPathRight=149,
        msoAnimEffectMediaPlayFromBookmark=150,
    }

    enum WppMsoAnimEffectAfter {
        msoAnimEffectAfterFreeze=1,
        msoAnimEffectAfterRemove=2,
        msoAnimEffectAfterHold=3,
        msoAnimEffectAfterTransition=4,
    }

    enum WppMsoAnimTriggerType {
        msoAnimTriggerOnPageClick=1,
        msoAnimTriggerNone=0,
        msoAnimTriggerMixed=-1,
        msoAnimTriggerAfterPrevious=3,
        msoAnimTriggerWithPrevious=2,
        msoAnimTriggerOnShapeClick=4,
        msoAnimTriggerOnMediaBookmark=5,
    }

    enum WppMsoAnimTextUnitEffect {
        msoAnimTextUnitEffectByParagraph=0,
        msoAnimTextUnitEffectMixed=-1,
        msoAnimTextUnitEffectByCharacter=1,
        msoAnimTextUnitEffectByWord=2,
    }

    enum WppMsoAnimAdditive {
        msoAnimAdditiveAddBase=1,
        msoAnimAdditiveAddSum=2,
    }

    enum WppPpRevisionInfo {
        ppRevisionInfoNone=0,
        ppRevisionInfoBaseline=1,
        ppRevisionInfoMerged=2,
    }

    enum WppMsoAnimCommandType {
        msoAnimCommandTypeEvent=0,
        msoAnimCommandTypeCall=1,
        msoAnimCommandTypeVerb=2,
    }

    enum WppMsoAnimFilterEffectType {
        msoAnimFilterEffectTypeNone=0,
        msoAnimFilterEffectTypeBox=3,
        msoAnimFilterEffectTypeBarn=1,
        msoAnimFilterEffectTypeFade=8,
        msoAnimFilterEffectTypeSlide=13,
        msoAnimFilterEffectTypePlus=11,
        msoAnimFilterEffectTypeBlinds=2,
        msoAnimFilterEffectTypeCheckerboard=4,
        msoAnimFilterEffectTypeWipe=18,
        msoAnimFilterEffectTypeCircle=5,
        msoAnimFilterEffectTypeDiamond=6,
        msoAnimFilterEffectTypeDissolve=7,
        msoAnimFilterEffectTypeImage=9,
        msoAnimFilterEffectTypePixelate=10,
        msoAnimFilterEffectTypeRandomBar=12,
        msoAnimFilterEffectTypeStretch=14,
        msoAnimFilterEffectTypeStrips=15,
        msoAnimFilterEffectTypeWedge=16,
        msoAnimFilterEffectTypeWheel=17,
    }

    enum WppMsoAnimFilterEffectSubtype {
        msoAnimFilterEffectSubtypeUp=26,
        msoAnimFilterEffectSubtypeNone=0,
        msoAnimFilterEffectSubtypeOutVertical=2,
        msoAnimFilterEffectSubtypeIn=7,
        msoAnimFilterEffectSubtypeOut=8,
        msoAnimFilterEffectSubtypeAcross=9,
        msoAnimFilterEffectSubtypeVertical=6,
        msoAnimFilterEffectSubtypeInVertical=1,
        msoAnimFilterEffectSubtypeInHorizontal=3,
        msoAnimFilterEffectSubtypeOutHorizontal=4,
        msoAnimFilterEffectSubtypeLeft=23,
        msoAnimFilterEffectSubtypeHorizontal=5,
        msoAnimFilterEffectSubtypeFromLeft=10,
        msoAnimFilterEffectSubtypeFromRight=11,
        msoAnimFilterEffectSubtypeSpokes8=22,
        msoAnimFilterEffectSubtypeSpokes4=21,
        msoAnimFilterEffectSubtypeSpokes3=20,
        msoAnimFilterEffectSubtypeSpokes2=19,
        msoAnimFilterEffectSubtypeSpokes1=18,
        msoAnimFilterEffectSubtypeFromTop=12,
        msoAnimFilterEffectSubtypeFromBottom=13,
        msoAnimFilterEffectSubtypeDownLeft=14,
        msoAnimFilterEffectSubtypeUpLeft=15,
        msoAnimFilterEffectSubtypeDownRight=16,
        msoAnimFilterEffectSubtypeUpRight=17,
        msoAnimFilterEffectSubtypeRight=24,
        msoAnimFilterEffectSubtypeDown=25,
    }

    enum WppPpRemoveDocInfoType {
        ppRDIRemovePersonalInformation=4,
        ppRDIComments=1,
        ppRDIDocumentProperties=8,
        ppRDIContentType=16,
        ppRDIDocumentWorkspace=10,
        ppRDIInkAnnotations=11,
        ppRDIDocumentServerProperties=14,
        ppRDIPublishPath=13,
        ppRDIDocumentManagementPolicy=15,
        ppRDISlideUpdateInformation=17,
        ppRDIAll=99,
    }

    enum WppPpCheckInVersionType {
        ppCheckInMajorVersion=1,
        ppCheckInMinorVersion=0,
        ppCheckInOverwriteVersion=2,
    }

    enum WppMsoClickState {
        msoClickStateAfterAllAnimations=-2,
        msoClickStateBeforeAutomaticAnimations=-1,
    }

    enum WppPpFixedFormatType {
        ppFixedFormatTypeXPS=1,
        ppFixedFormatTypePDF=2,
    }

    enum WppPpFixedFormatIntent {
        ppFixedFormatIntentScreen=1,
        ppFixedFormatIntentPrint=2,
    }

    enum WppXlBackground {
        xlBackgroundAutomatic=-4105,
        xlBackgroundOpaque=3,
        xlBackgroundTransparent=2,
    }

    enum WppXlChartGallery {
        xlBuiltIn=21,
        xlAnyGallery=23,
        xlUserDefined=22,
    }

    enum WppXlChartPicturePlacement {
        xlFrontEnd=6,
        xlFrontSides=5,
        xlSides=1,
        xlEnd=2,
        xlEndSides=3,
        xlFront=4,
        xlAllFaces=7,
    }

    enum WppXlDataLabelSeparator {
        xlDataLabelSeparatorDefault=1,
    }

    enum WppXlOrientation {
        xlDownward=-4170,
        xlHorizontal=-4128,
        xlUpward=-4171,
        xlVertical=-4166,
    }

    enum WppXlPattern {
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

    enum WppXlPictureAppearance {
        xlPrinter=2,
        xlScreen=1,
    }

    enum WppXlCopyPictureFormat {
        xlBitmap=2,
        xlPicture=-4147,
    }

    enum WppXlRgbColor {
        rgbAzure=16777200,
        rgbFireBrick=2237106,
        rgbAntiqueWhite=14150650,
        rgbAliceBlue=16775408,
        rgbAqua=16776960,
        rgbViolet=15631086,
        rgbAquamarine=13959039,
        rgbLightYellow=14745599,
        rgbDeepSkyBlue=16760576,
        rgbPaleGoldenrod=7071982,
        rgbBlanchedAlmond=13495295,
        rgbGoldenrod=2139610,
        rgbCornflowerBlue=15570276,
        rgbBeige=14480885,
        rgbBisque=12903679,
        rgbLavender=16443110,
        rgbBlack=0,
        rgbMediumSpringGreen=10156544,
        rgbGold=55295,
        rgbDarkGrey=11119017,
        rgbOldLace=15136253,
        rgbBlue=16711680,
        rgbIndianRed=6053069,
        rgbBlueViolet=14822282,
        rgbLemonChiffon=13499135,
        rgbGreen=32768,
        rgbBrown=2763429,
        rgbBurlyWood=8894686,
        rgbCadetBlue=10526303,
        rgbChartreuse=65407,
        rgbDarkKhaki=7059389,
        rgbCoral=5275647,
        rgbCornsilk=14481663,
        rgbCrimson=3937500,
        rgbDarkBlue=9109504,
        rgbDarkCyan=9145088,
        rgbGray=8421504,
        rgbGrey=8421504,
        rgbDarkGoldenrod=755384,
        rgbDarkGreen=25600,
        rgbDarkMagenta=9109643,
        rgbDarkGray=11119017,
        rgbKhaki=9234160,
        rgbDarkOliveGreen=3107669,
        rgbDarkRed=139,
        rgbDarkOrange=36095,
        rgbLawnGreen=64636,
        rgbMediumTurquoise=13422920,
        rgbDarkOrchid=13382297,
        rgbDarkSalmon=8034025,
        rgbDarkSeaGreen=9419919,
        rgbSnow=16448255,
        rgbDarkSlateBlue=9125192,
        rgbDimGray=6908265,
        rgbDarkSlateGray=5197615,
        rgbDarkSlateGrey=5197615,
        rgbFuchsia=16711935,
        rgbTurquoise=13688896,
        rgbDarkTurquoise=13749760,
        rgbDarkViolet=13828244,
        rgbHoneydew=15794160,
        rgbDeepPink=9639167,
        rgbDodgerBlue=16748574,
        rgbDimGrey=6908265,
        rgbFloralWhite=15792895,
        rgbSilver=12632256,
        rgbForestGreen=2263842,
        rgbGainsboro=14474460,
        rgbGhostWhite=16775416,
        rgbGreenYellow=3145645,
        rgbHotPink=11823615,
        rgbIndigo=8519755,
        rgbIvory=15794175,
        rgbLavenderBlush=16118015,
        rgbOrchid=14053594,
        rgbLightBlue=15128749,
        rgbLightCoral=8421616,
        rgbPapayaWhip=14020607,
        rgbLightCyan=9145088,
        rgbLightGoldenrodYellow=13826810,
        rgbLightGrey=13882323,
        rgbLightGray=13882323,
        rgbLightGreen=9498256,
        rgbLightPink=12695295,
        rgbSalmon=7504122,
        rgbLightSalmon=8036607,
        rgbLightSeaGreen=11186720,
        rgbLightSkyBlue=16436871,
        rgbLimeGreen=3329330,
        rgbLightSlateGray=10061943,
        rgbLightSlateGrey=10061943,
        rgbLightSteelBlue=14599344,
        rgbPaleVioletRed=9662683,
        rgbLime=65280,
        rgbLinen=15134970,
        rgbMaroon=128,
        rgbTeal=8421376,
        rgbMediumAquamarine=11206502,
        rgbMediumBlue=13434880,
        rgbPowderBlue=15130800,
        rgbMediumOrchid=13850042,
        rgbRed=255,
        rgbMediumPurple=14381203,
        rgbMediumSeaGreen=7451452,
        rgbMediumSlateBlue=15624315,
        rgbMediumVioletRed=8721863,
        rgbMidnightBlue=7346457,
        rgbMintCream=16449525,
        rgbPlum=14524637,
        rgbMistyRose=14804223,
        rgbMoccasin=11920639,
        rgbNavajoWhite=11394815,
        rgbNavy=8388608,
        rgbNavyBlue=8388608,
        rgbOlive=32896,
        rgbOliveDrab=2330219,
        rgbOrange=42495,
        rgbOrangeRed=17919,
        rgbPaleGreen=10025880,
        rgbPaleTurquoise=15658671,
        rgbPeachPuff=12180223,
        rgbPeru=4163021,
        rgbPink=13353215,
        rgbPurple=8388736,
        rgbRosyBrown=9408444,
        rgbRoyalBlue=14772545,
        rgbSandyBrown=6333684,
        rgbSeaGreen=5737262,
        rgbSeashell=15660543,
        rgbSienna=2970272,
        rgbSkyBlue=15453831,
        rgbSlateBlue=13458026,
        rgbSlateGrey=9470064,
        rgbSlateGray=9470064,
        rgbSpringGreen=8388352,
        rgbSteelBlue=11829830,
        rgbTan=9221330,
        rgbThistle=14204888,
        rgbTomato=4678655,
        rgbYellow=65535,
        rgbYellowGreen=3329434,
        rgbWheat=11788021,
        rgbWhite=16777215,
        rgbWhiteSmoke=16119285,
    }

    enum WppXlLineStyle {
        xlDash=-4115,
        xlContinuous=1,
        xlDashDot=4,
        xlDashDotDot=5,
        xlLineStyleNone=-4142,
        xlDouble=-4119,
        xlDot=-4118,
        xlSlantDashDot=13,
    }

    enum WppPpPlayerState {
        ppPlaying=0,
        ppPaused=1,
        ppStopped=2,
        ppNotReady=3,
    }

    enum WppPpResampleMediaProfile {
        ppResampleMediaProfileCustom=1,
        ppResampleMediaProfileSmall=2,
        ppResampleMediaProfileSmallest=4,
        ppResampleMediaProfileSmaller=3,
    }

    enum WppPpMediaTaskStatus {
        ppMediaTaskStatusDone=3,
        ppMediaTaskStatusNone=0,
        ppMediaTaskStatusInProgress=1,
        ppMediaTaskStatusQueued=2,
        ppMediaTaskStatusFailed=4,
    }

    enum WppPpProtectedViewCloseReason {
        ppProtectedViewCloseEdit=1,
        ppProtectedViewCloseNormal=0,
        ppProtectedViewCloseForced=2,
    }

}