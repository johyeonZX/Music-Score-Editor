declare namespace Kso {

    interface KsoTabStops2 {
        /**
        * DefaultSpacing
        **/
        DefaultSpacing: number;

        Item(Index?: any, TabStop?: KsoTabStop2): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Type?: KsoMsoTabStopType, Position?: number, TabStop?: KsoTabStop2): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoTabStop2 {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Position
        **/
        Position: number;

        Clear(): void;

        /**
        * Type
        **/
        Type: KsoMsoTabStopType;

    }

    interface KsoThemeColorScheme {
        Load(FileName?: string): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Colors(Index?: KsoMsoThemeColorSchemeIndex, Color?: KsoThemeColor): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Save(FileName?: string): void;

        GetCustomColor(Name?: string, CustomColor?: number): void;

    }

    interface KsoCommandBarPopup {
        /**
        * InstanceIdPtr
        **/
        readonly InstanceIdPtr: any;

        /**
        * CommandBar
        **/
        readonly CommandBar: KsoCommandBar;

        /**
        * Controls
        **/
        readonly Controls: KsoCommandBarControls;

        /**
        * OLEMenuGroup
        **/
        OLEMenuGroup: KsoMsoOLEMenuGroup;

    }

    interface KsoTextRange2 {
        AddPeriods(): void;

        /**
        * BoundLeft
        **/
        readonly BoundLeft: number;

        /**
        * Text
        **/
        Text: string;

        Sentences(Start?: number, Length?: number, Range?: KsoTextRange2): void;

        LtrRun(): void;

        RtlRun(): void;

        /**
        * Count
        **/
        readonly Count: number;

        Lines(Start?: number, Length?: number, Range?: KsoTextRange2): void;

        Paragraphs(Start?: number, Length?: number, Range?: KsoTextRange2): void;

        Item(Index?: any, Item?: KsoTextRange2): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        ChangeCase(Type?: KsoMsoTextChangeCase): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Words(Start?: number, Length?: number, Range?: KsoTextRange2): void;

        Characters(Start?: number, Length?: number, Range?: KsoTextRange2): void;

        Runs(Start?: number, Length?: number, Range?: KsoTextRange2): void;

        /**
        * ParagraphFormat
        **/
        readonly ParagraphFormat: KsoParagraphFormat2;

        InsertAfter(NewText?: string, TextRange?: KsoTextRange2): void;

        /**
        * Font
        **/
        readonly Font: KsoFont2;

        /**
        * Length
        **/
        readonly Length: number;

        Paste(TextRange?: KsoTextRange2): void;

        /**
        * Start
        **/
        readonly Start: number;

        PasteSpecial(Format?: KsoMsoClipboardFormat, TextRange?: KsoTextRange2): void;

        /**
        * BoundTop
        **/
        readonly BoundTop: number;

        /**
        * BoundWidth
        **/
        readonly BoundWidth: number;

        /**
        * BoundHeight
        **/
        readonly BoundHeight: number;

        RotatedBounds(X1?: number, Y1?: number, X2?: number, Y2?: number, X3?: number, Y3?: number, x4?: number, y4?: number): void;

        TrimText(TrimText?: KsoTextRange2): void;

        InsertBefore(NewText?: string, TextRange?: KsoTextRange2): void;

        InsertSymbol(FontName?: string, CharNumber?: number, Unicode?: KsoMsoTriState, TextRange?: KsoTextRange2): void;

        Select(): void;

        RemovePeriods(): void;

        Cut(): void;

        Copy(): void;

        Delete(): void;

        Find(FindWhat?: string, After?: number, MatchCase?: KsoMsoTriState, WholeWords?: KsoMsoTriState, TextRange?: KsoTextRange2): void;

        Replace(FindWhat?: string, ReplaceWhat?: string, After?: number, MatchCase?: KsoMsoTriState, WholeWords?: KsoMsoTriState, TextRange?: KsoTextRange2): void;

        /**
        * LanguageID
        **/
        LanguageID: KsoMsoLanguageID;

        MathZones(Start?: number, Length?: number, Range?: KsoTextRange2): void;

        InsertChartField(ChartFieldType?: KsoMsoChartFieldType, Formula?: string, Position?: number, Range?: KsoTextRange2): void;

    }

    interface KsoAccessible {
        accName(varChild?: any, pszName?: string): void;

        /**
        * accParent
        **/
        readonly accParent: any;

        /**
        * accFocus
        **/
        readonly accFocus: any;

        /**
        * accChildCount
        **/
        readonly accChildCount: number;

        accHitTest(xLeft?: number, yTop?: number, pvarChild?: any): void;

        accDescription(varChild?: any, pszDescription?: string): void;

        accValue(varChild?: any, pszValue?: string): void;

        accChild(varChild?: any, ppdispChild?: any): void;

        accRole(varChild?: any, pvarRole?: any): void;

        accState(varChild?: any, pvarState?: any): void;

        accHelp(varChild?: any, pszHelp?: string): void;

        accHelpTopic(pszHelpFile?: string, varChild?: any, pidTopic?: number): void;

        accNavigate(navDir?: number, varStart?: any, pvarEndUpAt?: any): void;

        accKeyboardShortcut(varChild?: any, pszKeyboardShortcut?: string): void;

        /**
        * accSelection
        **/
        readonly accSelection: any;

        accDefaultAction(varChild?: any, pszDefaultAction?: string): void;

        accSelect(flagsSelect?: number, varChild?: any): void;

        accLocation(pxLeft?: number, pyTop?: number, pcxWidth?: number, pcyHeight?: number, varChild?: any): void;

        accDoDefaultAction(varChild?: any): void;

    }

    interface KsoMsoDispObj {
        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoOleAccDispObj {
        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoCommandBarControls {
        Add(Type?: any, Id?: any, Parameter?: any, Before?: any, Temporary?: any, ppcbc?: KsoCommandBarControl): void;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: any, ppcbc?: KsoCommandBarControl): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Parent
        **/
        readonly Parent: KsoCommandBar;

    }

    interface KsoCommandBarControl {
        /**
        * BeginGroup
        **/
        BeginGroup: boolean;

        /**
        * Enabled
        **/
        Enabled: boolean;

        /**
        * Control
        **/
        readonly Control: any;

        /**
        * BuiltIn
        **/
        readonly BuiltIn: boolean;

        Copy(Bar?: any, Before?: any, ppcbc?: KsoCommandBarControl): void;

        Execute(): void;

        /**
        * HelpFile
        **/
        HelpFile: string;

        /**
        * Caption
        **/
        Caption: string;

        /**
        * TooltipText
        **/
        TooltipText: string;

        Delete(Temporary?: any): void;

        /**
        * DescriptionText
        **/
        DescriptionText: string;

        /**
        * Height
        **/
        Height: number;

        /**
        * HelpContextId
        **/
        HelpContextId: number;

        /**
        * Id
        **/
        readonly Id: number;

        /**
        * InstanceId
        **/
        readonly InstanceId: number;

        /**
        * Index
        **/
        readonly Index: number;

        Move(Bar?: any, Before?: any, ppcbc?: KsoCommandBarControl): void;

        /**
        * OnAction
        **/
        OnAction: string;

        /**
        * Left
        **/
        readonly Left: number;

        /**
        * OLEUsage
        **/
        OLEUsage: KsoMsoControlOLEUsage;

        /**
        * Parent
        **/
        readonly Parent: KsoCommandBar;

        /**
        * Type
        **/
        readonly Type: KsoMsoControlType;

        /**
        * Parameter
        **/
        Parameter: string;

        /**
        * Priority
        **/
        Priority: number;

        Reset(): void;

        SetFocus(): void;

        /**
        * Tag
        **/
        Tag: string;

        /**
        * Top
        **/
        readonly Top: number;

        /**
        * Visible
        **/
        Visible: boolean;

        /**
        * Width
        **/
        Width: number;

        /**
        * IsPriorityDropped
        **/
        readonly IsPriorityDropped: boolean;

        Reserved7(): void;

        Reserved6(): void;

        Reserved5(): void;

        Reserved4(): void;

        Reserved3(): void;

        Reserved2(): void;

        Reserved1(): void;

    }

    interface KsoScripts {
        Delete(): void;

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

        Item(Index?: any, Item?: KsoScript): void;

        Add(Anchor?: any, Location?: KsoMsoScriptLocation, Language?: KsoMsoScriptLanguage, Id?: string, Extended?: string, ScriptText?: string, Add?: KsoScript): void;

    }

    interface KsoScript {
        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ScriptText
        **/
        ScriptText: string;

        /**
        * Location
        **/
        readonly Location: KsoMsoScriptLocation;

        /**
        * Language
        **/
        Language: KsoMsoScriptLanguage;

        /**
        * Extended
        **/
        Extended: string;

        /**
        * Id
        **/
        Id: string;

        /**
        * Shape
        **/
        readonly Shape: any;

    }

    interface KsoSignatureInfo {
        /**
        * CertificateVerificationResults
        **/
        readonly CertificateVerificationResults: KsoCertificateVerificationResults;

        /**
        * SignatureProvider
        **/
        readonly SignatureProvider: string;

        /**
        * ReadOnly
        **/
        readonly ReadOnly: boolean;

        ShowSignatureCertificate(ParentWindow?: any): void;

        /**
        * SignatureImage
        **/
        SignatureImage: any;

        /**
        * SignatureText
        **/
        SignatureText: string;

        /**
        * SignatureComment
        **/
        SignatureComment: string;

        GetCertificateDetail(certdet?: KsoCertificateDetail, pvar?: any): void;

        GetSignatureDetail(sigdet?: KsoSignatureDetail, pvar?: any): void;

        /**
        * ContentVerificationResults
        **/
        readonly ContentVerificationResults: KsoContentVerificationResults;

        /**
        * IsValid
        **/
        readonly IsValid: boolean;

        /**
        * IsCertificateExpired
        **/
        readonly IsCertificateExpired: boolean;

        /**
        * IsCertificateRevoked
        **/
        readonly IsCertificateRevoked: boolean;

        /**
        * IsCertificateUntrusted
        **/
        readonly IsCertificateUntrusted: boolean;

        SelectSignatureCertificate(ParentWindow?: any): void;

        SelectCertificateDetailByThumbprint(bstrThumbprint?: string): void;

    }

    interface KsoCalloutFormat {
        PresetDrop(DropType?: KsoMsoCalloutDropType): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        CustomLength(Length?: number): void;

        AutomaticLength(): void;

        CustomDrop(Drop?: number): void;

        /**
        * Accent
        **/
        Accent: KsoMsoTriState;

        /**
        * AutoAttach
        **/
        AutoAttach: KsoMsoTriState;

        /**
        * Angle
        **/
        Angle: KsoMsoCalloutAngleType;

        /**
        * AutoLength
        **/
        readonly AutoLength: KsoMsoTriState;

        /**
        * Border
        **/
        Border: KsoMsoTriState;

        /**
        * Drop
        **/
        readonly Drop: number;

        /**
        * DropType
        **/
        readonly DropType: KsoMsoCalloutDropType;

        /**
        * Gap
        **/
        Gap: number;

        /**
        * Length
        **/
        readonly Length: number;

        /**
        * Type
        **/
        Type: KsoMsoCalloutType;

    }

    interface KsoCommandBar {
        /**
        * Height
        **/
        Height: number;

        /**
        * BuiltIn
        **/
        readonly BuiltIn: boolean;

        FindControl(Type?: any, Id?: any, Tag?: any, Visible?: any, Recursive?: any, ppcbc?: KsoCommandBarControl): void;

        /**
        * InstanceIdPtr
        **/
        readonly InstanceIdPtr: any;

        /**
        * Context
        **/
        Context: string;

        /**
        * Enabled
        **/
        Enabled: boolean;

        /**
        * Controls
        **/
        readonly Controls: KsoCommandBarControls;

        Delete(): void;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * InstanceId
        **/
        readonly InstanceId: number;

        /**
        * Left
        **/
        Left: number;

        /**
        * NameLocal
        **/
        NameLocal: string;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Position
        **/
        Position: KsoMsoBarPosition;

        /**
        * RowIndex
        **/
        RowIndex: number;

        /**
        * Protection
        **/
        Protection: KsoMsoBarProtection;

        Reset(): void;

        ShowPopup(x?: any, y?: any): void;

        /**
        * Top
        **/
        Top: number;

        /**
        * Type
        **/
        readonly Type: KsoMsoBarType;

        /**
        * Visible
        **/
        Visible: boolean;

        /**
        * Width
        **/
        Width: number;

        /**
        * Id
        **/
        readonly Id: number;

        /**
        * AdaptiveMenu
        **/
        AdaptiveMenu: boolean;

    }

    interface KsoCommandBars {
        FindControls(Type?: any, Id?: any, Tag?: any, Visible?: any, ppcbcs?: KsoCommandBarControls): void;

        FindControl(Type?: any, Id?: any, Tag?: any, Visible?: any, ppcbc?: KsoCommandBarControl): void;

        /**
        * ActionControl
        **/
        readonly ActionControl: KsoCommandBarControl;

        /**
        * ActiveMenuBar
        **/
        readonly ActiveMenuBar: KsoCommandBar;

        /**
        * DisplayKeysInTooltips
        **/
        DisplayKeysInTooltips: boolean;

        GetEnabledMso(idMso?: string, Enabled?: boolean): void;

        Add(Name?: any, Position?: any, MenuBar?: any, Temporary?: any, ppcb?: KsoCommandBar): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * LargeButtons
        **/
        LargeButtons: boolean;

        Item(Index?: any, ppcb?: KsoCommandBar): void;

        GetPressedMso(idMso?: string, Pressed?: boolean): void;

        /**
        * DisplayTooltips
        **/
        DisplayTooltips: boolean;

        /**
        * MenuAnimationStyle
        **/
        MenuAnimationStyle: KsoMsoMenuAnimation;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Parent
        **/
        readonly Parent: any;

        ReleaseFocus(): void;

        /**
        * DisableCustomize
        **/
        DisableCustomize: boolean;

        IdsString(ids?: number, pbstrName?: string, pcch?: number): void;

        TmcGetName(tmc?: number, pbstrName?: string, pcch?: number): void;

        /**
        * AdaptiveMenus
        **/
        AdaptiveMenus: boolean;

        AddEx(TbidOrName?: any, Position?: any, MenuBar?: any, Temporary?: any, TbtrProtection?: any, ppcb?: KsoCommandBar): void;

        /**
        * DisplayFonts
        **/
        DisplayFonts: boolean;

        /**
        * DisableAskAQuestionDropdown
        **/
        DisableAskAQuestionDropdown: boolean;

        ExecuteMso(idMso?: string): void;

        GetVisibleMso(idMso?: string, Visible?: boolean): void;

        GetLabelMso(idMso?: string, Label?: string): void;

        GetScreentipMso(idMso?: string, Screentip?: string): void;

        GetSupertipMso(idMso?: string, Supertip?: string): void;

        GetImageMso(idMso?: string, Width?: number, Height?: number, Image?: any): void;

        CommitRenderingTransaction(hwnd?: number): void;

    }

    interface KsoCommandBarButton {
        /**
        * BuiltInFace
        **/
        BuiltInFace: boolean;

        CopyFace(): void;

        /**
        * Picture
        **/
        Picture: any;

        /**
        * Style
        **/
        Style: KsoMsoButtonStyle;

        /**
        * State
        **/
        State: KsoMsoButtonState;

        /**
        * FaceId
        **/
        FaceId: number;

        PasteFace(): void;

        /**
        * HyperlinkType
        **/
        HyperlinkType: KsoMsoCommandBarButtonHyperlinkType;

        /**
        * ShortcutText
        **/
        ShortcutText: string;

        /**
        * Mask
        **/
        Mask: any;

        /**
        * InstanceIdPtr
        **/
        readonly InstanceIdPtr: any;

    }

    interface KsoDocumentProperty {
        /**
        * Value
        **/
        Value: number;

        /**
        * Name
        **/
        Name: number;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Type
        **/
        Type: number;

        /**
        * LinkSource
        **/
        LinkSource: string;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * LinkToContent
        **/
        LinkToContent: boolean;

        /**
        * Application
        **/
        readonly Application: any;

    }

    interface KsoCommandBarComboBox {
        /**
        * ListCount
        **/
        readonly ListCount: number;

        AddItem(Text?: string, Index?: any): void;

        Clear(): void;

        /**
        * DropDownLines
        **/
        DropDownLines: number;

        /**
        * DropDownWidth
        **/
        DropDownWidth: number;

        List(Index?: number, pbstrItem?: string): void;

        /**
        * ListHeaderCount
        **/
        ListHeaderCount: number;

        /**
        * ListIndex
        **/
        ListIndex: number;

        RemoveItem(Index?: number): void;

        /**
        * Style
        **/
        Style: KsoMsoComboStyle;

        /**
        * Text
        **/
        Text: string;

        /**
        * InstanceIdPtr
        **/
        readonly InstanceIdPtr: any;

    }

    interface KsoGradientStops {
        Item(Index?: number, Item?: KsoGradientStop): void;

        Insert2(RGB?: number, Position?: number, Transparency?: number, Index?: number, Brightness?: number): void;

        Insert(RGB?: number, Position?: number, Transparency?: number, Index?: number): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Delete(Index?: number): void;

    }

    interface KsoGradientStop {
        /**
        * Color
        **/
        readonly Color: KsoColorFormat;

        /**
        * Position
        **/
        Position: number;

        /**
        * Transparency
        **/
        Transparency: number;

    }

    interface KsoCommandBarActiveX {
        EnsureControl(): void;

        SetInnerObjectFactory(pUnk?: any): void;

        /**
        * ControlCLSID
        **/
        ControlCLSID: string;

        QueryControlInterface(bstrIid?: string, ppUnk?: any): void;

        /**
        * InitWith
        **/
        InitWith: any;

        /**
        * InstanceIdPtr
        **/
        readonly InstanceIdPtr: any;

    }

    interface KsoMsoDebugOptions {
        /**
        * UnitTestManager
        **/
        readonly UnitTestManager: any;

        /**
        * OutputToDebugger
        **/
        OutputToDebugger: boolean;

        /**
        * FeatureReports
        **/
        FeatureReports: number;

        /**
        * OutputToFile
        **/
        OutputToFile: boolean;

        RemoveIgnoredAssertTag(bstrTagToIgnore?: string): void;

        /**
        * OutputToMessageBox
        **/
        OutputToMessageBox: boolean;

        AddIgnoredAssertTag(bstrTagToIgnore?: string): void;

    }

    interface KsoBalloonLabel {
        /**
        * Item
        **/
        readonly Item: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Text
        **/
        Text: string;

    }

    interface KsoBalloonLabels {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        Item(Index?: number, ppidisp?: any): void;

        /**
        * Count
        **/
        Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoTextFrame2 {
        /**
        * Orientation
        **/
        Orientation: KsoMsoTextOrientation;

        /**
        * MarginBottom
        **/
        MarginBottom: number;

        /**
        * MarginLeft
        **/
        MarginLeft: number;

        /**
        * Ruler
        **/
        readonly Ruler: KsoRuler2;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * MarginTop
        **/
        MarginTop: number;

        /**
        * HorizontalAnchor
        **/
        HorizontalAnchor: KsoMsoHorizontalAnchor;

        /**
        * MarginRight
        **/
        MarginRight: number;

        /**
        * VerticalAnchor
        **/
        VerticalAnchor: KsoMsoVerticalAnchor;

        /**
        * PathFormat
        **/
        PathFormat: KsoMsoPathFormat;

        /**
        * WarpFormat
        **/
        WarpFormat: KsoMsoWarpFormat;

        /**
        * WordArtformat
        **/
        WordArtformat: KsoMsoPresetTextEffect;

        /**
        * WordWrap
        **/
        WordWrap: KsoMsoTriState;

        /**
        * AutoSize
        **/
        AutoSize: KsoMsoAutoSize;

        /**
        * ThreeD
        **/
        readonly ThreeD: KsoThreeDFormat;

        /**
        * HasText
        **/
        readonly HasText: KsoMsoTriState;

        /**
        * TextRange
        **/
        readonly TextRange: KsoTextRange2;

        /**
        * Column
        **/
        readonly Column: KsoTextColumn2;

        DeleteText(): void;

        /**
        * NoTextRotation
        **/
        NoTextRotation: KsoMsoTriState;

    }

    interface KsoMsoDiagram {
        /**
        * AutoLayout
        **/
        AutoLayout: KsoMsoTriState;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Nodes
        **/
        readonly Nodes: KsoDiagramNodes;

        /**
        * Type
        **/
        readonly Type: KsoMsoDiagramType;

        /**
        * Reverse
        **/
        Reverse: KsoMsoTriState;

        Convert(Type?: KsoMsoDiagramType): void;

        /**
        * AutoFormat
        **/
        AutoFormat: KsoMsoTriState;

        FitText(): void;

    }

    interface KsoOfficeTheme {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ThemeColorScheme
        **/
        readonly ThemeColorScheme: KsoThemeColorScheme;

        /**
        * ThemeFontScheme
        **/
        readonly ThemeFontScheme: KsoThemeFontScheme;

        /**
        * ThemeEffectScheme
        **/
        readonly ThemeEffectScheme: KsoThemeEffectScheme;

    }

    interface KsoAdjustments {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: number, Val?: number): void;

    }

    interface KsoColorFormat {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Brightness
        **/
        Brightness: number;

        /**
        * TintAndShade
        **/
        TintAndShade: number;

        /**
        * Type
        **/
        readonly Type: KsoMsoColorType;

        /**
        * RGB
        **/
        RGB: number;

        /**
        * ObjectThemeColor
        **/
        ObjectThemeColor: KsoMsoThemeColorIndex;

        /**
        * SchemeColor
        **/
        SchemeColor: number;

    }

    interface KsoConnectorFormat {
        /**
        * Parent
        **/
        readonly Parent: any;

        EndDisconnect(): void;

        BeginConnect(ConnectedShape?: KsoShape, ConnectionSite?: number): void;

        BeginDisconnect(): void;

        /**
        * BeginConnectedShape
        **/
        readonly BeginConnectedShape: KsoShape;

        EndConnect(ConnectedShape?: KsoShape, ConnectionSite?: number): void;

        /**
        * BeginConnected
        **/
        readonly BeginConnected: KsoMsoTriState;

        /**
        * BeginConnectionSite
        **/
        readonly BeginConnectionSite: number;

        /**
        * EndConnected
        **/
        readonly EndConnected: KsoMsoTriState;

        /**
        * EndConnectedShape
        **/
        readonly EndConnectedShape: KsoShape;

        /**
        * EndConnectionSite
        **/
        readonly EndConnectionSite: number;

        /**
        * Type
        **/
        Type: KsoMsoConnectorType;

    }

    interface KsoChartFont {
        /**
        * Shadow
        **/
        Shadow: any;

        /**
        * Italic
        **/
        Italic: any;

        /**
        * Background
        **/
        Background: any;

        /**
        * FontStyle
        **/
        FontStyle: any;

        /**
        * Bold
        **/
        Bold: any;

        /**
        * ColorIndex
        **/
        ColorIndex: any;

        /**
        * Color
        **/
        Color: any;

        /**
        * Name
        **/
        Name: any;

        /**
        * OutlineFont
        **/
        OutlineFont: any;

        /**
        * Size
        **/
        Size: any;

        /**
        * Subscript
        **/
        Subscript: any;

        /**
        * StrikeThrough
        **/
        StrikeThrough: any;

        /**
        * Superscript
        **/
        Superscript: any;

        /**
        * Underline
        **/
        Underline: any;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoShape {
        /**
        * Child
        **/
        readonly Child: KsoMsoTriState;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        ScaleHeight(Factor?: number, RelativeToOriginalSize?: KsoMsoTriState, fScale?: KsoMsoScaleFrom): void;

        /**
        * TextFrame2
        **/
        readonly TextFrame2: KsoTextFrame2;

        /**
        * Id
        **/
        readonly Id: number;

        IncrementRotation(Increment?: number): void;

        /**
        * Reflection
        **/
        readonly Reflection: KsoReflectionFormat;

        /**
        * HasDiagram
        **/
        readonly HasDiagram: KsoMsoTriState;

        IncrementLeft(Increment?: number): void;

        Apply(): void;

        ScaleWidth(Factor?: number, RelativeToOriginalSize?: KsoMsoTriState, fScale?: KsoMsoScaleFrom): void;

        /**
        * HasChart
        **/
        readonly HasChart: KsoMsoTriState;

        PickUp(): void;

        /**
        * Visible
        **/
        Visible: KsoMsoTriState;

        Flip(FlipCmd?: KsoMsoFlipCmd): void;

        IncrementTop(Increment?: number): void;

        Copy(): void;

        RerouteConnections(): void;

        CanvasCropTop(Increment?: number): void;

        SetShapesDefaultProperties(): void;

        /**
        * GroupItems
        **/
        readonly GroupItems: KsoGroupShapes;

        Select(Replace?: any): void;

        /**
        * Name
        **/
        Name: string;

        Ungroup(Ungroup?: KsoShapeRange): void;

        ZOrder(ZOrderCmd?: KsoMsoZOrderCmd): void;

        /**
        * Adjustments
        **/
        readonly Adjustments: KsoAdjustments;

        /**
        * Type
        **/
        readonly Type: KsoMsoShapeType;

        /**
        * PictureFormat
        **/
        readonly PictureFormat: KsoPictureFormat;

        /**
        * AutoShapeType
        **/
        AutoShapeType: KsoMsoAutoShapeType;

        /**
        * BlackWhiteMode
        **/
        BlackWhiteMode: KsoMsoBlackWhiteMode;

        /**
        * Callout
        **/
        readonly Callout: KsoCalloutFormat;

        /**
        * ConnectionSiteCount
        **/
        readonly ConnectionSiteCount: number;

        /**
        * HasSmartArt
        **/
        readonly HasSmartArt: KsoMsoTriState;

        /**
        * TextEffect
        **/
        readonly TextEffect: KsoTextEffectFormat;

        /**
        * Connector
        **/
        readonly Connector: KsoMsoTriState;

        /**
        * ParentGroup
        **/
        readonly ParentGroup: KsoShape;

        /**
        * Nodes
        **/
        readonly Nodes: KsoShapeNodes;

        /**
        * ConnectorFormat
        **/
        readonly ConnectorFormat: KsoConnectorFormat;

        /**
        * Fill
        **/
        readonly Fill: KsoFillFormat;

        /**
        * AlternativeText
        **/
        AlternativeText: string;

        /**
        * Height
        **/
        Height: number;

        /**
        * DiagramNode
        **/
        readonly DiagramNode: KsoDiagramNode;

        /**
        * HorizontalFlip
        **/
        readonly HorizontalFlip: KsoMsoTriState;

        /**
        * Shadow
        **/
        readonly Shadow: KsoShadowFormat;

        /**
        * LockAspectRatio
        **/
        LockAspectRatio: KsoMsoTriState;

        /**
        * Left
        **/
        Left: number;

        /**
        * Line
        **/
        readonly Line: KsoLineFormat;

        /**
        * Rotation
        **/
        Rotation: number;

        /**
        * TextFrame
        **/
        readonly TextFrame: KsoTextFrame;

        /**
        * ThreeD
        **/
        readonly ThreeD: KsoThreeDFormat;

        /**
        * Top
        **/
        Top: number;

        /**
        * VerticalFlip
        **/
        readonly VerticalFlip: KsoMsoTriState;

        /**
        * Vertices
        **/
        readonly Vertices: any;

        /**
        * Width
        **/
        Width: number;

        /**
        * HasDiagramNode
        **/
        readonly HasDiagramNode: KsoMsoTriState;

        /**
        * ZOrderPosition
        **/
        readonly ZOrderPosition: number;

        /**
        * Script
        **/
        readonly Script: KsoScript;

        /**
        * Diagram
        **/
        readonly Diagram: KsoMsoDiagram;

        /**
        * CanvasItems
        **/
        readonly CanvasItems: KsoCanvasShapes;

        /**
        * RTF
        **/
        RTF: string;

        CanvasCropBottom(Increment?: number): void;

        CanvasCropLeft(Increment?: number): void;

        CanvasCropRight(Increment?: number): void;

        Cut(): void;

        /**
        * Chart
        **/
        readonly Chart: KsoMsoChart;

        /**
        * ShapeStyle
        **/
        ShapeStyle: KsoMsoShapeStyleIndex;

        /**
        * BackgroundStyle
        **/
        BackgroundStyle: KsoMsoBackgroundStyleIndex;

        /**
        * SoftEdge
        **/
        readonly SoftEdge: KsoSoftEdgeFormat;

        /**
        * Glow
        **/
        readonly Glow: KsoGlowFormat;

        /**
        * SmartArt
        **/
        readonly SmartArt: KsoSmartArt;

        ConvertTextToSmartArt(Layout?: KsoSmartArtLayout): void;

        /**
        * Title
        **/
        Title: string;

    }

    interface KsoShapeRange {
        /**
        * Child
        **/
        readonly Child: KsoMsoTriState;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Adjustments
        **/
        readonly Adjustments: KsoAdjustments;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * HasChart
        **/
        readonly HasChart: KsoMsoTriState;

        ScaleWidth(Factor?: number, RelativeToOriginalSize?: KsoMsoTriState, fScale?: KsoMsoScaleFrom): void;

        PickUp(): void;

        /**
        * HasDiagramNode
        **/
        readonly HasDiagramNode: KsoMsoTriState;

        /**
        * ZOrderPosition
        **/
        readonly ZOrderPosition: number;

        Item(Index?: any, Item?: KsoShape): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Line
        **/
        readonly Line: KsoLineFormat;

        Distribute(DistributeCmd?: KsoMsoDistributeCmd, RelativeTo?: KsoMsoTriState): void;

        /**
        * Reflection
        **/
        readonly Reflection: KsoReflectionFormat;

        /**
        * HasDiagram
        **/
        readonly HasDiagram: KsoMsoTriState;

        Apply(): void;

        IncrementLeft(Increment?: number): void;

        Align(AlignCmd?: KsoMsoAlignCmd, RelativeTo?: KsoMsoTriState): void;

        /**
        * Visible
        **/
        Visible: KsoMsoTriState;

        Flip(FlipCmd?: KsoMsoFlipCmd): void;

        /**
        * Id
        **/
        readonly Id: number;

        /**
        * TextFrame2
        **/
        readonly TextFrame2: KsoTextFrame2;

        ScaleHeight(Factor?: number, RelativeToOriginalSize?: KsoMsoTriState, fScale?: KsoMsoScaleFrom): void;

        IncrementRotation(Increment?: number): void;

        Copy(): void;

        IncrementTop(Increment?: number): void;

        /**
        * TextFrame
        **/
        readonly TextFrame: KsoTextFrame;

        Group(Group?: KsoShape): void;

        /**
        * Width
        **/
        Width: number;

        Regroup(Regroup?: KsoShape): void;

        RerouteConnections(): void;

        CanvasCropTop(Increment?: number): void;

        SetShapesDefaultProperties(): void;

        /**
        * GroupItems
        **/
        readonly GroupItems: KsoGroupShapes;

        Select(Replace?: any): void;

        /**
        * Name
        **/
        Name: string;

        Ungroup(Ungroup?: KsoShapeRange): void;

        ZOrder(ZOrderCmd?: KsoMsoZOrderCmd): void;

        /**
        * Type
        **/
        readonly Type: KsoMsoShapeType;

        /**
        * PictureFormat
        **/
        readonly PictureFormat: KsoPictureFormat;

        /**
        * AutoShapeType
        **/
        AutoShapeType: KsoMsoAutoShapeType;

        /**
        * BlackWhiteMode
        **/
        BlackWhiteMode: KsoMsoBlackWhiteMode;

        /**
        * Callout
        **/
        readonly Callout: KsoCalloutFormat;

        /**
        * ConnectionSiteCount
        **/
        readonly ConnectionSiteCount: number;

        /**
        * TextEffect
        **/
        readonly TextEffect: KsoTextEffectFormat;

        /**
        * Connector
        **/
        readonly Connector: KsoMsoTriState;

        /**
        * ParentGroup
        **/
        readonly ParentGroup: KsoShape;

        /**
        * Nodes
        **/
        readonly Nodes: KsoShapeNodes;

        /**
        * ConnectorFormat
        **/
        readonly ConnectorFormat: KsoConnectorFormat;

        /**
        * Fill
        **/
        readonly Fill: KsoFillFormat;

        /**
        * AlternativeText
        **/
        AlternativeText: string;

        /**
        * Height
        **/
        Height: number;

        /**
        * DiagramNode
        **/
        readonly DiagramNode: KsoDiagramNode;

        /**
        * HorizontalFlip
        **/
        readonly HorizontalFlip: KsoMsoTriState;

        /**
        * Shadow
        **/
        readonly Shadow: KsoShadowFormat;

        /**
        * LockAspectRatio
        **/
        LockAspectRatio: KsoMsoTriState;

        /**
        * Left
        **/
        Left: number;

        /**
        * Rotation
        **/
        Rotation: number;

        /**
        * ThreeD
        **/
        readonly ThreeD: KsoThreeDFormat;

        /**
        * Top
        **/
        Top: number;

        /**
        * VerticalFlip
        **/
        readonly VerticalFlip: KsoMsoTriState;

        /**
        * Vertices
        **/
        readonly Vertices: any;

        /**
        * Script
        **/
        readonly Script: KsoScript;

        /**
        * Diagram
        **/
        readonly Diagram: KsoMsoDiagram;

        /**
        * CanvasItems
        **/
        readonly CanvasItems: KsoCanvasShapes;

        CanvasCropLeft(Increment?: number): void;

        CanvasCropRight(Increment?: number): void;

        CanvasCropBottom(Increment?: number): void;

        /**
        * RTF
        **/
        RTF: string;

        Cut(): void;

        /**
        * Chart
        **/
        readonly Chart: KsoMsoChart;

        /**
        * ShapeStyle
        **/
        ShapeStyle: KsoMsoShapeStyleIndex;

        /**
        * BackgroundStyle
        **/
        BackgroundStyle: KsoMsoBackgroundStyleIndex;

        /**
        * SoftEdge
        **/
        readonly SoftEdge: KsoSoftEdgeFormat;

        /**
        * Glow
        **/
        readonly Glow: KsoGlowFormat;

        /**
        * Title
        **/
        Title: string;

        MergeShapes(MergeCmd?: KsoMsoMergeCmd, PrimaryShape?: KsoShape): void;

    }

    interface KsoFont2 {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Kerning
        **/
        Kerning: number;

        /**
        * Bold
        **/
        Bold: KsoMsoTriState;

        /**
        * Strike
        **/
        Strike: KsoMsoTextStrike;

        /**
        * SoftEdgeFormat
        **/
        SoftEdgeFormat: KsoMsoSoftEdgeType;

        /**
        * Reflection
        **/
        readonly Reflection: KsoReflectionFormat;

        /**
        * Italic
        **/
        Italic: KsoMsoTriState;

        /**
        * Caps
        **/
        Caps: KsoMsoTextCaps;

        /**
        * AutorotateNumbers
        **/
        AutorotateNumbers: KsoMsoTriState;

        /**
        * BaselineOffset
        **/
        BaselineOffset: number;

        /**
        * Size
        **/
        Size: number;

        /**
        * Embedded
        **/
        readonly Embedded: KsoMsoTriState;

        /**
        * WordArtformat
        **/
        WordArtformat: KsoMsoPresetTextEffect;

        /**
        * Spacing
        **/
        Spacing: number;

        /**
        * Smallcaps
        **/
        Smallcaps: KsoMsoTriState;

        /**
        * UnderlineStyle
        **/
        UnderlineStyle: KsoMsoTextUnderlineType;

        /**
        * Line
        **/
        readonly Line: KsoLineFormat;

        /**
        * Allcaps
        **/
        Allcaps: KsoMsoTriState;

        /**
        * Embeddable
        **/
        readonly Embeddable: KsoMsoTriState;

        /**
        * DoubleStrikeThrough
        **/
        DoubleStrikeThrough: KsoMsoTriState;

        /**
        * Equalize
        **/
        Equalize: KsoMsoTriState;

        /**
        * Fill
        **/
        readonly Fill: KsoFillFormat;

        /**
        * Glow
        **/
        readonly Glow: KsoGlowFormat;

        /**
        * Shadow
        **/
        readonly Shadow: KsoShadowFormat;

        /**
        * Highlight
        **/
        readonly Highlight: KsoColorFormat;

        /**
        * UnderlineColor
        **/
        readonly UnderlineColor: KsoColorFormat;

        /**
        * Subscript
        **/
        Subscript: KsoMsoTriState;

        /**
        * StrikeThrough
        **/
        StrikeThrough: KsoMsoTriState;

        /**
        * Superscript
        **/
        Superscript: KsoMsoTriState;

        /**
        * Name
        **/
        Name: string;

        /**
        * NameAscii
        **/
        NameAscii: string;

        /**
        * NameComplexScript
        **/
        NameComplexScript: string;

        /**
        * NameFarEast
        **/
        NameFarEast: string;

        /**
        * NameOther
        **/
        NameOther: string;

    }

    interface KsoGroupShapes {
        Range(Index?: any, Range?: KsoShapeRange): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: any, Item?: KsoShape): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoCustomXMLParts {
        SelectByID(Id?: string, ppPart?: KsoCustomXMLPart): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: any, ppPart?: KsoCustomXMLPart): void;

        Add(XML?: string, SchemaCollection?: any, ppPart?: KsoCustomXMLPart): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        SelectByNamespace(NamespaceURI?: string, ppParts?: KsoCustomXMLParts): void;

    }

    interface KsoFillFormat {
        /**
        * Parent
        **/
        readonly Parent: any;

        Solid(): void;

        /**
        * TextureVerticalScale
        **/
        TextureVerticalScale: number;

        /**
        * PresetTexture
        **/
        readonly PresetTexture: KsoMsoPresetTexture;

        PresetTextured(PresetTexture?: KsoMsoPresetTexture): void;

        /**
        * GradientStops
        **/
        readonly GradientStops: KsoGradientStops;

        Background(): void;

        OneColorGradient(Style?: KsoMsoGradientStyle, Variant?: number, Degree?: number): void;

        PresetGradient(Style?: KsoMsoGradientStyle, Variant?: number, PresetGradientType?: KsoMsoPresetGradientType): void;

        Patterned(Pattern?: KsoMsoPatternType): void;

        UserPicture(PictureFile?: string): void;

        TwoColorGradient(Style?: KsoMsoGradientStyle, Variant?: number): void;

        UserTextured(TextureFile?: string): void;

        /**
        * BackColor
        **/
        BackColor: KsoColorFormat;

        /**
        * ForeColor
        **/
        ForeColor: KsoColorFormat;

        /**
        * GradientColorType
        **/
        readonly GradientColorType: KsoMsoGradientColorType;

        /**
        * GradientDegree
        **/
        readonly GradientDegree: number;

        /**
        * Type
        **/
        readonly Type: KsoMsoFillType;

        /**
        * GradientStyle
        **/
        readonly GradientStyle: KsoMsoGradientStyle;

        /**
        * GradientVariant
        **/
        readonly GradientVariant: number;

        /**
        * Pattern
        **/
        readonly Pattern: KsoMsoPatternType;

        /**
        * PresetGradientType
        **/
        readonly PresetGradientType: KsoMsoPresetGradientType;

        /**
        * TextureName
        **/
        readonly TextureName: string;

        /**
        * TextureType
        **/
        readonly TextureType: KsoMsoTextureType;

        /**
        * Transparency
        **/
        Transparency: number;

        /**
        * Visible
        **/
        Visible: KsoMsoTriState;

        /**
        * TextureOffsetY
        **/
        TextureOffsetY: number;

        /**
        * TextureOffsetX
        **/
        TextureOffsetX: number;

        /**
        * TextureAlignment
        **/
        TextureAlignment: KsoMsoTextureAlignment;

        /**
        * RotateWithObject
        **/
        RotateWithObject: KsoMsoTriState;

        /**
        * TextureHorizontalScale
        **/
        TextureHorizontalScale: number;

        /**
        * TextureTile
        **/
        TextureTile: KsoMsoTriState;

        /**
        * PictureEffects
        **/
        readonly PictureEffects: KsoPictureEffects;

        /**
        * GradientAngle
        **/
        GradientAngle: number;

    }

    interface KsoMsoCorners {
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
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoEServicesDialog {
        Close(ApplyWebComponentChanges?: boolean): void;

        /**
        * Application
        **/
        readonly Application: any;

        AddTrustedDomain(Domain?: string): void;

        /**
        * ClipArt
        **/
        readonly ClipArt: any;

        /**
        * ApplicationName
        **/
        readonly ApplicationName: string;

        /**
        * WebComponent
        **/
        readonly WebComponent: any;

    }

    interface KsoPictureEffects {
        Item(Index?: number, Item?: KsoPictureEffect): void;

        Insert(EffectType?: KsoMsoPictureEffectType, Position?: number, Effect?: KsoPictureEffect): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Delete(Index?: number): void;

    }

    interface KsoParagraphFormat2 {
        /**
        * RightIndent
        **/
        RightIndent: number;

        /**
        * Bullet
        **/
        readonly Bullet: KsoBulletFormat2;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Alignment
        **/
        Alignment: KsoMsoParagraphAlignment;

        /**
        * BaselineAlignment
        **/
        BaselineAlignment: KsoMsoBaselineAlignment;

        /**
        * FarEastLineBreakLevel
        **/
        FarEastLineBreakLevel: KsoMsoTriState;

        /**
        * LineRuleAfter
        **/
        LineRuleAfter: KsoMsoTriState;

        /**
        * FirstLineIndent
        **/
        FirstLineIndent: number;

        /**
        * HangingPunctuation
        **/
        HangingPunctuation: KsoMsoTriState;

        /**
        * LeftIndent
        **/
        LeftIndent: number;

        /**
        * IndentLevel
        **/
        IndentLevel: number;

        /**
        * LineRuleBefore
        **/
        LineRuleBefore: KsoMsoTriState;

        /**
        * LineRuleWithin
        **/
        LineRuleWithin: KsoMsoTriState;

        /**
        * SpaceAfter
        **/
        SpaceAfter: number;

        /**
        * SpaceBefore
        **/
        SpaceBefore: number;

        /**
        * SpaceWithin
        **/
        SpaceWithin: number;

        /**
        * TabStops
        **/
        readonly TabStops: KsoTabStops2;

        /**
        * TextDirection
        **/
        TextDirection: KsoMsoTextDirection;

        /**
        * WordWrap
        **/
        WordWrap: KsoMsoTriState;

    }

    interface KsoPictureEffect {
        /**
        * Type
        **/
        readonly Type: KsoMsoPictureEffectType;

        /**
        * EffectParameters
        **/
        readonly EffectParameters: KsoEffectParameters;

        /**
        * Position
        **/
        Position: number;

        Delete(): void;

        /**
        * Visible
        **/
        Visible: KsoMsoTriState;

    }

    interface KsoMsoInterior {
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

    interface KsoSharedWorkspaceTasks {
        Item(Index?: number, ppidisp?: KsoSharedWorkspaceTask): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Title?: string, Status?: any, Priority?: any, Assignee?: any, Description?: any, DueDate?: any, ppTask?: KsoSharedWorkspaceTask): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * ItemCountExceeded
        **/
        readonly ItemCountExceeded: boolean;

    }

    interface KsoEffectParameters {
        Item(Index?: any, EffectParameter?: KsoEffectParameter): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoEffectParameter {
        /**
        * Value
        **/
        Value: any;

        /**
        * Name
        **/
        readonly Name: string;

    }

    interface KsoLineFormat {
        /**
        * DashStyle
        **/
        DashStyle: KsoMsoLineDashStyle;

        /**
        * BeginArrowheadWidth
        **/
        BeginArrowheadWidth: KsoMsoArrowheadWidth;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * BackColor
        **/
        BackColor: KsoColorFormat;

        /**
        * BeginArrowheadLength
        **/
        BeginArrowheadLength: KsoMsoArrowheadLength;

        /**
        * BeginArrowheadStyle
        **/
        BeginArrowheadStyle: KsoMsoArrowheadStyle;

        /**
        * EndArrowheadLength
        **/
        EndArrowheadLength: KsoMsoArrowheadLength;

        /**
        * EndArrowheadStyle
        **/
        EndArrowheadStyle: KsoMsoArrowheadStyle;

        /**
        * Weight
        **/
        Weight: number;

        /**
        * EndArrowheadWidth
        **/
        EndArrowheadWidth: KsoMsoArrowheadWidth;

        /**
        * ForeColor
        **/
        ForeColor: KsoColorFormat;

        /**
        * Pattern
        **/
        Pattern: KsoMsoPatternType;

        /**
        * Style
        **/
        Style: KsoMsoLineStyle;

        /**
        * Transparency
        **/
        Transparency: number;

        /**
        * Visible
        **/
        Visible: KsoMsoTriState;

        /**
        * InsetPen
        **/
        InsetPen: KsoMsoTriState;

    }

    interface KsoReflectionFormat {
        /**
        * Offset
        **/
        Offset: number;

        /**
        * Type
        **/
        Type: KsoMsoReflectionType;

        /**
        * Size
        **/
        Size: number;

        /**
        * Transparency
        **/
        Transparency: number;

        /**
        * Blur
        **/
        Blur: number;

    }

    interface KsoShapeNodes {
        Delete(Index?: number): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Insert(Index?: number, SegmentType?: KsoMsoSegmentType, EditingType?: KsoMsoEditingType, X1?: number, Y1?: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: any, Item?: KsoShapeNode): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        SetEditingType(Index?: number, EditingType?: KsoMsoEditingType): void;

        SetPosition(Index?: number, X1?: number, Y1?: number): void;

        SetSegmentType(Index?: number, SegmentType?: KsoMsoSegmentType): void;

    }

    interface KsoPickerProperty {
        /**
        * Id
        **/
        readonly Id: string;

        /**
        * Value
        **/
        readonly Value: any;

        /**
        * Type
        **/
        readonly Type: KsoMsoPickerField;

    }

    interface KsoShapeNode {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * EditingType
        **/
        readonly EditingType: KsoMsoEditingType;

        /**
        * Points
        **/
        readonly Points: any;

        /**
        * SegmentType
        **/
        readonly SegmentType: KsoMsoSegmentType;

    }

    interface KsoPictureFormat {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * CropBottom
        **/
        CropBottom: number;

        /**
        * Contrast
        **/
        Contrast: number;

        /**
        * ColorType
        **/
        ColorType: KsoMsoPictureColorType;

        IncrementBrightness(Increment?: number): void;

        IncrementContrast(Increment?: number): void;

        /**
        * CropRight
        **/
        CropRight: number;

        /**
        * Brightness
        **/
        Brightness: number;

        /**
        * CropTop
        **/
        CropTop: number;

        /**
        * CropLeft
        **/
        CropLeft: number;

        /**
        * TransparencyColor
        **/
        TransparencyColor: number;

        /**
        * TransparentBackground
        **/
        TransparentBackground: KsoMsoTriState;

        /**
        * Crop
        **/
        readonly Crop: KsoCrop;

    }

    interface KsoMsoChartFormat {
        /**
        * Fill
        **/
        readonly Fill: KsoFillFormat;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Glow
        **/
        readonly Glow: KsoGlowFormat;

        /**
        * TextFrame2
        **/
        readonly TextFrame2: KsoTextFrame2;

        /**
        * Shadow
        **/
        readonly Shadow: KsoShadowFormat;

        /**
        * Line
        **/
        readonly Line: KsoLineFormat;

        /**
        * AutoShapeType
        **/
        AutoShapeType: KsoMsoAutoShapeType;

        /**
        * PictureFormat
        **/
        readonly PictureFormat: KsoPictureFormat;

        /**
        * SoftEdge
        **/
        readonly SoftEdge: KsoSoftEdgeFormat;

        /**
        * ThreeD
        **/
        readonly ThreeD: KsoThreeDFormat;

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
        readonly Adjustments: KsoAdjustments;

    }

    interface KsoCrop {
        /**
        * PictureWidth
        **/
        PictureWidth: number;

        /**
        * PictureOffsetY
        **/
        PictureOffsetY: number;

        /**
        * PictureOffsetX
        **/
        PictureOffsetX: number;

        /**
        * PictureHeight
        **/
        PictureHeight: number;

        /**
        * ShapeLeft
        **/
        ShapeLeft: number;

        /**
        * ShapeTop
        **/
        ShapeTop: number;

        /**
        * ShapeWidth
        **/
        ShapeWidth: number;

        /**
        * ShapeHeight
        **/
        ShapeHeight: number;

    }

    interface KsoMsoBorder {
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

    interface KsoTextFrame {
        /**
        * Orientation
        **/
        Orientation: KsoMsoTextOrientation;

        /**
        * MarginLeft
        **/
        MarginLeft: number;

        /**
        * MarginBottom
        **/
        MarginBottom: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * MarginTop
        **/
        MarginTop: number;

        /**
        * MarginRight
        **/
        MarginRight: number;

    }

    interface KsoFreeformBuilder {
        /**
        * Parent
        **/
        readonly Parent: any;

        AddNodes(SegmentType?: KsoMsoSegmentType, EditingType?: KsoMsoEditingType, X1?: number, Y1?: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;

        ConvertToShape(Freeform?: KsoShape): void;

    }

    interface KsoMsoChart {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Legend
        **/
        readonly Legend: KsoMsoLegend;

        Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;

        /**
        * HasTitle
        **/
        HasTitle: boolean;

        /**
        * ShowAllFieldButtons
        **/
        ShowAllFieldButtons: boolean;

        /**
        * ProtectFormatting
        **/
        ProtectFormatting: boolean;

        /**
        * ChartTitle
        **/
        readonly ChartTitle: KsoMsoChartTitle;

        /**
        * HeightPercent
        **/
        HeightPercent: number;

        /**
        * RightAngleAxes
        **/
        RightAngleAxes: any;

        /**
        * DepthPercent
        **/
        DepthPercent: number;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

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

        GetChartElement(x?: number, y?: number, ElementID?: number, Arg1?: number, Arg2?: number): void;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Perspective
        **/
        Perspective: number;

        Evaluate(varName?: any, LocaleID?: number, ObjType?: number, pvar?: any): void;

        /**
        * Rotation
        **/
        Rotation: any;

        /**
        * ProtectChartObjects
        **/
        ProtectChartObjects: boolean;

        /**
        * DisplayBlanksAs
        **/
        DisplayBlanksAs: KsoXlDisplayBlanksAs;

        /**
        * BarShape
        **/
        BarShape: KsoXlBarShape;

        /**
        * ProtectData
        **/
        ProtectData: boolean;

        SetSourceData(Source?: string, PlotBy?: any): void;

        /**
        * HasDataTable
        **/
        HasDataTable: boolean;

        SeriesCollection(Index?: any, RHS?: any): void;

        SetElement(RHS?: KsoMsoChartElementType): void;

        /**
        * ProtectGoalSeek
        **/
        ProtectGoalSeek: boolean;

        /**
        * ProtectSelection
        **/
        ProtectSelection: boolean;

        UnProtect(Password?: any): void;

        RefreshPivotTable(): void;

        ClearToMatchStyle(): void;

        _Evaluate(varName?: any, LocaleID?: number, pvar?: any): void;

        ChartGroups(pvarIndex?: any, varIgallery?: any, lcid?: number, RHS?: any): void;

        SetDefaultChart(varName?: any): void;

        /**
        * DataTable
        **/
        readonly DataTable: KsoMsoDataTable;

        _ApplyDataLabels(Type?: KsoXlDataLabelsType, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any): void;

        /**
        * Type
        **/
        Type: number;

        /**
        * Corners
        **/
        readonly Corners: KsoMsoCorners;

        ApplyDataLabels(Type?: KsoXlDataLabelsType, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;

        /**
        * ChartType
        **/
        ChartType: KsoXlChartType;

        Refresh(): void;

        ApplyCustomType(ChartType?: KsoXlChartType, TypeName?: any): void;

        /**
        * PlotVisibleOnly
        **/
        PlotVisibleOnly: boolean;

        /**
        * PlotBy
        **/
        PlotBy: KsoXlRowCol;

        /**
        * HasLegend
        **/
        HasLegend: boolean;

        ApplyLayout(Layout?: number, varChartType?: any): void;

        Axes(Type?: any, AxisGroup?: KsoXlAxisGroup, ppAxes?: any): void;

        HasAxis(axisType?: any, AxisGroup?: any, pval?: any): void;

        ChartWizard(varSource?: any, varGallery?: any, varFormat?: any, varPlotBy?: any, varCategoryLabels?: any, varSeriesLabels?: any, varHasLegend?: any, varTitle?: any, varCategoryTitle?: any, varValueTitle?: any, varExtraTitle?: any, LocaleID?: number): void;

        Walls(fBackWall?: boolean, ppwalls?: KsoMsoWalls): void;

        /**
        * HasPivotFields
        **/
        HasPivotFields: boolean;

        /**
        * Floor
        **/
        readonly Floor: KsoMsoFloor;

        SaveChartTemplate(bstrFileName?: string): void;

        /**
        * PlotArea
        **/
        readonly PlotArea: KsoMsoPlotArea;

        /**
        * ChartArea
        **/
        readonly ChartArea: KsoMsoChartArea;

        AutoFormat(rGallery?: number, varFormat?: any): void;

        /**
        * AutoScaling
        **/
        AutoScaling: boolean;

        SetBackgroundPicture(bstr?: string): void;

        CopyPicture(Appearance?: number, Format?: number, Size?: number, LocaleID?: number): void;

        Paste(varType?: any, LocaleID?: number): void;

        Export(bstr?: string, varFilterName?: any, varInteractive?: any, f?: boolean): void;

        /**
        * BackWall
        **/
        readonly BackWall: KsoMsoWalls;

        ApplyChartTemplate(bstrFileName?: string): void;

        /**
        * SideWall
        **/
        readonly SideWall: KsoMsoWalls;

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
        * Selection
        **/
        readonly Selection: any;

        /**
        * ChartData
        **/
        readonly ChartData: KsoMsoChartData;

        /**
        * Shapes
        **/
        readonly Shapes: KsoShapes;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Area3DGroup
        **/
        readonly Area3DGroup: number;

        AreaGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
        * Bar3DGroup
        **/
        readonly Bar3DGroup: number;

        BarGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
        * Column3DGroup
        **/
        readonly Column3DGroup: number;

        ColumnGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
        * HasHiddenContent
        **/
        readonly HasHiddenContent: boolean;

        /**
        * Line3DGroup
        **/
        readonly Line3DGroup: number;

        LineGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
        * Pie3DGroup
        **/
        readonly Pie3DGroup: number;

        PieGroups(Index?: any, lcid?: number, RHS?: any): void;

        DoughnutGroups(Index?: any, lcid?: number, RHS?: any): void;

        RadarGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
        * SurfaceGroup
        **/
        readonly SurfaceGroup: number;

        XYGroups(Index?: any, lcid?: number, RHS?: any): void;

        Delete(RHS?: any): void;

        Copy(RHS?: any): void;

        Select(Replace?: any, RHS?: any): void;

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
        * ProtectChartSheetFormatting
        **/
        ProtectChartSheetFormatting: boolean;

        FullSeriesCollection(Index?: any, RHS?: any): void;

        DeleteHiddenContent(): void;

        /**
        * CategoryLabelLevel
        **/
        CategoryLabelLevel: KsoXlCategoryLabelLevel;

        /**
        * SeriesNameLevel
        **/
        SeriesNameLevel: KsoXlSeriesNameLevel;

        /**
        * ChartColor
        **/
        ChartColor: any;

        ClearToMatchColorStyle(): void;

    }

    interface KsoConverter {
        HrInitConverter(pcap?: KsoConverterApplicationPreferences, ppcp?: KsoConverterPreferences, pcuic?: KsoConverterUICallback): void;

        HrGetFormat(bstrPath?: string, pbstrClass?: string, pcap?: KsoConverterApplicationPreferences, ppcp?: KsoConverterPreferences, pcuic?: KsoConverterUICallback): void;

        HrUninitConverter(pcuic?: KsoConverterUICallback): void;

        HrImport(bstrSourcePath?: string, bstrDestPath?: string, pcap?: KsoConverterApplicationPreferences, ppcp?: KsoConverterPreferences, pcuic?: KsoConverterUICallback): void;

        HrExport(bstrSourcePath?: string, bstrDestPath?: string, bstrClass?: string, pcap?: KsoConverterApplicationPreferences, ppcp?: KsoConverterPreferences, pcuic?: KsoConverterUICallback): void;

        HrGetErrorString(hrErr?: number, pbstrErrorMsg?: string, pcap?: KsoConverterApplicationPreferences): void;

    }

    interface KsoShadowFormat {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * OffsetX
        **/
        OffsetX: number;

        /**
        * OffsetY
        **/
        OffsetY: number;

        IncrementOffsetX(Increment?: number): void;

        IncrementOffsetY(Increment?: number): void;

        /**
        * ForeColor
        **/
        ForeColor: KsoColorFormat;

        /**
        * Obscured
        **/
        Obscured: KsoMsoTriState;

        /**
        * Size
        **/
        Size: number;

        /**
        * Transparency
        **/
        Transparency: number;

        /**
        * Type
        **/
        Type: KsoMsoShadowType;

        /**
        * Visible
        **/
        Visible: KsoMsoTriState;

        /**
        * Style
        **/
        Style: KsoMsoShadowStyle;

        /**
        * Blur
        **/
        Blur: number;

        /**
        * RotateWithShape
        **/
        RotateWithShape: KsoMsoTriState;

    }

    interface KsoSmartArt {
        /**
        * Parent
        **/
        readonly Parent: any;

        Reset(): void;

        /**
        * QuickStyle
        **/
        QuickStyle: KsoSmartArtQuickStyle;

        /**
        * AllNodes
        **/
        readonly AllNodes: KsoSmartArtNodes;

        /**
        * Nodes
        **/
        readonly Nodes: KsoSmartArtNodes;

        /**
        * Layout
        **/
        Layout: KsoSmartArtLayout;

        /**
        * Color
        **/
        Color: KsoSmartArtColor;

        /**
        * Reverse
        **/
        Reverse: KsoMsoTriState;

    }

    interface KsoMsoChartTitle {
        /**
        * Caption
        **/
        Caption: string;

        Characters(Start?: any, Length?: any, RHS?: KsoMsoCharacters): void;

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
        readonly Font: KsoChartFont;

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
        readonly Format: KsoMsoChartFormat;

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
        Position: KsoXlChartElementPosition;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Interior
        **/
        readonly Interior: KsoMsoInterior;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

        Delete(pval?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(pval?: any): void;

        /**
        * IncludeInLayout
        **/
        IncludeInLayout: boolean;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

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

    interface KsoTextEffectFormat {
        /**
        * FontItalic
        **/
        FontItalic: KsoMsoTriState;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Alignment
        **/
        Alignment: KsoMsoTextEffectAlignment;

        ToggleVerticalText(): void;

        /**
        * FontBold
        **/
        FontBold: KsoMsoTriState;

        /**
        * KernedPairs
        **/
        KernedPairs: KsoMsoTriState;

        /**
        * FontName
        **/
        FontName: string;

        /**
        * FontSize
        **/
        FontSize: number;

        /**
        * NormalizedHeight
        **/
        NormalizedHeight: KsoMsoTriState;

        /**
        * PresetShape
        **/
        PresetShape: KsoMsoPresetTextEffectShape;

        /**
        * Text
        **/
        Text: string;

        /**
        * PresetTextEffect
        **/
        PresetTextEffect: KsoMsoPresetTextEffect;

        /**
        * RotatedChars
        **/
        RotatedChars: KsoMsoTriState;

        /**
        * Tracking
        **/
        Tracking: number;

    }

    interface KsoThreeDFormat {
        /**
        * Parent
        **/
        readonly Parent: any;

        SetExtrusionDirection(PresetExtrusionDirection?: KsoMsoPresetExtrusionDirection): void;

        IncrementRotationZ(Increment?: number): void;

        IncrementRotationX(Increment?: number): void;

        IncrementRotationY(Increment?: number): void;

        /**
        * ExtrusionColor
        **/
        readonly ExtrusionColor: KsoColorFormat;

        /**
        * Z
        **/
        Z: number;

        ResetRotation(): void;

        /**
        * BevelBottomInset
        **/
        BevelBottomInset: number;

        SetThreeDFormat(PresetThreeDFormat?: KsoMsoPresetThreeDFormat): void;

        /**
        * Depth
        **/
        Depth: number;

        /**
        * ExtrusionColorType
        **/
        ExtrusionColorType: KsoMsoExtrusionColorType;

        /**
        * Perspective
        **/
        Perspective: KsoMsoTriState;

        /**
        * PresetExtrusionDirection
        **/
        readonly PresetExtrusionDirection: KsoMsoPresetExtrusionDirection;

        /**
        * BevelBottomType
        **/
        BevelBottomType: KsoMsoBevelType;

        /**
        * PresetLightingDirection
        **/
        PresetLightingDirection: KsoMsoPresetLightingDirection;

        /**
        * PresetLightingSoftness
        **/
        PresetLightingSoftness: KsoMsoPresetLightingSoftness;

        /**
        * ContourColor
        **/
        readonly ContourColor: KsoColorFormat;

        /**
        * Visible
        **/
        Visible: KsoMsoTriState;

        /**
        * PresetThreeDFormat
        **/
        readonly PresetThreeDFormat: KsoMsoPresetThreeDFormat;

        /**
        * PresetMaterial
        **/
        PresetMaterial: KsoMsoPresetMaterial;

        /**
        * RotationZ
        **/
        RotationZ: number;

        /**
        * RotationY
        **/
        RotationY: number;

        /**
        * RotationX
        **/
        RotationX: number;

        SetPresetCamera(PresetCamera?: KsoMsoPresetCamera): void;

        IncrementRotationHorizontal(Increment?: number): void;

        IncrementRotationVertical(Increment?: number): void;

        /**
        * PresetLighting
        **/
        PresetLighting: KsoMsoLightRigType;

        /**
        * ProjectText
        **/
        ProjectText: KsoMsoTriState;

        /**
        * BevelTopType
        **/
        BevelTopType: KsoMsoBevelType;

        /**
        * BevelTopInset
        **/
        BevelTopInset: number;

        /**
        * BevelTopDepth
        **/
        BevelTopDepth: number;

        /**
        * BevelBottomDepth
        **/
        BevelBottomDepth: number;

        /**
        * PresetCamera
        **/
        readonly PresetCamera: KsoMsoPresetCamera;

        /**
        * ContourWidth
        **/
        ContourWidth: number;

        /**
        * FieldOfView
        **/
        FieldOfView: number;

        /**
        * LightAngle
        **/
        LightAngle: number;

    }

    interface KsoDiagramNodes {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: any, ppdn?: KsoDiagramNode): void;

        SelectAll(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface KsoDiagramNode {
        PrevNode(PrevNode?: KsoDiagramNode): void;

        AddNode(Pos?: KsoMsoRelativeNodePosition, NodeType?: KsoMsoDiagramNodeType, NewNode?: KsoDiagramNode): void;

        SwapNode(TargetNode?: KsoDiagramNode, SwapChildren?: boolean): void;

        Delete(): void;

        NextNode(NextNode?: KsoDiagramNode): void;

        MoveNode(TargetNode?: KsoDiagramNode, Pos?: KsoMsoRelativeNodePosition): void;

        ReplaceNode(TargetNode?: KsoDiagramNode): void;

        CloneNode(CopyChildren?: boolean, TargetNode?: KsoDiagramNode, Pos?: KsoMsoRelativeNodePosition, Node?: KsoDiagramNode): void;

        TransferChildren(ReceivingNode?: KsoDiagramNode): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Children
        **/
        readonly Children: KsoDiagramNodeChildren;

        /**
        * Shape
        **/
        readonly Shape: KsoShape;

        /**
        * Root
        **/
        readonly Root: KsoDiagramNode;

        /**
        * Diagram
        **/
        readonly Diagram: KsoMsoDiagram;

        /**
        * Layout
        **/
        Layout: KsoMsoOrgChartLayoutType;

        /**
        * TextShape
        **/
        readonly TextShape: KsoShape;

    }

    interface KsoPickerResults {
        Item(Index?: number, Result?: KsoPickerResult): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Id?: string, DisplayName?: string, Type?: string, SIPId?: string, ItemData?: any, SubItems?: any, Result?: KsoPickerResult): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoPickerResult {
        /**
        * Id
        **/
        readonly Id: string;

        /**
        * SubItems
        **/
        SubItems: any;

        /**
        * SIPId
        **/
        SIPId: string;

        /**
        * DisplayName
        **/
        DisplayName: string;

        /**
        * Type
        **/
        Type: string;

        /**
        * Fields
        **/
        Fields: KsoPickerFields;

        /**
        * ItemData
        **/
        ItemData: any;

        /**
        * DuplicateResults
        **/
        readonly DuplicateResults: any;

    }

    interface KsoDiagramNodeChildren {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: any, Node?: KsoDiagramNode): void;

        /**
        * FirstChild
        **/
        readonly FirstChild: KsoDiagramNode;

        AddNode(Index?: any, NodeType?: KsoMsoDiagramNodeType, NewNode?: KsoDiagramNode): void;

        SelectAll(): void;

        /**
        * LastChild
        **/
        readonly LastChild: KsoDiagramNode;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface KsoSoftEdgeFormat {
        /**
        * Type
        **/
        Type: KsoMsoSoftEdgeType;

        /**
        * Radius
        **/
        Radius: number;

    }

    interface KsoCanvasShapes {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        AddLine(BeginX?: number, BeginY?: number, EndX?: number, EndY?: number, Line?: KsoShape): void;

        Item(Index?: any, Item?: KsoShape): void;

        AddConnector(Type?: KsoMsoConnectorType, BeginX?: number, BeginY?: number, EndX?: number, EndY?: number, Connector?: KsoShape): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        AddCallout(Type?: KsoMsoCalloutType, Left?: number, Top?: number, Width?: number, Height?: number, Callout?: KsoShape): void;

        /**
        * Background
        **/
        readonly Background: KsoShape;

        AddCurve(SafeArrayOfPoints?: any, Curve?: KsoShape): void;

        AddLabel(Orientation?: KsoMsoTextOrientation, Left?: number, Top?: number, Width?: number, Height?: number, Label?: KsoShape): void;

        AddPicture(FileName?: string, LinkToFile?: KsoMsoTriState, SaveWithDocument?: KsoMsoTriState, Left?: number, Top?: number, Width?: number, Height?: number, Picture?: KsoShape): void;

        AddPolyline(SafeArrayOfPoints?: any, Polyline?: KsoShape): void;

        AddShape(Type?: KsoMsoAutoShapeType, Left?: number, Top?: number, Width?: number, Height?: number, Shape?: KsoShape): void;

        AddTextEffect(PresetTextEffect?: KsoMsoPresetTextEffect, Text?: string, FontName?: string, FontSize?: number, FontBold?: KsoMsoTriState, FontItalic?: KsoMsoTriState, Left?: number, Top?: number, TextEffect?: KsoShape): void;

        AddTextbox(Orientation?: KsoMsoTextOrientation, Left?: number, Top?: number, Width?: number, Height?: number, Textbox?: KsoShape): void;

        BuildFreeform(EditingType?: KsoMsoEditingType, X1?: number, Y1?: number, FreeformBuilder?: KsoFreeformBuilder): void;

        Range(Index?: any, Range?: KsoShapeRange): void;

        SelectAll(): void;

    }

    interface KsoBulletFormat2 {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * RelativeSize
        **/
        RelativeSize: number;

        /**
        * Type
        **/
        Type: KsoMsoBulletType;

        /**
        * Character
        **/
        Character: number;

        /**
        * StartValue
        **/
        StartValue: number;

        Picture(FileName?: string): void;

        /**
        * Number
        **/
        readonly Number: number;

        /**
        * Font
        **/
        readonly Font: KsoFont2;

        /**
        * Style
        **/
        Style: KsoMsoNumberedBulletStyle;

        /**
        * UseTextFont
        **/
        UseTextFont: KsoMsoTriState;

        /**
        * UseTextColor
        **/
        UseTextColor: KsoMsoTriState;

        /**
        * Visible
        **/
        Visible: KsoMsoTriState;

    }

    interface KsoSmartDocument {
        /**
        * SolutionID
        **/
        SolutionID: string;

        /**
        * SolutionURL
        **/
        SolutionURL: string;

        PickSolution(ConsiderAllSchemas?: boolean): void;

        RefreshPane(): void;

    }

    interface KsoGlowFormat {
        /**
        * Radius
        **/
        Radius: number;

        /**
        * Color
        **/
        readonly Color: KsoColorFormat;

        /**
        * Transparency
        **/
        Transparency: number;

    }

    interface KsoTextColumn2 {
        /**
        * Number
        **/
        Number: number;

        /**
        * Spacing
        **/
        Spacing: number;

        /**
        * TextDirection
        **/
        TextDirection: KsoMsoTextDirection;

    }

    interface KsoRuler2 {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Levels
        **/
        readonly Levels: KsoRulerLevels2;

        /**
        * TabStops
        **/
        readonly TabStops: KsoTabStops2;

    }

    interface KsoRulerLevels2 {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: any, RulerLevel?: KsoRulerLevel2): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoMsoCharacters {
        Delete(RHS?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Caption
        **/
        Caption: string;

        Insert(bstr?: string, RHS?: any): void;

        /**
        * Font
        **/
        readonly Font: KsoChartFont;

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

    interface KsoCustomXMLSchemaCollection {
        NamespaceURI(Index?: number, pbstrNamespaceURI?: string): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Validate(pfResult?: boolean): void;

        /**
        * Count
        **/
        readonly Count: number;

        AddCollection(SchemaCollection?: KsoCustomXMLSchemaCollection): void;

        Item(Index?: any, ppSchema?: KsoCustomXMLSchema): void;

        Add(NamespaceURI?: string, Alias?: string, FileName?: string, InstallForAllUsers?: boolean, ppSchema?: KsoCustomXMLSchema): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoRulerLevel2 {
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

    interface KsoChartFillFormat {
        OneColorGradient(Style?: number, Variant?: number, Degree?: number): void;

        /**
        * BackColor
        **/
        readonly BackColor: KsoChartColorFormat;

        /**
        * Application
        **/
        readonly Application: any;

        UserPicture(PictureFile?: any, PictureFormat?: any, PictureStackUnit?: any, PicturePlacement?: any): void;

        TwoColorGradient(Style?: number, Variant?: number): void;

        Solid(): void;

        /**
        * PresetTexture
        **/
        readonly PresetTexture: number;

        PresetTextured(PresetTexture?: number): void;

        PresetGradient(Style?: number, Variant?: number, PresetGradientType?: number): void;

        Patterned(Pattern?: number): void;

        UserTextured(TextureFile?: string): void;

        /**
        * ForeColor
        **/
        readonly ForeColor: KsoChartColorFormat;

        /**
        * GradientColorType
        **/
        readonly GradientColorType: number;

        /**
        * GradientDegree
        **/
        readonly GradientDegree: number;

        /**
        * Type
        **/
        readonly Type: number;

        /**
        * GradientStyle
        **/
        readonly GradientStyle: number;

        /**
        * GradientVariant
        **/
        readonly GradientVariant: number;

        /**
        * Pattern
        **/
        readonly Pattern: number;

        /**
        * PresetGradientType
        **/
        readonly PresetGradientType: number;

        /**
        * TextureName
        **/
        readonly TextureName: string;

        /**
        * TextureType
        **/
        readonly TextureType: number;

        /**
        * Visible
        **/
        Visible: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoChartColorFormat {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * SchemeColor
        **/
        SchemeColor: number;

        /**
        * Type
        **/
        readonly Type: number;

        /**
        * RGB
        **/
        RGB: number;

        /**
        * _Default
        **/
        readonly _Default: number;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoLegend {
        Delete(RHS?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        Select(RHS?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Font
        **/
        readonly Font: KsoChartFont;

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
        Position: KsoXlLegendPosition;

        Clear(RHS?: any): void;

        /**
        * Height
        **/
        Height: number;

        /**
        * Interior
        **/
        readonly Interior: KsoMsoInterior;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoWalls {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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
        readonly Interior: KsoMsoInterior;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoPropertyTests {
        Item(Index?: number, lcid?: number, ppIDocProp?: KsoPropertyTest): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, Condition?: KsoMsoCondition, Value?: any, SecondValue?: any, Connector?: KsoMsoConnector): void;

        Remove(Index?: number): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoPropertyTest {
        /**
        * Value
        **/
        readonly Value: any;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Condition
        **/
        readonly Condition: KsoMsoCondition;

        /**
        * SecondValue
        **/
        readonly SecondValue: any;

        /**
        * Connector
        **/
        readonly Connector: KsoMsoConnector;

    }

    interface KsoMsoFloor {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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
        readonly Interior: KsoMsoInterior;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

        /**
        * Thickness
        **/
        Thickness: number;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoPlotArea {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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
        readonly Interior: KsoMsoInterior;

        /**
        * Left
        **/
        Left: number;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

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
        Position: KsoXlChartElementPosition;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoChartGroup {
        /**
        * SeriesLines
        **/
        readonly SeriesLines: KsoMsoSeriesLines;

        /**
        * AxisGroup
        **/
        AxisGroup: number;

        /**
        * DownBars
        **/
        readonly DownBars: KsoMsoDownBars;

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
        readonly DropLines: KsoMsoDropLines;

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

        SeriesCollection(Index?: any, ppSeriesCollection?: any): void;

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
        readonly HiLoLines: KsoMsoHiLoLines;

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
        readonly RadarAxisLabels: any;

        /**
        * Type
        **/
        Type: number;

        CategoryCollection(Index?: any, ppcatcollection?: any): void;

        /**
        * UpBars
        **/
        readonly UpBars: KsoMsoUpBars;

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
        SizeRepresents: KsoXlSizeRepresents;

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
        SplitType: KsoXlChartSplitType;

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

        FullCategoryCollection(Index?: any, ppcatcollection?: any): void;

    }

    interface KsoMsoChartArea {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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
        readonly Font: KsoChartFont;

        ClearFormats(pvar?: any): void;

        /**
        * Height
        **/
        Height: number;

        /**
        * RoundedCorners
        **/
        RoundedCorners: boolean;

        /**
        * Interior
        **/
        readonly Interior: KsoMsoInterior;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoConverterUICallback {
        HrReportProgress(uPercentComplete?: number): void;

        HrMessageBox(bstrText?: string, bstrCaption?: string, uType?: number, pidResult?: number): void;

        HrInputBox(bstrText?: string, bstrCaption?: string, pbstrInput?: string, fPassword?: number): void;

    }

    interface KsoMsoAxisTitle {}

    interface KsoMsoDataTable {
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
        readonly Border: KsoMsoBorder;

        /**
        * HasBorderOutline
        **/
        HasBorderOutline: boolean;

        /**
        * Font
        **/
        readonly Font: KsoChartFont;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoChartData {
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

    interface KsoShapes {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        AddLine(BeginX?: number, BeginY?: number, EndX?: number, EndY?: number, Line?: KsoShape): void;

        Item(Index?: any, Item?: KsoShape): void;

        AddConnector(Type?: KsoMsoConnectorType, BeginX?: number, BeginY?: number, EndX?: number, EndY?: number, Connector?: KsoShape): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        AddCallout(Type?: KsoMsoCalloutType, Left?: number, Top?: number, Width?: number, Height?: number, Callout?: KsoShape): void;

        /**
        * Background
        **/
        readonly Background: KsoShape;

        AddCurve(SafeArrayOfPoints?: any, Curve?: KsoShape): void;

        AddSmartArt(Layout?: KsoSmartArtLayout, Left?: number, Top?: number, Width?: number, Height?: number, SmartArt?: KsoShape): void;

        /**
        * Default
        **/
        readonly Default: KsoShape;

        AddLabel(Orientation?: KsoMsoTextOrientation, Left?: number, Top?: number, Width?: number, Height?: number, Label?: KsoShape): void;

        AddPicture(FileName?: string, LinkToFile?: KsoMsoTriState, SaveWithDocument?: KsoMsoTriState, Left?: number, Top?: number, Width?: number, Height?: number, Picture?: KsoShape): void;

        AddPolyline(SafeArrayOfPoints?: any, Polyline?: KsoShape): void;

        AddShape(Type?: KsoMsoAutoShapeType, Left?: number, Top?: number, Width?: number, Height?: number, Shape?: KsoShape): void;

        AddTextEffect(PresetTextEffect?: KsoMsoPresetTextEffect, Text?: string, FontName?: string, FontSize?: number, FontBold?: KsoMsoTriState, FontItalic?: KsoMsoTriState, Left?: number, Top?: number, TextEffect?: KsoShape): void;

        AddTextbox(Orientation?: KsoMsoTextOrientation, Left?: number, Top?: number, Width?: number, Height?: number, Textbox?: KsoShape): void;

        BuildFreeform(EditingType?: KsoMsoEditingType, X1?: number, Y1?: number, FreeformBuilder?: KsoFreeformBuilder): void;

        Range(Index?: any, Range?: KsoShapeRange): void;

        SelectAll(): void;

        AddDiagram(Type?: KsoMsoDiagramType, Left?: number, Top?: number, Width?: number, Height?: number, Diagram?: KsoShape): void;

        AddCanvas(Left?: number, Top?: number, Width?: number, Height?: number, Shape?: KsoShape): void;

        AddChart2(Style?: number, Type?: KsoXlChartType, Left?: number, Top?: number, Width?: number, Height?: number, NewLayout?: boolean, Chart?: KsoShape): void;

        AddChart(Type?: KsoXlChartType, Left?: number, Top?: number, Width?: number, Height?: number, Chart?: KsoShape): void;

        AddTable(NumRows?: number, NumColumns?: number, Left?: number, Top?: number, Width?: number, Height?: number, Table?: KsoShape): void;

        AddPicture2(FileName?: string, LinkToFile?: KsoMsoTriState, SaveWithDocument?: KsoMsoTriState, Left?: number, Top?: number, Width?: number, Height?: number, Compress?: KsoMsoPictureCompress, Picture?: KsoShape): void;

    }

    interface KsoSmartArtLayout {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Id
        **/
        readonly Id: string;

        /**
        * Description
        **/
        readonly Description: string;

        /**
        * Category
        **/
        readonly Category: string;

    }

    interface KsoMsoDownBars {
        Delete(pvar?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(pvar?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Interior
        **/
        readonly Interior: KsoMsoInterior;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoDropLines {
        Delete(): void;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoHiLoLines {
        Delete(): void;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoSeriesLines {
        Delete(pvar?: any): void;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoTickLabels {
        Select(pval?: any): void;

        /**
        * Orientation
        **/
        Orientation: KsoXlTickLabelOrientation;

        /**
        * NumberFormat
        **/
        NumberFormat: string;

        /**
        * Name
        **/
        readonly Name: string;

        Delete(pval?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Font
        **/
        readonly Font: KsoChartFont;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoUpBars {
        Delete(pvar?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        Select(pvar?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Interior
        **/
        readonly Interior: KsoMsoInterior;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoSmartArtColor {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Id
        **/
        readonly Id: string;

        /**
        * Description
        **/
        readonly Description: string;

        /**
        * Category
        **/
        readonly Category: string;

    }

    interface KsoSmartArtNode {
        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        ReorderDown(): void;

        AddNode(Position?: KsoMsoSmartArtNodePosition, Type?: KsoMsoSmartArtNodeType, NewNode?: KsoSmartArtNode): void;

        Larger(): void;

        /**
        * TextFrame2
        **/
        readonly TextFrame2: KsoTextFrame2;

        Promote(): void;

        /**
        * Shapes
        **/
        readonly Shapes: KsoShapeRange;

        Demote(): void;

        /**
        * OrgChartLayout
        **/
        OrgChartLayout: KsoMsoOrgChartLayoutType;

        Smaller(): void;

        /**
        * Level
        **/
        readonly Level: number;

        /**
        * Hidden
        **/
        readonly Hidden: KsoMsoTriState;

        /**
        * Nodes
        **/
        readonly Nodes: KsoSmartArtNodes;

        /**
        * ParentNode
        **/
        readonly ParentNode: KsoSmartArtNode;

        /**
        * Type
        **/
        readonly Type: KsoMsoSmartArtNodeType;

        ReorderUp(): void;

    }

    interface KsoSmartArtNodes {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: any, SmartArtNode?: KsoSmartArtNode): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Add(NewNode?: KsoSmartArtNode): void;

    }

    interface KsoSmartArtQuickStyles {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: any, Style?: KsoSmartArtQuickStyle): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface KsoSmartArtQuickStyle {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Id
        **/
        readonly Id: string;

        /**
        * Description
        **/
        readonly Description: string;

        /**
        * Category
        **/
        readonly Category: string;

    }

    interface KsoMsoDispCagNotifySink {
        InsertClip(pClipMoniker?: any, pItemMoniker?: any): void;

        WindowIsClosing(): void;

    }

    interface KsoBalloon {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Mode
        **/
        Mode: KsoMsoModeType;

        /**
        * Checkboxes
        **/
        readonly Checkboxes: any;

        /**
        * BalloonType
        **/
        BalloonType: KsoMsoBalloonType;

        /**
        * Labels
        **/
        readonly Labels: any;

        /**
        * Text
        **/
        Text: string;

        /**
        * Icon
        **/
        Icon: KsoMsoIconType;

        /**
        * Heading
        **/
        Heading: string;

        /**
        * Animation
        **/
        Animation: KsoMsoAnimationType;

        /**
        * Button
        **/
        Button: KsoMsoButtonSetType;

        /**
        * Callback
        **/
        Callback: string;

        /**
        * Private
        **/
        Private: number;

        SetAvoidRectangle(Left?: number, Top?: number, Right?: number, Bottom?: number): void;

        /**
        * Name
        **/
        readonly Name: string;

        Show(pibtn?: KsoMsoBalloonButtonType): void;

        Close(): void;

    }

    interface KsoBalloonCheckboxes {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        Item(Index?: number, ppidisp?: any): void;

        /**
        * Count
        **/
        Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoBalloonCheckbox {
        /**
        * Item
        **/
        readonly Item: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Text
        **/
        Text: string;

        /**
        * Checked
        **/
        Checked: boolean;

    }

    interface KsoAnswerWizardFiles {
        Delete(FileName?: string): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Item(Index?: number, pbstr?: string): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(FileName?: string): void;

    }

    interface KsoAnswerWizard {
        ResetFileList(): void;

        /**
        * Files
        **/
        readonly Files: KsoAnswerWizardFiles;

        /**
        * Parent
        **/
        readonly Parent: any;

        ClearFileList(): void;

    }

    interface KsoAssistant {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * SearchWhenProgramming
        **/
        SearchWhenProgramming: boolean;

        ResetTips(): void;

        Move(xLeft?: number, yTop?: number): void;

        /**
        * Top
        **/
        Top: number;

        /**
        * Sounds
        **/
        Sounds: boolean;

        /**
        * Left
        **/
        Left: number;

        Help(): void;

        /**
        * FileName
        **/
        FileName: string;

        StartWizard(On?: boolean, Callback?: string, PrivateX?: number, Animation?: any, CustomTeaser?: any, Top?: any, Left?: any, Bottom?: any, Right?: any, plWizID?: number): void;

        /**
        * GuessHelp
        **/
        GuessHelp: boolean;

        ActivateWizard(WizardID?: number, act?: KsoMsoWizardActType, Animation?: any): void;

        EndWizard(WizardID?: number, varfSuccess?: boolean, Animation?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * AssistWithAlerts
        **/
        AssistWithAlerts: boolean;

        /**
        * NewBalloon
        **/
        readonly NewBalloon: KsoBalloon;

        /**
        * BalloonError
        **/
        readonly BalloonError: KsoMsoBalloonErrorType;

        /**
        * Visible
        **/
        Visible: boolean;

        /**
        * Animation
        **/
        Animation: KsoMsoAnimationType;

        /**
        * Reduced
        **/
        Reduced: boolean;

        /**
        * AssistWithHelp
        **/
        AssistWithHelp: boolean;

        /**
        * AssistWithWizards
        **/
        AssistWithWizards: boolean;

        /**
        * MoveWhenInTheWay
        **/
        MoveWhenInTheWay: boolean;

        /**
        * FeatureTips
        **/
        FeatureTips: boolean;

        /**
        * MouseTips
        **/
        MouseTips: boolean;

        /**
        * KeyboardShortcutTips
        **/
        KeyboardShortcutTips: boolean;

        /**
        * HighPriorityTips
        **/
        HighPriorityTips: boolean;

        /**
        * TipOfDay
        **/
        TipOfDay: boolean;

        /**
        * Item
        **/
        readonly Item: string;

        /**
        * On
        **/
        On: boolean;

        DoAlert(bstrAlertTitle?: string, bstrAlertText?: string, alb?: KsoMsoAlertButtonType, alc?: KsoMsoAlertIconType, ald?: KsoMsoAlertDefaultType, alq?: KsoMsoAlertCancelType, varfSysAlert?: boolean, pibtn?: number): void;

    }

    interface KsoCOMAddIns {
        Item(Index?: any, RetValue?: KsoCOMAddIn): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Update(): void;

        SetAppModal(varfModal?: boolean): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoCOMAddIn {
        /**
        * Description
        **/
        Description: string;

        /**
        * ProgId
        **/
        readonly ProgId: string;

        /**
        * Guid
        **/
        readonly Guid: string;

        /**
        * Connect
        **/
        Connect: boolean;

        /**
        * Object
        **/
        Object: any;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoDocumentProperties {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        Item(Index?: any, lcid?: number, ppIDocProp?: KsoDocumentProperty): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Name?: string, LinkToContent?: boolean, Type?: any, Value?: any, LinkSource?: any, lcid?: number, ppIDocProp?: KsoDocumentProperty): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Application
        **/
        readonly Application: any;

    }

    interface KsoFoundFiles {
        Item(Index?: number, pbstr?: string): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoFind {
        /**
        * SubDir
        **/
        SubDir: boolean;

        /**
        * Text
        **/
        Text: string;

        /**
        * SearchPath
        **/
        SearchPath: string;

        /**
        * MatchCase
        **/
        MatchCase: boolean;

        /**
        * Name
        **/
        Name: string;

        /**
        * Title
        **/
        Title: string;

        /**
        * Options
        **/
        Options: KsoMsoFileFindOptions;

        /**
        * Keywords
        **/
        Keywords: string;

        /**
        * Author
        **/
        Author: string;

        /**
        * Subject
        **/
        Subject: string;

        /**
        * PatternMatch
        **/
        PatternMatch: boolean;

        /**
        * DateSavedFrom
        **/
        DateSavedFrom: any;

        /**
        * DateSavedTo
        **/
        DateSavedTo: any;

        /**
        * SavedBy
        **/
        SavedBy: string;

        /**
        * DateCreatedFrom
        **/
        DateCreatedFrom: any;

        /**
        * DateCreatedTo
        **/
        DateCreatedTo: any;

        /**
        * View
        **/
        View: KsoMsoFileFindView;

        /**
        * SortBy
        **/
        SortBy: KsoMsoFileFindSortBy;

        /**
        * ListBy
        **/
        ListBy: KsoMsoFileFindListBy;

        /**
        * SelectedFile
        **/
        SelectedFile: number;

        /**
        * FileType
        **/
        FileType: number;

        /**
        * Results
        **/
        readonly Results: KsoFoundFiles;

        Delete(bstrQueryName?: string): void;

        Show(pRows?: number): void;

        Execute(): void;

        Load(bstrQueryName?: string): void;

        Save(bstrQueryName?: string): void;

    }

    interface KsoFileSearch {
        /**
        * FileType
        **/
        FileType: KsoMsoFileType;

        /**
        * MatchTextExactly
        **/
        MatchTextExactly: boolean;

        /**
        * PropertyTests
        **/
        readonly PropertyTests: KsoPropertyTests;

        /**
        * SearchSubFolders
        **/
        SearchSubFolders: boolean;

        /**
        * MatchAllWordForms
        **/
        MatchAllWordForms: boolean;

        Execute(SortBy?: KsoMsoSortBy, SortOrder?: KsoMsoSortOrder, AlwaysAccurate?: boolean, pRet?: number): void;

        /**
        * LastModified
        **/
        LastModified: KsoMsoLastModified;

        /**
        * FileName
        **/
        FileName: string;

        /**
        * TextOrProperty
        **/
        TextOrProperty: string;

        /**
        * LookIn
        **/
        LookIn: string;

        NewSearch(): void;

        /**
        * FileTypes
        **/
        readonly FileTypes: KsoFileTypes;

        /**
        * FoundFiles
        **/
        readonly FoundFiles: KsoFoundFiles;

        /**
        * SearchScopes
        **/
        readonly SearchScopes: KsoSearchScopes;

        /**
        * SearchFolders
        **/
        readonly SearchFolders: KsoSearchFolders;

        RefreshScopes(): void;

    }

    interface KsoSearchScopes {
        Item(Index?: number, SearchScopeRet?: KsoSearchScope): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoSharedWorkspaceLinks {
        /**
        * ItemCountExceeded
        **/
        readonly ItemCountExceeded: boolean;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: number, ppidisp?: KsoSharedWorkspaceLink): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(URL?: string, Description?: any, Notes?: any, ppLink?: KsoSharedWorkspaceLink): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoSharedWorkspaceFiles {
        /**
        * ItemCountExceeded
        **/
        readonly ItemCountExceeded: boolean;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: number, ppidisp?: KsoSharedWorkspaceFile): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(FileName?: string, ParentFolder?: any, OverwriteIfFileAlreadyExists?: any, KeepInSync?: any, ppFile?: KsoSharedWorkspaceFile): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoSearchScope {
        /**
        * Type
        **/
        readonly Type: KsoMsoSearchIn;

        /**
        * ScopeFolder
        **/
        readonly ScopeFolder: KsoScopeFolder;

    }

    interface KsoScopeFolder {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Path
        **/
        readonly Path: string;

        AddToSearchFolders(): void;

        /**
        * ScopeFolders
        **/
        readonly ScopeFolders: KsoScopeFolders;

    }

    interface KsoODSOFilters {
        /**
        * Count
        **/
        readonly Count: number;

        Delete(Index?: number, DeferUpdate?: boolean): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Item(Index?: number, ppColumn?: any): void;

        Add(Column?: string, Comparison?: KsoMsoFilterComparison, Conjunction?: KsoMsoFilterConjunction, bstrCompareTo?: string, DeferUpdate?: boolean): void;

    }

    interface KsoODSOFilter {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Column
        **/
        Column: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Conjunction
        **/
        Conjunction: KsoMsoFilterConjunction;

        /**
        * Comparison
        **/
        Comparison: KsoMsoFilterComparison;

        /**
        * CompareTo
        **/
        CompareTo: string;

    }

    interface KsoScopeFolders {
        Item(Index?: number, ScopeFolderRet?: KsoScopeFolder): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoSearchFolders {
        Item(Index?: number, ScopeFolderRet?: KsoScopeFolder): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(ScopeFolder?: KsoScopeFolder): void;

        Remove(Index?: number): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoChartPoint {
        Delete(RHS?: any): void;

        /**
        * MarkerForegroundColor
        **/
        MarkerForegroundColor: number;

        /**
        * DataLabel
        **/
        readonly DataLabel: KsoMsoDataLabel;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Left
        **/
        readonly Left: number;

        /**
        * InvertIfNegative
        **/
        InvertIfNegative: boolean;

        _ApplyDataLabels(Type?: KsoXlDataLabelsType, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any, RHS?: any): void;

        /**
        * HasDataLabel
        **/
        HasDataLabel: boolean;

        /**
        * MarkerStyle
        **/
        MarkerStyle: KsoXlMarkerStyle;

        Copy(RHS?: any): void;

        ClearFormats(RHS?: any): void;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Explosion
        **/
        Explosion: number;

        /**
        * Interior
        **/
        readonly Interior: KsoMsoInterior;

        /**
        * MarkerBackgroundColor
        **/
        MarkerBackgroundColor: number;

        /**
        * MarkerBackgroundColorIndex
        **/
        MarkerBackgroundColorIndex: KsoXlColorIndex;

        /**
        * MarkerForegroundColorIndex
        **/
        MarkerForegroundColorIndex: KsoXlColorIndex;

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
        PictureType: KsoXlChartPictureType;

        Paste(RHS?: any): void;

        /**
        * PictureUnit2
        **/
        PictureUnit2: number;

        /**
        * PictureUnit
        **/
        PictureUnit: number;

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

        ApplyDataLabels(Type?: KsoXlDataLabelsType, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, RHS?: any): void;

        /**
        * SecondaryPlot
        **/
        SecondaryPlot: boolean;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

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

        PieSliceLocation(loc?: KsoXlPieSliceLocation, Index?: KsoXlPieSliceIndex, pval?: number): void;

    }

    interface KsoFileTypes {
        Item(Index?: number, MsoFileTypeRet?: KsoMsoFileType): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(FileType?: KsoMsoFileType): void;

        Remove(Index?: number): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoLanguageSettings {
        LanguageID(Id?: KsoMsoAppLanguageID, plid?: number): void;

        LanguagePreferredForEditing(lid?: KsoMsoLanguageID, pf?: boolean): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoWebPageFont {
        /**
        * ProportionalFont
        **/
        ProportionalFont: string;

        /**
        * FixedWidthFontSize
        **/
        FixedWidthFontSize: number;

        /**
        * ProportionalFontSize
        **/
        ProportionalFontSize: number;

        /**
        * FixedWidthFont
        **/
        FixedWidthFont: string;

    }

    interface KsoWebPageFonts {
        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: KsoMsoCharacterSet, Item?: KsoWebPageFont): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoHTMLProjectItems {
        Item(Index?: any, RetValue?: KsoHTMLProjectItem): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoHTMLProjectItem {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        LoadFromFile(FileName?: string): void;

        /**
        * IsOpen
        **/
        readonly IsOpen: boolean;

        Open(OpenKind?: KsoMsoHTMLProjectOpen): void;

        SaveCopyAs(FileName?: string): void;

        /**
        * Text
        **/
        Text: string;

    }

    interface KsoHTMLProject {
        RefreshDocument(Refresh?: boolean): void;

        /**
        * State
        **/
        readonly State: KsoMsoHTMLProjectState;

        RefreshProject(Refresh?: boolean): void;

        /**
        * HTMLProjectItems
        **/
        readonly HTMLProjectItems: KsoHTMLProjectItems;

        /**
        * Parent
        **/
        readonly Parent: any;

        Open(OpenKind?: KsoMsoHTMLProjectOpen): void;

    }

    interface KsoSharedWorkspaceLink {
        /**
        * URL
        **/
        URL: string;

        /**
        * ModifiedBy
        **/
        readonly ModifiedBy: string;

        /**
        * Notes
        **/
        Notes: string;

        /**
        * Description
        **/
        Description: string;

        /**
        * ModifiedDate
        **/
        readonly ModifiedDate: any;

        Delete(): void;

        /**
        * CreatedBy
        **/
        readonly CreatedBy: string;

        /**
        * CreatedDate
        **/
        readonly CreatedDate: any;

        Save(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoSharedWorkspaceFile {
        /**
        * URL
        **/
        readonly URL: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        Delete(): void;

        /**
        * ModifiedDate
        **/
        readonly ModifiedDate: any;

        /**
        * CreatedBy
        **/
        readonly CreatedBy: string;

        /**
        * CreatedDate
        **/
        readonly CreatedDate: any;

        /**
        * ModifiedBy
        **/
        readonly ModifiedBy: string;

    }

    interface KsoSharedWorkspaceTask {
        /**
        * DueDate
        **/
        DueDate: any;

        /**
        * Status
        **/
        Status: KsoMsoSharedWorkspaceTaskStatus;

        /**
        * Title
        **/
        Title: string;

        /**
        * AssignedTo
        **/
        AssignedTo: string;

        /**
        * Priority
        **/
        Priority: KsoMsoSharedWorkspaceTaskPriority;

        /**
        * ModifiedBy
        **/
        readonly ModifiedBy: string;

        /**
        * Description
        **/
        Description: string;

        /**
        * CreatedBy
        **/
        readonly CreatedBy: string;

        /**
        * CreatedDate
        **/
        readonly CreatedDate: any;

        Delete(): void;

        /**
        * ModifiedDate
        **/
        readonly ModifiedDate: any;

        Save(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoFileDialogSelectedItems {
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

        Item(Index?: number, Item?: string): void;

    }

    interface KsoFileDialogFilter {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Extensions
        **/
        readonly Extensions: string;

        /**
        * Description
        **/
        readonly Description: string;

    }

    interface KsoFileDialogFilters {
        Delete(filter?: any): void;

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

        Item(Index?: number, Item?: KsoFileDialogFilter): void;

        Add(Description?: string, Extensions?: string, Position?: any, Add?: KsoFileDialogFilter): void;

        Clear(): void;

    }

    interface KsoFileDialog {
        Show(rval?: number): void;

        /**
        * AllowMultiSelect
        **/
        AllowMultiSelect: boolean;

        /**
        * Filters
        **/
        readonly Filters: KsoFileDialogFilters;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * InitialFileName
        **/
        InitialFileName: string;

        /**
        * FilterIndex
        **/
        FilterIndex: number;

        /**
        * Title
        **/
        Title: string;

        /**
        * ButtonName
        **/
        ButtonName: string;

        /**
        * InitialView
        **/
        InitialView: KsoMsoFileDialogView;

        /**
        * SelectedItems
        **/
        readonly SelectedItems: KsoFileDialogSelectedItems;

        /**
        * DialogType
        **/
        readonly DialogType: KsoMsoFileDialogType;

        /**
        * Item
        **/
        readonly Item: string;

        Execute(): void;

    }

    interface KsoSignatureSet {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Commit(): void;

        /**
        * Count
        **/
        readonly Count: number;

        AddSignatureLine(varSigProv?: any, ppidisp?: KsoSignature): void;

        Item(iSig?: number, ppidisp?: KsoSignature): void;

        Add(ppidisp?: KsoSignature): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        AddNonVisibleSignature(varSigProv?: any, ppidisp?: KsoSignature): void;

        /**
        * CanAddSignatureLine
        **/
        readonly CanAddSignatureLine: boolean;

        /**
        * Subset
        **/
        Subset: KsoMsoSignatureSubset;

        /**
        * ShowSignaturesPane
        **/
        ShowSignaturesPane: boolean;

    }

    interface KsoSignature {
        /**
        * Signer
        **/
        readonly Signer: string;

        /**
        * Issuer
        **/
        readonly Issuer: string;

        /**
        * ExpireDate
        **/
        readonly ExpireDate: any;

        /**
        * IsValid
        **/
        readonly IsValid: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * IsSigned
        **/
        readonly IsSigned: boolean;

        Delete(): void;

        /**
        * SignDate
        **/
        readonly SignDate: any;

        /**
        * AttachCertificate
        **/
        AttachCertificate: boolean;

        /**
        * IsSignatureLine
        **/
        readonly IsSignatureLine: boolean;

        /**
        * IsCertificateExpired
        **/
        readonly IsCertificateExpired: boolean;

        /**
        * IsCertificateRevoked
        **/
        readonly IsCertificateRevoked: boolean;

        /**
        * Setup
        **/
        readonly Setup: KsoSignatureSetup;

        Sign(varSigImg?: any, varDelSuggSigner?: any, varDelSuggSignerLine2?: any, varDelSuggSignerEmail?: any): void;

        /**
        * Details
        **/
        readonly Details: KsoSignatureInfo;

        ShowDetails(): void;

        /**
        * CanSetup
        **/
        readonly CanSetup: boolean;

        /**
        * SignatureLineShape
        **/
        readonly SignatureLineShape: any;

        /**
        * SortHint
        **/
        readonly SortHint: number;

    }

    interface KsoSignatureSetup {
        /**
        * SuggestedSignerLine2
        **/
        SuggestedSignerLine2: string;

        /**
        * SignatureProvider
        **/
        readonly SignatureProvider: string;

        /**
        * ReadOnly
        **/
        readonly ReadOnly: boolean;

        /**
        * Id
        **/
        readonly Id: string;

        /**
        * AllowComments
        **/
        AllowComments: boolean;

        /**
        * SigningInstructions
        **/
        SigningInstructions: string;

        /**
        * SuggestedSigner
        **/
        SuggestedSigner: string;

        /**
        * SuggestedSignerEmail
        **/
        SuggestedSignerEmail: string;

        /**
        * ShowSignDate
        **/
        ShowSignDate: boolean;

        /**
        * AdditionalXml
        **/
        AdditionalXml: string;

    }

    interface KsoMsoEnvelopeVB {
        /**
        * Introduction
        **/
        Introduction: string;

        /**
        * CommandBars
        **/
        readonly CommandBars: any;

        /**
        * Item
        **/
        readonly Item: any;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoOfficeDataSourceObject {
        ApplyFilter(): void;

        /**
        * RowCount
        **/
        readonly RowCount: number;

        /**
        * ConnectString
        **/
        ConnectString: string;

        /**
        * Table
        **/
        Table: string;

        SetSortOrder(SortField1?: string, SortAscending1?: boolean, SortField2?: string, SortAscending2?: boolean, SortField3?: string, SortAscending3?: boolean): void;

        /**
        * DataSource
        **/
        DataSource: string;

        /**
        * Columns
        **/
        readonly Columns: any;

        /**
        * Filters
        **/
        readonly Filters: any;

        Open(bstrSrc?: string, bstrConnect?: string, bstrTable?: string, fOpenExclusive?: number, fNeverPrompt?: number): void;

        Move(MsoMoveRow?: KsoMsoMoveRow, RowNbr?: number, rval?: number): void;

    }

    interface KsoODSOColumns {
        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Item(varIndex?: any, ppColumn?: any): void;

    }

    interface KsoODSOColumn {
        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Value
        **/
        readonly Value: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

    }

    interface KsoDocumentInspectors {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: number, ppidisp?: KsoDocumentInspector): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoDocumentInspector {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        Inspect(Status?: KsoMsoDocInspectorStatus, Results?: string): void;

        /**
        * Description
        **/
        readonly Description: string;

        Fix(Status?: KsoMsoDocInspectorStatus, Results?: string): void;

    }

    interface KsoNewFile {
        Add(FileName?: string, Section?: any, DisplayName?: any, Action?: any, pvarf?: boolean): void;

        Remove(FileName?: string, Section?: any, DisplayName?: any, Action?: any, pvarf?: boolean): void;

    }

    interface KsoWebComponent {
        /**
        * Shape
        **/
        readonly Shape: any;

        /**
        * Height
        **/
        Height: number;

        /**
        * URL
        **/
        URL: string;

        /**
        * HTML
        **/
        HTML: string;

        SetPlaceHolderGraphic(PlaceHolderGraphic?: string): void;

        /**
        * Name
        **/
        Name: string;

        /**
        * Width
        **/
        Width: number;

        Commit(): void;

        Revert(): void;

    }

    interface KsoWebComponentWindowExternal {
        /**
        * InterfaceVersion
        **/
        readonly InterfaceVersion: number;

        /**
        * ApplicationName
        **/
        readonly ApplicationName: string;

        /**
        * ApplicationVersion
        **/
        readonly ApplicationVersion: number;

        /**
        * Application
        **/
        readonly Application: any;

        CloseWindow(): void;

        /**
        * WebComponent
        **/
        readonly WebComponent: KsoWebComponent;

    }

    interface KsoWebComponentFormat {
        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Name
        **/
        Name: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Height
        **/
        Height: number;

        /**
        * URL
        **/
        URL: string;

        LaunchPropertiesWindow(): void;

        /**
        * HTML
        **/
        HTML: string;

        /**
        * Width
        **/
        Width: number;

        /**
        * PreviewGraphic
        **/
        PreviewGraphic: string;

    }

    interface KsoLicWizExternal {
        ShowHelp(pvarId?: any): void;

        WriteLog(bstrMessage?: string): void;

        PrintHtmlDocument(punkHtmlDoc?: any): void;

        DisableVORWReminder(BPC?: number): void;

        /**
        * OfficeOnTheWebUrl
        **/
        readonly OfficeOnTheWebUrl: string;

        InvokeDateTimeApplet(): void;

        /**
        * CountryInfo
        **/
        readonly CountryInfo: string;

        FormatDate(date?: string, pFormat?: string, pDateString?: string): void;

        MsoAlert(bstrText?: string, bstrButtons?: string, bstrIcon?: string, plRet?: number): void;

        Terminate(): void;

        SaveReceipt(bstrReceipt?: string, pbstrPath?: string): void;

        OpenInDefaultBrowser(bstrUrl?: string): void;

        DepositPidKey(bstrKey?: string, fMORW?: number, plRet?: number): void;

        /**
        * WizardVisible
        **/
        WizardVisible: number;

        ResignDpc(bstrProductCode?: string): void;

        ResetPID(): void;

        SetDialogSize(dx?: number, dy?: number): void;

        VerifyClock(lMode?: number, plRet?: number): void;

        SortSelectOptions(pdispSelect?: any): void;

        InternetDisconnect(): void;

        GetConnectedState(pfConnected?: number): void;

        /**
        * CurrentHelpId
        **/
        CurrentHelpId: number;

        /**
        * Context
        **/
        readonly Context: number;

        /**
        * Validator
        **/
        readonly Validator: any;

        /**
        * LicAgent
        **/
        readonly LicAgent: any;

        /**
        * WizardTitle
        **/
        WizardTitle: string;

        /**
        * AnimationEnabled
        **/
        readonly AnimationEnabled: number;

    }

    interface KsoLicValidator {
        /**
        * Products
        **/
        readonly Products: any;

        /**
        * Selection
        **/
        Selection: number;

    }

    interface KsoLicAgent {
        GetOrgName(pbstrVal?: string): void;

        SetLastName(bstrNewVal?: string): void;

        SetBillingCountryCode(bstrNewVal?: string): void;

        GetInvoiceText(pNewVal?: string): void;

        SetZip(bstrNewVal?: string): void;

        Initialize(dwBPC?: number, dwMode?: number, bstrLicSource?: string, pdwRetCode?: number): void;

        SetBillingFirstName(bstrNewVal?: string): void;

        GetFirstName(pbstrVal?: string): void;

        SetCountryCode(bstrNewVal?: string): void;

        GetOtherOffer(pbstrVal?: string): void;

        SetFirstName(bstrNewVal?: string): void;

        GetBillingPhone(pbstrVal?: string): void;

        GetExistingExpiryDate(pDateVal?: string): void;

        SetOrgName(bstrNewVal?: string): void;

        SetCreditCardNumber(bstrCCNumber?: string): void;

        AsyncProcessNewLicenseRequest(): void;

        GetLastName(pbstrVal?: string): void;

        GetEmail(pbstrVal?: string): void;

        SetEmail(bstrNewVal?: string): void;

        SetBillingPhone(bstrNewVal?: string): void;

        GetPhone(pbstrVal?: string): void;

        SetPhone(bstrNewVal?: string): void;

        GetAddress1(pbstrVal?: string): void;

        GetAddress2(pbstrVal?: string): void;

        SetCity(bstrNewVal?: string): void;

        SetAddress1(bstrNewVal?: string): void;

        SetAddress2(bstrNewVal?: string): void;

        GetState(pbstrVal?: string): void;

        GetCity(pbstrVal?: string): void;

        SetState(bstrNewVal?: string): void;

        GetCountryCode(pbstrVal?: string): void;

        GetCountryDesc(pbstrVal?: string): void;

        SetCountryDesc(bstrNewVal?: string): void;

        GetBillingCountryCode(pbstrVal?: string): void;

        GetZip(pbstrVal?: string): void;

        SetOtherOffer(bstrNewVal?: string): void;

        AsyncProcessReissueLicenseRequest(): void;

        SetMSUpdate(bstrNewVal?: string): void;

        GetIsoLanguage(pdwVal?: number): void;

        SetIsoLanguage(dwNewVal?: number): void;

        GetBillingCity(pbstrVal?: string): void;

        GetMSUpdate(pbstrVal?: string): void;

        GetMSOffer(pbstrVal?: string): void;

        SetMSOffer(bstrNewVal?: string): void;

        CheckSystemClock(pdwRetCode?: number): void;

        GetNewExpiryDate(pDateVal?: string): void;

        GetBillingFirstName(pbstrVal?: string): void;

        GetBillingLastName(pbstrVal?: string): void;

        SetBillingCity(bstrNewVal?: string): void;

        SetBillingLastName(bstrNewVal?: string): void;

        GetBillingAddress1(pbstrVal?: string): void;

        GetBillingAddress2(pbstrVal?: string): void;

        SetBillingAddress1(bstrNewVal?: string): void;

        SetBillingAddress2(bstrNewVal?: string): void;

        GetVATLabel(bstrCountryCode?: string, pbstrVATLabel?: string): void;

        SetBillingZip(bstrNewVal?: string): void;

        GetBillingState(pbstrVal?: string): void;

        SetBillingState(bstrNewVal?: string): void;

        GetBillingZip(pbstrVal?: string): void;

        SetCreditCardType(bstrCCCode?: string): void;

        SaveBillingInfo(bSave?: number, pdwRetVal?: number): void;

        IsCCRenewalCountry(bstrCountryCode?: string, pbRetVal?: number): void;

        GetCCRenewalExpiryDate(pDateVal?: string): void;

        SetVATNumber(bstrVATNumber?: string): void;

        SetCreditCardExpiryYear(dwCCYear?: number): void;

        SetCreditCardExpiryMonth(dwCCMonth?: number): void;

        GetCreditCardCount(pdwCount?: number): void;

        GetCreditCardCode(dwIndex?: number, pbstrCode?: string): void;

        GetCreditCardName(dwIndex?: number, pbstrName?: string): void;

        GetVATNumber(pbstrVATNumber?: string): void;

        GetCreditCardType(pbstrCCCode?: string): void;

        GetCreditCardNumber(pbstrCCNumber?: string): void;

        GetCreditCardExpiryMonth(pdwCCMonth?: number): void;

        GetCreditCardExpiryYear(pdwCCYear?: number): void;

        GetDisconnectOption(pbRetVal?: number): void;

        SetDisconnectOption(bNewVal?: number): void;

        AsyncProcessHandshakeRequest(bReviseCustInfo?: number): void;

        AsyncProcessRetailRenewalLicenseRequest(): void;

        AsyncProcessReviseCustInfoRequest(): void;

        AsyncProcessCCRenewalPriceRequest(): void;

        AsyncProcessCCRenewalLicenseRequest(): void;

        GetAsyncProcessReturnCode(pdwRetCode?: number): void;

        IsUpgradeAvailable(pbUpgradeAvailable?: number): void;

        WantUpgrade(bWantUpgrade?: number): void;

        AsyncProcessDroppedLicenseRequest(): void;

        GenerateInstallationId(pbstrVal?: string): void;

        DepositConfirmationId(bstrVal?: string, pdwRetCode?: number): void;

        VerifyCheckDigits(bstrCIDIID?: string, pbValue?: number): void;

        GetCurrentExpiryDate(pDateVal?: string): void;

        CancelAsyncProcessRequest(bIsLicenseRequest?: number): void;

        GetCurrencyDescription(dwCurrencyIndex?: number, pbstrVal?: string): void;

        GetPriceItemCount(pdwCount?: number): void;

        GetPriceItemLabel(dwIndex?: number, pbstrVal?: string): void;

        GetPriceItemValue(dwCurrencyIndex?: number, dwIndex?: number, pbstrVal?: string): void;

        GetBackendErrorMsg(pbstrErrMsg?: string): void;

        GetCurrencyOption(dwCurrencyOption?: number): void;

        SetCurrencyOption(dwCurrencyOption?: number): void;

        GetEndOfLifeHtmlText(pbstrHtmlText?: string): void;

        DisplaySSLCert(dwRetCode?: number): void;

    }

    interface KsoWebComponentProperties {
        /**
        * Shape
        **/
        readonly Shape: any;

        /**
        * Name
        **/
        Name: string;

        /**
        * Height
        **/
        Height: number;

        /**
        * URL
        **/
        URL: string;

        /**
        * HTML
        **/
        HTML: string;

        /**
        * PreviewGraphic
        **/
        PreviewGraphic: string;

        /**
        * Tag
        **/
        Tag: string;

        /**
        * PreviewHTML
        **/
        PreviewHTML: string;

        /**
        * Width
        **/
        Width: number;

    }

    interface KsoSharedWorkspaceMembers {
        /**
        * ItemCountExceeded
        **/
        readonly ItemCountExceeded: boolean;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: number, ppidisp?: KsoSharedWorkspaceMember): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Email?: string, DomainName?: string, DisplayName?: string, Role?: any, ppMember?: KsoSharedWorkspaceMember): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoSharedWorkspaceMember {
        /**
        * Email
        **/
        readonly Email: string;

        /**
        * DomainName
        **/
        readonly DomainName: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        Delete(): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Id
        **/
        readonly Id: string;

    }

    interface KsoSharedWorkspaceFolders {
        /**
        * ItemCountExceeded
        **/
        readonly ItemCountExceeded: boolean;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: number, ppidisp?: KsoSharedWorkspaceFolder): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(FolderName?: string, ParentFolder?: any, ppFolder?: KsoSharedWorkspaceFolder): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoSharedWorkspaceFolder {
        /**
        * FolderName
        **/
        readonly FolderName: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        Delete(DeleteEventIfFolderContainsFiles?: any): void;

    }

    interface KsoSharedWorkspace {
        /**
        * Files
        **/
        readonly Files: KsoSharedWorkspaceFiles;

        Delete(): void;

        /**
        * Name
        **/
        Name: string;

        /**
        * SourceURL
        **/
        SourceURL: string;

        /**
        * Members
        **/
        readonly Members: KsoSharedWorkspaceMembers;

        Refresh(): void;

        /**
        * Tasks
        **/
        readonly Tasks: KsoSharedWorkspaceTasks;

        /**
        * Links
        **/
        readonly Links: KsoSharedWorkspaceLinks;

        /**
        * Folders
        **/
        readonly Folders: KsoSharedWorkspaceFolders;

        CreateNew(URL?: any, Name?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * URL
        **/
        readonly URL: string;

        /**
        * Connected
        **/
        readonly Connected: boolean;

        /**
        * LastRefreshed
        **/
        readonly LastRefreshed: any;

        RemoveDocument(): void;

        Disconnect(): void;

    }

    interface KsoSync {
        /**
        * Status
        **/
        readonly Status: KsoMsoSyncStatusType;

        Unsuspend(): void;

        /**
        * ErrorType
        **/
        readonly ErrorType: KsoMsoSyncErrorType;

        PutUpdate(): void;

        /**
        * WorkspaceLastChangedBy
        **/
        readonly WorkspaceLastChangedBy: string;

        GetUpdate(): void;

        /**
        * LastSyncTime
        **/
        readonly LastSyncTime: any;

        OpenVersion(SyncVersionType?: KsoMsoSyncVersionType): void;

        ResolveConflict(SyncConflictResolution?: KsoMsoSyncConflictResolutionType): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoDocumentLibraryVersion {
        Restore(ppdispOpened?: any): void;

        /**
        * Comments
        **/
        readonly Comments: string;

        /**
        * Modified
        **/
        readonly Modified: any;

        Open(ppdispOpened?: any): void;

        /**
        * ModifiedBy
        **/
        readonly ModifiedBy: string;

        /**
        * Index
        **/
        readonly Index: number;

        Delete(): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoDocumentLibraryVersions {
        Item(lIndex?: number, ppidisp?: KsoDocumentLibraryVersion): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * IsVersioningEnabled
        **/
        readonly IsVersioningEnabled: boolean;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoUserPermission {
        /**
        * ExpirationDate
        **/
        ExpirationDate: any;

        /**
        * UserId
        **/
        readonly UserId: string;

        /**
        * Permission
        **/
        Permission: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        Remove(): void;

    }

    interface KsoPermission {
        ApplyPolicy(FileName?: string): void;

        Item(Index?: any, UserPerm?: KsoUserPermission): void;

        /**
        * RequestPermissionURL
        **/
        RequestPermissionURL: string;

        RemoveAll(): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Enabled
        **/
        Enabled: boolean;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * EnableTrustedBrowser
        **/
        EnableTrustedBrowser: boolean;

        Add(UserId?: string, Permission?: any, ExpirationDate?: any, UserPerm?: KsoUserPermission): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * PolicyName
        **/
        readonly PolicyName: string;

        /**
        * PolicyDescription
        **/
        readonly PolicyDescription: string;

        /**
        * StoreLicenses
        **/
        StoreLicenses: boolean;

        /**
        * DocumentAuthor
        **/
        DocumentAuthor: string;

        /**
        * PermissionFromPolicy
        **/
        readonly PermissionFromPolicy: boolean;

    }

    interface KsoCustomXMLValidationError {
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
        * Type
        **/
        readonly Type: KsoMsoCustomXMLValidationErrorType;

        /**
        * Node
        **/
        readonly Node: KsoCustomXMLNode;

        /**
        * Text
        **/
        readonly Text: string;

        /**
        * ErrorCode
        **/
        readonly ErrorCode: number;

    }

    interface KsoMsoDebugOptions_UTRunResult {
        /**
        * Passed
        **/
        readonly Passed: boolean;

        /**
        * ErrorString
        **/
        readonly ErrorString: string;

    }

    interface KsoMsoDebugOptions_UTs {
        Item(Index?: number, ppUnitTest?: KsoMsoDebugOptions_UT): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        GetUnitTest(bstrCollectionName?: string, bstrUnitTestName?: string, MsoDebugOptions_UT?: KsoMsoDebugOptions_UT): void;

        GetUnitTestsInCollection(bstrCollectionName?: string, MsoDebugOptions_UTs?: KsoMsoDebugOptions_UTs): void;

        GetMatchingUnitTestsInCollection(bstrCollectionName?: string, bstrUnitTestNameFilter?: string, MsoDebugOptions_UTs?: KsoMsoDebugOptions_UTs): void;

    }

    interface KsoMsoDebugOptions_UT {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * CollectionName
        **/
        readonly CollectionName: string;

        Run(ppRunResult?: KsoMsoDebugOptions_UTRunResult): void;

    }

    interface KsoMsoDebugOptions_UTManager {
        /**
        * UnitTests
        **/
        readonly UnitTests: KsoMsoDebugOptions_UTs;

        /**
        * ReportErrors
        **/
        ReportErrors: boolean;

        NotifyStartOfTestSuiteRun(): void;

        NotifyEndOfTestSuiteRun(): void;

    }

    interface KsoMetaProperty {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ValidationError
        **/
        readonly ValidationError: string;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Value
        **/
        Value: any;

        /**
        * Id
        **/
        readonly Id: string;

        /**
        * IsReadOnly
        **/
        readonly IsReadOnly: boolean;

        Validate(pbstrError?: string): void;

        /**
        * IsRequired
        **/
        readonly IsRequired: boolean;

        /**
        * Type
        **/
        readonly Type: KsoMsoMetaPropertyType;

    }

    interface KsoGridLines {
        Delete(pvar?: any): void;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMetaProperties {
        Item(Index?: any, ppmp?: KsoMetaProperty): void;

        /**
        * SchemaXml
        **/
        readonly SchemaXml: string;

        GetItemByInternalName(InternalName?: string, ppmp?: KsoMetaProperty): void;

        Validate(pbstrError?: string): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ValidationError
        **/
        readonly ValidationError: string;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoPolicyItem {
        /**
        * Id
        **/
        readonly Id: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Description
        **/
        readonly Description: string;

        /**
        * Data
        **/
        readonly Data: string;

    }

    interface KsoServerPolicy {
        /**
        * BlockPreview
        **/
        readonly BlockPreview: boolean;

        Item(Index?: any, pppi?: KsoPolicyItem): void;

        /**
        * Id
        **/
        readonly Id: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Description
        **/
        readonly Description: string;

        /**
        * Statement
        **/
        readonly Statement: string;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface KsoWorkflowTasks {
        Item(Index?: number, ppret?: KsoWorkflowTask): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoWorkflowTask {
        /**
        * ListID
        **/
        readonly ListID: string;

        /**
        * Id
        **/
        readonly Id: string;

        /**
        * WorkflowID
        **/
        readonly WorkflowID: string;

        /**
        * CreatedBy
        **/
        readonly CreatedBy: string;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Description
        **/
        readonly Description: string;

        /**
        * AssignedTo
        **/
        readonly AssignedTo: string;

        /**
        * DueDate
        **/
        readonly DueDate: string;

        /**
        * CreatedDate
        **/
        readonly CreatedDate: string;

        Show(pRet?: number): void;

    }

    interface KsoWorkflowTemplate {
        /**
        * Id
        **/
        readonly Id: string;

        Show(pRet?: number): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Description
        **/
        readonly Description: string;

        /**
        * DocumentLibraryName
        **/
        readonly DocumentLibraryName: string;

        /**
        * DocumentLibraryURL
        **/
        readonly DocumentLibraryURL: string;

    }

    interface KsoWorkflowTemplates {
        Item(Index?: number, ppret?: KsoWorkflowTemplate): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoPickerProperties {
        Item(Index?: number, prop?: KsoPickerProperty): void;

        /**
        * Count
        **/
        readonly Count: number;

        Add(Id?: string, Value?: string, Type?: KsoMsoPickerField, prop?: KsoPickerProperty): void;

        Remove(Id?: string): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoSignatureProvider {
        GenerateSignatureLineImage(siglnimg?: KsoSignatureLineImage, psigsetup?: KsoSignatureSetup, psiginfo?: KsoSignatureInfo, XmlDsigStream?: any, ppipictdisp?: any): void;

        HashStream(QueryContinue?: any, Stream?: any, ppsargb?: any[]): void;

        ShowSignatureDetails(ParentWindow?: any, psigsetup?: KsoSignatureSetup, psiginfo?: KsoSignatureInfo, XmlDsigStream?: any, pcontverres?: KsoContentVerificationResults, pcertverres?: KsoCertificateVerificationResults): void;

        ShowSignatureSetup(ParentWindow?: any, psigsetup?: KsoSignatureSetup): void;

        ShowSigningCeremony(ParentWindow?: any, psigsetup?: KsoSignatureSetup, psiginfo?: KsoSignatureInfo): void;

        SignXmlDsig(QueryContinue?: any, psigsetup?: KsoSignatureSetup, psiginfo?: KsoSignatureInfo, XmlDsigStream?: any): void;

        NotifySignatureAdded(ParentWindow?: any, psigsetup?: KsoSignatureSetup, psiginfo?: KsoSignatureInfo): void;

        GetProviderDetail(sigprovdet?: KsoSignatureProviderDetail, pvar?: any): void;

        VerifyXmlDsig(QueryContinue?: any, psigsetup?: KsoSignatureSetup, psiginfo?: KsoSignatureInfo, XmlDsigStream?: any, pcontverres?: KsoContentVerificationResults, pcertverres?: KsoCertificateVerificationResults): void;

    }

    interface KsoCustomXMLPrefixMapping {
        /**
        * NamespaceURI
        **/
        readonly NamespaceURI: string;

        /**
        * Prefix
        **/
        readonly Prefix: string;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoCustomXMLPrefixMappings {
        /**
        * Parent
        **/
        readonly Parent: any;

        LookupPrefix(NamespaceURI?: string, pbstrPrefix?: string): void;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: any, ppPrefixMapping?: KsoCustomXMLPrefixMapping): void;

        LookupNamespace(Prefix?: string, pbstrNamespaceURI?: string): void;

        AddNamespace(Prefix?: string, NamespaceURI?: string): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoCustomXMLSchema {
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

    interface KsoCustomXMLNodes {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: number, ppNode?: KsoCustomXMLNode): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoCustomXMLNode {
        /**
        * NamespaceURI
        **/
        readonly NamespaceURI: string;

        Delete(): void;

        /**
        * LastChild
        **/
        readonly LastChild: KsoCustomXMLNode;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Attributes
        **/
        readonly Attributes: KsoCustomXMLNodes;

        /**
        * BaseName
        **/
        readonly BaseName: string;

        /**
        * ChildNodes
        **/
        readonly ChildNodes: KsoCustomXMLNodes;

        /**
        * NextSibling
        **/
        readonly NextSibling: KsoCustomXMLNode;

        InsertSubtreeBefore(XML?: string, NextSibling?: KsoCustomXMLNode): void;

        /**
        * OwnerDocument
        **/
        readonly OwnerDocument: any;

        /**
        * FirstChild
        **/
        readonly FirstChild: KsoCustomXMLNode;

        /**
        * XML
        **/
        readonly XML: string;

        /**
        * NodeType
        **/
        readonly NodeType: KsoMsoCustomXMLNodeType;

        AppendChildNode(Name?: string, NamespaceURI?: string, NodeType?: KsoMsoCustomXMLNodeType, NodeValue?: string): void;

        /**
        * NodeValue
        **/
        NodeValue: string;

        /**
        * OwnerPart
        **/
        readonly OwnerPart: KsoCustomXMLPart;

        /**
        * PreviousSibling
        **/
        readonly PreviousSibling: KsoCustomXMLNode;

        /**
        * ParentNode
        **/
        readonly ParentNode: KsoCustomXMLNode;

        /**
        * Text
        **/
        Text: string;

        /**
        * XPath
        **/
        readonly XPath: string;

        AppendChildSubtree(XML?: string): void;

        HasChildNodes(pfHasChildNodes?: boolean): void;

        InsertNodeBefore(Name?: string, NamespaceURI?: string, NodeType?: KsoMsoCustomXMLNodeType, NodeValue?: string, NextSibling?: KsoCustomXMLNode): void;

        RemoveChild(Child?: KsoCustomXMLNode): void;

        ReplaceChildNode(OldNode?: KsoCustomXMLNode, Name?: string, NamespaceURI?: string, NodeType?: KsoMsoCustomXMLNodeType, NodeValue?: string): void;

        ReplaceChildSubtree(XML?: string, OldNode?: KsoCustomXMLNode): void;

        SelectNodes(XPath?: string, ppNodes?: KsoCustomXMLNodes): void;

        SelectSingleNode(XPath?: string, ppNode?: KsoCustomXMLNode): void;

    }

    interface KsoPickerField {
        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Type
        **/
        readonly Type: KsoMsoPickerField;

        /**
        * IsHidden
        **/
        readonly IsHidden: boolean;

    }

    interface KsoCustomXMLPart {
        Delete(): void;

        /**
        * NamespaceURI
        **/
        readonly NamespaceURI: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        SelectSingleNode(XPath?: string, ppNode?: KsoCustomXMLNode): void;

        /**
        * DocumentElement
        **/
        readonly DocumentElement: KsoCustomXMLNode;

        /**
        * Id
        **/
        readonly Id: string;

        /**
        * SchemaCollection
        **/
        SchemaCollection: KsoCustomXMLSchemaCollection;

        /**
        * NamespaceManager
        **/
        readonly NamespaceManager: KsoCustomXMLPrefixMappings;

        /**
        * XML
        **/
        readonly XML: string;

        AddNode(Parent?: KsoCustomXMLNode, Name?: string, NamespaceURI?: string, NextSibling?: KsoCustomXMLNode, NodeType?: KsoMsoCustomXMLNodeType, NodeValue?: string): void;

        Load(FilePath?: string, pfRet?: boolean): void;

        LoadXML(XML?: string, pfRet?: boolean): void;

        SelectNodes(XPath?: string, ppNodes?: KsoCustomXMLNodes): void;

        /**
        * Errors
        **/
        readonly Errors: KsoCustomXMLValidationErrors;

        /**
        * BuiltIn
        **/
        readonly BuiltIn: boolean;

    }

    interface KsoCustomXMLValidationErrors {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: number, ppError?: KsoCustomXMLValidationError): void;

        Add(Node?: KsoCustomXMLNode, ErrorName?: string, ErrorText?: string, ClearedOnUpdate?: boolean): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoThemeColor {
        /**
        * RGB
        **/
        RGB: number;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * ThemeColorSchemeIndex
        **/
        readonly ThemeColorSchemeIndex: KsoMsoThemeColorSchemeIndex;

    }

    interface KsoConverterPreferences {
        HrGetMacroEnabled(pfMacroEnabled?: number): void;

        HrCheckFormat(pFormat?: number): void;

        HrGetLossySave(pfLossySave?: number): void;

    }

    interface KsoThemeFont {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Name
        **/
        Name: string;

    }

    interface KsoThemeFonts {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: KsoMsoFontLanguageIndex, Val?: KsoThemeFont): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoThemeFontScheme {
        Load(FileName?: string): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * MinorFont
        **/
        readonly MinorFont: KsoThemeFonts;

        Save(FileName?: string): void;

        /**
        * MajorFont
        **/
        readonly MajorFont: KsoThemeFonts;

    }

    interface KsoThemeEffectScheme {
        Load(FileName?: string): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoMsoErrorBars {
        Delete(RHS?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        Select(RHS?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        ClearFormats(RHS?: any): void;

        /**
        * EndStyle
        **/
        EndStyle: KsoXlEndStyleCap;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoCustomTaskPane {
        /**
        * Title
        **/
        readonly Title: string;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Window
        **/
        readonly Window: any;

        /**
        * DockPositionRestrict
        **/
        DockPositionRestrict: KsoMsoCTPDockPositionRestrict;

        /**
        * Height
        **/
        Height: number;

        /**
        * ContentControl
        **/
        readonly ContentControl: any;

        /**
        * Visible
        **/
        Visible: boolean;

        /**
        * Width
        **/
        Width: number;

        /**
        * DockPosition
        **/
        DockPosition: KsoMsoCTPDockPosition;

        Delete(): void;

    }

    interface KsoCTPFactory {
        CreateCTP(CTPAxID?: string, CTPTitle?: string, CTPParentWindow?: any, CTPInst?: KsoCustomTaskPane): void;

    }

    interface KsoCustomTaskPaneConsumer {
        CTPFactoryAvailable(CTPFactoryInst?: KsoCTPFactory): void;

    }

    interface KsoRibbonUI {
        ActivateTabQ(ControlID?: string, Namespace?: string): void;

        ActivateTab(ControlID?: string): void;

        Invalidate(): void;

        InvalidateControlMso(ControlID?: string): void;

        InvalidateControl(ControlID?: string): void;

        ActivateTabMso(ControlID?: string): void;

    }

    interface KsoRibbonControl {
        /**
        * Id
        **/
        readonly Id: string;

        /**
        * Context
        **/
        readonly Context: any;

        /**
        * Tag
        **/
        readonly Tag: string;

    }

    interface KsoRibbonExtensibility {
        GetCustomUI(RibbonID?: string, RibbonXml?: string): void;

    }

    interface KsoAssistance {
        ShowHelp(HelpId?: string, Scope?: string): void;

        SearchHelp(Query?: string, Scope?: string): void;

        SetDefaultContext(HelpId?: string): void;

        ClearDefaultContext(HelpId?: string): void;

    }

    interface KsoMsoLeaderLines {
        /**
        * Parent
        **/
        readonly Parent: any;

        Delete(): void;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        Select(): void;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoLegendEntries {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        Item(Index?: any, RHS?: KsoLegendEntry): void;

        _NewEnum(RHS?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        _Default(Index?: any, RHS?: KsoLegendEntry): void;

    }

    interface KsoLegendEntry {
        Select(RHS?: any): void;

        Delete(RHS?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Left
        **/
        readonly Left: number;

        /**
        * LegendKey
        **/
        readonly LegendKey: KsoMsoLegendKey;

        /**
        * Font
        **/
        readonly Font: KsoChartFont;

        /**
        * Index
        **/
        readonly Index: number;

        /**
        * Top
        **/
        readonly Top: number;

        /**
        * AutoScaleFont
        **/
        AutoScaleFont: any;

        /**
        * Width
        **/
        readonly Width: number;

        /**
        * Height
        **/
        readonly Height: number;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoCategory {
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

    interface KsoMsoLegendKey {
        Delete(RHS?: any): void;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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
        readonly Interior: KsoMsoInterior;

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
        readonly Fill: KsoChartFillFormat;

        /**
        * MarkerBackgroundColorIndex
        **/
        MarkerBackgroundColorIndex: KsoXlColorIndex;

        /**
        * MarkerForegroundColor
        **/
        MarkerForegroundColor: number;

        /**
        * MarkerForegroundColorIndex
        **/
        MarkerForegroundColorIndex: KsoXlColorIndex;

        /**
        * MarkerSize
        **/
        MarkerSize: number;

        /**
        * MarkerStyle
        **/
        MarkerStyle: KsoXlMarkerStyle;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoSeriesCollection {
        Extend(Source?: any, Rowcol?: any, CategoryLabels?: any, RHS?: any): void;

        NewSeries(RHS?: KsoMsoSeries): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Source?: any, Rowcol?: KsoXlRowCol, SeriesLabels?: any, CategoryLabels?: any, Replace?: any, RHS?: KsoMsoSeries): void;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: any, RHS?: KsoMsoSeries): void;

        _NewEnum(RHS?: any): void;

        Paste(Rowcol?: KsoXlRowCol, SeriesLabels?: any, CategoryLabels?: any, Replace?: any, NewSeries?: any, RHS?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Creator
        **/
        readonly Creator: number;

        _Default(Index?: any, RHS?: KsoMsoSeries): void;

    }

    interface KsoMsoSeries {
        Delete(RHS?: any): void;

        /**
        * InvertColorIndex
        **/
        InvertColorIndex: KsoXlColorIndex;

        Select(RHS?: any): void;

        DataLabels(Index?: any, RHS?: any): void;

        /**
        * Name
        **/
        Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * InvertIfNegative
        **/
        InvertIfNegative: boolean;

        _ApplyDataLabels(Type?: KsoXlDataLabelsType, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any, RHS?: any): void;

        /**
        * Interior
        **/
        readonly Interior: KsoMsoInterior;

        /**
        * AxisGroup
        **/
        AxisGroup: KsoXlAxisGroup;

        /**
        * MarkerStyle
        **/
        MarkerStyle: KsoXlMarkerStyle;

        Copy(RHS?: any): void;

        ClearFormats(RHS?: any): void;

        /**
        * MarkerForegroundColorIndex
        **/
        MarkerForegroundColorIndex: KsoXlColorIndex;

        ErrorBar(Direction?: KsoXlErrorBarDirection, Include?: KsoXlErrorBarInclude, Type?: KsoXlErrorBarType, Amount?: any, MinusValues?: any, RHS?: any): void;

        /**
        * ErrorBars
        **/
        readonly ErrorBars: KsoMsoErrorBars;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

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
        readonly LeaderLines: KsoMsoLeaderLines;

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
        readonly Fill: KsoChartFillFormat;

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
        MarkerBackgroundColorIndex: KsoXlColorIndex;

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
        PictureType: KsoXlChartPictureType;

        Paste(RHS?: any): void;

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
        ChartType: KsoXlChartType;

        ApplyCustomType(ChartType?: KsoXlChartType): void;

        /**
        * BubbleSizes
        **/
        BubbleSizes: any;

        /**
        * BarShape
        **/
        BarShape: KsoXlBarShape;

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

        ApplyDataLabels(Type?: KsoXlDataLabelsType, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, RHS?: any): void;

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

    interface KsoMsoTrendline {
        Delete(RHS?: any): void;

        /**
        * DataLabel
        **/
        readonly DataLabel: KsoMsoDataLabel;

        /**
        * Name
        **/
        Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

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

        ClearFormats(RHS?: any): void;

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

        Select(RHS?: any): void;

        /**
        * Type
        **/
        Type: KsoXlTrendlineType;

        /**
        * Forward2
        **/
        Forward2: number;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Application
        **/
        readonly Application: any;

        /**
        * Backward2
        **/
        Backward2: number;

    }

    interface KsoMsoDataLabels {
        Delete(RHS?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        Select(RHS?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Interior
        **/
        readonly Interior: KsoMsoInterior;

        /**
        * NumberFormatLinked
        **/
        NumberFormatLinked: boolean;

        /**
        * Font
        **/
        readonly Font: KsoChartFont;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

        Characters(Start?: any, Length?: any, RHS?: KsoMsoCharacters): void;

        /**
        * HorizontalAlignment
        **/
        HorizontalAlignment: any;

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
        Position: KsoXlDataLabelPosition;

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
        readonly Format: KsoMsoChartFormat;

        /**
        * Separator
        **/
        Separator: any;

        /**
        * Count
        **/
        readonly Count: number;

        Item(Index?: any, RHS?: KsoMsoDataLabel): void;

        _NewEnum(RHS?: any): void;

        /**
        * Creator
        **/
        readonly Creator: number;

        _Default(Index?: any, RHS?: KsoMsoDataLabel): void;

        Propagate(Index?: any): void;

        /**
        * ShowRange
        **/
        ShowRange: boolean;

    }

    interface KsoMsoDataLabel {
        Delete(RHS?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        Select(RHS?: any): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Interior
        **/
        readonly Interior: KsoMsoInterior;

        /**
        * Fill
        **/
        readonly Fill: KsoChartFillFormat;

        /**
        * Caption
        **/
        Caption: string;

        /**
        * Top
        **/
        Top: number;

        Characters(Start?: any, Length?: any, RHS?: KsoMsoCharacters): void;

        /**
        * NumberFormatLinked
        **/
        NumberFormatLinked: boolean;

        /**
        * Font
        **/
        readonly Font: KsoChartFont;

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
        readonly Format: KsoMsoChartFormat;

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
        Position: KsoXlDataLabelPosition;

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
        * _Height
        **/
        readonly _Height: number;

        /**
        * Creator
        **/
        readonly Creator: number;

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

    interface KsoTrendlines {
        /**
        * Parent
        **/
        readonly Parent: any;

        Add(Type?: KsoXlTrendlineType, Order?: any, Period?: any, Forward?: any, Backward?: any, Intercept?: any, DisplayEquation?: any, DisplayRSquared?: any, Name?: any, RHS?: KsoMsoTrendline): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        Item(Index?: any, RHS?: KsoMsoTrendline): void;

        _NewEnum(RHS?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        _Default(Index?: any, RHS?: KsoMsoTrendline): void;

    }

    interface KsoPoints {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        Item(Index?: number, RHS?: KsoChartPoint): void;

        _NewEnum(RHS?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        _Default(Index?: number, RHS?: KsoChartPoint): void;

    }

    interface KsoAxes {
        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        Item(Type?: KsoXlAxisType, AxisGroup?: KsoXlAxisGroup, RHS?: KsoMsoAxis): void;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        /**
        * Application
        **/
        readonly Application: any;

        _Default(Type?: KsoXlAxisType, AxisGroup?: KsoXlAxisGroup, RHS?: KsoMsoAxis): void;

        /**
        * Parent
        **/
        readonly Parent: any;

    }

    interface KsoMsoAxis {
        /**
        * TickLabels
        **/
        readonly TickLabels: KsoMsoTickLabels;

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
        readonly MajorGridlines: KsoGridLines;

        /**
        * AxisGroup
        **/
        readonly AxisGroup: KsoXlAxisGroup;

        /**
        * MinorTickMark
        **/
        MinorTickMark: KsoXlTickMark;

        Delete(pval?: any): void;

        /**
        * Name
        **/
        readonly Name: string;

        /**
        * Border
        **/
        readonly Border: KsoMsoBorder;

        /**
        * AxisTitle
        **/
        readonly AxisTitle: KsoMsoAxisTitle;

        /**
        * CrossesAt
        **/
        CrossesAt: number;

        /**
        * Crosses
        **/
        Crosses: KsoXlAxisCrosses;

        /**
        * HasTitle
        **/
        HasTitle: boolean;

        /**
        * MinorUnitScale
        **/
        MinorUnitScale: KsoXlTimeUnit;

        /**
        * MajorTickMark
        **/
        MajorTickMark: KsoXlTickMark;

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
        DisplayUnit: KsoXlDisplayUnit;

        /**
        * MaximumScale
        **/
        MaximumScale: number;

        /**
        * TickLabelSpacing
        **/
        TickLabelSpacing: number;

        Select(pval?: any): void;

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
        readonly MinorGridlines: KsoGridLines;

        /**
        * MinorUnit
        **/
        MinorUnit: number;

        /**
        * Type
        **/
        Type: KsoXlAxisType;

        /**
        * MinorUnitIsAuto
        **/
        MinorUnitIsAuto: boolean;

        /**
        * BaseUnit
        **/
        BaseUnit: KsoXlTimeUnit;

        /**
        * ScaleType
        **/
        ScaleType: KsoXlScaleType;

        /**
        * ReversePlotOrder
        **/
        ReversePlotOrder: boolean;

        /**
        * TickLabelPosition
        **/
        TickLabelPosition: KsoXlTickLabelPosition;

        /**
        * MajorUnitScale
        **/
        MajorUnitScale: KsoXlTimeUnit;

        /**
        * CategoryType
        **/
        CategoryType: KsoXlCategoryType;

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
        readonly DisplayUnitLabel: KsoMsoDisplayUnitLabel;

        /**
        * Format
        **/
        readonly Format: KsoMsoChartFormat;

        /**
        * Creator
        **/
        readonly Creator: number;

    }

    interface KsoMsoDisplayUnitLabel {}

    interface KsoMsoHyperlinks {}

    interface KsoChartGroups {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        Item(Index?: any, RHS?: KsoMsoChartGroup): void;

        _NewEnum(RHS?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

    }

    interface KsoEncryptionProvider {
        DecryptStream(SessionHandle?: number, StreamName?: string, EncryptedStream?: any, UnencryptedStream?: any): void;

        CloneSession(SessionHandle?: number, SessionHandleClone?: number): void;

        NewSession(ParentWindow?: any, SessionHandle?: number): void;

        Authenticate(ParentWindow?: any, EncryptionData?: any, PermissionsMask?: number, SessionHandle?: number): void;

        GetProviderDetail(encprovdet?: KsoEncryptionProviderDetail, pvar?: any): void;

        EndSession(SessionHandle?: number): void;

        Save(SessionHandle?: number, EncryptionData?: any, EncryptionDataSize?: number): void;

        ShowSettings(SessionHandle?: number, ParentWindow?: any, ReadOnly?: boolean, Remove?: boolean): void;

        EncryptStream(SessionHandle?: number, StreamName?: string, UnencryptedStream?: any, EncryptedStream?: any): void;

    }

    interface KsoBlogExtensibility {
        BlogProviderProperties(BlogProvider?: string, FriendlyName?: string, CategorySupport?: KsoMsoBlogCategorySupport, Padding?: boolean): void;

        GetUserBlogs(Account?: string, ParentWindow?: number, Document?: any, BlogNames?: any[], BlogIDs?: any[], BlogURLs?: any[]): void;

        SetupBlogAccount(Account?: string, ParentWindow?: number, Document?: any, NewAccount?: boolean, ShowPictureUI?: boolean): void;

        Open(Account?: string, PostID?: string, ParentWindow?: number, xHTML?: string, Title?: string, DatePosted?: string, Categories?: any[]): void;

        GetRecentPosts(Account?: string, ParentWindow?: number, Document?: any, PostTitles?: any[], PostDates?: any[], PostIDs?: any[]): void;

        RepublishPost(Account?: string, ParentWindow?: number, Document?: any, PostID?: string, xHTML?: string, Title?: string, DateTime?: string, Categories?: any[], Draft?: boolean, PublishMessage?: string): void;

        PublishPost(Account?: string, ParentWindow?: number, Document?: any, xHTML?: string, Title?: string, DateTime?: string, Categories?: any[], Draft?: boolean, PostID?: string, PublishMessage?: string): void;

        GetCategories(Account?: string, ParentWindow?: number, Document?: any, Categories?: any[]): void;

    }

    interface KsoBlogPictureExtensibility {
        CreatePictureAccount(Account?: string, BlogProvider?: string, ParentWindow?: number, Document?: any): void;

        BlogPictureProviderProperties(BlogPictureProvider?: string, FriendlyName?: string): void;

        PublishPicture(Account?: string, ParentWindow?: number, Document?: any, Image?: any, PictureURI?: string, ImageType?: number): void;

    }

    interface KsoConverterApplicationPreferences {
        HrGetApplication(pbstrApplication?: string): void;

        HrGetLcid(plcid?: number): void;

        HrGetHwnd(phwnd?: number): void;

        HrCheckFormat(pFormat?: number): void;

    }

    interface KsoSmartArtLayouts {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: any, SmartArtLayout?: KsoSmartArtLayout): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface KsoSmartArtColors {
        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

        Item(Index?: any, SmartArtColor?: KsoSmartArtColor): void;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

    }

    interface KsoPickerDialog {
        /**
        * Properties
        **/
        readonly Properties: KsoPickerProperties;

        /**
        * DataHandlerId
        **/
        DataHandlerId: string;

        /**
        * Title
        **/
        Title: string;

        CreatePickerResults(Results?: KsoPickerResults): void;

        Show(IsMultiSelect?: boolean, ExistingResults?: KsoPickerResults, Results?: KsoPickerResults): void;

        Resolve(TokenText?: string, duplicateDlgMode?: number, Results?: KsoPickerResults): void;

    }

    interface KsoPickerFields {
        Item(Index?: number, Field?: KsoPickerField): void;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * _NewEnum
        **/
        readonly _NewEnum: any;

    }

    interface KsoMsoContactCard {
        /**
        * Address
        **/
        readonly Address: string;

        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * AddressType
        **/
        readonly AddressType: KsoMsoContactCardAddressType;

        /**
        * CardType
        **/
        readonly CardType: KsoMsoContactCardType;

    }

    interface KsoContactCard {
        Close(): void;

        Show(CardStyle?: KsoMsoContactCardStyle, RectangleLeft?: number, RectangleRight?: number, RectangleTop?: number, RectangleBottom?: number, HorizontalPosition?: number, ShowWithDelay?: boolean): void;

    }

    interface KsoFullSeriesCollection {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        Item(Index?: any, RHS?: KsoMsoSeries): void;

        _NewEnum(RHS?: any): void;

        /**
        * Application
        **/
        readonly Application: any;

        _Default(Index?: any, RHS?: KsoMsoSeries): void;

    }

    interface KsoCategoryCollection {
        /**
        * Parent
        **/
        readonly Parent: any;

        /**
        * Count
        **/
        readonly Count: number;

        /**
        * Creator
        **/
        readonly Creator: number;

        Item(Index?: any, ppcategory?: KsoMsoCategory): void;

        /**
        * Application
        **/
        readonly Application: any;

        _Default(Index?: any, RHS?: KsoMsoCategory): void;

    }

    enum KsoMsoFileFindOptions {
        msoOptionsNew=1,
        msoOptionsAdd=2,
        msoOptionsWithin=3,
    }

    enum KsoMsoShapeType {
        msoGroup=6,
        msoEmbeddedOLEObject=7,
        msoShapeTypeMixed=-2,
        msoComment=4,
        msoAutoShape=1,
        msoDiagram=21,
        msoTable=19,
        msoChart=3,
        msoCallout=2,
        msoFreeform=5,
        msoFormControl=8,
        msoLine=9,
        msoLinkedOLEObject=10,
        msoTextEffect=15,
        msoLinkedPicture=11,
        msoOLEControlObject=12,
        msoPicture=13,
        msoPlaceholder=14,
        msoMedia=16,
        msoTextBox=17,
        msoScriptAnchor=18,
        msoCanvas=20,
        msoInk=22,
        msoInkComment=23,
        msoSmartArt=24,
        msoSlicer=25,
        msoWebVideo=26,
    }

    enum KsoMsoGradientColorType {
        msoGradientColorMixed=-2,
        msoGradientOneColor=1,
        msoGradientTwoColors=2,
        msoGradientMultiColor=4,
        msoGradientPresetColors=3,
    }

    enum KsoMsoGradientStyle {
        msoGradientFromTitle=6,
        msoGradientMixed=-2,
        msoGradientDiagonalDown=4,
        msoGradientHorizontal=1,
        msoGradientVertical=2,
        msoGradientDiagonalUp=3,
        msoGradientFromCorner=5,
        msoGradientFromCenter=7,
    }

    enum KsoMsoColorType {
        msoColorTypeInk=5,
        msoColorTypeRGB=1,
        msoColorTypeMixed=-2,
        msoColorTypeScheme=2,
        msoColorTypeCMYK=3,
        msoColorTypeCMS=4,
    }

    enum KsoMsoHyperlinkType {
        msoHyperlinkRange=0,
        msoHyperlinkShape=1,
        msoHyperlinkInlineShape=2,
    }

    enum KsoMsoAlignCmd {
        msoAlignLefts=0,
        msoAlignCenters=1,
        msoAlignRights=2,
        msoAlignBottoms=5,
        msoAlignTops=3,
        msoAlignMiddles=4,
    }

    enum KsoMsoLanguageID {
        msoLanguageIDFrenchCanadian=3084,
        msoLanguageIDAlbanian=1052,
        msoLanguageIDNoProofing=1024,
        msoLanguageIDArabicTunisia=7169,
        msoLanguageIDArabicSyria=10241,
        msoLanguageIDMixed=-2,
        msoLanguageIDSpanishPuertoRico=20490,
        msoLanguageIDNone=0,
        msoLanguageIDArabicEgypt=3073,
        msoLanguageIDEnglishSouthAfrica=7177,
        msoLanguageIDFrisianNetherlands=1122,
        msoLanguageIDEnglishCanadian=4105,
        msoLanguageIDInuktitut=1117,
        msoLanguageIDAfrikaans=1078,
        msoLanguageIDAmharic=1118,
        msoLanguageIDSimplifiedChinese=2052,
        msoLanguageIDArabicAlgeria=5121,
        msoLanguageIDIbibio=1129,
        msoLanguageIDArabicBahrain=15361,
        msoLanguageIDHebrew=1037,
        msoLanguageIDEnglishUS=1033,
        msoLanguageIDArabicIraq=2049,
        msoLanguageIDArabicJordan=11265,
        msoLanguageIDArabicKuwait=13313,
        msoLanguageIDTurkish=1055,
        msoLanguageIDArabicLebanon=12289,
        msoLanguageIDBurmese=1109,
        msoLanguageIDSpanishPanama=6154,
        msoLanguageIDDivehi=1125,
        msoLanguageIDSindhiPakistan=2137,
        msoLanguageIDArabicLibya=4097,
        msoLanguageIDArabicMorocco=6145,
        msoLanguageIDKannada=1099,
        msoLanguageIDArabicOman=8193,
        msoLanguageIDManipuri=1112,
        msoLanguageIDEnglishBelize=10249,
        msoLanguageIDArabicQatar=16385,
        msoLanguageIDArabic=1025,
        msoLanguageIDEnglishJamaica=8201,
        msoLanguageIDChineseMacaoSAR=5124,
        msoLanguageIDArabicUAE=14337,
        msoLanguageIDEnglishTrinidadTobago=11273,
        msoLanguageIDArabicYemen=9217,
        msoLanguageIDRomanian=1048,
        msoLanguageIDArmenian=1067,
        msoLanguageIDWelsh=1106,
        msoLanguageIDAssamese=1101,
        msoLanguageIDYi=1144,
        msoLanguageIDKonkani=1111,
        msoLanguageIDAzeriCyrillic=2092,
        msoLanguageIDSerbianBosniaHerzegovinaCyrillic=7194,
        msoLanguageIDBosnianBosniaHerzegovinaCyrillic=8218,
        msoLanguageIDAzeriLatin=1068,
        msoLanguageIDBulgarian=1026,
        msoLanguageIDBasque=1069,
        msoLanguageIDEnglishCaribbean=9225,
        msoLanguageIDBengali=1093,
        msoLanguageIDByelorussian=1059,
        msoLanguageIDChineseHongKongSAR=3076,
        msoLanguageIDKyrgyz=1088,
        msoLanguageIDBosnian=4122,
        msoLanguageIDQuechuaBolivia=1131,
        msoLanguageIDBosnianBosniaHerzegovinaLatin=5146,
        msoLanguageIDOriya=1096,
        msoLanguageIDLatvian=1062,
        msoLanguageIDCatalan=1027,
        msoLanguageIDBelgianDutch=2067,
        msoLanguageIDChineseSingapore=4100,
        msoLanguageIDTraditionalChinese=1028,
        msoLanguageIDGeorgian=1079,
        msoLanguageIDCroatian=1050,
        msoLanguageIDCherokee=1116,
        msoLanguageIDEnglishIndonesia=14345,
        msoLanguageIDGreek=1032,
        msoLanguageIDCzech=1029,
        msoLanguageIDDanish=1030,
        msoLanguageIDTatar=1092,
        msoLanguageIDLatin=1142,
        msoLanguageIDDutch=1043,
        msoLanguageIDDzongkhaBhutan=2129,
        msoLanguageIDLao=1108,
        msoLanguageIDEdo=1126,
        msoLanguageIDEnglishAUS=3081,
        msoLanguageIDEnglishIreland=6153,
        msoLanguageIDEnglishNewZealand=5129,
        msoLanguageIDEnglishPhilippines=13321,
        msoLanguageIDEnglishUK=2057,
        msoLanguageIDSorbian=1070,
        msoLanguageIDEnglishZimbabwe=12297,
        msoLanguageIDSpanishEcuador=12298,
        msoLanguageIDEstonian=1061,
        msoLanguageIDSpanishNicaragua=19466,
        msoLanguageIDFaeroese=1080,
        msoLanguageIDFarsi=1065,
        msoLanguageIDGalician=1110,
        msoLanguageIDFilipino=1124,
        msoLanguageIDFinnish=1035,
        msoLanguageIDBelgianFrench=2060,
        msoLanguageIDFrenchCameroon=11276,
        msoLanguageIDFrenchCotedIvoire=12300,
        msoLanguageIDVenda=1075,
        msoLanguageIDHindi=1081,
        msoLanguageIDFrench=1036,
        msoLanguageIDFrenchHaiti=15372,
        msoLanguageIDThai=1054,
        msoLanguageIDSesotho=1072,
        msoLanguageIDFrenchLuxembourg=5132,
        msoLanguageIDTamil=1097,
        msoLanguageIDKhmer=1107,
        msoLanguageIDFrenchMali=13324,
        msoLanguageIDSerbianBosniaHerzegovinaLatin=6170,
        msoLanguageIDFrenchMonaco=6156,
        msoLanguageIDFrenchMorocco=14348,
        msoLanguageIDFrenchReunion=8204,
        msoLanguageIDFrenchSenegal=10252,
        msoLanguageIDHungarian=1038,
        msoLanguageIDSwissFrench=4108,
        msoLanguageIDFrenchWestIndies=7180,
        msoLanguageIDMexicanSpanish=2058,
        msoLanguageIDFrenchZaire=9228,
        msoLanguageIDFrenchCongoDRC=9228,
        msoLanguageIDSpanishDominicanRepublic=7178,
        msoLanguageIDFulfulde=1127,
        msoLanguageIDGaelicIreland=2108,
        msoLanguageIDGaelicScotland=1084,
        msoLanguageIDGermanAustria=3079,
        msoLanguageIDKorean=1042,
        msoLanguageIDGerman=1031,
        msoLanguageIDGermanLiechtenstein=5127,
        msoLanguageIDGermanLuxembourg=4103,
        msoLanguageIDSwissGerman=2055,
        msoLanguageIDGuarani=1140,
        msoLanguageIDGujarati=1095,
        msoLanguageIDMalayalam=1100,
        msoLanguageIDHausa=1128,
        msoLanguageIDHawaiian=1141,
        msoLanguageIDIcelandic=1039,
        msoLanguageIDIgbo=1136,
        msoLanguageIDIndonesian=1057,
        msoLanguageIDItalian=1040,
        msoLanguageIDSwissItalian=2064,
        msoLanguageIDJapanese=1041,
        msoLanguageIDSindhi=1113,
        msoLanguageIDKanuri=1137,
        msoLanguageIDKashmiri=1120,
        msoLanguageIDKashmiriDevanagari=2144,
        msoLanguageIDKazakh=1087,
        msoLanguageIDYiddish=1085,
        msoLanguageIDKirghiz=1088,
        msoLanguageIDTajik=1064,
        msoLanguageIDLithuanian=1063,
        msoLanguageIDMacedonian=1071,
        msoLanguageIDMacedonianFYROM=1071,
        msoLanguageIDMalaysian=1086,
        msoLanguageIDMalayBruneiDarussalam=2110,
        msoLanguageIDMaltese=1082,
        msoLanguageIDXhosa=1076,
        msoLanguageIDOromo=1138,
        msoLanguageIDMaori=1153,
        msoLanguageIDMarathi=1102,
        msoLanguageIDMongolian=1104,
        msoLanguageIDSepedi=1132,
        msoLanguageIDNepali=1121,
        msoLanguageIDNorwegianBokmol=1044,
        msoLanguageIDZulu=1077,
        msoLanguageIDNorwegianNynorsk=2068,
        msoLanguageIDPashto=1123,
        msoLanguageIDPolish=1045,
        msoLanguageIDBrazilianPortuguese=1046,
        msoLanguageIDPortuguese=2070,
        msoLanguageIDPunjabi=1094,
        msoLanguageIDQuechuaEcuador=2155,
        msoLanguageIDQuechuaPeru=3179,
        msoLanguageIDRhaetoRomanic=1047,
        msoLanguageIDRomanianMoldova=2072,
        msoLanguageIDRussianMoldova=2073,
        msoLanguageIDRussian=1049,
        msoLanguageIDSamiLappish=1083,
        msoLanguageIDSanskrit=1103,
        msoLanguageIDSerbianCyrillic=3098,
        msoLanguageIDTurkmen=1090,
        msoLanguageIDSerbianLatin=2074,
        msoLanguageIDSinhalese=1115,
        msoLanguageIDSlovak=1051,
        msoLanguageIDSlovenian=1060,
        msoLanguageIDSomali=1143,
        msoLanguageIDUzbekLatin=1091,
        msoLanguageIDSpanishArgentina=11274,
        msoLanguageIDSpanishBolivia=16394,
        msoLanguageIDSpanishChile=13322,
        msoLanguageIDSpanishColombia=9226,
        msoLanguageIDSpanishCostaRica=5130,
        msoLanguageIDSpanishElSalvador=17418,
        msoLanguageIDSpanishGuatemala=4106,
        msoLanguageIDSpanishHonduras=18442,
        msoLanguageIDSpanishParaguay=15370,
        msoLanguageIDSpanishPeru=10250,
        msoLanguageIDTigrignaEthiopic=1139,
        msoLanguageIDSpanishModernSort=3082,
        msoLanguageIDSpanish=1034,
        msoLanguageIDSpanishUruguay=14346,
        msoLanguageIDSpanishVenezuela=8202,
        msoLanguageIDSutu=1072,
        msoLanguageIDSwahili=1089,
        msoLanguageIDSwedishFinland=2077,
        msoLanguageIDSwedish=1053,
        msoLanguageIDSyriac=1114,
        msoLanguageIDTamazight=1119,
        msoLanguageIDTamazightLatin=2143,
        msoLanguageIDTelugu=1098,
        msoLanguageIDTibetan=1105,
        msoLanguageIDTigrignaEritrea=2163,
        msoLanguageIDTsonga=1073,
        msoLanguageIDTswana=1074,
        msoLanguageIDUkrainian=1058,
        msoLanguageIDUrdu=1056,
        msoLanguageIDUzbekCyrillic=2115,
        msoLanguageIDVietnamese=1066,
        msoLanguageIDYoruba=1130,
    }

    enum KsoMsoLineDashStyle {
        msoLineDashStyleMixed=-2,
        msoLineSolid=1,
        msoLineSquareDot=2,
        msoLineLongDashDotDot=9,
        msoLineRoundDot=3,
        msoLineSysDash=10,
        msoLineLongDashDot=8,
        msoLineDash=4,
        msoLineDashDot=5,
        msoLineDashDotDot=6,
        msoLineLongDash=7,
        msoLineSysDot=11,
        msoLineSysDashDot=12,
    }

    enum KsoSignatureType {
        sigtypeUnknown=0,
        sigtypeMax=3,
        sigtypeNonVisible=1,
        sigtypeSignatureLine=2,
    }

    enum KsoMsoButtonSetType {
        msoButtonSetBackClose=6,
        msoButtonSetNone=0,
        msoButtonSetNextClose=7,
        msoButtonSetYesNoCancel=5,
        msoButtonSetOkCancel=3,
        msoButtonSetOK=1,
        msoButtonSetRetryCancel=9,
        msoButtonSetCancel=2,
        msoButtonSetYesNo=4,
        msoButtonSetBackNextClose=8,
        msoButtonSetAbortRetryIgnore=10,
        msoButtonSetSearchClose=11,
        msoButtonSetBackNextSnooze=12,
        msoButtonSetTipsOptionsClose=13,
        msoButtonSetYesAllNoCancel=14,
    }

    enum KsoMsoLineStyle {
        msoLineStyleMixed=-2,
        msoLineSingle=1,
        msoLineThinThin=2,
        msoLineThickBetweenThin=5,
        msoLineThinThick=3,
        msoLineThickThin=4,
    }

    enum KsoMsoBulletType {
        msoBulletNumbered=2,
        msoBulletMixed=-2,
        msoBulletNone=0,
        msoBulletUnnumbered=1,
        msoBulletPicture=3,
    }

    enum KsoMsoHorizontalAnchor {
        msoAnchorCenter=2,
        msoHorizontalAnchorMixed=-2,
        msoAnchorNone=1,
    }

    enum KsoMsoArrowheadStyle {
        msoArrowheadOval=6,
        msoArrowheadStyleMixed=-2,
        msoArrowheadOpen=3,
        msoArrowheadNone=1,
        msoArrowheadTriangle=2,
        msoArrowheadStealth=4,
        msoArrowheadDiamond=5,
    }

    enum KsoMsoBalloonType {
        msoBalloonTypeButtons=0,
        msoBalloonTypeNumbers=2,
        msoBalloonTypeBullets=1,
    }

    enum KsoMsoButtonStyleHidden {
        msoButtonWrapText=4,
        msoButtonTextBelow=8,
    }

    enum KsoEncryptionCipherMode {
        cipherModeECB=0,
        cipherModeCBC=1,
    }

    enum KsoMsoFlipCmd {
        msoFlipHorizontal=0,
        msoFlipVertical=1,
    }

    enum KsoMsoPresetLightingSoftness {
        msoPresetLightingSoftnessMixed=-2,
        msoLightingDim=1,
        msoLightingNormal=2,
        msoLightingBright=3,
    }

    enum KsoMsoArrowheadWidth {
        msoArrowheadWidthMixed=-2,
        msoArrowheadNarrow=1,
        msoArrowheadWidthMedium=2,
        msoArrowheadWide=3,
    }

    enum KsoMsoMenuAnimation {
        msoMenuAnimationUnfold=2,
        msoMenuAnimationRandom=1,
        msoMenuAnimationNone=0,
        msoMenuAnimationSlide=3,
    }

    enum KsoMsoFileType {
        msoFileTypeTaskItem=15,
        msoFileTypeMailItem=10,
        msoFileTypeAllFiles=1,
        msoFileTypeDatabases=7,
        msoFileTypeWordDocuments=3,
        msoFileTypeOfficeFiles=2,
        msoFileTypeExcelWorkbooks=4,
        msoFileTypePowerPointPresentations=5,
        msoFileTypeBinders=6,
        msoFileTypeOutlookItems=9,
        msoFileTypeTemplates=8,
        msoFileTypeCalendarItem=11,
        msoFileTypeContactItem=12,
        msoFileTypeNoteItem=13,
        msoFileTypeJournalItem=14,
        msoFileTypePhotoDrawFiles=16,
        msoFileTypeDataConnectionFiles=17,
        msoFileTypePublisherFiles=18,
        msoFileTypeProjectFiles=19,
        msoFileTypeDocumentImagingFiles=20,
        msoFileTypeVisioFiles=21,
        msoFileTypeDesignerFiles=22,
        msoFileTypeWebPages=23,
    }

    enum KsoMsoFillType {
        msoFillMixed=-2,
        msoFillSolid=1,
        msoFillPatterned=2,
        msoFillBackground=5,
        msoFillTextured=4,
        msoFillGradient=3,
        msoFillPicture=6,
    }

    enum KsoMsoArrowheadLength {
        msoArrowheadLengthMixed=-2,
        msoArrowheadShort=1,
        msoArrowheadLengthMedium=2,
        msoArrowheadLong=3,
    }

    enum KsoMsoNumberedBulletStyle {
        msoBulletRomanUCParenRight=15,
        msoBulletRomanLCParenRight=5,
        msoBulletStyleMixed=-2,
        msoBulletAlphaLCPeriod=0,
        msoBulletAlphaUCPeriod=1,
        msoBulletHindiNumPeriod=37,
        msoBulletArabicParenRight=2,
        msoBulletRomanLCPeriod=6,
        msoBulletRomanUCPeriod=7,
        msoBulletArabicPlain=13,
        msoBulletArabicPeriod=3,
        msoBulletThaiNumParenBoth=35,
        msoBulletRomanLCParenBoth=4,
        msoBulletHebrewAlphaDash=25,
        msoBulletRomanUCParenBoth=14,
        msoBulletAlphaLCParenBoth=8,
        msoBulletAlphaUCParenRight=11,
        msoBulletAlphaLCParenRight=9,
        msoBulletAlphaUCParenBoth=10,
        msoBulletArabicAlphaDash=23,
        msoBulletArabicParenBoth=12,
        msoBulletKanjiSimpChinDBPeriod=38,
        msoBulletSimpChinPlain=16,
        msoBulletSimpChinPeriod=17,
        msoBulletThaiAlphaPeriod=30,
        msoBulletCircleNumDBPlain=18,
        msoBulletCircleNumWDWhitePlain=19,
        msoBulletCircleNumWDBlackPlain=20,
        msoBulletTradChinPlain=21,
        msoBulletTradChinPeriod=22,
        msoBulletArabicAbjadDash=24,
        msoBulletKanjiKoreanPlain=26,
        msoBulletThaiAlphaParenBoth=32,
        msoBulletKanjiKoreanPeriod=27,
        msoBulletArabicDBPlain=28,
        msoBulletArabicDBPeriod=29,
        msoBulletThaiAlphaParenRight=31,
        msoBulletThaiNumPeriod=33,
        msoBulletThaiNumParenRight=34,
        msoBulletHindiAlphaPeriod=36,
        msoBulletHindiNumParenRight=39,
        msoBulletHindiAlpha1Period=40,
    }

    enum KsoMsoBevelType {
        msoBevelAngle=6,
        msoBevelCross=5,
        msoBevelCircle=3,
        msoBevelTypeMixed=-2,
        msoBevelNone=1,
        msoBevelRelaxedInset=2,
        msoBevelSlope=4,
        msoBevelConvex=8,
        msoBevelSoftRound=7,
        msoBevelCoolSlant=9,
        msoBevelDivot=10,
        msoBevelRiblet=11,
        msoBevelHardEdge=12,
        msoBevelArtDeco=13,
    }

    enum KsoMsoTextureType {
        msoTexturePreset=1,
        msoTextureTypeMixed=-2,
        msoTextureUserDefined=2,
    }

    enum KsoMsoButtonStyle {
        msoButtonIconAndCaptionBelow=11,
        msoButtonAutomatic=0,
        msoButtonIconAndWrapCaptionBelow=15,
        msoButtonIcon=1,
        msoButtonCaption=2,
        msoButtonIconAndCaption=3,
        msoButtonWrapCaption=14,
        msoButtonIconAndWrapCaption=7,
    }

    enum KsoMsoCalloutType {
        msoCalloutFour=4,
        msoCalloutTwo=2,
        msoCalloutMixed=-2,
        msoCalloutOne=1,
        msoCalloutThree=3,
    }

    enum KsoMsoDocProperties {
        msoPropertyTypeString=4,
        msoPropertyTypeNumber=1,
        msoPropertyTypeDate=3,
        msoPropertyTypeBoolean=2,
        msoPropertyTypeFloat=5,
    }

    enum KsoMsoPresetTexture {
        msoTextureFishFossil=7,
        msoPresetTextureMixed=-2,
        msoTexturePapyrus=1,
        msoTextureCanvas=2,
        msoTextureDenim=3,
        msoTextureWovenMat=4,
        msoTextureSand=8,
        msoTextureWaterDroplets=5,
        msoTexturePaperBag=6,
        msoTextureGreenMarble=9,
        msoTextureWhiteMarble=10,
        msoTextureWalnut=22,
        msoTextureBrownMarble=11,
        msoTextureNewsprint=13,
        msoTextureGranite=12,
        msoTextureRecycledPaper=14,
        msoTextureParchment=15,
        msoTextureStationery=16,
        msoTextureBlueTissuePaper=17,
        msoTexturePinkTissuePaper=18,
        msoTexturePurpleMesh=19,
        msoTextureBouquet=20,
        msoTextureCork=21,
        msoTextureOak=23,
        msoTextureMediumWood=24,
    }

    enum KsoXlScaleType {
        xlScaleLinear=-4132,
        xlScaleLogarithmic=-4133,
    }

    enum KsoMsoPathFormat {
        msoPathTypeMixed=-2,
        msoPathType4=4,
        msoPathType3=3,
        msoPathType2=2,
        msoPathType1=1,
        msoPathTypeNone=0,
    }

    enum KsoMsoPatternType {
        msoPatternMixed=-2,
        msoPatternDivot=46,
        msoPatternDarkDownwardDiagonal=15,
        msoPattern5Percent=1,
        msoPatternSolidDiamond=39,
        msoPattern70Percent=9,
        msoPattern10Percent=2,
        msoPattern20Percent=3,
        msoPattern25Percent=4,
        msoPattern30Percent=5,
        msoPattern40Percent=6,
        msoPattern50Percent=7,
        msoPattern60Percent=8,
        msoPattern90Percent=12,
        msoPattern80Percent=11,
        msoPattern75Percent=10,
        msoPatternPlaid=42,
        msoPatternDarkHorizontal=13,
        msoPatternDarkVertical=14,
        msoPatternNarrowHorizontal=30,
        msoPatternDarkUpwardDiagonal=16,
        msoPatternTrellis=18,
        msoPatternSmallCheckerBoard=17,
        msoPatternLightHorizontal=19,
        msoPatternLightVertical=20,
        msoPatternLightDownwardDiagonal=21,
        msoPatternLightUpwardDiagonal=22,
        msoPatternSmallGrid=23,
        msoPatternDottedDiamond=24,
        msoPatternWave=48,
        msoPatternDiagonalBrick=40,
        msoPatternWideDownwardDiagonal=25,
        msoPatternWideUpwardDiagonal=26,
        msoPatternWeave=44,
        msoPatternDashedUpwardDiagonal=27,
        msoPatternDashedDownwardDiagonal=28,
        msoPatternNarrowVertical=29,
        msoPatternDashedVertical=31,
        msoPatternDashedHorizontal=32,
        msoPatternHorizontalBrick=35,
        msoPatternLargeConfetti=33,
        msoPatternShingle=47,
        msoPatternLargeGrid=34,
        msoPatternLargeCheckerBoard=36,
        msoPatternSmallConfetti=37,
        msoPatternZigZag=38,
        msoPatternOutlinedDiamond=41,
        msoPatternSphere=43,
        msoPatternDottedGrid=45,
        msoPatternHorizontal=49,
        msoPatternVertical=50,
        msoPatternCross=51,
        msoPatternDownwardDiagonal=52,
        msoPatternUpwardDiagonal=53,
        msoPatternDiagonalCross=54,
    }

    enum KsoXlPieSliceLocation {
        xlHorizontalCoordinate=1,
        xlVerticalCoordinate=2,
    }

    enum KsoMsoPresetGradientType {
        msoGradientEarlySunset=1,
        msoGradientGold=18,
        msoPresetGradientMixed=-2,
        msoGradientFire=9,
        msoGradientDaybreak=4,
        msoGradientLateSunset=2,
        msoGradientHorizon=5,
        msoGradientCalmWater=8,
        msoGradientNightfall=3,
        msoGradientParchment=14,
        msoGradientDesert=6,
        msoGradientOcean=7,
        msoGradientFog=10,
        msoGradientMoss=11,
        msoGradientPeacock=12,
        msoGradientRainbow=16,
        msoGradientWheat=13,
        msoGradientMahogany=15,
        msoGradientRainbowII=17,
        msoGradientGoldII=19,
        msoGradientBrass=20,
        msoGradientChrome=21,
        msoGradientChromeII=22,
        msoGradientSapphire=24,
        msoGradientSilver=23,
    }

    enum KsoMsoShadowType {
        msoShadowMixed=-2,
        msoShadow9=9,
        msoShadow1=1,
        msoShadow2=2,
        msoShadow3=3,
        msoShadow4=4,
        msoShadow5=5,
        msoShadow6=6,
        msoShadow7=7,
        msoShadow8=8,
        msoShadow40=40,
        msoShadow30=30,
        msoShadow20=20,
        msoShadow10=10,
        msoShadow41=41,
        msoShadow31=31,
        msoShadow21=21,
        msoShadow11=11,
        msoShadow42=42,
        msoShadow32=32,
        msoShadow22=22,
        msoShadow12=12,
        msoShadow43=43,
        msoShadow33=33,
        msoShadow23=23,
        msoShadow13=13,
        msoShadow34=34,
        msoShadow24=24,
        msoShadow14=14,
        msoShadow35=35,
        msoShadow25=25,
        msoShadow15=15,
        msoShadow36=36,
        msoShadow26=26,
        msoShadow16=16,
        msoShadow37=37,
        msoShadow27=27,
        msoShadow17=17,
        msoShadow38=38,
        msoShadow28=28,
        msoShadow18=18,
        msoShadow39=39,
        msoShadow29=29,
        msoShadow19=19,
    }

    enum KsoRibbonControlSize {
        RibbonControlSizeRegular=0,
        RibbonControlSizeLarge=1,
    }

    enum KsoMsoVerticalAnchor {
        msoAnchorBottom=4,
        msoVerticalAnchorMixed=-2,
        msoAnchorBottomBaseLine=5,
        msoAnchorTopBaseline=2,
        msoAnchorTop=1,
        msoAnchorMiddle=3,
    }

    enum KsoMsoPresetTextEffect {
        msoTextEffectMixed=-2,
        msoTextEffect9=8,
        msoTextEffect1=0,
        msoTextEffect2=1,
        msoTextEffect3=2,
        msoTextEffect4=3,
        msoTextEffect5=4,
        msoTextEffect6=5,
        msoTextEffect7=6,
        msoTextEffect8=7,
        msoTextEffect50=49,
        msoTextEffect40=39,
        msoTextEffect30=29,
        msoTextEffect20=19,
        msoTextEffect10=9,
        msoTextEffect41=40,
        msoTextEffect31=30,
        msoTextEffect21=20,
        msoTextEffect11=10,
        msoTextEffect42=41,
        msoTextEffect32=31,
        msoTextEffect22=21,
        msoTextEffect12=11,
        msoTextEffect43=42,
        msoTextEffect33=32,
        msoTextEffect23=22,
        msoTextEffect13=12,
        msoTextEffect44=43,
        msoTextEffect34=33,
        msoTextEffect24=23,
        msoTextEffect14=13,
        msoTextEffect45=44,
        msoTextEffect35=34,
        msoTextEffect25=24,
        msoTextEffect15=14,
        msoTextEffect46=45,
        msoTextEffect36=35,
        msoTextEffect26=25,
        msoTextEffect16=15,
        msoTextEffect47=46,
        msoTextEffect37=36,
        msoTextEffect27=26,
        msoTextEffect17=16,
        msoTextEffect48=47,
        msoTextEffect38=37,
        msoTextEffect28=27,
        msoTextEffect18=17,
        msoTextEffect49=48,
        msoTextEffect39=38,
        msoTextEffect29=28,
        msoTextEffect19=18,
    }

    enum KsoMsoPresetTextEffectShape {
        msoTextEffectShapeMixed=-2,
        msoTextEffectShapeCanUp=19,
        msoTextEffectShapeRingOutside=8,
        msoTextEffectShapePlainText=1,
        msoTextEffectShapeFadeLeft=34,
        msoTextEffectShapeTriangleUp=3,
        msoTextEffectShapeTriangleDown=4,
        msoTextEffectShapeStop=2,
        msoTextEffectShapeChevronUp=5,
        msoTextEffectShapeChevronDown=6,
        msoTextEffectShapeRingInside=7,
        msoTextEffectShapeFadeDown=36,
        msoTextEffectShapeWave2=22,
        msoTextEffectShapeWave1=21,
        msoTextEffectShapeArchUpCurve=9,
        msoTextEffectShapeArchDownCurve=10,
        msoTextEffectShapeCircleCurve=11,
        msoTextEffectShapeDeflateInflate=31,
        msoTextEffectShapeButtonCurve=12,
        msoTextEffectShapeSlantUp=37,
        msoTextEffectShapeArchDownPour=14,
        msoTextEffectShapeArchUpPour=13,
        msoTextEffectShapeCirclePour=15,
        msoTextEffectShapeButtonPour=16,
        msoTextEffectShapeCurveUp=17,
        msoTextEffectShapeCanDown=20,
        msoTextEffectShapeCurveDown=18,
        msoTextEffectShapeDoubleWave2=24,
        msoTextEffectShapeDoubleWave1=23,
        msoTextEffectShapeInflate=25,
        msoTextEffectShapeDeflate=26,
        msoTextEffectShapeDeflateBottom=28,
        msoTextEffectShapeInflateBottom=27,
        msoTextEffectShapeDeflateTop=30,
        msoTextEffectShapeInflateTop=29,
        msoTextEffectShapeDeflateInflateDeflate=32,
        msoTextEffectShapeFadeRight=33,
        msoTextEffectShapeFadeUp=35,
        msoTextEffectShapeSlantDown=38,
        msoTextEffectShapeCascadeDown=40,
        msoTextEffectShapeCascadeUp=39,
    }

    enum KsoMsoCommandBarButtonHyperlinkType {
        msoCommandBarButtonHyperlinkNone=0,
        msoCommandBarButtonHyperlinkOpen=1,
        msoCommandBarButtonHyperlinkInsertPicture=2,
    }

    enum KsoMsoTextEffectAlignment {
        msoTextEffectAlignmentMixed=-2,
        msoTextEffectAlignmentStretchJustify=6,
        msoTextEffectAlignmentCentered=2,
        msoTextEffectAlignmentLeft=1,
        msoTextEffectAlignmentRight=3,
        msoTextEffectAlignmentLetterJustify=4,
        msoTextEffectAlignmentWordJustify=5,
    }

    enum KsoMsoPresetLightingDirection {
        msoLightingTop=2,
        msoPresetLightingDirectionMixed=-2,
        msoLightingBottom=8,
        msoLightingTopLeft=1,
        msoLightingTopRight=3,
        msoLightingRight=6,
        msoLightingLeft=4,
        msoLightingNone=5,
        msoLightingBottomLeft=7,
        msoLightingBottomRight=9,
    }

    enum KsoMsoSmartArtNodePosition {
        msoSmartArtNodeAbove=4,
        msoSmartArtNodeDefault=1,
        msoSmartArtNodeAfter=2,
        msoSmartArtNodeBelow=5,
        msoSmartArtNodeBefore=3,
    }

    enum KsoMsoPresetMaterial {
        msoMaterialMatte2=5,
        msoMaterialMatte=1,
        msoPresetMaterialMixed=-2,
        msoMaterialPlastic=2,
        msoMaterialPlastic2=6,
        msoMaterialMetal=3,
        msoMaterialWarmMatte=8,
        msoMaterialWireFrame=4,
        msoMaterialMetal2=7,
        msoMaterialTranslucentPowder=9,
        msoMaterialPowder=10,
        msoMaterialDarkEdge=11,
        msoMaterialSoftEdge=12,
        msoMaterialClear=13,
        msoMaterialFlat=14,
        msoMaterialSoftMetal=15,
    }

    enum KsoMsoPresetExtrusionDirection {
        msoPresetExtrusionDirectionMixed=-2,
        msoExtrusionBottomRight=1,
        msoExtrusionTopRight=7,
        msoExtrusionBottomLeft=3,
        msoExtrusionBottom=2,
        msoExtrusionRight=4,
        msoExtrusionNone=5,
        msoExtrusionLeft=6,
        msoExtrusionTop=8,
        msoExtrusionTopLeft=9,
    }

    enum KsoXlDisplayUnit {
        xlMillionMillions=-10,
        xlHundreds=-2,
        xlTenThousands=-4,
        xlThousands=-3,
        xlHundredThousands=-5,
        xlMillions=-6,
        xlTenMillions=-7,
        xlHundredMillions=-8,
        xlThousandMillions=-9,
        xlDisplayUnitCustom=-4114,
        xlDisplayUnitNone=-4142,
    }

    enum KsoMsoPresetThreeDFormat {
        msoPresetThreeDFormatMixed=-2,
        msoThreeD9=9,
        msoThreeD1=1,
        msoThreeD2=2,
        msoThreeD3=3,
        msoThreeD4=4,
        msoThreeD5=5,
        msoThreeD6=6,
        msoThreeD7=7,
        msoThreeD8=8,
        msoThreeD20=20,
        msoThreeD10=10,
        msoThreeD11=11,
        msoThreeD12=12,
        msoThreeD13=13,
        msoThreeD14=14,
        msoThreeD15=15,
        msoThreeD16=16,
        msoThreeD17=17,
        msoThreeD18=18,
        msoThreeD19=19,
    }

    enum KsoMsoExtrusionColorType {
        msoExtrusionColorAutomatic=1,
        msoExtrusionColorTypeMixed=-2,
        msoExtrusionColorCustom=2,
    }

    enum KsoMsoDistributeCmd {
        msoDistributeHorizontally=0,
        msoDistributeVertically=1,
    }

    enum KsoMsoConnectorType {
        msoConnectorTypeMixed=-2,
        msoConnectorStraight=1,
        msoConnectorElbow=2,
        msoConnectorCurve=3,
    }

    enum KsoMsoOrientation {
        msoOrientationMixed=-2,
        msoOrientationHorizontal=1,
        msoOrientationVertical=2,
    }

    enum KsoMsoControlOLEUsage {
        msoControlOLEUsageNeither=0,
        msoControlOLEUsageServer=1,
        msoControlOLEUsageBoth=3,
        msoControlOLEUsageClient=2,
    }

    enum KsoMsoZOrderCmd {
        msoBringForward=2,
        msoBringToFront=0,
        msoSendBackward=3,
        msoSendToBack=1,
        msoSendBehindText=5,
        msoBringInFrontOfText=4,
    }

    enum KsoMsoSegmentType {
        msoSegmentCurve=1,
        msoSegmentLine=0,
    }

    enum KsoMsoFileFindListBy {
        msoListbyName=1,
        msoListbyTitle=2,
    }

    enum KsoMsoEditingType {
        msoEditingAuto=0,
        msoEditingCorner=1,
        msoEditingSmooth=2,
        msoEditingSymmetric=3,
    }

    enum KsoMsoCalloutDropType {
        msoCalloutDropMixed=-2,
        msoCalloutDropCustom=1,
        msoCalloutDropTop=2,
        msoCalloutDropBottom=4,
        msoCalloutDropCenter=3,
    }

    enum KsoMsoPictureColorType {
        msoPictureMixed=-2,
        msoPictureAutomatic=1,
        msoPictureGrayscale=2,
        msoPictureBlackAndWhite=3,
        msoPictureWatermark=4,
    }

    enum KsoMsoMoveRow {
        msoMoveRowFirst=-4,
        msoMoveRowPrev=-3,
        msoMoveRowNext=-2,
        msoMoveRowNbr=-1,
    }

    enum KsoMsoAutoShapeType {
        msoShapeMoon=24,
        msoShapeMixed=-2,
        msoShapeNotchedRightArrow=50,
        msoShapeActionButtonMovie=136,
        msoShapeRectangle=1,
        msoShapeCan=13,
        msoShapeIsoscelesTriangle=7,
        msoShapeParallelogram=2,
        msoShapeFlowchartDecision=63,
        msoShapeTrapezoid=3,
        msoShapeFlowchartConnector=73,
        msoShapeLeftRightArrowCallout=57,
        msoShapeActionButtonBackorPrevious=129,
        msoShapeDiamond=4,
        msoShapeRegularPentagon=12,
        msoShapeRoundedRectangle=5,
        msoShapeOctagon=6,
        msoShapeFlowchartMagneticDisk=86,
        msoShapeRightTriangle=8,
        msoShapeStripedRightArrow=49,
        msoShapeFrame=158,
        msoShapeLeftArrow=34,
        msoShapeBentArrow=41,
        msoShapeLeftBrace=31,
        msoShapeOval=9,
        msoShapeHexagon=10,
        msoShapePlaque=28,
        msoShapeCross=11,
        msoShapeRound2DiagRectangle=153,
        msoShapeCube=14,
        msoShapeBevel=15,
        msoShapeFlowchartCard=75,
        msoShapeFlowchartData=64,
        msoShapeLeftRightArrow=37,
        msoShapeFoldedCorner=16,
        msoShapeLeftRightRibbon=140,
        msoShapeUpArrow=35,
        msoShapeSmileyFace=17,
        msoShapePie=142,
        msoShapeDonut=18,
        msoShapeLightningBolt=22,
        msoShapeUpDownArrow=38,
        msoShapeLineCallout4AccentBar=116,
        msoShapeLineCallout3AccentBar=115,
        msoShapeLineCallout2AccentBar=114,
        msoShapeLineCallout1AccentBar=113,
        msoShapeNoSymbol=19,
        msoShapeUpDownArrowCallout=58,
        msoShapeBlockArc=20,
        msoShapePentagon=51,
        msoShapeSnip2DiagRectangle=157,
        msoShapeHeart=21,
        msoShapeSun=23,
        msoShapeUTurnArrow=42,
        msoShapeFlowchartAlternateProcess=62,
        msoShapeArc=25,
        msoShapeDoubleBracket=26,
        msoShapeDoubleBrace=27,
        msoShapeChevron=52,
        msoShapeLeftBracket=29,
        msoShapeUpRibbon=97,
        msoShapeRightBracket=30,
        msoShapeRightBrace=32,
        msoShapeCurvedLeftArrow=46,
        msoShapeRightArrow=33,
        msoShapeDownArrow=36,
        msoShapeRound1Rectangle=151,
        msoShapeQuadArrow=39,
        msoShapeCurvedDownArrow=48,
        msoShapeLeftRightUpArrow=40,
        msoShapeLeftArrowCallout=54,
        msoShapeLeftUpArrow=43,
        msoShapeBentUpArrow=44,
        msoShapeCurvedRightArrow=45,
        msoShapeCurvedUpArrow=47,
        msoShapeRightArrowCallout=53,
        msoShapeUpArrowCallout=55,
        msoShapeDownArrowCallout=56,
        msoShapeSwooshArrow=178,
        msoShapeQuadArrowCallout=59,
        msoShapeCircularArrow=60,
        msoShapeFlowchartProcess=61,
        msoShapeOvalCallout=107,
        msoShapeFlowchartPredefinedProcess=65,
        msoShapeFlowchartInternalStorage=66,
        msoShapeFlowchartDocument=67,
        msoShapeFlowchartMultidocument=68,
        msoShapeFlowchartTerminator=69,
        msoShapeFlowchartPreparation=70,
        msoShapeFlowchartManualInput=71,
        msoShapeFlowchartManualOperation=72,
        msoShapeFlowchartOffpageConnector=74,
        msoShapeFlowchartPunchedTape=76,
        msoShapeFlowchartSummingJunction=77,
        msoShapeFlowchartOr=78,
        msoShapeFlowchartCollate=79,
        msoShapeFlowchartSort=80,
        msoShapeFlowchartExtract=81,
        msoShapeFlowchartMerge=82,
        msoShapeLeftCircularArrow=176,
        msoShapeDiagonalStripe=141,
        msoShapeFlowchartStoredData=83,
        msoShapeFlowchartDelay=84,
        msoShapeFlowchartSequentialAccessStorage=85,
        msoShapeFlowchartDirectAccessStorage=87,
        msoShapeVerticalScroll=101,
        msoShapeFlowchartDisplay=88,
        msoShapeExplosion2=90,
        msoShapeExplosion1=89,
        msoShape12pointStar=150,
        msoShape32pointStar=96,
        msoShape8pointStar=93,
        msoShape5pointStar=92,
        msoShape4pointStar=91,
        msoShape16pointStar=94,
        msoShapeActionButtonEnd=132,
        msoShape24pointStar=95,
        msoShapeDownRibbon=98,
        msoShapeHalfFrame=159,
        msoShapeCurvedUpRibbon=99,
        msoShapeCurvedDownRibbon=100,
        msoShapeHorizontalScroll=102,
        msoShapeWave=103,
        msoShape7pointStar=148,
        msoShape6pointStar=147,
        msoShapeDoubleWave=104,
        msoShapeRectangularCallout=105,
        msoShapeRoundedRectangularCallout=106,
        msoShapeCloudCallout=108,
        msoShapeLineCallout4=112,
        msoShapeLineCallout3=111,
        msoShapeLineCallout2=110,
        msoShapeLineCallout1=109,
        msoShapeLineCallout4NoBorder=120,
        msoShapeLineCallout3NoBorder=119,
        msoShapeLineCallout2NoBorder=118,
        msoShapeLineCallout1NoBorder=117,
        msoShapeLineCallout4BorderandAccentBar=124,
        msoShapeLineCallout3BorderandAccentBar=123,
        msoShapeLineCallout2BorderandAccentBar=122,
        msoShapeLineCallout1BorderandAccentBar=121,
        msoShapeActionButtonCustom=125,
        msoShapeActionButtonHome=126,
        msoShapeActionButtonHelp=127,
        msoShapeActionButtonInformation=128,
        msoShapeActionButtonForwardorNext=130,
        msoShapeActionButtonBeginning=131,
        msoShapeActionButtonReturn=133,
        msoShapeActionButtonDocument=134,
        msoShapeActionButtonSound=135,
        msoShapeBalloon=137,
        msoShapeNotPrimitive=138,
        msoShapeFlowchartOfflineStorage=139,
        msoShapeNonIsoscelesTrapezoid=143,
        msoShapeDecagon=144,
        msoShapeHeptagon=145,
        msoShapeDodecagon=146,
        msoShape10pointStar=149,
        msoShapeRound2SameRectangle=152,
        msoShapeSnipRoundRectangle=154,
        msoShapeSnip1Rectangle=155,
        msoShapeSnip2SameRectangle=156,
        msoShapeTear=160,
        msoShapeCloud=179,
        msoShapeChord=161,
        msoShapeCorner=162,
        msoShapeMathPlus=163,
        msoShapeMathMinus=164,
        msoShapeMathMultiply=165,
        msoShapeMathDivide=166,
        msoShapeMathEqual=167,
        msoShapeMathNotEqual=168,
        msoShapeCornerTabs=169,
        msoShapeSquareTabs=170,
        msoShapePlaqueTabs=171,
        msoShapeGear6=172,
        msoShapeGear9=173,
        msoShapeFunnel=174,
        msoShapePieWedge=175,
        msoShapeLeftRightCircularArrow=177,
        msoShapeChartX=180,
        msoShapeChartStar=181,
        msoShapeChartPlus=182,
        msoShapeLineInverse=183,
    }

    enum KsoMsoTriState {
        msoTriStateToggle=-3,
        msoTrue=-1,
        msoFalse=0,
        msoCTrue=1,
        msoTriStateMixed=-2,
    }

    enum KsoMsoBarRow {
        msoBarRowFirst=0,
        msoBarRowLast=-1,
    }

    enum KsoMsoCalloutAngleType {
        msoCalloutAngleMixed=-2,
        msoCalloutAngle90=5,
        msoCalloutAngle60=4,
        msoCalloutAngle30=2,
        msoCalloutAngleAutomatic=1,
        msoCalloutAngle45=3,
    }

    enum KsoSignatureLineImage {
        siglnimgSoftwareRequired=0,
        siglnimgSignedValid=2,
        siglnimgUnsigned=1,
        siglnimgSignedInvalid=3,
        siglnimgSigned=4,
    }

    enum KsoMsoOrgChartOrientation {
        msoOrgChartOrientationMixed=-2,
        msoOrgChartOrientationVertical=1,
    }

    enum KsoMsoBlackWhiteMode {
        msoBlackWhiteGrayScale=2,
        msoBlackWhiteHighContrast=7,
        msoBlackWhiteLightGrayScale=3,
        msoBlackWhiteMixed=-2,
        msoBlackWhiteAutomatic=1,
        msoBlackWhiteBlack=8,
        msoBlackWhiteBlackTextAndLine=6,
        msoBlackWhiteInverseGrayScale=4,
        msoBlackWhiteGrayOutline=5,
        msoBlackWhiteWhite=9,
        msoBlackWhiteDontShow=10,
    }

    enum KsoMsoMixedType {
        msoIntegerMixed=32768,
        msoSingleMixed=0x80000000,
    }

    enum KsoMsoShadowStyle {
        msoShadowStyleMixed=-2,
        msoShadowStyleInnerShadow=1,
        msoShadowStyleOuterShadow=2,
    }

    enum KsoMsoTextOrientation {
        msoTextOrientationHorizontalRotatedFarEast=6,
        msoTextOrientationMixed=-2,
        msoTextOrientationUpward=2,
        msoTextOrientationHorizontal=1,
        msoTextOrientationDownward=3,
        msoTextOrientationVerticalFarEast=4,
        msoTextOrientationVertical=5,
    }

    enum KsoMsoBackgroundStyleIndex {
        msoBackgroundStyleMixed=-2,
        msoBackgroundStyleNotAPreset=0,
        msoBackgroundStylePreset9=9,
        msoBackgroundStylePreset8=8,
        msoBackgroundStylePreset1=1,
        msoBackgroundStylePreset2=2,
        msoBackgroundStylePreset3=3,
        msoBackgroundStylePreset4=4,
        msoBackgroundStylePreset5=5,
        msoBackgroundStylePreset6=6,
        msoBackgroundStylePreset7=7,
        msoBackgroundStylePreset12=12,
        msoBackgroundStylePreset11=11,
        msoBackgroundStylePreset10=10,
    }

    enum KsoMsoScaleFrom {
        msoScaleFromTopLeft=0,
        msoScaleFromMiddle=1,
        msoScaleFromBottomRight=2,
    }

    enum KsoMsoModeType {
        msoModeModal=0,
        msoModeAutoDown=1,
        msoModeModeless=2,
    }

    enum KsoMsoBarPosition {
        msoBarLeft=0,
        msoBarPopup=5,
        msoBarTop=1,
        msoBarFloating=4,
        msoBarRight=2,
        msoBarMenuBar=6,
        msoBarBottom=3,
    }

    enum KsoMsoBarProtection {
        msoBarNoProtection=0,
        msoBarNoCustomize=1,
        msoBarNoResize=2,
        msoBarNoMove=4,
        msoBarNoHorizontalDock=64,
        msoBarNoChangeDock=16,
        msoBarNoChangeVisible=8,
        msoBarNoVerticalDock=32,
    }

    enum KsoMsoBarType {
        msoBarTypeMenuBar=1,
        msoBarTypeNormal=0,
        msoBarTypePopup=2,
    }

    enum KsoMsoControlType {
        msoControlAutoCompleteCombo=26,
        msoControlCustom=0,
        msoControlComboBox=4,
        msoControlGauge=19,
        msoControlButton=1,
        msoControlOCXDropdown=7,
        msoControlButtonDropdown=5,
        msoControlEdit=2,
        msoControlDropdown=3,
        msoControlLabelEx=24,
        msoControlSplitDropdown=6,
        msoControlGenericDropdown=8,
        msoControlGraphicDropdown=9,
        msoControlPopup=10,
        msoControlGraphicPopup=11,
        msoControlButtonPopup=12,
        msoControlGrid=18,
        msoControlSplitButtonPopup=13,
        msoControlSplitExpandingGrid=17,
        msoControlSplitButtonMRUPopup=14,
        msoControlLabel=15,
        msoControlExpandingGrid=16,
        msoControlGraphicCombo=20,
        msoControlPane=21,
        msoControlActiveX=22,
        msoControlSpinner=23,
        msoControlWorkPane=25,
    }

    enum KsoMsoSyncEventType {
        msoSyncEventUploadSucceeded=4,
        msoSyncEventDownloadInitiated=0,
        msoSyncEventDownloadSucceeded=1,
        msoSyncEventUploadInitiated=3,
        msoSyncEventDownloadFailed=2,
        msoSyncEventUploadFailed=5,
        msoSyncEventDownloadNoChange=6,
        msoSyncEventOffline=7,
    }

    enum KsoMsoButtonState {
        msoButtonUp=0,
        msoButtonDown=-1,
        msoButtonMixed=2,
    }

    enum KsoMsoComboStyle {
        msoComboNormal=0,
        msoComboLabel=1,
    }

    enum KsoMsoOLEMenuGroup {
        msoOLEMenuGroupNone=-1,
        msoOLEMenuGroupFile=0,
        msoOLEMenuGroupEdit=1,
        msoOLEMenuGroupWindow=4,
        msoOLEMenuGroupContainer=2,
        msoOLEMenuGroupHelp=5,
        msoOLEMenuGroupObject=3,
    }

    enum KsoMsoExtraInfoMethod {
        msoMethodGet=0,
        msoMethodPost=1,
    }

    enum KsoMsoAnimationType {
        msoAnimationIdle=1,
        msoAnimationGreeting=2,
        msoAnimationEmptyTrash=116,
        msoAnimationGoodbye=3,
        msoAnimationBeginSpeaking=4,
        msoAnimationCharacterSuccessMajor=6,
        msoAnimationLookDownRight=106,
        msoAnimationRestPose=5,
        msoAnimationGetAttentionMajor=11,
        msoAnimationGetAttentionMinor=12,
        msoAnimationThinking=24,
        msoAnimationSearching=13,
        msoAnimationPrinting=18,
        msoAnimationGestureRight=19,
        msoAnimationLookUp=109,
        msoAnimationWritingNotingSomething=22,
        msoAnimationWorkingAtSomething=23,
        msoAnimationListensToComputer=26,
        msoAnimationSendingMail=25,
        msoAnimationDisappear=31,
        msoAnimationAppear=32,
        msoAnimationLookLeft=107,
        msoAnimationGetArtsy=100,
        msoAnimationGetTechy=101,
        msoAnimationGetWizardy=102,
        msoAnimationCheckingSomething=103,
        msoAnimationLookDown=104,
        msoAnimationLookDownLeft=105,
        msoAnimationLookRight=108,
        msoAnimationLookUpLeft=110,
        msoAnimationLookUpRight=111,
        msoAnimationSaving=112,
        msoAnimationGestureDown=113,
        msoAnimationGestureLeft=114,
        msoAnimationGestureUp=115,
    }

    enum KsoMsoIconType {
        msoIconAlertCritical=7,
        msoIconNone=0,
        msoIconAlert=2,
        msoIconAlertQuery=6,
        msoIconTip=3,
        msoIconAlertInfo=4,
        msoIconAlertWarning=5,
    }

    enum KsoMsoBalloonErrorType {
        msoBalloonErrorTooBig=2,
        msoBalloonErrorNone=0,
        msoBalloonErrorOther=1,
        msoBalloonErrorBadCharacter=8,
        msoBalloonErrorOutOfMemory=3,
        msoBalloonErrorBadPictureRef=4,
        msoBalloonErrorBadReference=5,
        msoBalloonErrorButtonlessModal=6,
        msoBalloonErrorButtonModeless=7,
        msoBalloonErrorCOMFailure=9,
        msoBalloonErrorCharNotTopmostForModal=10,
        msoBalloonErrorTooManyControls=11,
    }

    enum KsoMsoWizardActType {
        msoWizardActInactive=0,
        msoWizardActActive=1,
        msoWizardActSuspend=2,
        msoWizardActResume=3,
    }

    enum KsoMsoWizardMsgType {
        msoWizardMsgShowHelp=3,
        msoWizardMsgLocalStateOff=2,
        msoWizardMsgLocalStateOn=1,
        msoWizardMsgSuspending=4,
        msoWizardMsgResuming=5,
    }

    enum KsoMsoBalloonButtonType {
        msoBalloonButtonYesToAll=-15,
        msoBalloonButtonOptions=-14,
        msoBalloonButtonTips=-13,
        msoBalloonButtonSnooze=-11,
        msoBalloonButtonClose=-12,
        msoBalloonButtonYes=-3,
        msoBalloonButtonSearch=-10,
        msoBalloonButtonIgnore=-9,
        msoBalloonButtonAbort=-8,
        msoBalloonButtonRetry=-7,
        msoBalloonButtonNext=-6,
        msoBalloonButtonBack=-5,
        msoBalloonButtonOK=-1,
        msoBalloonButtonNo=-4,
        msoBalloonButtonCancel=-2,
        msoBalloonButtonNull=0,
    }

    enum KsoDocProperties {
        offPropertyTypeNumber=1,
        offPropertyTypeDate=3,
        offPropertyTypeBoolean=2,
        offPropertyTypeString=4,
        offPropertyTypeFloat=5,
    }

    enum KsoMsoAppLanguageID {
        msoLanguageIDInstall=1,
        msoLanguageIDHelp=3,
        msoLanguageIDUI=2,
        msoLanguageIDExeMode=4,
        msoLanguageIDUIPrevious=5,
    }

    enum KsoMsoFarEastLineBreakLanguageID {
        MsoFarEastLineBreakLanguageTraditionalChinese=1028,
        MsoFarEastLineBreakLanguageJapanese=1041,
        MsoFarEastLineBreakLanguageKorean=1042,
        MsoFarEastLineBreakLanguageSimplifiedChinese=2052,
    }

    enum KsoMsoFeatureInstall {
        msoFeatureInstallOnDemand=1,
        msoFeatureInstallNone=0,
        msoFeatureInstallOnDemandWithUI=2,
    }

    enum KsoMsoScriptLanguage {
        msoScriptLanguageVisualBasic=2,
        msoScriptLanguageJava=1,
        msoScriptLanguageASP=3,
        msoScriptLanguageOther=4,
    }

    enum KsoMsoScriptLocation {
        msoScriptLocationInHead=1,
        msoScriptLocationInBody=2,
    }

    enum KsoMsoFileFindView {
        msoViewPreview=2,
        msoViewFileInfo=1,
        msoViewSummaryInfo=3,
    }

    enum KsoMsoFileFindSortBy {
        msoFileFindSortbyAuthor=1,
        msoFileFindSortbyDateCreated=2,
        msoFileFindSortbyLastSavedBy=3,
        msoFileFindSortbyTitle=7,
        msoFileFindSortbySize=6,
        msoFileFindSortbyDateSaved=4,
        msoFileFindSortbyFileName=5,
    }

    enum KsoMsoLastModified {
        msoLastModifiedYesterday=1,
        msoLastModifiedToday=2,
        msoLastModifiedAnyTime=7,
        msoLastModifiedLastWeek=3,
        msoLastModifiedThisWeek=4,
        msoLastModifiedLastMonth=5,
        msoLastModifiedThisMonth=6,
    }

    enum KsoMsoSortBy {
        msoSortByFileType=3,
        msoSortByFileName=1,
        msoSortBySize=2,
        msoSortByLastModified=4,
        msoSortByNone=5,
    }

    enum KsoMsoSortOrder {
        msoSortOrderAscending=1,
        msoSortOrderDescending=2,
    }

    enum KsoMsoConnector {
        msoConnectorOr=2,
        msoConnectorAnd=1,
    }

    enum KsoMsoFileNewAction {
        msoEditFile=0,
        msoCreateNewFile=1,
        msoOpenFile=2,
    }

    enum KsoMsoCondition {
        msoConditionFileTypeDatabases=7,
        msoConditionFileTypeAllFiles=1,
        msoConditionIncludesPhrase=10,
        msoConditionFileTypeTemplates=8,
        msoConditionFileTypeExcelWorkbooks=4,
        msoConditionToday=17,
        msoConditionFileTypeOfficeFiles=2,
        msoConditionFileTypeOutlookItems=43,
        msoConditionFileTypeWordDocuments=3,
        msoConditionFileTypeDataConnectionFiles=51,
        msoConditionFileTypePowerPointPresentations=5,
        msoConditionFileTypePublisherFiles=52,
        msoConditionIsNo=40,
        msoConditionFileTypeBinders=6,
        msoConditionFileTypeTaskItem=49,
        msoConditionIncludes=9,
        msoConditionNotEqualToHigh=63,
        msoConditionEqualsLow=58,
        msoConditionBeginsWith=11,
        msoConditionFileTypeDocumentImagingFiles=54,
        msoConditionEndsWith=12,
        msoConditionAnytimeBetween=26,
        msoConditionIncludesNearEachOther=13,
        msoConditionFreeText=42,
        msoConditionIsExactly=14,
        msoConditionIsNot=15,
        msoConditionYesterday=16,
        msoConditionTomorrow=18,
        msoConditionLastWeek=19,
        msoConditionThisWeek=20,
        msoConditionInTheLast=31,
        msoConditionFileTypeJournalItem=48,
        msoConditionNextWeek=21,
        msoConditionFileTypePhotoDrawFiles=50,
        msoConditionEqualsInProgress=65,
        msoConditionLastMonth=22,
        msoConditionThisMonth=23,
        msoConditionNextMonth=24,
        msoConditionAnytime=25,
        msoConditionFileTypeCalendarItem=45,
        msoConditionOn=27,
        msoConditionOnOrAfter=28,
        msoConditionOnOrBefore=29,
        msoConditionInTheNext=30,
        msoConditionFileTypeDesignerFiles=56,
        msoConditionAtMost=35,
        msoConditionEquals=32,
        msoConditionNotEqualToNormal=62,
        msoConditionDoesNotEqual=33,
        msoConditionIncludesFormsOf=41,
        msoConditionAnyNumberBetween=34,
        msoConditionNotEqualToInProgress=70,
        msoConditionNotEqualToLow=61,
        msoConditionAtLeast=36,
        msoConditionFileTypeMailItem=44,
        msoConditionMoreThan=37,
        msoConditionLessThan=38,
        msoConditionEqualsHigh=60,
        msoConditionIsYes=39,
        msoConditionFileTypeContactItem=46,
        msoConditionFileTypeNoteItem=47,
        msoConditionFileTypeProjectFiles=53,
        msoConditionFileTypeVisioFiles=55,
        msoConditionEqualsNormal=59,
        msoConditionFileTypeWebPages=57,
        msoConditionEqualsNotStarted=64,
        msoConditionEqualsCompleted=66,
        msoConditionEqualsWaitingForSomeoneElse=67,
        msoConditionEqualsDeferred=68,
        msoConditionNotEqualToNotStarted=69,
        msoConditionNotEqualToCompleted=71,
        msoConditionNotEqualToWaitingForSomeoneElse=72,
        msoConditionNotEqualToDeferred=73,
    }

    enum KsoMsoScreenSize {
        msoScreenSize1152x882=5,
        msoScreenSize544x376=0,
        msoScreenSize800x600=3,
        msoScreenSize640x480=1,
        msoScreenSize1800x1440=9,
        msoScreenSize720x512=2,
        msoScreenSize1600x1200=8,
        msoScreenSize1024x768=4,
        msoScreenSize1280x1024=7,
        msoScreenSize1152x900=6,
        msoScreenSize1920x1200=10,
    }

    enum KsoMsoCharacterSet {
        msoCharacterSetArabic=1,
        msoCharacterSetCyrillic=2,
        msoCharacterSetGreek=4,
        msoCharacterSetEnglishWesternEuropeanOtherLatinScript=3,
        msoCharacterSetHebrew=5,
        msoCharacterSetSimplifiedChinese=9,
        msoCharacterSetJapanese=6,
        msoCharacterSetMultilingualUnicode=8,
        msoCharacterSetKorean=7,
        msoCharacterSetThai=10,
        msoCharacterSetTraditionalChinese=11,
        msoCharacterSetVietnamese=12,
    }

    enum KsoMsoEncoding {
        msoEncodingISO885915Latin9=28605,
        msoEncodingKoreanAutoDetect=50949,
        msoEncodingUnicodeLittleEndian=1200,
        msoEncodingThai=874,
        msoEncodingWestern=1252,
        msoEncodingTaiwanTCA=20001,
        msoEncodingArabicTransparentASMO=720,
        msoEncodingEBCDICUSCanada=37,
        msoEncodingISO2022KR=50225,
        msoEncodingJapaneseShiftJIS=932,
        msoEncodingEBCDICFinlandSweden=20278,
        msoEncodingISO88592CentralEurope=28592,
        msoEncodingArabic=1256,
        msoEncodingCentralEuropean=1250,
        msoEncodingSimplifiedChineseGBK=936,
        msoEncodingKorean=949,
        msoEncodingMacIcelandic=10079,
        msoEncodingUnicodeBigEndian=1201,
        msoEncodingMacCyrillic=10007,
        msoEncodingMacArabic=10004,
        msoEncodingEBCDICSimplifiedChineseExtendedAndSimplifiedChinese=50935,
        msoEncodingTraditionalChineseBig5=950,
        msoEncodingISO88591Latin1=28591,
        msoEncodingOEMCyrillicII=866,
        msoEncodingCyrillic=1251,
        msoEncodingMacUkraine=10017,
        msoEncodingMacKorean=10003,
        msoEncodingISO88593Latin3=28593,
        msoEncodingGreek=1253,
        msoEncodingTurkish=1254,
        msoEncodingEUCTaiwaneseTraditionalChinese=51950,
        msoEncodingBaltic=1257,
        msoEncodingHebrew=1255,
        msoEncodingMacRomania=10010,
        msoEncodingVietnamese=1258,
        msoEncodingJapaneseAutoDetect=50932,
        msoEncodingAutoDetect=50001,
        msoEncodingSimplifiedChineseAutoDetect=50936,
        msoEncodingTraditionalChineseAutoDetect=50950,
        msoEncodingCyrillicAutoDetect=51251,
        msoEncodingMacGreek1=10006,
        msoEncodingGreekAutoDetect=51253,
        msoEncodingArabicAutoDetect=51256,
        msoEncodingEBCDICTurkishLatin5=1026,
        msoEncodingISO6937NonSpacingAccent=20269,
        msoEncodingISO88594Baltic=28594,
        msoEncodingMacTurkish=10081,
        msoEncodingISO88595Cyrillic=28595,
        msoEncodingEuropa3=29001,
        msoEncodingISO88596Arabic=28596,
        msoEncodingMacRoman=10000,
        msoEncodingEBCDICMultilingualROECELatin2=870,
        msoEncodingISO88597Greek=28597,
        msoEncodingISO88598Hebrew=28598,
        msoEncodingMacLatin2=10029,
        msoEncodingOEMMultilingualLatinII=852,
        msoEncodingISO88599Turkish=28599,
        msoEncodingMacJapanese=10001,
        msoEncodingEBCDICGreekModern=875,
        msoEncodingISO88598HebrewLogical=38598,
        msoEncodingISO2022JPNoHalfwidthKatakana=50220,
        msoEncodingEUCKorean=51949,
        msoEncodingEBCDICDenmarkNorway=20277,
        msoEncodingISO2022JPJISX02021984=50221,
        msoEncodingISO2022JPJISX02011989=50222,
        msoEncodingISO2022CNTraditionalChinese=50227,
        msoEncodingEBCDICItaly=20280,
        msoEncodingISO2022CNSimplifiedChinese=50229,
        msoEncodingMacTraditionalChineseBig5=10002,
        msoEncodingEBCDICInternational=500,
        msoEncodingMacHebrew=10005,
        msoEncodingMacSimplifiedChineseGB2312=10008,
        msoEncodingMacCroatia=10082,
        msoEncodingEBCDICGermany=20273,
        msoEncodingT61=20261,
        msoEncodingEBCDICLatinAmericaSpain=20284,
        msoEncodingEBCDICUnitedKingdom=20285,
        msoEncodingEBCDICJapaneseKatakanaExtended=20290,
        msoEncodingEBCDICFrance=20297,
        msoEncodingEBCDICArabic=20420,
        msoEncodingEBCDICGreek=20423,
        msoEncodingEBCDICHebrew=20424,
        msoEncodingEBCDICKoreanExtended=20833,
        msoEncodingEBCDICThai=20838,
        msoEncodingEBCDICIcelandic=20871,
        msoEncodingEBCDICTurkish=20905,
        msoEncodingEBCDICRussian=20880,
        msoEncodingEBCDICSerbianBulgarian=21025,
        msoEncodingEBCDICJapaneseKatakanaExtendedAndJapanese=50930,
        msoEncodingEBCDICUSCanadaAndJapanese=50931,
        msoEncodingEBCDICKoreanExtendedAndKorean=50933,
        msoEncodingEBCDICUSCanadaAndTraditionalChinese=50937,
        msoEncodingEBCDICJapaneseLatinExtendedAndJapanese=50939,
        msoEncodingOEMUnitedStates=437,
        msoEncodingOEMGreek437G=737,
        msoEncodingOEMBaltic=775,
        msoEncodingOEMMultilingualLatinI=850,
        msoEncodingOEMCyrillic=855,
        msoEncodingOEMTurkish=857,
        msoEncodingOEMPortuguese=860,
        msoEncodingTaiwanIBM5550=20003,
        msoEncodingOEMCanadianFrench=863,
        msoEncodingOEMIcelandic=861,
        msoEncodingOEMHebrew=862,
        msoEncodingOEMArabic=864,
        msoEncodingOEMNordic=865,
        msoEncodingOEMModernGreek=869,
        msoEncodingEUCJapanese=51932,
        msoEncodingEUCChineseSimplifiedChinese=51936,
        msoEncodingISCIIDevanagari=57002,
        msoEncodingISCIIBengali=57003,
        msoEncodingISCIITamil=57004,
        msoEncodingISCIITelugu=57005,
        msoEncodingISCIIMalayalam=57009,
        msoEncodingISCIIAssamese=57006,
        msoEncodingISCIIOriya=57007,
        msoEncodingISCIIKannada=57008,
        msoEncodingISCIIGujarati=57010,
        msoEncodingISCIIPunjabi=57011,
        msoEncodingArabicASMO=708,
        msoEncodingKoreanJohab=1361,
        msoEncodingTaiwanCNS=20000,
        msoEncodingTaiwanEten=20002,
        msoEncodingTaiwanTeleText=20004,
        msoEncodingTaiwanWang=20005,
        msoEncodingIA5IRV=20105,
        msoEncodingIA5German=20106,
        msoEncodingIA5Swedish=20107,
        msoEncodingIA5Norwegian=20108,
        msoEncodingSimplifiedChineseGB18030=54936,
        msoEncodingUSASCII=20127,
        msoEncodingKOI8R=20866,
        msoEncodingExtAlphaLowercase=21027,
        msoEncodingKOI8U=21866,
        msoEncodingHZGBSimplifiedChinese=52936,
        msoEncodingUTF8=65001,
        msoEncodingUTF7=65000,
    }

    enum KsoMsoFilterConjunction {
        msoFilterConjunctionAnd=0,
        msoFilterConjunctionOr=1,
    }

    enum KsoMsoHTMLProjectState {
        msoHTMLProjectStateDocumentLocked=1,
        msoHTMLProjectStateProjectLocked=2,
        msoHTMLProjectStateDocumentProjectUnlocked=3,
    }

    enum KsoMsoHTMLProjectOpen {
        msoHTMLProjectOpenTextView=2,
        msoHTMLProjectOpenSourceView=1,
    }

    enum KsoMsoFileDialogType {
        msoFileDialogFilePicker=3,
        msoFileDialogOpen=1,
        msoFileDialogSaveAs=2,
        msoFileDialogFolderPicker=4,
    }

    enum KsoMsoFileDialogView {
        msoFileDialogViewList=1,
        msoFileDialogViewLargeIcons=6,
        msoFileDialogViewTiles=9,
        msoFileDialogViewDetails=2,
        msoFileDialogViewWebView=8,
        msoFileDialogViewSmallIcons=7,
        msoFileDialogViewProperties=3,
        msoFileDialogViewPreview=4,
        msoFileDialogViewThumbnail=5,
    }

    enum KsoMsoAlertIconType {
        msoAlertIconNoIcon=0,
        msoAlertIconCritical=1,
        msoAlertIconInfo=4,
        msoAlertIconQuery=2,
        msoAlertIconWarning=3,
    }

    enum KsoMsoAutomationSecurity {
        msoAutomationSecurityLow=1,
        msoAutomationSecurityByUI=2,
        msoAutomationSecurityForceDisable=3,
    }

    enum KsoMailFormat {
        mfPlainText=1,
        mfHTML=2,
        mfRTF=3,
    }

    enum KsoSignatureProviderDetail {
        sigprovdetUrl=0,
        sigprovdetHashAlgorithm=1,
        sigprovdetUIOnly=2,
        sigprovdetUseOfficeUI=3,
        sigprovdetUseOfficeStampUI=4,
    }

    enum KsoMsoAlertButtonType {
        msoAlertButtonYesNoCancel=3,
        msoAlertButtonOK=0,
        msoAlertButtonAbortRetryIgnore=2,
        msoAlertButtonOKCancel=1,
        msoAlertButtonYesNo=4,
        msoAlertButtonRetryCancel=5,
        msoAlertButtonYesAllNoCancel=6,
    }

    enum KsoMsoAlertDefaultType {
        msoAlertDefaultFirst=0,
        msoAlertDefaultThird=2,
        msoAlertDefaultSecond=1,
        msoAlertDefaultFourth=3,
        msoAlertDefaultFifth=4,
    }

    enum KsoMsoAlertCancelType {
        msoAlertCancelDefault=-1,
        msoAlertCancelFifth=4,
        msoAlertCancelFirst=0,
        msoAlertCancelSecond=1,
        msoAlertCancelThird=2,
        msoAlertCancelFourth=3,
    }

    enum KsoMsoSearchIn {
        msoSearchInMyComputer=0,
        msoSearchInOutlook=1,
        msoSearchInMyNetworkPlaces=2,
        msoSearchInCustom=3,
    }

    enum KsoMsoTargetBrowser {
        msoTargetBrowserIE6=4,
        msoTargetBrowserIE5=3,
        msoTargetBrowserIE4=2,
        msoTargetBrowserV4=1,
        msoTargetBrowserV3=0,
    }

    enum KsoMsoOrgChartLayoutType {
        msoOrgChartLayoutMixed=-2,
        msoOrgChartLayoutRightHanging=4,
        msoOrgChartLayoutStandard=1,
        msoOrgChartLayoutBothHanging=2,
        msoOrgChartLayoutLeftHanging=3,
        msoOrgChartLayoutDefault=5,
    }

    enum KsoMsoSoftEdgeType {
        msoSoftEdgeTypeMixed=-2,
        msoSoftEdgeTypeNone=0,
        msoSoftEdgeType6=6,
        msoSoftEdgeType5=5,
        msoSoftEdgeType4=4,
        msoSoftEdgeType3=3,
        msoSoftEdgeType2=2,
        msoSoftEdgeType1=1,
    }

    enum KsoMsoRelativeNodePosition {
        msoBeforeNode=1,
        msoAfterLastSibling=4,
        msoAfterNode=2,
        msoBeforeFirstSibling=3,
    }

    enum KsoMsoDiagramType {
        msoDiagramMixed=-2,
        msoDiagramVenn=5,
        msoDiagramOrgChart=1,
        msoDiagramTarget=6,
        msoDiagramRadial=3,
        msoDiagramCycle=2,
        msoDiagramPyramid=4,
    }

    enum KsoMsoDiagramNodeType {
        msoDiagramNode=1,
        msoDiagramAssistant=2,
    }

    enum KsoMsoFilterComparison {
        msoFilterComparisonGreaterThanEqual=5,
        msoFilterComparisonEqual=0,
        msoFilterComparisonLessThan=2,
        msoFilterComparisonNotEqual=1,
        msoFilterComparisonContains=8,
        msoFilterComparisonIsNotBlank=7,
        msoFilterComparisonGreaterThan=3,
        msoFilterComparisonLessThanEqual=4,
        msoFilterComparisonIsBlank=6,
        msoFilterComparisonNotContains=9,
    }

    enum KsoXlChartSplitType {
        xlSplitByCustomSplit=4,
        xlSplitByPosition=1,
        xlSplitByPercentValue=3,
        xlSplitByValue=2,
    }

    enum KsoMsoFileNewSection {
        msoOpenDocument=0,
        msoNew=1,
        msoBottomSection=4,
        msoNewfromTemplate=3,
        msoNewfromExistingFile=2,
    }

    enum KsoXlBarShape {
        xlCylinder=3,
        xlBox=0,
        xlPyramidToMax=2,
        xlPyramidToPoint=1,
        xlConeToMax=5,
        xlConeToPoint=4,
    }

    enum KsoContentVerificationResults {
        contverresModified=4,
        contverresError=0,
        contverresVerifying=1,
        contverresUnverified=2,
        contverresValid=3,
    }

    enum KsoMsoLanguageIDHidden {
        msoLanguageIDChineseMacao=5124,
        msoLanguageIDChineseHongKong=3076,
        msoLanguageIDEnglishTrinidad=11273,
    }

    enum KsoMsoSharedWorkspaceTaskStatus {
        msoSharedWorkspaceTaskStatusDeferred=4,
        msoSharedWorkspaceTaskStatusNotStarted=1,
        msoSharedWorkspaceTaskStatusInProgress=2,
        msoSharedWorkspaceTaskStatusCompleted=3,
        msoSharedWorkspaceTaskStatusWaiting=5,
    }

    enum KsoMsoSharedWorkspaceTaskPriority {
        msoSharedWorkspaceTaskPriorityLow=3,
        msoSharedWorkspaceTaskPriorityHigh=1,
        msoSharedWorkspaceTaskPriorityNormal=2,
    }

    enum KsoMsoSyncVersionType {
        msoSyncVersionServer=1,
        msoSyncVersionLastViewed=0,
    }

    enum KsoMsoSyncConflictResolutionType {
        msoSyncConflictClientWins=0,
        msoSyncConflictServerWins=1,
        msoSyncConflictMerge=2,
    }

    enum KsoMsoSyncCompareType {
        msoSyncCompareAndMerge=0,
        msoSyncCompareSideBySide=1,
    }

    enum KsoMsoSyncAvailableType {
        msoSyncAvailableNone=0,
        msoSyncAvailableOffline=1,
        msoSyncAvailableAnywhere=2,
    }

    enum KsoMsoSyncErrorType {
        msoSyncErrorNone=0,
        msoSyncErrorUnauthorizedUser=1,
        msoSyncErrorFileInUse=6,
        msoSyncErrorFileTooLarge=5,
        msoSyncErrorCouldNotConnect=2,
        msoSyncErrorVirusDownload=8,
        msoSyncErrorVirusUpload=7,
        msoSyncErrorOutOfSpace=3,
        msoSyncErrorFileNotFound=4,
        msoSyncErrorUnknownUpload=9,
        msoSyncErrorUnknownDownload=10,
        msoSyncErrorCouldNotUpdate=12,
        msoSyncErrorCouldNotOpen=11,
        msoSyncErrorCouldNotCompare=13,
        msoSyncErrorCouldNotResolve=14,
        msoSyncErrorNoNetwork=15,
        msoSyncErrorUnknown=16,
    }

    enum KsoMsoSyncStatusType {
        msoSyncStatusConflict=4,
        msoSyncStatusNoSharedWorkspace=0,
        msoSyncStatusNotRoaming=0,
        msoSyncStatusLatest=1,
        msoSyncStatusNewerAvailable=2,
        msoSyncStatusLocalChanges=3,
        msoSyncStatusSuspended=5,
        msoSyncStatusError=6,
    }

    enum KsoMsoPermission {
        msoPermissionExtract=8,
        msoPermissionView=1,
        msoPermissionRead=1,
        msoPermissionFullControl=64,
        msoPermissionEdit=2,
        msoPermissionSave=4,
        msoPermissionChange=15,
        msoPermissionPrint=16,
        msoPermissionObjModel=32,
        msoPermissionAllCommon=127,
    }

    enum KsoMsoMetaPropertyType {
        msoMetaPropertyTypeUnknown=0,
        msoMetaPropertyTypeUrl=17,
        msoMetaPropertyTypeFillInChoice=7,
        msoMetaPropertyTypeCurrency=5,
        msoMetaPropertyTypeBoolean=1,
        msoMetaPropertyTypeChoice=2,
        msoMetaPropertyTypeBusinessData=20,
        msoMetaPropertyTypeLookup=10,
        msoMetaPropertyTypeCalculated=3,
        msoMetaPropertyTypeComputed=4,
        msoMetaPropertyTypeGuid=8,
        msoMetaPropertyTypeDateTime=6,
        msoMetaPropertyTypeInteger=9,
        msoMetaPropertyTypeMultiChoiceLookup=11,
        msoMetaPropertyTypeNumber=15,
        msoMetaPropertyTypeMultiChoice=12,
        msoMetaPropertyTypeMultiChoiceFillIn=13,
        msoMetaPropertyTypeNote=14,
        msoMetaPropertyTypeMax=22,
        msoMetaPropertyTypeText=16,
        msoMetaPropertyTypeUser=18,
        msoMetaPropertyTypeUserMulti=19,
        msoMetaPropertyTypeBusinessDataSecondary=21,
    }

    enum KsoMsoSignatureSubset {
        msoSignatureSubsetSignaturesNonVisible=1,
        msoSignatureSubsetSignaturesAllSigs=0,
        msoSignatureSubsetSignatureLines=2,
        msoSignatureSubsetSignatureLinesSigned=3,
        msoSignatureSubsetAll=5,
        msoSignatureSubsetSignatureLinesUnsigned=4,
    }

    enum KsoMsoDocInspectorStatus {
        msoDocInspectorStatusIssueFound=1,
        msoDocInspectorStatusDocOk=0,
        msoDocInspectorStatusError=2,
    }

    enum KsoSignatureDetail {
        sigdetVertResolution=7,
        sigdetOfficeVersion=3,
        sigdetApplicationVersion=2,
        sigdetLocalSigningTime=0,
        sigdetApplicationName=1,
        sigdetSignatureType=13,
        sigdetWindowsVersion=4,
        sigdetNumberOfMonitors=5,
        sigdetShouldShowViewWarning=15,
        sigdetSignedData=9,
        sigdetHorizResolution=6,
        sigdetColorDepth=8,
        sigdetDocPreviewImg=10,
        sigdetIPFormHash=11,
        sigdetIPCurrentView=12,
        sigdetHashAlgorithm=14,
        sigdetDelSuggSigner=16,
        sigdetDelSuggSignerSet=17,
        sigdetDelSuggSignerLine2=18,
        sigdetDelSuggSignerLine2Set=19,
        sigdetDelSuggSignerEmail=20,
        sigdetDelSuggSignerEmailSet=21,
    }

    enum KsoCertificateDetail {
        certdetSubject=1,
        certdetAvailable=0,
        certdetIssuer=2,
        certdetExpirationDate=3,
        certdetThumbprint=4,
    }

    enum KsoCertificateVerificationResults {
        certverresError=0,
        certverresVerifying=1,
        certverresValid=3,
        certverresUnverified=2,
        certverresUntrusted=7,
        certverresRevoked=6,
        certverresExpired=5,
        certverresInvalid=4,
    }

    enum KsoMsoCustomXMLNodeType {
        msoCustomXMLNodeComment=8,
        msoCustomXMLNodeCData=4,
        msoCustomXMLNodeElement=1,
        msoCustomXMLNodeAttribute=2,
        msoCustomXMLNodeText=3,
        msoCustomXMLNodeProcessingInstruction=7,
        msoCustomXMLNodeDocument=9,
    }

    enum KsoMsoCustomXMLValidationErrorType {
        msoCustomXMLValidationErrorSchemaGenerated=0,
        msoCustomXMLValidationErrorAutomaticallyCleared=1,
        msoCustomXMLValidationErrorManual=2,
    }

    enum KsoMsoTextureAlignment {
        msoTextureBottom=7,
        msoTextureAlignmentMixed=-2,
        msoTextureTopLeft=0,
        msoTextureRight=5,
        msoTextureTopRight=2,
        msoTextureTop=1,
        msoTextureLeft=3,
        msoTextureBottomLeft=6,
        msoTextureCenter=4,
        msoTextureBottomRight=8,
    }

    enum KsoMsoReflectionType {
        msoReflectionTypeNone=0,
        msoReflectionTypeMixed=-2,
        msoReflectionType9=9,
        msoReflectionType8=8,
        msoReflectionType1=1,
        msoReflectionType2=2,
        msoReflectionType3=3,
        msoReflectionType4=4,
        msoReflectionType5=5,
        msoReflectionType6=6,
        msoReflectionType7=7,
    }

    enum KsoMsoFileValidationMode {
        msoFileValidationDefault=0,
        msoFileValidationSkip=1,
    }

    enum KsoMsoPresetCamera {
        msoCameraPerspectiveRelaxed=61,
        msoPresetCameraMixed=-2,
        msoCameraPerspectiveHeroicExtremeLeftFacing=59,
        msoCameraPerspectiveContrastingRightFacing=56,
        msoCameraObliqueRight=44,
        msoCameraIsometricOffAxis4Right=38,
        msoCameraIsometricOffAxis3Right=35,
        msoCameraIsometricOffAxis2Right=32,
        msoCameraIsometricOffAxis1Right=29,
        msoCameraLegacyObliqueLeft=4,
        msoCameraLegacyObliqueTopLeft=1,
        msoCameraLegacyObliqueTopRight=3,
        msoCameraObliqueBottomLeft=45,
        msoCameraLegacyObliqueTop=2,
        msoCameraObliqueLeft=43,
        msoCameraIsometricOffAxis4Left=37,
        msoCameraIsometricOffAxis3Left=34,
        msoCameraIsometricOffAxis2Left=31,
        msoCameraIsometricOffAxis1Left=28,
        msoCameraLegacyObliqueRight=6,
        msoCameraObliqueBottomRight=47,
        msoCameraLegacyObliqueFront=5,
        msoCameraLegacyObliqueBottom=8,
        msoCameraLegacyObliqueBottomLeft=7,
        msoCameraLegacyObliqueBottomRight=9,
        msoCameraPerspectiveAbove=51,
        msoCameraLegacyPerspectiveTopLeft=10,
        msoCameraLegacyPerspectiveTop=11,
        msoCameraLegacyPerspectiveTopRight=12,
        msoCameraLegacyPerspectiveLeft=13,
        msoCameraIsometricLeftUp=24,
        msoCameraLegacyPerspectiveFront=14,
        msoCameraPerspectiveBelow=52,
        msoCameraLegacyPerspectiveRight=15,
        msoCameraLegacyPerspectiveBottomLeft=16,
        msoCameraLegacyPerspectiveBottom=17,
        msoCameraLegacyPerspectiveBottomRight=18,
        msoCameraOrthographicFront=19,
        msoCameraIsometricOffAxis2Top=33,
        msoCameraIsometricOffAxis1Top=30,
        msoCameraIsometricTopUp=20,
        msoCameraIsometricTopDown=21,
        msoCameraObliqueTopLeft=40,
        msoCameraIsometricBottomUp=22,
        msoCameraIsometricBottomDown=23,
        msoCameraPerspectiveHeroicLeftFacing=57,
        msoCameraIsometricLeftDown=25,
        msoCameraIsometricRightUp=26,
        msoCameraPerspectiveContrastingLeftFacing=55,
        msoCameraIsometricRightDown=27,
        msoCameraIsometricOffAxis4Bottom=39,
        msoCameraIsometricOffAxis3Bottom=36,
        msoCameraObliqueTop=41,
        msoCameraObliqueTopRight=42,
        msoCameraObliqueBottom=46,
        msoCameraPerspectiveFront=48,
        msoCameraPerspectiveHeroicExtremeRightFacing=60,
        msoCameraPerspectiveLeft=49,
        msoCameraPerspectiveRight=50,
        msoCameraPerspectiveAboveLeftFacing=53,
        msoCameraPerspectiveAboveRightFacing=54,
        msoCameraPerspectiveHeroicRightFacing=58,
        msoCameraPerspectiveRelaxedModerately=62,
    }

    enum KsoXlErrorBarDirection {
        xlChartX=-4168,
        xlChartY=1,
    }

    enum KsoMsoLightRigType {
        msoLightRigMixed=-2,
        msoLightRigLegacyFlat1=1,
        msoLightRigLegacyFlat2=2,
        msoLightRigLegacyFlat3=3,
        msoLightRigLegacyFlat4=4,
        msoLightRigLegacyNormal1=5,
        msoLightRigLegacyNormal2=6,
        msoLightRigLegacyNormal3=7,
        msoLightRigLegacyNormal4=8,
        msoLightRigBrightRoom=27,
        msoLightRigLegacyHarsh4=12,
        msoLightRigLegacyHarsh3=11,
        msoLightRigLegacyHarsh2=10,
        msoLightRigLegacyHarsh1=9,
        msoLightRigMorning=19,
        msoLightRigThreePoint=13,
        msoLightRigFreezing=23,
        msoLightRigBalanced=14,
        msoLightRigSoft=15,
        msoLightRigHarsh=16,
        msoLightRigFlood=17,
        msoLightRigContrasting=18,
        msoLightRigSunrise=20,
        msoLightRigSunset=21,
        msoLightRigFlat=24,
        msoLightRigChilly=22,
        msoLightRigTwoPoint=25,
        msoLightRigGlow=26,
    }

    enum KsoMsoParagraphAlignment {
        msoAlignMixed=-2,
        msoAlignThaiDistribute=6,
        msoAlignDistribute=5,
        msoAlignLeft=1,
        msoAlignCenter=2,
        msoAlignJustify=4,
        msoAlignRight=3,
        msoAlignJustifyLow=7,
    }

    enum KsoMsoTextStrike {
        msoSingleStrike=1,
        msoStrikeMixed=-2,
        msoNoStrike=0,
        msoDoubleStrike=2,
    }

    enum KsoMsoTextCaps {
        msoCapsMixed=-2,
        msoNoCaps=0,
        msoSmallCaps=1,
        msoAllCaps=2,
    }

    enum KsoMsoTextDirection {
        msoTextDirectionMixed=-2,
        msoTextDirectionLeftToRight=1,
        msoTextDirectionRightToLeft=2,
    }

    enum KsoMsoTextUnderlineType {
        msoUnderlineDottedLine=5,
        msoUnderlineMixed=-2,
        msoNoUnderline=0,
        msoUnderlineWords=1,
        msoUnderlineDotDotDashLine=13,
        msoUnderlineDashLine=7,
        msoUnderlineSingleLine=2,
        msoUnderlineDoubleLine=3,
        msoUnderlineDottedHeavyLine=6,
        msoUnderlineHeavyLine=4,
        msoUnderlineDashHeavyLine=8,
        msoUnderlineDashLongLine=9,
        msoUnderlineDashLongHeavyLine=10,
        msoUnderlineWavyHeavyLine=16,
        msoUnderlineDotDashLine=11,
        msoUnderlineDotDashHeavyLine=12,
        msoUnderlineDotDotDashHeavyLine=14,
        msoUnderlineWavyLine=15,
        msoUnderlineWavyDoubleLine=17,
    }

    enum KsoMsoTextTabAlign {
        msoTabAlignRight=2,
        msoTabAlignCenter=1,
        msoTabAlignLeft=0,
        msoTabAlignMixed=-2,
        msoTabAlignDecimal=3,
    }

    enum KsoXlPieSliceIndex {
        xlOuterCounterClockwisePoint=1,
        xlInnerClockwisePoint=7,
        xlOuterCenterPoint=2,
        xlMidClockwiseRadiusPoint=4,
        xlInnerCounterClockwisePoint=9,
        xlOuterClockwisePoint=3,
        xlInnerCenterPoint=8,
        xlMidCounterClockwiseRadiusPoint=6,
        xlCenterPoint=5,
    }

    enum KsoXlAxisCrosses {
        xlAxisCrossesAutomatic=-4105,
        xlAxisCrossesCustom=-4114,
        xlAxisCrossesMaximum=2,
        xlAxisCrossesMinimum=4,
    }

    enum KsoMsoTextCharWrap {
        msoStrictCharWrap=2,
        msoCharWrapMixed=-2,
        msoNoCharWrap=0,
        msoStandardCharWrap=1,
        msoCustomCharWrap=3,
    }

    enum KsoMsoTextFontAlign {
        msoFontAlignBottom=4,
        msoFontAlignMixed=-2,
        msoFontAlignAuto=0,
        msoFontAlignTop=1,
        msoFontAlignBaseline=3,
        msoFontAlignCenter=2,
    }

    enum KsoMsoAutoSize {
        msoAutoSizeMixed=-2,
        msoAutoSizeShapeToFitText=1,
        msoAutoSizeNone=0,
        msoAutoSizeTextToFitShape=2,
    }

    enum KsoMsoWarpFormat {
        msoWarpFormatMixed=-2,
        msoWarpFormat9=8,
        msoWarpFormat1=0,
        msoWarpFormat2=1,
        msoWarpFormat3=2,
        msoWarpFormat4=3,
        msoWarpFormat5=4,
        msoWarpFormat6=5,
        msoWarpFormat7=6,
        msoWarpFormat8=7,
        msoWarpFormat30=29,
        msoWarpFormat20=19,
        msoWarpFormat10=9,
        msoWarpFormat31=30,
        msoWarpFormat21=20,
        msoWarpFormat11=10,
        msoWarpFormat32=31,
        msoWarpFormat22=21,
        msoWarpFormat12=11,
        msoWarpFormat33=32,
        msoWarpFormat23=22,
        msoWarpFormat13=12,
        msoWarpFormat34=33,
        msoWarpFormat24=23,
        msoWarpFormat14=13,
        msoWarpFormat35=34,
        msoWarpFormat25=24,
        msoWarpFormat15=14,
        msoWarpFormat36=35,
        msoWarpFormat26=25,
        msoWarpFormat16=15,
        msoWarpFormat37=36,
        msoWarpFormat27=26,
        msoWarpFormat17=16,
        msoWarpFormat28=27,
        msoWarpFormat18=17,
        msoWarpFormat29=28,
        msoWarpFormat19=18,
    }

    enum KsoXlSizeRepresents {
        xlSizeIsWidth=2,
        xlSizeIsArea=1,
    }

    enum KsoMsoTextChangeCase {
        msoCaseLower=2,
        msoCaseSentence=1,
        msoCaseUpper=3,
        msoCaseTitle=4,
        msoCaseToggle=5,
    }

    enum KsoMsoDateTimeFormat {
        msoDateTimeMMyy=7,
        msoDateTimeddddMMMMddyyyy=2,
        msoDateTimeFormatMixed=-2,
        msoDateTimedMMMyy=5,
        msoDateTimeMMMMyy=6,
        msoDateTimeMdyy=1,
        msoDateTimeHmm=10,
        msoDateTimeMMddyyHmm=8,
        msoDateTimedMMMMyyyy=3,
        msoDateTimeMMMMdyyyy=4,
        msoDateTimeMMddyyhmmAMPM=9,
        msoDateTimeHmmss=11,
        msoDateTimehmmAMPM=12,
        msoDateTimehmmssAMPM=13,
        msoDateTimeFigureOut=14,
    }

    enum KsoMsoThemeColorSchemeIndex {
        msoThemeAccent1=5,
        msoThemeDark1=1,
        msoThemeLight1=2,
        msoThemeLight2=4,
        msoThemeAccent2=6,
        msoThemeDark2=3,
        msoThemeAccent3=7,
        msoThemeAccent4=8,
        msoThemeAccent5=9,
        msoThemeAccent6=10,
        msoThemeHyperlink=11,
        msoThemeFollowedHyperlink=12,
    }

    enum KsoMsoThemeColorIndex {
        msoThemeColorText2=15,
        msoThemeColorText1=13,
        msoThemeColorMixed=-2,
        msoNotThemeColor=0,
        msoThemeColorDark1=1,
        msoThemeColorDark2=3,
        msoThemeColorLight1=2,
        msoThemeColorLight2=4,
        msoThemeColorAccent6=10,
        msoThemeColorAccent5=9,
        msoThemeColorAccent4=8,
        msoThemeColorAccent1=5,
        msoThemeColorAccent2=6,
        msoThemeColorAccent3=7,
        msoThemeColorHyperlink=11,
        msoThemeColorFollowedHyperlink=12,
        msoThemeColorBackground2=16,
        msoThemeColorBackground1=14,
    }

    enum KsoMsoFontLanguageIndex {
        msoThemeComplexScript=2,
        msoThemeLatin=1,
        msoThemeEastAsian=3,
    }

    enum KsoMsoShapeStyleIndex {
        msoShapeStyleMixed=-2,
        msoShapeStyleNotAPreset=0,
        msoShapeStylePreset7=7,
        msoShapeStylePreset6=6,
        msoShapeStylePreset5=5,
        msoShapeStylePreset4=4,
        msoShapeStylePreset3=3,
        msoShapeStylePreset2=2,
        msoShapeStylePreset1=1,
        msoShapeStylePreset8=8,
        msoShapeStylePreset9=9,
        msoShapeStylePreset10=10,
        msoShapeStylePreset11=11,
        msoShapeStylePreset12=12,
        msoShapeStylePreset13=13,
        msoShapeStylePreset14=14,
        msoShapeStylePreset15=15,
        msoShapeStylePreset16=16,
        msoShapeStylePreset17=17,
        msoShapeStylePreset18=18,
        msoShapeStylePreset19=19,
        msoShapeStylePreset20=20,
        msoShapeStylePreset21=21,
        msoShapeStylePreset22=22,
        msoShapeStylePreset23=23,
        msoShapeStylePreset24=24,
        msoShapeStylePreset25=25,
        msoShapeStylePreset26=26,
        msoShapeStylePreset27=27,
        msoShapeStylePreset28=28,
        msoShapeStylePreset29=29,
        msoShapeStylePreset30=30,
        msoShapeStylePreset31=31,
        msoShapeStylePreset32=32,
        msoShapeStylePreset33=33,
        msoShapeStylePreset34=34,
        msoShapeStylePreset35=35,
        msoShapeStylePreset36=36,
        msoShapeStylePreset37=37,
        msoShapeStylePreset38=38,
        msoShapeStylePreset39=39,
        msoShapeStylePreset40=40,
        msoShapeStylePreset41=41,
        msoShapeStylePreset42=42,
        msoLineStylePreset1=10001,
        msoLineStylePreset2=10002,
        msoLineStylePreset3=10003,
        msoLineStylePreset4=10004,
        msoLineStylePreset5=10005,
        msoLineStylePreset6=10006,
        msoLineStylePreset7=10007,
        msoLineStylePreset8=10008,
        msoLineStylePreset9=10009,
        msoLineStylePreset10=10010,
        msoLineStylePreset11=10011,
        msoLineStylePreset12=10012,
        msoLineStylePreset13=10013,
        msoLineStylePreset14=10014,
        msoLineStylePreset15=10015,
        msoLineStylePreset16=10016,
        msoLineStylePreset17=10017,
        msoLineStylePreset18=10018,
        msoLineStylePreset19=10019,
        msoLineStylePreset20=10020,
        msoLineStylePreset21=10021,
    }

    enum KsoMsoCTPDockPosition {
        msoCTPDockPositionTop=1,
        msoCTPDockPositionLeft=0,
        msoCTPDockPositionRight=2,
        msoCTPDockPositionBottom=3,
        msoCTPDockPositionFloating=4,
    }

    enum KsoMsoCTPDockPositionRestrict {
        msoCTPDockPositionRestrictNone=0,
        msoCTPDockPositionRestrictNoChange=1,
        msoCTPDockPositionRestrictNoHorizontal=2,
        msoCTPDockPositionRestrictNoVertical=3,
    }

    enum KsoMsoPickerField {
        msoPickerFieldUser=4,
        msoPickerFieldUnknown=0,
        msoPickerFieldText=3,
        msoPickerFieldDateTime=1,
        msoPickerFieldNumber=2,
        msoPickerFieldMax=5,
    }

    enum KsoXlChartType {
        xlCylinderBarStacked100=97,
        xlColumnClustered=51,
        xlConeCol=105,
        xlBarStacked100=59,
        xlConeBarStacked100=104,
        xlRadarFilled=82,
        xlBarStacked=58,
        xlPyramidColStacked=107,
        xlColumnStacked=52,
        xlRadarMarkers=81,
        xl3DColumnStacked=55,
        xlStockHLC=88,
        xlLineStacked100=64,
        xlColumnStacked100=53,
        xl3DColumnStacked100=56,
        xl3DColumnClustered=54,
        xlBarClustered=57,
        xlAreaStacked=76,
        xl3DBarClustered=60,
        xl3DColumn=-4100,
        xl3DBarStacked=61,
        xl3DBarStacked100=62,
        xlLineStacked=63,
        xlLineMarkers=65,
        xlBarOfPie=71,
        xlBubble3DEffect=87,
        xlLineMarkersStacked=66,
        xlXYScatterSmooth=72,
        xlStockOHLC=89,
        xlStockVHLC=90,
        xlLineMarkersStacked100=67,
        xlPieOfPie=68,
        xlPieExploded=69,
        xl3DPieExploded=70,
        xlCylinderBarStacked=96,
        xlXYScatterSmoothNoMarkers=73,
        xlXYScatterLines=74,
        xlCylinderColStacked100=94,
        xl3DAreaStacked100=79,
        xlXYScatterLinesNoMarkers=75,
        xlConeColStacked=100,
        xlAreaStacked100=77,
        xlPyramidColClustered=106,
        xl3DAreaStacked=78,
        xlDoughnutExploded=80,
        xlSurface=83,
        xlSurfaceWireframe=84,
        xlSurfaceTopView=85,
        xlPyramidBarStacked100=111,
        xlArea=1,
        xlSurfaceTopViewWireframe=86,
        xlBubble=15,
        xlStockVOHLC=91,
        xlCylinderColClustered=92,
        xlPyramidCol=112,
        xlCylinderColStacked=93,
        xlCylinderCol=98,
        xlCylinderBarClustered=95,
        xlConeColClustered=99,
        xlConeColStacked100=101,
        xlConeBarClustered=102,
        xlPyramidColStacked100=108,
        xlConeBarStacked=103,
        xlPyramidBarClustered=109,
        xlPyramidBarStacked=110,
        xlLine=4,
        xl3DLine=-4101,
        xl3DPie=-4102,
        xlPie=5,
        xlXYScatter=-4169,
        xl3DArea=-4098,
        xlDoughnut=-4120,
        xlRadar=-4151,
        xlCombo=-4152,
        xlComboColumnClusteredLine=113,
        xlComboColumnClusteredLineSecondaryAxis=114,
        xlComboAreaStackedColumnClustered=115,
        xlOtherCombinations=116,
        xlSuggestedChart=-2,
    }

    enum KsoXlAxisGroup {
        xlPrimary=1,
        xlSecondary=2,
    }

    enum KsoXlConstants {
        xlOutside=3,
        xlMinimum=4,
        xlCrissCross=16,
        xlAutomatic=-4105,
        xlPercent=2,
        xlGeneral=1,
        xlCombination=-4111,
        xlColumn=3,
        xlCustom=-4114,
        xl3DBar=-4099,
        xlBar=2,
        xlNextToAxis=4,
        xlAbove=0,
        xl3DSurface=-4103,
        xlHigh=-4127,
        xlDefaultAutoFormat=-1,
        xlShowPercent=3,
        xlCross=4,
        xlNone=-4142,
        xlBelow=1,
        xlGray8=18,
        xlBoth=1,
        xlBottom=-4107,
        xlCenter=-4108,
        xlSingle=2,
        xlChecker=9,
        xlCircle=8,
        xlGray75=-4126,
        xlCorner=2,
        xlDiamond=2,
        xlLow=-4134,
        xlLightVertical=12,
        xlLeft=-4131,
        xlDistributed=-4117,
        xlFill=5,
        xlFixedValue=1,
        xlGray16=17,
        xlGray25=-4124,
        xlSemiGray75=10,
        xlLightDown=13,
        xlGray50=-4125,
        xlGrid=15,
        xlInside=2,
        xlJustify=-4130,
        xlLightHorizontal=11,
        xlRight=-4152,
        xlLightUp=14,
        xlMinusValues=3,
        xlMaximum=2,
        xlOpaque=3,
        xlPlus=9,
        xlTransparent=2,
        xlPlusValues=2,
        xlScale=3,
        xlShowLabel=4,
        xlShowLabelAndPercent=5,
        xlShowValue=2,
        xlSolid=1,
        xlStError=4,
        xlSquare=1,
        xlStar=5,
        xlTop=-4160,
        xlTriangle=3,
    }

    enum KsoXlReadingOrder {
        xlContext=-5002,
        xlRTL=-5004,
        xlLTR=-5003,
    }

    enum KsoXlBorderWeight {
        xlHairline=1,
        xlMedium=-4138,
        xlThick=4,
        xlThin=2,
    }

    enum KsoXlChartElementPosition {
        xlChartElementPositionAutomatic=-4105,
        xlChartElementPositionCustom=-4114,
    }

    enum KsoXlLegendPosition {
        xlLegendPositionBottom=-4107,
        xlLegendPositionCorner=2,
        xlLegendPositionLeft=-4131,
        xlLegendPositionTop=-4160,
        xlLegendPositionRight=-4152,
        xlLegendPositionCustom=-4161,
    }

    enum KsoXlUnderlineStyle {
        xlUnderlineStyleSingle=2,
        xlUnderlineStyleDouble=-4119,
        xlUnderlineStyleDoubleAccounting=5,
        xlUnderlineStyleNone=-4142,
        xlUnderlineStyleSingleAccounting=4,
    }

    enum KsoXlColorIndex {
        xlColorIndexAutomatic=-4105,
        xlColorIndexNone=-4142,
    }

    enum KsoXlMarkerStyle {
        xlMarkerStyleDot=-4118,
        xlMarkerStyleAutomatic=-4105,
        xlMarkerStyleCircle=8,
        xlMarkerStyleTriangle=3,
        xlMarkerStylePicture=-4147,
        xlMarkerStyleDash=-4115,
        xlMarkerStyleSquare=1,
        xlMarkerStyleDiamond=2,
        xlMarkerStylePlus=9,
        xlMarkerStyleNone=-4142,
        xlMarkerStyleStar=5,
        xlMarkerStyleX=-4168,
    }

    enum KsoXlRowCol {
        xlColumns=2,
        xlRows=1,
    }

    enum KsoXlDataLabelsType {
        xlDataLabelsShowNone=-4142,
        xlDataLabelsShowLabelAndPercent=5,
        xlDataLabelsShowValue=2,
        xlDataLabelsShowPercent=3,
        xlDataLabelsShowLabel=4,
        xlDataLabelsShowBubbleSizes=6,
    }

    enum KsoXlErrorBarInclude {
        xlErrorBarIncludeBoth=1,
        xlErrorBarIncludeMinusValues=3,
        xlErrorBarIncludeNone=-4142,
        xlErrorBarIncludePlusValues=2,
    }

    enum KsoXlErrorBarType {
        xlErrorBarTypeFixedValue=1,
        xlErrorBarTypeCustom=-4114,
        xlErrorBarTypeStError=4,
        xlErrorBarTypePercent=2,
        xlErrorBarTypeStDev=-4155,
    }

    enum KsoXlChartPictureType {
        xlStackScale=3,
        xlStack=2,
        xlStretch=1,
    }

    enum KsoXlChartItem {
        xlDataLabel=0,
        xlLegendEntry=12,
        xlDataTable=7,
        xlChartTitle=4,
        xlChartArea=2,
        xlSeries=3,
        xlWalls=5,
        xlErrorBars=9,
        xlTrendline=8,
        xlCorners=6,
        xlPivotChartDropZone=32,
        xlXErrorBars=10,
        xlYErrorBars=11,
        xlLegendKey=13,
        xlShape=14,
        xlMajorGridlines=15,
        xlDownBars=20,
        xlMinorGridlines=16,
        xlAxisTitle=17,
        xlUpBars=18,
        xlPlotArea=19,
        xlAxis=21,
        xlSeriesLines=22,
        xlFloor=23,
        xlLegend=24,
        xlHiLoLines=25,
        xlDropLines=26,
        xlRadarAxisLabels=27,
        xlNothing=28,
        xlLeaderLines=29,
        xlPivotChartFieldButton=31,
        xlDisplayUnitLabel=30,
    }

    enum KsoXlEndStyleCap {
        xlCap=1,
        xlNoCap=2,
    }

    enum KsoXlTrendlineType {
        xlExponential=5,
        xlPower=4,
        xlPolynomial=3,
        xlLinear=-4132,
        xlLogarithmic=-4133,
        xlMovingAvg=6,
    }

    enum KsoXlAxisType {
        xlValue=2,
        xlCategory=1,
        xlSeriesAxis=3,
    }

    enum KsoXlTickMark {
        xlTickMarkOutside=3,
        xlTickMarkCross=4,
        xlTickMarkNone=-4142,
        xlTickMarkInside=2,
    }

    enum KsoXlTickLabelPosition {
        xlTickLabelPositionHigh=-4127,
        xlTickLabelPositionLow=-4134,
        xlTickLabelPositionNextToAxis=4,
        xlTickLabelPositionNone=-4142,
    }

    enum KsoXlTimeUnit {
        xlDays=0,
        xlYears=2,
        xlMonths=1,
    }

    enum KsoMsoBlogCategorySupport {
        msoBlogNoCategories=0,
        msoBlogMultipleCategories=2,
        msoBlogOneCategory=1,
    }

    enum KsoXlCategoryType {
        xlCategoryScale=2,
        xlTimeScale=3,
        xlAutomaticScale=-4105,
    }

    enum KsoXlChartOrientation {
        xlDownward=-4170,
        xlHorizontal=-4128,
        xlUpward=-4171,
        xlVertical=-4166,
    }

    enum KsoXlTickLabelOrientation {
        xlTickLabelOrientationDownward=-4170,
        xlTickLabelOrientationAutomatic=-4105,
        xlTickLabelOrientationVertical=-4166,
        xlTickLabelOrientationHorizontal=-4128,
        xlTickLabelOrientationUpward=-4171,
    }

    enum KsoXlDisplayBlanksAs {
        xlInterpolated=3,
        xlNotPlotted=1,
        xlZero=2,
    }

    enum KsoXlDataLabelPosition {
        xlLabelPositionMixed=6,
        xlLabelPositionBestFit=5,
        xlLabelPositionCenter=-4108,
        xlLabelPositionAbove=0,
        xlLabelPositionBelow=1,
        xlLabelPositionInsideBase=4,
        xlLabelPositionLeft=-4131,
        xlLabelPositionOutsideEnd=2,
        xlLabelPositionRight=-4152,
        xlLabelPositionInsideEnd=3,
        xlLabelPositionCustom=7,
    }

    enum KsoMsoPictureCompress {
        msoPictureCompressDocDefault=-1,
        msoPictureCompressFalse=0,
        msoPictureCompressTrue=1,
    }

    enum KsoXlPivotFieldOrientation {
        xlDataField=4,
        xlColumnField=2,
        xlHidden=0,
        xlRowField=1,
        xlPageField=3,
    }

    enum KsoXlVAlign {
        xlVAlignTop=-4160,
        xlVAlignJustify=-4130,
        xlVAlignBottom=-4107,
        xlVAlignCenter=-4108,
        xlVAlignDistributed=-4117,
    }

    enum KsoXlHAlign {
        xlHAlignCenter=-4108,
        xlHAlignLeft=-4131,
        xlHAlignGeneral=1,
        xlHAlignCenterAcrossSelection=7,
        xlHAlignRight=-4152,
        xlHAlignDistributed=-4117,
        xlHAlignFill=5,
        xlHAlignJustify=-4130,
    }

    enum KsoMsoChartElementType {
        msoElementChartTitleNone=0,
        msoElementChartTitleCenteredOverlay=1,
        msoElementLegendBottom=104,
        msoElementChartTitleAboveChart=2,
        msoElementPrimaryValueAxisTitleBelowAxis=308,
        msoElementLegendLeft=103,
        msoElementLegendNone=100,
        msoElementLegendRightOverlay=105,
        msoElementPrimaryValueGridLinesMinor=329,
        msoElementPrimaryValueGridLinesMajor=330,
        msoElementLegendRight=101,
        msoElementSecondaryCategoryAxisTitleHorizontal=317,
        msoElementPrimaryCategoryAxisTitleHorizontal=305,
        msoElementLegendTop=102,
        msoElementLegendLeftOverlay=106,
        msoElementSecondaryValueGridLinesNone=336,
        msoElementSecondaryValueGridLinesMinor=337,
        msoElementDataLabelNone=200,
        msoElementDataLabelShow=201,
        msoElementSeriesAxisTitleNone=324,
        msoElementDataLabelRight=207,
        msoElementDataLabelCenter=202,
        msoElementDataLabelInsideEnd=203,
        msoElementSecondaryValueAxisTitleBelowAxis=320,
        msoElementPrimaryValueAxisNone=352,
        msoElementDataLabelInsideBase=204,
        msoElementSecondaryValueGridLinesMinorMajor=339,
        msoElementSecondaryCategoryAxisTitleNone=312,
        msoElementDataLabelLeft=206,
        msoElementDataLabelOutSideEnd=205,
        msoElementDataLabelTop=208,
        msoElementDataLabelBottom=209,
        msoElementSecondaryCategoryAxisTitleVertical=316,
        msoElementDataLabelBestFit=210,
        msoElementDataLabelCallout=211,
        msoElementPrimaryCategoryAxisTitleNone=300,
        msoElementPrimaryCategoryAxisTitleRotated=303,
        msoElementLineDropLine=801,
        msoElementPrimaryCategoryAxisTitleAdjacentToAxis=301,
        msoElementSecondaryValueAxisTitleNone=318,
        msoElementPrimaryCategoryAxisTitleBelowAxis=302,
        msoElementPrimaryCategoryAxisTitleVertical=304,
        msoElementSecondaryValueAxisBillions=366,
        msoElementSecondaryValueAxisMillions=365,
        msoElementPrimaryValueAxisTitleNone=306,
        msoElementPrimaryValueAxisTitleVertical=310,
        msoElementSeriesAxisTitleRotated=325,
        msoElementSecondaryCategoryAxisTitleAdjacentToAxis=313,
        msoElementPrimaryValueAxisTitleAdjacentToAxis=306,
        msoElementPrimaryValueAxisTitleRotated=309,
        msoElementPrimaryValueAxisTitleHorizontal=311,
        msoElementSecondaryCategoryAxisTitleBelowAxis=314,
        msoElementPrimaryValueGridLinesMinorMajor=331,
        msoElementPrimaryValueAxisLogScale=357,
        msoElementSecondaryCategoryAxisTitleRotated=315,
        msoElementSecondaryValueAxisTitleAdjacentToAxis=319,
        msoElementPrimaryCategoryGridLinesNone=332,
        msoElementPrimaryValueGridLinesNone=328,
        msoElementSecondaryValueAxisTitleRotated=321,
        msoElementDataTableWithLegendKeys=502,
        msoElementPrimaryCategoryGridLinesMinor=333,
        msoElementSecondaryValueAxisTitleVertical=322,
        msoElementSecondaryValueAxisTitleHorizontal=323,
        msoElementSeriesAxisTitleVertical=326,
        msoElementSeriesAxisTitleHorizontal=327,
        msoElementPrimaryCategoryGridLinesMajor=334,
        msoElementPrimaryCategoryGridLinesMinorMajor=335,
        msoElementSecondaryValueGridLinesMajor=338,
        msoElementSecondaryCategoryGridLinesNone=340,
        msoElementSecondaryCategoryGridLinesMinor=341,
        msoElementSecondaryCategoryGridLinesMajor=342,
        msoElementSecondaryCategoryGridLinesMinorMajor=343,
        msoElementSeriesAxisGridLinesNone=344,
        msoElementSeriesAxisGridLinesMajor=346,
        msoElementSeriesAxisGridLinesMinor=345,
        msoElementSeriesAxisGridLinesMinorMajor=347,
        msoElementTrendlineAddLinear=601,
        msoElementPrimaryCategoryAxisNone=348,
        msoElementPrimaryCategoryAxisShow=349,
        msoElementPrimaryCategoryAxisWithoutLabels=350,
        msoElementPrimaryCategoryAxisReverse=351,
        msoElementPrimaryValueAxisShow=353,
        msoElementPrimaryValueAxisThousands=354,
        msoElementPrimaryValueAxisBillions=356,
        msoElementPrimaryValueAxisMillions=355,
        msoElementSecondaryCategoryAxisNone=358,
        msoElementSecondaryCategoryAxisShow=359,
        msoElementSecondaryCategoryAxisWithoutLabels=360,
        msoElementSecondaryValueAxisLogScale=367,
        msoElementSecondaryCategoryAxisReverse=361,
        msoElementSecondaryValueAxisNone=362,
        msoElementSecondaryValueAxisShow=363,
        msoElementSecondaryValueAxisThousands=364,
        msoElementSeriesAxisNone=368,
        msoElementSeriesAxisShow=369,
        msoElementSeriesAxisWithoutLabeling=370,
        msoElementSeriesAxisReverse=371,
        msoElementPrimaryCategoryAxisThousands=372,
        msoElementPrimaryCategoryAxisBillions=374,
        msoElementPrimaryCategoryAxisMillions=373,
        msoElementPrimaryCategoryAxisLogScale=375,
        msoElementSecondaryCategoryAxisThousands=376,
        msoElementSecondaryCategoryAxisBillions=378,
        msoElementSecondaryCategoryAxisMillions=377,
        msoElementSecondaryCategoryAxisLogScale=379,
        msoElementDataTableNone=500,
        msoElementDataTableShow=501,
        msoElementTrendlineNone=600,
        msoElementTrendlineAddExponential=602,
        msoElementTrendlineAddLinearForecast=603,
        msoElementTrendlineAddTwoPeriodMovingAverage=604,
        msoElementErrorBarNone=700,
        msoElementErrorBarStandardError=701,
        msoElementErrorBarPercentage=702,
        msoElementErrorBarStandardDeviation=703,
        msoElementLineNone=800,
        msoElementLineHiLoLine=802,
        msoElementLineSeriesLine=803,
        msoElementLineDropHiLoLine=804,
        msoElementUpDownBarsNone=900,
        msoElementUpDownBarsShow=901,
        msoElementPlotAreaNone=1000,
        msoElementPlotAreaShow=1001,
        msoElementChartWallNone=1100,
        msoElementChartWallShow=1101,
        msoElementChartFloorNone=1200,
        msoElementChartFloorShow=1201,
    }

    enum KsoMsoTabStopType {
        msoTabStopMixed=-2,
        msoTabStopLeft=1,
        msoTabStopCenter=2,
        msoTabStopRight=3,
        msoTabStopDecimal=4,
    }

    enum KsoMsoBaselineAlignment {
        msoBaselineAlignMixed=-2,
        msoBaselineAlignCenter=3,
        msoBaselineAlignBaseline=1,
        msoBaselineAlignTop=2,
        msoBaselineAlignFarEast50=4,
        msoBaselineAlignAuto=5,
    }

    enum KsoEncryptionProviderDetail {
        encprovdetUrl=0,
        encprovdetAlgorithm=1,
        encprovdetCipherMode=4,
        encprovdetBlockCipher=2,
        encprovdetCipherBlockSize=3,
    }

    enum KsoMsoClipboardFormat {
        msoClipboardFormatHTML=2,
        msoClipboardFormatMixed=-2,
        msoClipboardFormatNative=1,
        msoClipboardFormatPlainText=4,
        msoClipboardFormatRTF=3,
    }

    enum KsoMsoBlogImageType {
        msoblogImageTypeJPEG=1,
        msoblogImageTypePNG=3,
        msoblogImageTypeGIF=2,
    }

    enum KsoMsoSmartArtNodeType {
        msoSmartArtNodeTypeDefault=1,
        msoSmartArtNodeTypeAssistant=2,
    }

    enum KsoMsoContactCardAddressType {
        msoContactCardAddressTypeUnknown=0,
        msoContactCardAddressTypeSMTP=2,
        msoContactCardAddressTypeOutlook=1,
        msoContactCardAddressTypeIM=3,
    }

    enum KsoMsoContactCardStyle {
        msoContactCardHover=0,
        msoContactCardFull=1,
    }

    enum KsoMsoContactCardType {
        msoContactCardTypeEnterpriseContact=0,
        msoContactCardTypePersonalDistributionList=4,
        msoContactCardTypePersonalContact=1,
        msoContactCardTypeUnknownContact=2,
        msoContactCardTypeEnterpriseGroup=3,
    }

    enum KsoMsoPictureEffectType {
        msoEffectCutout=8,
        msoEffectNone=0,
        msoEffectBackgroundRemoval=1,
        msoEffectBlur=2,
        msoEffectChalkSketch=6,
        msoEffectBrightnessContrast=3,
        msoEffectColorTemperature=7,
        msoEffectCrisscrossEtching=5,
        msoEffectCement=4,
        msoEffectFilmGrain=9,
        msoEffectGlass=10,
        msoEffectPhotocopy=22,
        msoEffectGlowDiffused=11,
        msoEffectPaintStrokes=18,
        msoEffectGlowEdges=12,
        msoEffectLightScreen=13,
        msoEffectLineDrawing=14,
        msoEffectMarker=15,
        msoEffectMosiaicBubbles=16,
        msoEffectPaintBrush=17,
        msoEffectPastelsSmooth=19,
        msoEffectPencilGrayscale=20,
        msoEffectPencilSketch=21,
        msoEffectPlasticWrap=23,
        msoEffectSaturation=24,
        msoEffectSharpenSoften=25,
        msoEffectTexturizer=26,
        msoEffectWatercolorSponge=27,
    }

    enum KsoMsoIodGroup {
        msoIodGroupPIAs=0,
        msoIodGroupVSTOR40Mgd=2,
        msoIodGroupVSTOR35Mgd=1,
    }

    enum KsoBackstageGroupStyle {
        BackstageGroupStyleError=2,
        BackstageGroupStyleNormal=0,
        BackstageGroupStyleWarning=1,
    }

    enum KsoMsoMergeCmd {
        msoMergeSubtract=4,
        msoMergeIntersect=3,
        msoMergeCombine=2,
        msoMergeUnion=1,
        msoMergeFragment=5,
    }

    enum KsoMsoLineCapStyle {
        msoLineCapMixed=-2,
        msoLineCapSquare=1,
        msoLineCapRound=2,
        msoLineCapFlat=3,
    }

    enum KsoMsoLineJoinStyle {
        msoLineJoinMixed=-2,
        msoLineJoinRound=1,
        msoLineJoinBevel=2,
        msoLineJoinMiter=3,
    }

    enum KsoMsoLineFillType {
        msoLineFillTextured=4,
        msoLineFillMixed=-2,
        msoLineFillNone=0,
        msoLineFillPatterned=2,
        msoLineFillSolid=1,
        msoLineFillGradient=3,
        msoLineFillBackground=5,
        msoLineFillPicture=6,
    }

    enum KsoMsoChartFieldType {
        msoChartFieldPercentage=3,
        msoChartFieldBubbleSize=1,
        msoChartFieldCategoryName=2,
        msoChartFieldRange=7,
        msoChartFieldFormula=6,
        msoChartFieldSeriesName=4,
        msoChartFieldValue=5,
    }

    enum KsoMsoBroadcastState {
        NoBroadcast=0,
        BroadcastStarted=1,
        BroadcastPaused=2,
    }

    enum KsoMsoBroadcastCapabilities {
        BroadcastCapFileSizeLimited=1,
        BroadcastCapSupportsUpdateDoc=4,
        BroadcastCapSupportsMeetingNotes=2,
    }

    enum KsoXlCategoryLabelLevel {
        xlCategoryLabelLevelNone=-3,
        xlCategoryLabelLevelCustom=-2,
        xlCategoryLabelLevelAll=-1,
    }

    enum KsoXlSeriesNameLevel {
        xlSeriesNameLevelNone=-3,
        xlSeriesNameLevelCustom=-2,
        xlSeriesNameLevelAll=-1,
    }
}